import './card.css'
import { SmallCard } from './SmallCard'
import sidePic1 from "./images/rasp_03.jpg"
import sidePic2 from "./images/also_03.jpg"
import sidePic3 from "./images/also_00.jpg"

export function Card() {
  return (
    <div className='also'>

      <SmallCard
        img={sidePic1}
        name='Raspberry Pi 3'
        price='136$'
      />

      <SmallCard
        img={sidePic2}
        name='Camera v2.1 Pi'
        price='26$'
      />

      <SmallCard
        img={sidePic3}
        name='Pi Module 3'
        price='86$'
      />

    </div>
  )
}
