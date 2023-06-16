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
                  <Book
                    key={book.id}
                    title={book.title}
                    img={book.image}
                    publisher={book.publisher}
                    description={book.description}
                    link={book.link}
                  />
              </Link>
            )
          })
        }
      </div>
    </section>
  );
}

const Book = ({title, img, publisher, description, link}) => {
  return(
    <div className={styles.boxDiv}>
      <div className={styles.boxImgDiv}>
        <img className={styles.boxImg} src={img} />
      </div>
      <div className={styles.wrapDiv}>
        <div className={styles.boxTitleDiv}><span className={ styles.boxTitle }>{title}</span></div>
        <div className={ styles.infocategory }>{publisher}</div>
      </div>
      {/* <div className={styles.boxTitleDiv}><span className={ styles.boxTitle }>{props.title}</span></div>
      <div className={ styles.infocategory }>{category}</div> */}
    </div>
  );
}

export default DataList;