import React, { useState } from 'react'

const AddCategory = ({setCategory}) => {
const [inputValue, setInputValue] = useState("");

function handleInputChange(e){
    setInputValue(e.target.value);
}

function handleSubmit(e){
    e.preventDefault();
    setCategory(cats => [inputValue, ...cats]);
    
}

  return (
    <>
        <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue}  onChange={handleInputChange}/>
    
        </form>
    </>
  )
}

export default AddCategory
