

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const{ name, imageUrl, price, quantity} = cartItem;

    return(
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    )
};

{/* <div key={id}>
                                    <h2>{name}</h2>
                                    <span>{quantity}</span>
                                    <br />
                                    <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                                    <br />
                                    <span onClick={() => addItemToCart(cartItem)}>increment</span>
                                </div> */}

export default CheckoutItem;