import StyledComponent  from 'styled-components'

const Container = StyledComponent.div`
height:30px;
display: flex;
background-color:teal;
color:white;
align-items:center; 
justify-content:center;   
font-size:16px;
font-weight:500px;
`

export const Announcement = () => {
  return (
<Container>Sale 50% off on every item </Container>
    )
}
