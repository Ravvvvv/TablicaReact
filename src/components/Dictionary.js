import React, { useState } from 'react';
import SearchWord from './SearchWord';
import FormAdd from './FormAdd';

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



  const [newDefinition, setNewDefinition] = useState('')
  // stan ktory przechwuje aktualan definicje

  const [noweDefinicje, setNoweDefinicje] = useState('')


  const findDefinition = (searchValue) => {
    findDefinition(searchValue)
    const showDefinition = itemList.find((item) => item.word.toLowerCase().includes(searchValue.toLowerCase()));
    // setNoweDefinicje(showDefinition ? showDefinition.definition : 'nie ma')
  };
  //funkcja ktora odpowiada za definicje slow przekazan do searchword




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
    setNoweDefinicje(findDefinition);
    setNewDefinition(addDefinition)
    //aktulanne definicje
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

  const addDefinition = (newDefinition) => {

    const updateWordDefinition = [...itemList, newDefinition];
    //s tworz nowa tablice plus do kotrej wstaw kopie tablicy i koljeny ktory jest przekazwyny  do funkcji (parametr argument)
    setItemList(updateWordDefinition)
    setItemListAfter(updateWordDefinition)


    localStorage.setItem('words', JSON.stringify(updateWordDefinition))
    // dodawanie po kliknieciu do localstorage i zmieninie go na stringa
    const newLIstLocalStorage = JSON.parse(localStorage.getItem('word')) || [];
    // odczytanie  z local storage i parsowanie aby moc odczytac stringa oraz sprawdzamy czy jest tablica czy nie jesli nie  to daj pusta tablice

    newLIstLocalStorage.forEach(word => {
      console.log(word)
    });

  }
  //updateworddefi dodac do localStorage



  return (

    <div className="app">
      <h1>Szukaj wyrazu</h1>
      <SearchWord filterWord={filterWord} showList={showList} autoWord={autoWord} findDefinition={findDefinition} />
      <button >Pokaz definicje</button>
      <FormAdd addDefinition={addDefinition} />
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
