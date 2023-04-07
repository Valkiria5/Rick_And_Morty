const validation = (userData) => {
    let errors = {};
    if(!/\S+@\S+.\S+/.test(userData.email)){ 
    errors.email = "El email es invalido";}
       if(!userData.email){
    errors.email = "Completa este campo" 
       }
    if(userData.email.length > 35){
        errors.email = 'El email no puede superar los 35 caracteres'
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un numero"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }
    return errors;


}
export default validation;