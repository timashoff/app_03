import './card.css'


export function Card() {
  return (

    <div className='also'>
      <div className='card'>
        <img src="./rasp_03.jpg" alt="also_00" className='card--image' />
        <div className='card--stats'>
          <span className='card--name'><strong> Raspberry Pi 3 </strong></span>
          <span className='stock'>Out of stock</span>
          <span className='price'> <b>136$</b> </span>
        </div>
      </div>

      <div className='card'>
        <img src="./also_03.jpg" alt="also_00" className='card--image' />
        <div className='card--stats'>
          <span className='card--name'><strong> Camera v2.1 Pi </strong></span>
          <span className='stock'>Out of stock</span>
          <span className='price'> <b>26$</b></span>
        </div>
      </div>

      <div className='card'>
        <img src="./also_00.jpg" alt="also_00" className='card--image' />
        <div className='card--stats'>
          <span className='card--name'><strong> Pi Module 3 </strong></span>
          <span className='stock'>Out of stock</span>
          <span className='price'> <b>86$</b> </span>
        </div>
      </div>
    </div>
  )
}
