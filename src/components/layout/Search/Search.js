import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <input id='searchText' type='text' placeholder='검색할 책 입력' />
      <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png' onClick={ search_button } />
    </div>
 );
}