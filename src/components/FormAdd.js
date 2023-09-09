import './FormAdd.css'
import React, { useState } from 'react'


const FormAdd = (props) => {

    const [fromData, setFromData] = useState({
        ['word']: '',
        ['definition']: ''
    })

    const [newData, setNewData] = useState([])



    const handelInputChange = (e) => {

        const target = e.target
        const name = target.name
        // nowa wartosc z kluczem name dla inputa i text area
        // ustawic seterstanu z clbackime czemu?
        setFromData(prevDataForm => {
            return (
                { ...prevDataForm, [name]: target.value }
                //kopia poprzedniego stanu rozbudfowana o 
            )
        })
    }

    const setData = (e) => {
        e.preventDefault()
        props.addDefinition(fromData)
        setNewData(newData.concat({ ...fromData, id: Date.now() }))
    }
    //  po klikniecu w butona zbiera informacjei i tworzy nowy wyraz itp


    console.log(newData);
    return (
        <div className='formAdd'>
            <h2 >{fromData.word}</h2>
            <form onSubmit={setData}>
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
                  

                <button   >Dodaj Slowo</button>
            </form>
        </div>
    )
}

export default FormAdd