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

    ])
    // console.log(Dictionary);

    const filterWord = (searchValue) => {
        console.log(searchValue);

        const filterWordData = itemList.filter(itemList =>
            itemList.word.toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase()));
        // console.log(filterWordData);
        setItemListAfter(filterWordData)


    
    }

    return (

        <div className="app" >
            <h1>Szukaj wyrazu</h1>
            <SearchWord filterWord={filterWord} />

            {itemListAfter.map((item, index) => (
                <div key={index} >
                    <li>Word :{item.word}</li>
                    {/* <li>Definition:{item.definition}</li> */}



                </div>
            ))}
        </div>

    );

}
export default Dictionary

