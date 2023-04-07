import style from './Card.module.css'
import { Link } from "react-router-dom"

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.card}>
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
