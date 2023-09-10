
import React, { useState } from 'react'
import './SearchWord.css'





const SearchWord = (props) => {
    const [szukanaDefinicja, setSzukanaDefinicja] = useState('');

    const handleInputChange = (e) => {



    };
    return (
        <div className='searchWord'>
            <form onSubmit={handleInputChange}>
                <label htmlFor="searchWord"></label>
                Szukaj: <input type='text'
                    id='searchWord'
                    onFocus={props.showList}
                    //focus z propsem showlist 
                    value={props.autoWord}
                    //   atrybyt value z propsautword
                    onChange={(e) => props.filterWord(e.target.value)}

                />

                <p> </p>
            </form>
        </div>
    )
}



export default SearchWord