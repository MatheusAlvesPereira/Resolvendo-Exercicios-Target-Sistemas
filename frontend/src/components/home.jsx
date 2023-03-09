import {Link} from "react-router-dom";

function Home() {
    return (
    <>  
        <h1 className="text">Resolvendo Exercicios</h1>
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/Exercicio2">Exercicio2</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/Exercicio3">Exercicio3</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/Exercicio4">Exercicio4</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/Exercicio5">Exercicio5</Link>
                    </li>
                </ul>
            </nav>
        </header>   
    </>
    );
}
  
export default Home;