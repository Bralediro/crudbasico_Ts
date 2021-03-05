export class getUser{
    private nombre:string;
    private apellido:string;
    private celular:string;
    private correo:string;
    private password:string;

    constructor(nombre:string,apellido:string,celular:string,correo:string,password:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.celular=celular;
        this.correo=correo;
        this.password=password;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public getCelular():string{
        return this.celular;
    }
    public getCorreo():string{
        return this.correo;
    }
    public getPassword():string{
        return this.password;
    }
}