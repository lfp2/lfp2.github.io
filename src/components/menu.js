import React from 'react'
import Toggle from './toggle'
import styled from 'styled-components'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { Link } from 'gatsby'

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  height: 100vh;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.15);
`
const Items = styled.div`
  display: block;
  margin: 8px;
  font-size: 24px;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  margin-right: auto;
  margin-left: auto;
  font-size: 36px;
  max-width: 150px;
`

const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  margin: 4px;
`

export default function Menu({ setLight, isLight }) {
  return (
    <StyledMenu>
      <Items>
        <h1>Lavínia Paganini</h1>
        <StyledLink to="/">Home Page</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/research">Research</StyledLink>
        <StyledLink to="/grants">Grants and Fellowships</StyledLink>
        <StyledLink to="/invited">Invited Talks</StyledLink>
        <Icons>
          <IconLink href="https://github.com/lfp2">
            <FaGithub />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/lavinia-paganini/">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://twitter.com/lfpaganini">
            <FaTwitter />
          </IconLink>
        </Icons>
        <Toggle onClick={() => setLight(!isLight)} />
      </Items>
    </StyledMenu>
  )
}
