import {getUser} from "./getUser.ts";

export function user_Data():getUser {
    let nombre
    let apellido
    let celular
    let correo
    let password
    let condicion = 0
    do {
        condicion = 0
        nombre = prompt('dime tu nombre: ') as string;
        if (nombre !== "" && nombre !== null) {
            if (nombre.length >= 3) {
                condicion = 1
            }
        }
    } while (condicion < 1)

    do {
        condicion = 0
        apellido = prompt('dime tu apellido: ') as string;
        if (nombre !== "" && apellido !== null) {
            if (apellido.length >= 3) {
                condicion = 1
            }
        }
    } while (condicion < 1)

    do {
        condicion = 0
        celular = prompt('dime tu celular: ') as string;
        if (celular !== "" || celular !== null) {
            if (celular.length == 10) {
                condicion = 1
            }
        } else {
            condicion = 1
        }
    } while (condicion < 1)


    function isValidEmail(email: string) {
        return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
    }

    do {
        correo = prompt('ingresa el correo: ') as string
        isValidEmail(correo)

    } while (!isValidEmail(correo))

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


    function isValidPassword(paswore: string) {
        return regex.test(paswore)

    }

    do {
        password = prompt("ingresa contraseña: ") as string
        isValidPassword(password)
    } while (!isValidPassword(password))

    let dataUserInput=new getUser(nombre,apellido,celular,correo,password);

    return dataUserInput;
}