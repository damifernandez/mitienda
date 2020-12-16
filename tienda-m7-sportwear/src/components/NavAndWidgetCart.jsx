import {useState} from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <NavBar titulo="M7 Sportwear" action={openWidgetCart} />
            <ItemListContainer show={showWidgetCart} />
        </>
    )
}

export default NavAndWidgetCart;