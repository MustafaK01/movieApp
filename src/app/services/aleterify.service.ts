import { Injectable } from "@angular/core";


declare let alertify:any; 

@Injectable()
export class AlterifyService{

    constructor(){}

    success(message:string){
        alertify.success(message)
    }
    warning(message:string){
        alertify.warning(message)
    }
    error(message:string){
        alertify.error(message)
    }
}
