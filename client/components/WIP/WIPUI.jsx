import styled from 'styled-components'
import { device } from '../../styles/devices'

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-image: linear-gradient(0, #bde2ed, #446489);
  background-size: auto;

  border: 5px solid red;

`
export const TextWrapper = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-flow: column wrap
  border: 5px dotted black;
  padding: 2rem 1rem;

  @media ${device.laptop} {
    flex: 0 0 50%;
    border: none;
  }

  `
/* flex: 0 0 24% => desktop */
/* flex: 0 0 48% => tablet */
/* flex: 0 0 92% => phone */
export const Picture = styled.img`
  flex-basis: 30%;
  border: 5px solid red;
  padding: 2rem 1rem;

  @media ${device.laptop} { 
    flex: 0 0 20%
    flex-flow: row-reverse;
  }

`
