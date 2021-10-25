import style from './Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = (props) => {
  return (
      <aside className={style.sidebar}>
          <nav className={style.menu}>
              <ul className={style.list}>
                  <li><NavLink to="/main" className="sidebar__link">Current weather</NavLink></li>
                  <li><NavLink to="/weatherForecast" className="sidebar__link">Weather Forecast</NavLink></li>
                  <li><NavLink to="" className="sidebar__link"></NavLink></li>
                  <li><NavLink to="" className="sidebar__link"></NavLink></li>
                  <li><NavLink to="" className="sidebar__link"></NavLink></li>
              </ul>
          </nav>
      </aside>
  )
}
export default Aside