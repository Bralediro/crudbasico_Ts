
//console.log("Hola mundo")

import {Client} from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'usuarios',
    password: '1234',
    port: 4306,
});

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

            let nombre = prompt("Ingrese su nombre: ") as string;
            let apellido = prompt("Ingrese su apellido: ") as string;
            let celular = prompt("Ingrese su numero de telefono: ") as string;
            let correo = prompt("Ingrese su correo: ") as string;
            let password = prompt("Digite su contraseña: ") as string;

            if (nombre.length > 3 && apellido.length > 3 && celular.length >= 10 && password.length >= 8) {

                const usuarios = await client.execute('INSERT INTO usuarios (nombre,apellido,celular,correo,password) values (?,?,?,?,?)', [
                    nombre,
                    apellido,
                    celular,
                    correo,
                    password,
                ]);
                console.log("Registro guardado")
                console.log(usuarios.rows)
            } else {
                console.log("Por favor llenar el formulario correctamente")
            }
        }
            break;


        case 2 : {

            const usuarios = await client.query('select * from usuarios');
            console.log(usuarios);
            let id_usuario = prompt("Seleccione el ID que desea actualizar") as string;
            let nombre = prompt("Ingrese su nombre") as string;
            let apellido = prompt("Ingrese su apellido") as string;
            let celular = prompt("Ingrese su celular") as string;
            let email = prompt("Ingrese su correo") as string;
            let password = prompt("Ingrese una contraseña") as string;
            let update = await client.execute(`update usuarios set nombre = ?,apellido = ?,celular = ?,email = ?,password = ? WHERE id = ?`, [
                nombre,
                apellido,
                celular,
                email,
                password,
                id_usuario,
            ]);
            console.log(update);
            break;

        }

        case 3 : {

            const usuarios = await client.execute('select * from usuarios');
            console.log(usuarios.rows);
            break;

        }

        case 4 : {

            const usuarios = await client.query(`select * from usuarios`);
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