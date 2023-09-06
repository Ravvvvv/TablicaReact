
import React, { useState } from 'react'
import './SearchWord.css'


const SearchWord = (props) => {
    return (
        <div className='searchWord'>
            <form>
                <label htmlFor="searchWord"></label>
                Szukaj: <input type='text'
                    id='searchWord'
                    onFocus={props.showList}
                    //focus z propsem showlist 
                    value={props.autoWord}
                    //   atrybyt value z propsautword
                    onChange={(e) => props.filterWord(e.target.value)} />
            </form>
        </div>
    )
}



export default SearchWord