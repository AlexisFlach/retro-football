import styled from 'styled-components'

export const FlexRow = styled.div`
display: flex;
background: #004001;
color: #f7f54f;
align-items: center;
justify-content: center;
gap: 20px;
`

export const FlexColumn = styled.div`
text - align: center;
width: ${(props) => props.size / 12 * 100} vw;
`