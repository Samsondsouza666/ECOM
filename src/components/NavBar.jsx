
import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import StyledComponent  from 'styled-components'
// import { resetLoginState } from '../redux/userRedux'
import { logout, productReset } from '../redux/apiCalls'
import { resetProduct } from '../redux/cartRedux'
// import Product from '../../../ECONAPI/models/Product'

const Container = StyledComponent.div`
height:60px;`

const Wrapper = StyledComponent.div`
padding:10px 20px;
display: flex;
justify-content: space-between;
align-items: center;`

const Left = StyledComponent.div`
flex:1;
display: flex;
align-items: center;`

const Language = StyledComponent.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = StyledComponent.div`
  border:1px solid black;
  display: flex;
  align-items: center;
  margin-left:25px;
`
const Input = StyledComponent.input`
border:none;
`
const Center = StyledComponent.div`
flex:1;
text-align:center;`

const Logo = StyledComponent.h1`
font-weight500px;
cursor:pointer;
color:black;
text-decoration:none;
`

const Right = StyledComponent.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;
`

const MenuItem = StyledComponent.div`
font-size:14px;
margin-left:25px;
cursor:pointer;`

const NavBar = () => {
  // const storeProduct =new Product();
  const quantity=useSelector(state=>state.cart.quantity)
  const user=useSelector(state=>state.user.currentUser)
  // const username=user.username
  // const password=user.password
  const dispatch=useDispatch()
  const handleLogout=()=>{
    productReset(dispatch);
    logout(dispatch)
  }
    // console.log(user)
  return (
<Container>
<Wrapper>
  <Left>
    <Language>EN</Language>
    <SearchContainer>
     <Input/>  
     <Search style={{color:"grey",fontSize:16}}/>
    </SearchContainer>
  </Left>
  <Center>
    <Link to="/">
    <Logo>.ShopX</Logo>
    </Link>
  </Center>
  <Right>
    { !user? <>

    <Link to="/register">
    <MenuItem>Register</MenuItem>
    </Link>
    <Link to="/login">
    <MenuItem>SIGN IN</MenuItem>
    </Link>
    </>: <MenuItem onClick={handleLogout}>logout</MenuItem>
  }
  {/* {  user.isAdmin && <menuItem > Admin</menuItem>} */}
    <Link to={"/cart"}>
    <MenuItem><Badge badgeContent={quantity} color="primary">
  <ShoppingCartCheckoutOutlined/>
</Badge>
</MenuItem>
    </Link>
  </Right>
</Wrapper>
</Container>
  )
}

export default NavBar