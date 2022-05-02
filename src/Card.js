import './card.css'
import { CardSmall } from './CardSmall'
import { cardData } from './cardData'

export function Card() {
  const cards = cardData.map(item =>
    <CardSmall
      key={item.id}
      {...item}
    />
  )
  return (
    <div className='cards'>
      {cards}
    </div>
  )
}
