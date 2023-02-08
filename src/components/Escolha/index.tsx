
import * as C from './styled'


type Props={
    titulo: String;
    icon: String;
    selet: boolean;
    onClick:()=>void
}

export const Escolha = ({titulo, icon, selet, onClick}:Props) => {
  return (
    <C.Conteiner onClick={onClick} selet={selet}>
        <C.Icon>{icon}</C.Icon>
        <C.Titulo>{titulo}</C.Titulo>
    </C.Conteiner>
    
  )
}

