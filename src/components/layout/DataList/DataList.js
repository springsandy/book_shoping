import styles from './DataList.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataList = ({ dataList }) =>  {
  const [books, setBooks] = useState([])
  const handleCardList = () => {
    setBooks(dataList.items)
  }

  useEffect(() => {
    handleCardList()
  }, []);
  
  return (
    <section className={ styles.section }>
      <div className={ styles.boxWrapDiv }>
        {
          books.map(function(book){
            return(
              <Link to={`/detail/${book.isbn}`} className={ styles.Link } key={book.isbn} >
                {/* <Link to={`/detail`} className={ styles.Link } key={card.id} > */}
                {console.log(book.image)}
                  <Card
                    key={book.id}
                    title={book.title}
                    img={book.image}
                    category={book.category}
                    description={book.description}
                    main={book.main}
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