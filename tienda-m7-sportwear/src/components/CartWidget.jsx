import './CartWidget.css';
import {HiOutlineShoppingCart} from 'react-icons/hi';

const CartWidget = ({action}) => {
    return(
      <div className="CartWidget" onClick={action}>
          <HiOutlineShoppingCart />
          <span>0</span>
      </div>
    )

}

export default CartWidget;
