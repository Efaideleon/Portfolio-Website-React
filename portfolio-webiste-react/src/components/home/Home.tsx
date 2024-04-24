import { ProjectCardGallery } from '../project_card_gallery/ProjectCardGallery'
import { ProjectCard } from '../project_card/ProjectCard'
import { CardProps } from '../project_card/Card'
import { GithubInfo } from '../github_info/GithubInfo';

type HomeProps = {
    data: CardProps[];
}

export const Home = ({ data: cardsData }: HomeProps) => {
    return (
        <>
            <GithubInfo />
            <ProjectCardGallery cardsData={cardsData} Card={ProjectCard} />
        </>
    )
}
