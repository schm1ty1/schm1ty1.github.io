import React from 'react'
import styled from '@emotion/styled'

import '../../static/gruvbox.css'
import '../../static/styles/index.css'

import colors from '../constants/colors'
import ColorStrip from '../components/ColorStrip'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url('/mtn-wall.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
`

const NeofetchBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 70vw;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.bg};
  opacity: 0.97;
  padding: 50px;
`

const NavBar = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 3vh;
  width: 100%;
  background-color: ${colors.bg};
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ flexStart = false }) =>
    flexStart ? 'flex-start' : 'center'};
`

const ProfilePic = styled.div`
  background-image: url('/Face.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 400px;
  height: 400px;
  border-radius: 6px;
  margin: 10px;

  @media (max-width: 1450px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 1125px) {
    width: 150px;
    height: 150px;
  }
`

const TerminalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding 10px;
  margin: 10px;

  @media (max-width: 1125px) {
  }
`

const TerminalLine = styled.h3`
  font-size: 20px;
  color: ${colors.darkGreen};
  &:before {
    color: ${colors.darkBlue};
    content: '$ ';
  }
  @media (max-width: 1450px) {
    font-size: 16px;
  }
  @media (max-width: 1125px) {
    font-size: 14px;
  }
`

const Row = styled.div`
  display: flex;
`

const TagLine = styled.span`
  font-size: 11px;
`

const NeofetchLabel = styled.span`
  color: ${colors.yellow};
`

const NeofetchLine = styled.h3`
  @media (max-width: 1450px) {
    font-size: 16px;
  }
  @media (max-width: 1125px) {
    font-size: 14px;
  }
`

const At = styled.h3`
  &:before {
    color: ${colors.aqua};
    content: '@';
  }
  @media (max-width: 1450px) {
    font-size: 16px;
  }
  @media (max-width: 1125px) {
    font-size: 14px;
  }
`

export default function Home() {
  const containerRef = React.createRef()
  return (
    <Container ref={containerRef}>
      <NavBar>
        <TagLine>schm1ty1</TagLine>
      </NavBar>

      <NeofetchBox>
        <TerminalLine>neofetch</TerminalLine>
        <Row>
          <Col>
            <ProfilePic />
          </Col>
          <TerminalContent>
            <At>schm1ty1 everywhere</At>
            <NeofetchLine>
              <NeofetchLabel>Name</NeofetchLabel>: Jake Schmitz
            </NeofetchLine>
            <NeofetchLine>
              <NeofetchLabel>Occupation</NeofetchLabel>: Full Stack Software
              Engineer @{' '}
              <a target="_blank" href="https://vincit.com">
                Vincit-US
              </a>
            </NeofetchLine>
            <NeofetchLine>
              <NeofetchLabel>Technologies</NeofetchLabel>: React.js, React
              Native, Node.js, Typescript, GraphQL
            </NeofetchLine>

            <ColorStrip />
          </TerminalContent>
        </Row>
      </NeofetchBox>
    </Container>
  )
}
