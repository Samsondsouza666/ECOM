import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
background-color:#fcf5f5;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
    
`

const Title =styled.h1`
font-size: 70px;
margin-bottom:20px;    
`

const Desc =styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom:20px;
`

const InputContainer =styled.div`
    width: 50%;
    background-color:white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;

`

const Input =styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button =styled.button`
    flex:1;
    border:none;
    background-color: teal;
    color:white;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products</Desc>
        <InputContainer>
            <Input placeholder='your mail'></Input>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter