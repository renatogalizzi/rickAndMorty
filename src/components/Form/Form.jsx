import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

export default function Form ({login}) {

const handleSubmit = (event) => {
event.preventDefault();
login(userData);
}

const [userData,setUserData] = useState({
    email:"",
    password:"",
})

const [errors,setErrors] = useState ({});

const handleChange = (event) => {

    setUserData({...userData,[event.target.name]:event.target.value})
    setErrors(validation({...userData,[event.target.name]:event.target.value}),errors)
}

    return (
        <div className={style.fondoForm}>
            <div className={style.formulario}>
                <h2>Inicio de Sesion</h2>
        <form onSubmit={handleSubmit}>
            <div className={style.username}>
                <input name="email" value={userData.email} type="text" onChange={handleChange} ></input>
                <label>Nombre de Usuario</label>
                <span>{errors.email}</span>
            </div>
            <div className={style.username}>
                <input name="password" value={userData.password} type="text" onChange={handleChange} ></input>
                <label>Contraseña</label>
                <span>{errors.password}</span>
            </div>
            <button className={style.buttonForm}>Ingresar</button>
        </form>
        </div>
        </div>
    );
}