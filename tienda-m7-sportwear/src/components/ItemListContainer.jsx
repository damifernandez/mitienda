import './ItemListContainer.css';

const ItemListContainer = ({show}) => {
    return (
        <div className={`ItemListContainer ${show ? 'open' : 'close'}`}>
            <p>Soy un widget</p>
        </div>
    )
}

export default ItemListContainer;