
import { createContext, ReactNode, useContext, useReducer } from "react";

type State ={
    etapa: Number;
    nome: String;
    nivel: boolean;
    email: String;
    fone: String;
}
type Action={
    type: FormAction;
    payload: any
}
type ConteType={
    state: State;
    dispatch: (action: Action)=>void
}
type ChildrenProvider={
    children: ReactNode
}

const formInicio: State = {
    etapa: 0,
    nome: '',
    nivel: true,
    email: '',
    fone: ''
}


const FormContext = createContext<ConteType | undefined>(undefined)

export enum FormAction{
    setEtapa,
    setNome,
    setLevel,
    setEmail,
    setFone
}
const formReducer =(state: State, action: Action)=>{
     switch(action.type){
        case FormAction.setEtapa:
            return {...state, etapa: action.payload}
        case FormAction.setNome:
            return {...state, nome: action.payload}
        case FormAction.setLevel:
            return {...state, nivel: action.payload} 
        case FormAction.setEmail:
            return {...state, email: action.payload}
        case FormAction.setFone:
            return {...state, fone: action.payload}
        default: return state                     
     }
}



export const FormProvider = ({children}:ChildrenProvider) =>{
    const [state, dispatch] = useReducer(formReducer, formInicio) 
    const value = {state, dispatch} 
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForms =()=>{
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error('Error')
    }
    return context
}

