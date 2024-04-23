// import React from 'react'
import styled from 'styled-components'
const Title = styled.div`
  padding: 5px 10px;
  font-size: ${(props) => props.modTitleSize || '16px'};
  display: inline-block;
  white-space: nowrap;
  font-weight: 600;
  background-color: ${(props) => props.bgColor || '#4a8bd6'};
  border-radius: 2px 2px 0 0;
  color: ${(props) => props.textColor || '#f4f7f6'};
`
const BottomLine = styled.div`
  height: 2px;
  background-color: ${(props) => props.bgColor || '#4a8bd6'};
`
const RecTitle = ({ colorList, modTitleSize, children }) => {
  const [textColor, bgColor] = colorList || []
  return (
    <>
      <Title textColor={textColor} bgColor={bgColor} modTitleSize={modTitleSize}>
        {children}
      </Title>
      <BottomLine textColor={textColor} bgColor={bgColor}></BottomLine>
    </>
  )
}
export default RecTitle
