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
  flex: 2;
  font-weight: bold;
  margin-right: 16px;
  text-align: left;
  min-width: 100px;
`
const Description = styled.p`
  flex: 5;
  text-align: left;
`

const Service = () => {
  return (
    <>
      <title>Service</title>
      <h1>Service</h1>
      <Wrapper>
        <Venue>ICSE 2025 - SMeW </Venue>
        <Description>Organizing Committee of the Student Mentoring Workshop</Description>
      </Wrapper>
      <Wrapper>
        <Venue>CHASE 2025</Venue>
        <Description>Social Media Co-chair of CHASE</Description>
      </Wrapper>
      <Wrapper>
        <Venue>ICSE 2024</Venue>
        <Description>Student volunteer of ICSE 2024</Description>
      </Wrapper>
    </>
  )
}

export default Service