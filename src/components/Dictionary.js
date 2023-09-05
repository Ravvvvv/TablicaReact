import React, { useState } from 'react';
import SearchWord from './SearchWord';

function Dictionary(props) {
  const [itemList, setItemList] = useState([
    { word: 'dog', definition: "pet animal" },
    { word: 'cat', definition: "other pet animal" },
    { word: 'dinozord', definition: 'old reptail' },
    { word: 'cow', definition: 'milk animal' }

  ])

  const [itemListAfter, setItemListAfter] = useState([
    { word: 'dog', definition: "pet animal" },
    { word: 'cat', definition: "other pet animal" },
    { word: 'dinozord', definition: 'old reptail' },
    { word: 'cow', definition: 'milk animal' }

  ]);


  const filterWord = (searchValue) => {
    console.log(searchValue);
    if (searchValue === ''){
      // jesli nic nei wpisujemy to lista pozostanie ustawiona na pustny string 
      // potem stan setItemList zosttanie ustwiony na false
      setItemList(false)
      setItemListAfter([]);
  } else {
    const filterWordData = itemList.filter(item =>item.word.toLowerCase().includes(searchValue.toLowerCase())
    );
      
    setItemListAfter(filterWordData);
    setListShow(true);
  }
}


const [listshow, setListShow] = useState(false);
//stan odpowiada  za pokazanie listy

const showList = () => {
  setListShow(true)
}

return (

  <div className="app">
    <h1>Szukaj wyrazu</h1>
    <SearchWord filterWord={filterWord} setItemListAfter={setItemListAfter} />

    {listshow && ( // Wyświetl listę tylko gdy showList jest true

      <ul>
        {itemListAfter.map((item, index) => (
          <li key={index}>Word: {item.word}</li>
        ))}
      </ul>

    )}

  </div>
);
}
export default Dictionary

