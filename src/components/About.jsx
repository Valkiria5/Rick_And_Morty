import style from './About.module.css'
const About = () =>{
    return(
        <div className={style.about}>
        <h2 className={style.h2about}>Hola!!</h2>
        <p className={style.pabout}>Mi nombre es Vanina Ramayo. Tengo, por le momento, 21 años.</p>
        <p className={style.pabout}>Vivo actualmente en Cordoba, pero soy de Santa Cruz (puntualmente Pico Truncado). Claramente soy de Argentina</p>
        <p className={style.pabout}>Esta es mi prima app asi que espero que sea del agrado y en breve voy a poner CSS, es que no nos dieron esas clases en el BootCamp</p>
        </div>
    )
}
export default About;