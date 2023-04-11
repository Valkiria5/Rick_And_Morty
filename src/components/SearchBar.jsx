import { useState } from "react";
import style from './searchbar.module.css'
export default function SearchBar({onSearch}) {
   const[id, setId] = useState("")

   function handleChange(event){
      console.log("input value", event.target.value)
setId(event.target.value);  
   }
   return (
      <div className={style.search}>
         <input onChange={handleChange} type='search' name= 'search' value={id} placeholder="Type your character to search!"/>
         <button onClick={()=> {onSearch(id);setId('')}} className={style.buton}>Agregar</button> 
      </div>
   );
   }