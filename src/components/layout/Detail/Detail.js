import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';
import { useState, useEffect } from 'react';

const Detail = () => {
  const params = useParams()
  const id = params.id
  const [info, setInfo] = useState([])
  const test = [{id: 1, title:'식당1' , img:'https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg', category: '한식', description:'safafsaff', main:'menu1', lat: 10.99835602, lng: 77.01502627}, {id: 2, title:'식당2', img:'https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg', category: '양식', description:'asdddddddddddddddddddddddd', main:'menu2', lat: 10.99835602, lng: 77.01502627}];
  const handleInfo = async () => {
    //해당 ID의 info 불러오기
    // setCards()
    setInfo(test[id-1])
  }
  
  useEffect(() => {
    handleInfo()
    console.log(id)
  }, [])
  
  return(
    <div className={styles.conatiner}>
      <div className={styles.boxImgDiv}>
        <img className={styles.boxImg} src={info.img} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.wrapCategory}>
          <div className={styles.title}>{info.title}</div>
          <div className={styles.star}>별</div>
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>종류</div>
          <div className={styles.category}>{info.category}</div>
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>식당 소개</div>
          <div className={styles.description}>{info.description}</div>
        </div>
        <div className={styles.wrapCategory}>
          <div className={styles.infoTitle}>메인 메뉴</div>
          <div className={styles.main}>{info.main}</div>
        </div>
        <div className={styles.showMap}>
          <Link to={`/map/${info.id}`} className={styles.showMapText} key={info.id} target='_blank' width='50%' height='50%' >
          위치 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;