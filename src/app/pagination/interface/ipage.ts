import { Ipages } from "./ipages";

export interface Ipage {
     totalRegisters:number;
     qtdRegisterPage:number; 
     currentPage:number;
     totalPages:number;
     pages:Ipages[];

}
