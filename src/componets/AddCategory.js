import React, { useState } from 'react'



export const AddCategory = ({setcategories}) => {



    const [valueInput,SetValueInput] = useState("")


    //handle
    const handleInputChange = (e) =>{
        SetValueInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if( valueInput.trim().length > 2){
          setcategories(cats => [valueInput,...cats])  
          SetValueInput("")
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type= "text"
                value= {valueInput}
                onChange={handleInputChange}
            />
        </form>
    )
}