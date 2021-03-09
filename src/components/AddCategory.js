import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) =>{
    const [inputValue,setInputValue] = useState('');

    const handleInputCahge = e => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats])
            setInputValue('')
        }


    }
    return(
        <form onSubmit={handleSubmit} id='CategoryForm'>
            <input
                    type='text'
                    placeholder='Escriba una categoria para agregar'
                    value={inputValue}
                    onChange={handleInputCahge} 
                />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}