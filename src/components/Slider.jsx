import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import {sliderItems} from '../data'
import StyledComponent  from 'styled-components'

const Container =StyledComponent.div`
width: 100%;
height: 100vh;
display:flex;
position: relative;
overflow: hidden;
  `

const Arrow =StyledComponent.div`
 height: 50px;
 width: 50px;
 background-color:#fff7f7;
 border-radius:50%;
 diplay:flex;
 align-items:center;
 justify-content:center;
 opacity:0.5;
 position:absolute;
 top:0;
 bottom:0;
 left:${props=>props.direction==="left" && "10px"};
 right:${props=>props.direction==="right" && "20px"};
 margin:auto;
cursor:pointer;
z-index:2;
 `
 const Wrapper =StyledComponent.div`
 height:100%;
 display:flex;
 transform:translateX(${props=>props.SlideIndex *-100}vw);
 transition:all 1.5s ease;
 `
 const Slide =StyledComponent.div`
 height: 100vh;
 width: 100vw;
 display:flex;
 align-items:center;
 background-color:#${props=>props.bg};
 `
 const ImageContainer =StyledComponent.div`
 height:100%;
 flex:1;
 `
const Image =StyledComponent.img`
height:80%;
margin-left:20%;
`
 const InfoContainer =StyledComponent.div`
 flex:1;
 padding:50px;
 `
const Title=StyledComponent.h1`
font-size:70px;`

const Desc=StyledComponent.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`

const Button=StyledComponent.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer:`

export const Slider = () => {
  
  const [slideIndex,setSlideIndex]=useState(0);
  const handleClick = (direction) => {

    if(direction ==="left")
  {
     setSlideIndex(slideIndex>0?slideIndex-1:2);
  }
  else
     setSlideIndex(slideIndex<2?slideIndex+1:0);
  };
  
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined style={{width:"50px",height:"40px"}}/>
        </Arrow>
        <Wrapper SlideIndex={slideIndex}>
          {sliderItems.map((item)=>(

            <Slide bg={item.bg}>

          <ImageContainer>
            <Image src={item.img}/>
          </ImageContainer>
          <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>Show Now</Button>
          </InfoContainer>
          </Slide>
            ))}
        
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
<ArrowRightOutlined style={{width:"50px",height:"40px"}}/>
        </Arrow>
    </Container>
  )
}
