import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  gap: 20px;
`

export const Title = styled.h2`
  text-align: center;
`

export const CardWrapper = styled.div`
  display: flex;
  background: #1890ff;
  border-radius: 8px;
  padding: 10px;
  height: 100%;
  overflow: auto;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`