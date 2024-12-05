import { createContext } from "react";

export const AlertContext = createContext({message:"",className:"",time:3000});

export const UserContext = createContext({name:"",username:"",email:""}); 