import './ProjectCardStyles.css'
import { Card, CardProps } from './Card'
import { useRef } from 'react'
import { useCircleBlurEffect } from '../blur_effect/useCircleBlurEffect'

export const ProjectCard: Card = ({title, description, image, link}: CardProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    useCircleBlurEffect({containerRef: containerRef, innerRef: innerRef});
    return (
        <div ref={containerRef} className="container">
            <article ref={innerRef} className="project-card small-card inner">
                <div className="project-content">
                    <h3>{title}</h3>
                    <div className="project-overview">
                        <p> {description} </p>
                    </div>
                    <div className="project-info">
                        <a href={link}
                            className="btn">Github Repository</a>
                    </div>
                </div>
                <figure>
                    <img src={image} alt="Not Found" />
                </figure>
            </article>
        </div>
    )
}
