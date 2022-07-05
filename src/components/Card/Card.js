import './Card.css';

function Card (props) {
    console.log(props.productName)
    return (
        <div className='card-container'>
            <p>{props.productName}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Card;