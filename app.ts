
//console.log("Hola mundo")

import {Client} from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'usuarios',
    password: '',
    port: 3306,
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
        // Registro de usuarios
        case 1: {
            console.log("Registro de usuarios")

            let nombre = prompt("Ingrese su nombre: ") as string;
            let apellido = prompt("Ingrese su apellido: ") as string;
            let celular = prompt("Ingrese su numero de telefono: ") as string;
            let email = prompt("Ingrese su correo: ") as string;
            let password = prompt("Digite su contraseña: ") as string;

            if (nombre.length > 3 && apellido.length > 3 && celular.length == 10 && password.length >= 8) {
                console.log("Registro guardado")
                let usuarios = await client.execute('INSERT INTO usuarios (nombre,apellido,telefono,correo,contraseña) values (?,?,?,?,?)', [
                    nombre,
                    apellido,
                    celular,
                    email,
                    password,
                ]);

                console.log(usuarios)
            } else {
                console.log("Por favor llenar el formulario correctamente")
            }
        }
            break;


        case 2 : {

            let usuario = await client.query('select * from usuarios');
            console.log(usuario);
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
        //LISTAR
        case 3 : {

            let usuarios = await client.query('select * from usuarios');
            console.log(usuarios);
            break;

        }

        case 4 : {

            let usuarios = await client.query(`select * from usuarios`);
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