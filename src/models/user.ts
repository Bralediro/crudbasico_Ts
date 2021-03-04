import { client } from "../config/conn.ts";
import { UsuarioDTO } from "../dto/usuario.ts";

export class UsuariosModel {
    async listar(){
        const usuarios = await client.execute('select * from usuarios');
        return usuarios.rows;
    }

    async crear(usuario: UsuarioDTO) {
        return await client.execute('INSERT INTO usuarios (nombre,apellido,celular,correo,password) values (?,?,?,?,?)', [
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.password,
        ]);
    }
}