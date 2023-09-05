
import React, { useState } from 'react'
import './SearchWord.css'
import Dictionary from './Dictionary'


const SearchWord = (props) => {
    return (
        <div className='searchWord'>
            <form>
                <label htmlFor="searchWord"></label>
                Szukaj: <input type='text'
                    id='searchWord'
                    onFocus={props.setItemListAfter}
                    onChange={(e) => props.filterWord(e.target.value)} />
            </form>
        </div>
    )
}



export default SearchWord