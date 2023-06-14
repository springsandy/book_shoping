import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {
  const [dataList, setDataList] = useState();
  const search_button = () => {
    var searchText = document.getElementById("searchText").value;
    var client_id = 'IB7DxzurUvjMgJGnx9FG';
    var client_secret = 'XJ5PWY1j8u';

    // https://cors-anywhere.herokuapp.com/corsdemo
    axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/book_adv.json?d_titl='+encodeURI(searchText), {
      headers: {
        'X-Naver-Client-Id':client_id, 
        'X-Naver-Client-Secret': client_secret
      }
    })
    .then((res) => {
      console.log(res.data)
      setDataList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='search'>
      <input id='searchText' type='text' placeholder='검색할 책 입력' />
      <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png' onClick={ search_button } />
    </div>
 );
}

export default Search;