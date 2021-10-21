import style from './Header.module.css'
import logoImg from '../../img/react.png'

const Header = (props) => {
  return <header className={style.header}>
          <a href="#"><img alt={'logo'} className={style.logo} src={logoImg}/></a>
          <h1 className={style.heading}>React weather app</h1>
      </header>

}
export default Header;