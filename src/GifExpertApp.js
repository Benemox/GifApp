import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory'
import { GifGrid } from './componets/GifGrid'


export const GifExpertApp = () => {

    const [categories,setcategories] = useState([])



        // //handleAdd
        // const Addme = () => {
        //     setcategories([...categories,"otro"])
        // }


    return (
        <div>
            <h2>GifExpertApp</h2>
            < AddCategory setcategories= {setcategories} />
            <hr/>
            <ol>
              {   categories.map(category => 
                        <GifGrid
                             key={category}
                             category = {category}
                             />)}
            </ol>
            
            </div>)
}