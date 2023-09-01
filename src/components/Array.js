import React, { useState } from "react";


function Array(props) {
    const [itemList, setItemList] = useState([
        { word: 'dog', definition: "pet animal" },
        { word: 'cat', definition: "other pet animal" },
        { word: 'dinozord', definition: 'old reptail' },
        { word: 'cow', definition: 'milk animal' }

    ])
    console.log(Array);



    return (

        <div className="app">
            {itemList.map((item, index) => (
                <div key={index}>
                    <li>Word :{item.word}</li>
                    <li>Definition:{item.definition}</li>
                

                    {/* <input></input>
                    <button onChange={console.log(Array)}>click</button> */}
                </div>
            ))}
        </div>

    );
    // const [araay, setArray] = useState([])
   


    // const renderList = itemList.map((word) =>
    //     <div key={index}>
    //         {word}
    //     </div>);
    // return (
    //     <div className="app">
    //         <div> lista</div>
    //         {renderList}
    //     </div>
    // );
}
export default Array

