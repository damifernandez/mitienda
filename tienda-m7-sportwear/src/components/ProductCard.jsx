import {useState} from 'react';
import './ProductCard.css';

const ProductCard = ({titulo, precio}) => {
    const [contador, setContador] = useState(1);
    const restaContador = () => {
        if (contador > 1){
            setContador(contador - 1);
        }
    }
    const onAdd = () => {
        alert (`Agregaste ${contador} Productos al carrito`);
    }


    return (
        <article className="productCard">
            <img src="https://i.pinimg.com/originals/9a/98/87/9a98878c46f0afaf0997bc8fa74d27d0.jpg" alt="Mi producto de prueba"/>
            <div className="contentProduct">
                <h3>{titulo}</h3>
                <div className="contador">
                    <button disabled={contador === 1 ? 'disabled' : null} onClick={restaContador}> - </button>
                    <input type="text" value={contador} readOnly />
                    <button onClick={() => setContador (contador + 1)}> + </button>

                </div>

                <p>${precio}</p>
                <div className="contentBotonCarrito">

                <button className="agregarAlCarrito" onclick={onAdd}>Agregar al Carrito</button>
                </div>
                
            </div>
        </article>
    )
}

export default ProductCard;