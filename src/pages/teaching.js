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

const Teaching = () => {
  return (
    <>
      <title>Teaching</title>
      <h1>Teaching</h1>
      <h2>2024</h2>
      <Wrapper>
        <Venue>2IMP25 - Software Evolution</Venue>
        <Description>Helped grading Software Evolution projects and exams, which includes groups of students making an open-source contribution. Also did a class on Development Automation, which covered the topics CI, Workflows, and Bots.</Description>
      </Wrapper>
    </>
  )
}

export default Teaching