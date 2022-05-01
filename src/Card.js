import './card.css'
import { SmallCard } from './SmallCard'
import { cardData } from './cardData'

export function Card() {
  const cards = cardData.map(function (item) {

    return <SmallCard
      img={item.img}
      name={item.name}
      price={item.price} />
  })
  console.log(cards)

  return (
    <div className='also'>
      {cards}
    </div>
  )
}
