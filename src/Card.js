import './card.css'
import { SmallCard } from './SmallCard'

export function Card() {
  return (
    <div className='also'>

      <SmallCard
        img='./public/rasp_03.jpg'
        name='Raspberry Pi 3'
        price='136$'
      />

      <SmallCard
        img='./also_03.jpg'
        name='Camera v2.1 Pi'
        price='26$'
      />

      <SmallCard
        img='./also_00.jpg'
        name='Pi Module 3'
        price='86$'
      />

    </div>
  )
}
