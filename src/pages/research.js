import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
`

const Venue = styled.p`
  flex: 1;
  font-weight: bold;
  margin-right: 16px;
  text-align: left;
  min-width: 100px;
`
const Description = styled.p`
  flex: 5;
  text-align: left;
`

const ResearchPage = () => {
  return (
    <>
      <title>Research</title>
      <h1>Research</h1>
      <h2>Conferences</h2>
      <Wrapper>
        <Venue>GE@ICSE 2023</Venue>
        <Description>Paganini, L., Gama, K., Nolte, A., & Serebrenik, A. (2023, May). Opportunities and constraints of women-focused online hackathons. In 2023 IEEE/ACM 4th Workshop on Gender Equity, Diversity, and Inclusion in Software Engineering (GEICSE) (pp. 33-40). IEEE.</Description>
      </Wrapper>
      <Wrapper>
        <Venue>MSR Hackathon 2021</Venue>
        <Description>
          Yong, M. S., Paganini, L., Qiu, H. S., & Calderón, J. B. S. (2021,
          May). The Diversity-Innovation Paradox in Open-Source Software. In
          2021 IEEE/ACM 18th International Conference on Mining Software
          Repositories (MSR) (pp. 627-629). IEEE.
        </Description>
      </Wrapper>
      <Wrapper>
        <Venue>ICGJ 2020</Venue>
        <Description>
          Paganini, L., & Gama, K. (2020, August). Engaging women’s
          participation in hackathons: A qualitative study with participants of
          a female-focused hackathon. In International Conference on Game Jams,
          Hackathons and Game Creation Venues 2020 (pp. 8-15).
          <br />
          <b>Best paper award</b>
        </Description>
      </Wrapper>
      <Wrapper>
        <Venue>CHASE 2020</Venue>
        <Description>
          Paganini, L., & Gama, K. (2020, June). A preliminary study about the
          low engagement of female participation in hackathons. In Proceedings
          of the IEEE/ACM 42nd International Conference on Software Engineering
          Workshops (pp. 193-194).
        </Description>
      </Wrapper>
      <h2>Journals</h2>
      <Wrapper>
        <Venue>
          IEEE Revista Iberoamericana de Tecnologias del Aprendizaje
        </Venue>
        <Description>
          Paganini, L., & Gama, K. (2020). Female participation in hackathons: A
          case study about gender issues in application development marathons.
          IEEE Revista Iberoamericana de Tecnologias del Aprendizaje, 15(4),
          326-335.
        </Description>
      </Wrapper>
    </>
  )
}

export default ResearchPage
