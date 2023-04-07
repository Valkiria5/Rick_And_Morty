import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css"
const Detail = () =>{
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className={style.divdetail}>
            <h1 className={style.h1d}>Character Detail</h1>
            <h3 className={style.h3d}>{character.name}</h3>
        <h3 className={style.h32d}>{character.status}</h3>
         <h3 className={style.h33d}>{character.species}</h3>
         <h3 className={style.h34d}>{character.gender}</h3>
         <h3 className={style.h35d}>{character.origin?.name}</h3>
         <img src={character.image} alt='' className={style.imagend}/> 
        </div>
    )
}
export default Detail;
