import { useState } from "react";
import validation from "./form/validation";
import style from './Form.module.css' 
const Form = ({login}) =>{
    const[userData, setUserData] = useState({
             email:'',
             password: ''
    })  
       const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) =>{
      setUserData ({
        ...userData, 
        [event.target.name]: event.target.value
      })
      setErrors(
         validation({
            ...userData,
            [event.target.name]: event.target.value
         })
      )
    }
    const handleSubmit =  (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <form onSubmit={handleSubmit} className={style.form}>
            <label htmlFor="email" className={style.email}>Email</label>
            <input type="email" value={userData.email} name="email" onChange={handleChange} />
            {errors.email && <p className= {style.pemail}>{errors.email}</p>}
            <label htmlFor="password" className={style.password} >Password</label>
            <input type="password" value={userData.password} name="password" onChange={handleChange}/>
            {errors.password && <p className={style.ppassword}>{errors.password}</p>}
            <button className={style.formbutton}>Submit</button>
        </form>
    )
}
export default Form;