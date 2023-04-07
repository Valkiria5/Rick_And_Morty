import SearchBar from "./SearchBar"
import React from "react"
import { Link } from "react-router-dom"
import style from './nav.module.css'
export default function Nav({onSearch}) {
    return (
        <div className={style.divnav}> 
        <div className={style.searchbar}>
             <SearchBar onSearch={onSearch} />
        </div>
        <div className={style.buttons}>
             <button className={style.button1} >
                <Link to='/about'>ABOUT</Link>
            </button>
             <button className={style.button2}>
                <Link to='/home'>HOME</Link>
             </button>
             </div>
        </div>
    )
}
