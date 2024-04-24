import { CardGallery, CardGalleryProps } from "./CardGallery"
import { v4 as uuidv4 } from "uuid"
import "./ProjectCardGalleryStyles.css"

export const ProjectCardGallery: CardGallery = ({ cardsData, Card }: CardGalleryProps) => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {cardsData.map((item) => (
                    <Card key={uuidv4()} title={item.title} description={item.description} image={item.image} link={item.link} />
                ))}
            </div>
        </section>
    )
}