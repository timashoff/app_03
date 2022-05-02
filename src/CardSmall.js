

export function CardSmall(props) {
  let quantity
  !props.qty ? quantity = 'Out of stock' : quantity = `${props.qty} шт.`
  return <div className='card'>
    <img src={props.img} alt={props.name} className='card--image' />
    <div className='card--stats'>
      <span className='card--name'><strong> {props.name} </strong></span>
      <span className='stock'>{quantity}</span>
      <span className='price'> <b>цена {Math.floor(props.price)}$</b> </span>
    </div>
  </div>
}