
import React from 'react'
import './SearchWord.css'


const SearchWord = (props) => {
    return (
        <div className='searchWord'>
            <form>
                <label htmlFor="searchWord"></label>
                Szukaj: <input type='text'
                    id='searchWord'
                    onChange={(e) => props.filterWord(e.target.value)} />
            </form>
        </div>
    )
}



export default SearchWord