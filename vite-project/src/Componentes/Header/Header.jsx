import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/06/dragon-ball-super-box-dvd-blu-ray.jpg?tf=1920x" />
        <h1 id="titulo">DRAGON BALL</h1>
        <NavBar/>
    </header>
  )
}

export default Header