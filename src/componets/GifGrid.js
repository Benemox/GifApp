import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

import { GifGridItem } from './GifGridItem'



export const GifGrid = ({category}) => {

    const [images, setImage] = useState([])

    useEffect(()=>{getGifs({category}).then(setImage)},[ category])

    
    

    return (
        <>
         <h3>{category}</h3>
        <div className="card-grid">
            {images.map(e =>(<GifGridItem key={e.id}  {...e}/>) )}
        </div>
        </>
    )
}