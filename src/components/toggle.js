import React from 'react'
import styled from 'styled-components'

const StyledToggle = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  flex: 1;
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
  background-color: ${({ theme }) => theme.highlight};
  transition: background-color 1000ms ease;
  &:checked:after {
    right: 3px;
    left: auto;
  }
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 3px;
    right: auto;
    border-radius: 50%;
    background-color: #e8e8e8;
    box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.15);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  max-width: 150px;
`
const Text = styled.p`
  flex: 2;
`

export default function Toogle({ onClick }) {
  return (
    <Wrapper>
      <Text>Dark mode</Text>
      <StyledToggle type="checkbox" onClick={onClick} />
    </Wrapper>
  )
}
