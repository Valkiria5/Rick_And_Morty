import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import About from './/components/About';
import Form from './components/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites';
function App() {
   const[characters, setCharacters] = useState([])
   const[acces, setAcces] = useState(false);
   const navigate = useNavigate();

   const email = 'dharmavanina@gmail.com'
   const password = "benicio3";

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAcces(true);
         navigate('/home');
      }
   }
   useEffect(() =>{
      !acces && navigate('/')
   }, [acces])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch)=>ch.id === data.id)
            if(exist){
               alert("ya esta este personaje chango")
            }
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id !== id)
      })
   }
   const {pathname}= useLocation();
   
   return (
      <div style={{ backgroundImage: "url(/outerspace-58.gif)"}}>
        {pathname!=="/" && <Nav onSearch={onSearch}/>}
       <Routes>
         <Route path='/about' element={<About/>} ></Route>
         <Route path='/home' element={ <Cards onClose = {onClose} characters={characters} />}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
         <Route path ='/' element={<Form login={login}/>}></Route>
         <Route path = '/favorites' element ={<Favorites/>}></Route>
       </Routes>
       
      </div>
   );
}

export default App;
