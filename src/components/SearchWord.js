
import React, { useState } from 'react'
import './SearchWord.css'


const SearchWord = (props) => {
    return (
        <div className="searchWord">
            <form onSubmit={(e) => {
                e.preventDefault();
                props.findDefinition(props.autoWord)
            }}>
                <label htmlFor="searchWord"></label>
                Szukaj:{" "}
                <input
                    type="text"
                    id="searchWord"
                    onFocus={props.showList}
                    //focus z propsem showlist
                    value={props.autoWord}
                    //   atrybyt value z propsautword
                    onChange={(e) => props.filterWord(e.target.value)}
                />
                <button>Pokaz definicje</button>
            </form>
        </div>
    );
};

export default SearchWord;
