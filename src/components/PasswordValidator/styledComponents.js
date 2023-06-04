import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Card = styled.div`
  background-color: #383a4e;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 35px;
  font-family: Roboto;
`
export const Caption = styled.p`
  color: #f8fafc;
  font-size: 12px;
`
export const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  outline: none;
  font-size: 14px;
`

export const ErrorMsg = styled.p`
  color: red;
`
