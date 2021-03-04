
//console.log("Hola mundo")

import {client} from './config/conn.ts';
import { UsuariosModel } from "./models/user.ts";
import { UsuarioDTO } from "./dto/usuario.ts";

const usuariosModel = new UsuariosModel();


let crud

do {
    console.log("Menu")
    console.log("1. Crear un usuario");
    console.log("2. Editar un usuario");
    console.log("3. Listar todos los usuarios");
    console.log("4. Eliminar usuario");
    console.log("5. Salir");
    crud = parseInt(prompt("Seleccione una opción") as string);


    switch (crud) {

        case 1: {
            console.log("Registro de usuarios")

            const nombre = prompt("Ingrese su nombre: ") as string;
            const apellido = prompt("Ingrese su apellido: ") as string;
            const celular = prompt("Ingrese su numero de telefono: ") as string;
            const correo = prompt("Ingrese su correo: ") as string;
            const password = prompt("Digite su contraseña: ") as string;

            if (nombre.length > 3 && apellido.length > 3 && celular.length >= 10 && password.length >= 8) {
                await usuariosModel.crear({
                    nombre: nombre,
                    apellido: apellido,
                    celular: celular,
                    correo: correo,
                    password: password,
                });

                console.log("Registro guardado")
                //console.log()
            } else {
                console.log("Por favor llenar el formulario correctamente")
            }
        }
            break;


        case 2 : {

            const  usuarios = await usuariosModel.listar();
            console.log(usuarios);
            let id_usuario = prompt("Seleccione el ID que desea actualizar") as string;
            let nombre = prompt("Ingrese su nombre") as string;
            let apellido = prompt("Ingrese su apellido") as string;
            let celular = prompt("Ingrese su celular") as string;
            let correo = prompt("Ingrese su correo") as string;
            let password = prompt("Ingrese una contraseña") as string;
            let update = await client.execute(`update usuarios set nombre = ?,apellido = ?,celular = ?,correo = ?,password = ? WHERE id = ?`, [
                nombre,
                apellido,
                celular,
                correo,
                password,
                id_usuario,
            ]);
            console.log(update);
            break;

        }

        case 3 : {
            const  usuarios = await usuariosModel.listar();
            // usuarios = await client.execute('select * from usuarios');
            console.log(usuarios);
            break;

        }

        case 4 : {

            const  usuarios = await usuariosModel.listar();
            console.log(usuarios);
            let id = prompt("Seleccione el ID que desea eliminar") as string;
            let select = await client.execute(`delete from usuarios where id = ?`, [id])
            console.log("Usuario eliminado: ", select)
            break;
        }

        case 5 : {
            break;
        }
    }}
    while (crud != 5)






// client.execute('insert into usuario(nombre) values("Test1")');
//const usuario = await client.execute('select * from usuario');

//console.log(usuario.rows);