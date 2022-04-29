

export function SmallCard(props) {
  return <div className='card'>
    <img src={props.img} alt={props.name} className='card--image' />
    <div className='card--stats'>
      <span className='card--name'><strong> {props.name} </strong></span>
      <span className='stock'>Out of stock</span>
      <span className='price'> <b>{props.price}</b> </span>
    </div>
  </div>;
}
