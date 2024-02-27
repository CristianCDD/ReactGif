import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp(){
    const [categories, setCategories] = useState(["Dragon ball"]);

   /*  const handleAdd = () =>{
        const nuevo = [...categories, "Naruto"]
        setCategories(nuevo);
    } */

    return(<>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategory={setCategories} />
            <ol>
                { categories.map((category)=>(
                     <GifGrid key={category} category={category} />
                    )) }
            </ol>
            </>)
}