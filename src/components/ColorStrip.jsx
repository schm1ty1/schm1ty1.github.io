import React from 'react'
import styled from '@emotion/styled'

import colors from '../constants/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 25px;
  width: 100%;
`

const ColorBlock = styled.div`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const ColorStrip = () => {
  const colorKeys = Object.keys(colors)

  const normalColors = colorKeys.filter(
    (key) => !key.includes('dark') && key !== 'bg'
  )
  const darkColors = colorKeys.filter(
    (key) => key.includes('dark') || key === 'bg'
  )

  return (
    <Container>
      <Row>
        {normalColors.map((colorKey) => (
          <ColorBlock color={colors[colorKey]} />
        ))}
      </Row>
      <Row>
        {darkColors.map((colorKey) => (
          <ColorBlock color={colors[colorKey]} />
        ))}
      </Row>
    </Container>
  )
}

export default ColorStrip
