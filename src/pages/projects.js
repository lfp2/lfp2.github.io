import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Square = styled.div`
min-width: 200px;
max-width: 500px;
min-height: 200px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
background-color: ${({ theme }) => theme.background};
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`
const Title = styled.p`
  flex: 2;
  font-weight: bold;
`
const Description = styled.p`
  flex: 1;
  margin: 6px 12px 6px 12px;
  text-align: justify;
`




const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <Square>
        <StaticImage src="../images/hack_grrrl.jpg" alt="Picture with Hack GRRRL mentors hugging" placeholder="blurred" layout="constrained" width={200} aspectRatio={16 / 9} quality={100}/>
        <Title>Hack GRRRL</Title>
        <Description>Hack GRRRL is a women-focused hackathon, an time-bounded event with duration between 24 to 48 hours, where participants are part of multidisciplinary teams and create a tech solution for a problem. I co-founded and organized the first Hack GRRRL in Recife with 231 enrollments and 26 participants in 2019. We achieved 55 participants on the online version in 2021, where all the groups finished the hackathon with an MVP.</Description>
        <Description>Learn more about Hack GRRRL <a href="https://hackgrrrl.com/" target="_blank" rel="noreferrer external">here.</a></Description>
      </Square>
    </>
  )
}

export default ProjectsPage
