import styles from './DataList.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataList = () =>  {
  const [cards, setCards] = useState([])
  const test = [{id: 1, title:'식당1' , img:'https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg', category: '한식', description:'safafsaff', main:'menu1', lat: 10.99835602, lng: 77.01502627}, {id: 2, title:'식당2', img:'https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg', category: '양식', description:'asdddddddddddddddddddddddd', main:'menu2', lat: 10.99835602, lng: 77.01502627}];
  const handleCardList = async () => {
    //목록 불러오기
    // setCards()
    setCards(test)
  }

  useEffect(() => {
    handleCardList()
  }, []);
  
  return (
    <section className={ styles.section }>
      <div className={ styles.boxWrapDiv }>
        {
          cards.map(function(card){
            return(
              <Link to={`/detail/${card.id}`} className={ styles.Link } key={card.id} >
                {/* <Link to={`/detail`} className={ styles.Link } key={card.id} > */}
                {console.log(card.img)}
                  <Card
                    key={card.id}
                    title={card.title}
                    img={card.img}
                    category={card.category}
                    description={card.description}
                    main={card.main}
                  />
              </Link>
            )
          })
        }
      </div>
    </section>
  );
}

const Card = ({title, img, category, description, main}) => {
  return(
    <div className={styles.boxDiv}>
      <div className={styles.boxImgDiv}>
        <img className={styles.boxImg} src={img} />
      </div>
      <div className={styles.wrapDiv}>
        <div className={styles.boxTitleDiv}><span className={ styles.boxTitle }>{title}</span></div>
        <div className={ styles.infocategory }>{category}</div>
      </div>
      {/* <div className={styles.boxTitleDiv}><span className={ styles.boxTitle }>{props.title}</span></div>
      <div className={ styles.infocategory }>{category}</div> */}
    </div>
  );
}

export default DataList;