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

const Talks = () => {
  return (
    <>
      <title>Talks</title>
      <h1>Talks</h1>
      <Wrapper>
        <Venue>Hackcon XI</Venue>
        <Description><a href="https://www.youtube.com/watch?v=19K-9b_NDPI&t=1s">Hack GRRRL: How To Make Your Hackathon More Inclusive for Women</a></Description>
      </Wrapper>
    </>
  )
}

export default Talks
