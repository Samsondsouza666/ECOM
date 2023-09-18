import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { Announcement } from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex: 1px;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
`

const InfoContainer = styled.div`
padding: 0px 50px;
flex: 1px;

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
padding: 20px 0px;
`
const Price = styled.span`
font-size: 40px;;
font-weight: 100;
`
const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin:30px 0px;
`

const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.h3`
font-size: 20px;
font-weight: 100;
`
const FilterColor = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${(props)=>props.color};
margin:0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 10px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content:space-between;

`
const AmountContainer = styled.div`
display: flex;
font-weight: 700;
align-items: center;
`

const Amount = styled.div`
width: 30px;
height: 30px;
border-radius: 10%;
display: flex;
align-items: center;
justify-content: center;
border:1px solid teal;
margin :0px 5px;
`
const Button = styled.button`
padding: 15px;
border:2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;








const Product = () => {
const dispatch = useDispatch();

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + id);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);
  
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
      const handleClick = () => {
        
        dispatch(
          addProduct({ ...product, quantity, color,size })
        );
      };

console.log(product);
  return (
<Container>
    <NavBar/>
    <Announcement/>
    <Wrapper>
        <ImageContainer >
            <Image src={product.img}/>
        </ImageContainer>
<InfoContainer>
    <Title>{product.title}</Title>
    <Desc>{product.desc}</Desc>
<Price>$ {product.price}</Price>
<FilterContainer>
<Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>

    <Filter>
        <FilterTitle>Size</FilterTitle>
        <FilterSize onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
    </Filter>
</FilterContainer>
<AddContainer>
    <AmountContainer>
        <Remove onClick={()=>handleQuantity("dec")}/>
        <Amount>{quantity}</Amount>
        <Add onClick={()=>handleQuantity("inc")}/>
    </AmountContainer>
    <Button onClick={handleClick}>Add to Cart</Button>
</AddContainer>
</InfoContainer>
    </Wrapper>
    <NewsLetter/>
    <Footer/>
</Container>
    )
}

export default Product