import { useState } from "react";
import style from './searchbar.modules.css'
export default function SearchBar({onSearch}) {
   const[id, setId] = useState("")

   function handleChange(event){
      console.log("input value", event.target.value)
setId(event.target.value);  
   }
   return (
      <div>
         <input onChange={handleChange} type='search' name= 'search' value={id}/>
         <button onClick={()=> {onSearch(id);setId('')}} className={style.buton}>Agregar</button> 
      </div>
   );
   }