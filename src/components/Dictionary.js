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

  const [listShow, setListShow] = useState(false);
  //stan odpowiada  za pokazanie listy

  const [autoWord, setAutoWord] = useState('')
  // stan, który będzie przechowywał wartość pola serachword


  



  const filterWord = (searchValue) => {
    console.log(searchValue);
    if (searchValue === '') {
      // jesli nic nei wpisujemy to lista pozostanie ustawiona na pustny string 
      // potem stan setItemList zosttanie ustwiony na false
      setListShow(false);
    } else {
      setListShow(true);
    }
    const filterWordData = itemList.filter(item => item.word.toLowerCase().includes(searchValue.toLowerCase())
    );

    setAutoWord(searchValue)
    setItemListAfter(filterWordData);
  }

  const showList = () => {
    setListShow(true)
  }
  // stala showlist kotra ustawia seter  setListShow(true) gdzie po wylowaniu list pokaze sie 

  const completeField = (autoCompletWord) => {
    setAutoWord(autoCompletWord)
  }
  //stala completeField z atrubytem autoCompletWord ktora jest uzywana po klikniecu na input.
  // Click zadzaial klikajac na item.word czyli slowa kotre sa  w itemList.


  return (

    <div className="app">
      <h1>Szukaj wyrazu</h1>
      <SearchWord filterWord={filterWord} showList={showList} autoWord={autoWord} />

      {listShow && ( // Wyświetl listę tylko gdy showList jest true
        <ul>
          {itemListAfter.map((item, index) => (
            <li key={index} onClick={() => { completeField(item.word) }} >Word: {item.word}  </li>
          ))}
        </ul>
      )}

    </div>
  );
}
export default Dictionary


//autoWord ten stan do komponentu SeachWord.js i ustaw go jako wartość atrybutu value 
