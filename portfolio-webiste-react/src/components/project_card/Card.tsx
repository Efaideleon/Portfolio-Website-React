export type CardProps = {
    title: string,
    description: string,
    image: string,
    link: string
}

export type Card = (props: CardProps) => JSX.Element;