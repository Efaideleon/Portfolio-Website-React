import { Card, CardProps } from '../project_card/Card'

export type CardGalleryProps = {
  cardsData: CardProps[]
  Card: Card
}

export type CardGallery = (props: CardGalleryProps) => JSX.Element