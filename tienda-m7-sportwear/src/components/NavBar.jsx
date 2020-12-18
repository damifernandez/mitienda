import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar({titulo, action}) {
    return(
        
        <div>
            <h1>{titulo}</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Products">Productos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <CartWidget action={action} />
                </ul>
            </nav>

        </div>
    )

}

export default NavBar;