import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = () => {
  const params = useParams()
  const isbn = params.isbn
  const [info, setInfo] = useState([])
  var client_id = 'IB7DxzurUvjMgJGnx9FG';
  var client_secret = 'XJ5PWY1j8u';
  
  const handleInfo = async () => {
    // https://cors-anywhere.herokuapp.com/corsdemo
    axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/book_adv.json?d_isbn='+encodeURI(isbn), {
      headers: {
        'X-Naver-Client-Id':client_id, 
        'X-Naver-Client-Secret': client_secret
      }
    })
    .then((res) => {
      setInfo(res.data.items[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    handleInfo()
  }, [])
  
  return(
    <div className={styles.conatiner}>
      <div className={styles.boxImgDiv}>
        <img className={styles.boxImg} src={info.image} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.wrapCategory}>
          <div className={styles.title}>{info.title}</div>
          {/* <div className={styles.star}>별</div> */}
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>저자 이름</div>
          <div className={styles.category}>{info.author}</div>
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>출판사</div>
          <div className={styles.category}>{info.publisher}</div>
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>책 줄거리</div>
          <div className={styles.description}>{info.description}</div>
        </div>
        <div className={styles.showMap}>
          <Link to={info.link} className={styles.showMapText} key={info.id} target='_blank' width='50%' height='50%' >
           책 구매하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;