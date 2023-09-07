import './FormAdd.css'
import React, { useState } from 'react'


const FormAdd = () => {



    const [fromData, setFromData] = useState({
        word: '',
        definition: ''


    })


    const handelInputChange = (e) => {



        const target = e.target
        const name = e.target
        // nowa wartosc z kluczem name dla inputa i text area
        console.log(e.target);
        // ustawic seterstanu z clbackime czemu?
        setFromData(prevDataForm => {
            return (
                { ...fromData, [name]: target.value }
                //kopia poprzedniego stanu rozbudfowana o 
            )
        })
    }




    console.log(fromData);
    return (
        <div className='formAdd'>
            <h2>{fromData.word}</h2>
            <form>
                <label htmlFor="word">Słowo</label>
                <input type="text"
                    name="word"
                    id="word"
                    placeholder="słowo"
                    onChange={handelInputChange} />

                <label htmlFor="definition">Definjca</label>
                <textarea type="text"
                    name="definition"
                    id="definition"
                    placeholder="definicja"
                    onChange={handelInputChange} />

                <button>Dodaj Definicje</button>
            </form>
        </div>
    )
}

export default FormAdd