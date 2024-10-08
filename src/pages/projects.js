import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  gap: 10px 10px;
`

const Square = styled.div`
min-width: 100px;
max-width: 350px;
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
      <Wrapper>
      <Square>
        <StaticImage src="../images/hack_grrrl.jpg" maxWidth={400} aspectRatio={21/9} quality={100}/>
        <Title>Hack GRRRL</Title>
        <Description>Hack GRRRL is a women-focused hackathon, an time-bounded event with duration between 24 to 48 hours, where participants are part of multidisciplinary teams and create a tech solution for a problem. I co-founded and organized the first Hack GRRRL in Recife with 231 enrollments and 26 participants in 2019. We achieved 55 participants on the online version in 2021, where all the groups finished the hackathon with an MVP.</Description>
        <Description>Learn more about Hack GRRRL <a href="https://hackgrrrl.com/" target="_blank" rel="noreferrer external">here.</a></Description>
      </Square>
      <Square>
        <StaticImage src="../images/field_day.jpg" maxWidth={400} aspectRatio={21/9} quality={100}/>
        <Title>GitHub Field Day Brasil</Title>
        <Description>Field Day brings together student leaders from different regional communities to hang out, become friends, learn from each other's mistakes and successes, and solve shared problems. I organized the first GitHub Field day in Brasil, which had 26 participants from different tech communities in Recife (e.g., Afro Python, PyLadies, UXCO).</Description>
        <Description>Learn more about GitHub Field Day <a href="https://githubfieldday.com/" target="_blank" rel="noreferrer external">here.</a></Description>
      </Square>
      <Square>
        <StaticImage src="../images/casos_de_conflito.jpg" maxWidth={400} aspectRatio={21/9} quality={100}/>
        <Title>Casos de Conflito</Title>
        <Description>Casos de conflito was a streaming show on the GitHub Education Twitch, where weekly guests discussed about their journey on Computer Science and the challenges faced there.</Description>
        <Description>You can check some of the episodes (Portuguese only) <a href="https://www.twitch.tv/videos/1565869900?collection=2UvO3laCEBcszQ" target="_blank" rel="noreferrer external">here.</a></Description>
      </Square>
      </Wrapper>
    </>
  )
}

export default ProjectsPage
