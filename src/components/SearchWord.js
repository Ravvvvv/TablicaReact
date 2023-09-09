
import React, { useState } from 'react'
import './SearchWord.css'





const SearchWord = (props) => {
    const [szukanaDefinicja, setSzukanaDefinicja] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.findDefinition(szukanaDefinicja);
    };

    //obsluga zdarzenia onsubmit fukncja wywola

    return (
        <div className='searchWord'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchWord"></label>
                Szukaj: <input type='text'
                    id='searchWord'
                    onFocus={props.showList}
                    //focus z propsem showlist 
                    value={props.autoWord}
                    //   atrybyt value z propsautword
                    onChange={(e) => props.filterWord(e.target.value)}

                />
                {szukanaDefinicja}
            </form>
        </div>
    )
}



export default SearchWord