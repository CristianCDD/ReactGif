import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";

export default function GifGrid({category}){
   const {data, loading} =  useFetchGifs(category);


    /* const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(category).then(img => setImages(img));
    }, [category])
   */
  

   
  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Cargando</p>  }
  <div className="card-grid">
         
            {data.map((img)=>(
                <GifGridItem key={img.id} {...img} />
            ))}
      
    </div>
    </>
    )
}