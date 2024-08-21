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

const Name = styled.p`
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

const GrantsPage = () => {
  return (
    <>
      <h1>Grants and Fellowships</h1>
      <h2>2024</h2>
      <Wrapper>
        <Name>Hackcon 2024</Name>
        <Description>
          GitHub Campus Expert program covered the registration and travel costs for Hackcon
        </Description>
      </Wrapper>
      <h2>2023</h2>
      <Wrapper>
        <Name>WomENcourage 2023 Scholarship</Name>
        <Description>
          Covered the registration and travel costs for the WomENcourage 2023
          event
        </Description>
      </Wrapper>
      <Wrapper>
        <Name>Hackcon XI</Name>
        <Description>
          GitHub Campus Expert program covered the registration and travel costs for Hackcon XI
        </Description>
      </Wrapper>
      <Wrapper>
        <Name>SIGSOFT Travel Support</Name>
        <Description>
          Received to attend the Student Mentoring Workshop during ICSE 2023 in
          Melbourne, covering travel costs
        </Description>
      </Wrapper>
      <h2>2022</h2>
      <Wrapper>
        <Name>SIGSOFT Travel Support</Name>
        <Description>
          Received to attend the Student Mentoring Workshop during ICSE 2022 in
          Pittsburgh, covering travel costs
        </Description>
      </Wrapper>
      <h2>2021</h2>
      <Wrapper>
        <Name>Master's fellowship</Name>
        <Description>
          Offered by Academic Excellence from CAPES foundation, tied with the
          Brazilian Ministry of Education
        </Description>
      </Wrapper>
      <h2>2020</h2>
      <Wrapper>
        <Name>ACM-W Scholarship</Name>
        <Description>
          Received for Attendance at Research Computer Science Conferences,
          which was programmed for ICSE 2020, in Seoul
        </Description>
      </Wrapper>
      <h2>2019</h2>
      <Wrapper>
        <Name>Google Intern Travel Grant</Name>
        <Description>
          Received to attend Grace Hopper Celebration 2019 in Orlando
        </Description>
      </Wrapper>
    </>
  )
}

export default GrantsPage
