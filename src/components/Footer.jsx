import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
display: flex;

`
const Left =styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;    
`
const Logo =styled.h1`
    
`
const Desc =styled.p`
margin:20px 0px;
`

const SocialContainer =styled.div`
    display: flex;
`
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center =styled.div`
    flex: 1;
    padding: 20px;
`
const Title =styled.h3`
margin-bottom: 20px;
`
const ListContainer =styled.ul`
list-style:none;
margin: 0px;
padding: 0px;
display: flex;
flex-wrap: wrap;
`
const ListItem =styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right =styled.div`
    flex: 1;
    padding: 20px;
`
const ContractItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment =styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
<Logo >.ShopX</Logo>
<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo quaerat alias, temporibus iusto nulla ut nisi perspiciatis ducimus eos, qui at magnam eum corrupti tenetur est dignissimos illum distinctio?</Desc>
<SocialContainer>
    <SocialIcon color="3B5999">
<Facebook/>
    </SocialIcon>
    <SocialIcon color="E4405F">
<Instagram/>
    </SocialIcon>
    <SocialIcon color="55ACEE">
<Twitter/>
    </SocialIcon>

    <SocialIcon color="E60023">
<Pinterest/>
    </SocialIcon>

</SocialContainer>
        </Left>
        <Center>
            <Title>USEFULL LINKS</Title>
            <ListContainer>
            <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
            </ListContainer>
        </Center>
        <Right>
<Title>Contract</Title>
<ContractItem>
<Room style={{marginRight:"10px"}}/>Mangala Bar , Valencia 98336
</ContractItem>
<ContractItem>
    <Phone style={{marginRight:"10px"}}/>+1 234 56 78
</ContractItem>
    <Mail style={{marginRight:"10px"}}/>contact@ShopX.dev
<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
)
}

export default Footer