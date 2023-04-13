import style from './Card.module.css'
import { Link } from "react-router-dom"
import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {addFav, removeFav} from '../redux/actions';
const Card = ({id, name, status, species, gender, origin, image, onClose,myFavorites}) => {
 const [isFav, setIsFav] = useState(false);
 const dispatch = useDispatch();
 const handleFavorite = () => {
   if(isFav){
      setIsFav(false); 
      dispatch(removeFav(id))
   }
   else {
      setIsFav(true); 
      dispatch(addFav({id, name, status, species, gender, origin, image, onClose, myFavorites}))
   }
 }
 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={style.card}>
         {
          isFav ? (
               <button onClick={handleFavorite}>❤️</button>
          ) : (
               <button onClick={handleFavorite}>🤍</button>
         )
          }
         <button onClick={()=>onClose(id)} className={style.lola}>X</button>
         <Link to={`/detail/${id}`}> 
         <h3 className={style.h3card}>{name}</h3>
         </Link>
         <h3 className={style.h32}>{status}</h3>
         <h3 className={style.h33}>{species}</h3>
         <h3 className={style.h34}>{gender}</h3>
         <h3 className={style.h35}>{origin}</h3>
         <img src={image} alt='' className={style.imagencard} /> 
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites

   }
}

export default connect(
  mapStateToProps,
  
)(Card);
