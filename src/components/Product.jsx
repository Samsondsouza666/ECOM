import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Info=styled.div`
opacity:0;
width:100%;
height:100%;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease; 
cursor:pointer;
`

const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:280px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;

&:hover ${Info} {
opacity:1;

}
`

const Image=styled.img`
height:50%;
z-index:2;
`
const Circle=styled.div`
height:200px;
width:200px;
border-radius:50%;
background-color:white;
position:absolute;
`

const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
display:flex;
background-color:white;
justify-content:center;
align-items:center;
margin:10px;
 transition:all 0.5s ease;
 &:hover{
    background-color:#e9f5f5;
    transform:scale(1.5);
};
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
<ShoppingCartOutlined/>
            </Icon>
            <Icon>
              <Link to ={`/product/${item._id}`}>
                <Search/>
              </Link>
                </Icon>
                <Icon>
                <FavoriteBorderOutlined/>
                </Icon>
        </Info>
    </Container>
  )
}

export default Product