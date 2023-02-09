import React from 'react'
import * as C from './styled'
import { Link } from 'react-router-dom'
import { ReactComponent as Prof} from '../../img/profile.svg'
import { ReactComponent as Book} from '../../img/book.svg'
import { ReactComponent as Mail} from '../../img/mail.svg'

type Props={
    titulo: String;
    icon: String;
    path: any
    act: boolean
}

export const SideBar = ({titulo, icon, path, act}: Props) => {
  return (
    <C.Conteiner>
        <Link to={path}>
            <C.Info>
            <C.Titulo>{titulo}</C.Titulo>
            </C.Info>
            <C.Icons act={act}>
                {icon === 'pro' &&
                <Prof fill='white' width={24} height={24} />}

                {icon === 'book' &&
                <Book fill='white' width={24} height={24} />}

                {icon === 'email' &&
                <Mail fill='white' width={24} height={24} />}
            </C.Icons>
            <C.Point act={act}></C.Point>
        </Link>
    </C.Conteiner>
  )
}

