import React from 'react'
import { Navbar,NavContainer } from './NavbarElements'

const index = () => {
  return (
    <Navbar>
        <NavContainer>
            this is for you!
        </NavContainer>
    </Navbar>
  )
}

export default index








// import styled from "styled-components"
// import {  FaTimes,FaShoppingCart  } from "react-icons/fa";


// const Conatainer = styled.div`
//  height:100%;
//  background-color: red;
 


// `

// const Wrapper = styled.div`
//    padding: 10px 20px;
//    display: flex;
//    justify-content: space-between;
// `
// const Left = styled.div`
//       display: flex;
//       flex: 1;
//       align-items:ce;
    
// `
// const Language = styled.div`
//     font-size: 14px;
//     cursor: pointer;
// `
// const SearchContainer = styled.div`
//     border: 1px solid lightgrey;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 2px;
// `
// const Input = styled.input`
//     border: none;
    
// `
// const Center = styled.div`
//        flex: 1;
//        text-align: center;
      
    
// `
// const  Logo = styled.h1`
//        margin: 0 !important;
//        padding: 0 !important;
//        display: inline !important;
//        font-size: 1em !important;
//        font: 10px;
      

// `

// const Right = styled.div`
//      flex: 1;
//      display: flex;
//      align-items: center;
//      justify-content: flex-end;
     
 
// `

// const MenuItem = styled.div`
//     font-size: 14px;
//     cursor: pointer;
//     margin-left: 12px;
   

// `

// const Navbar = () => {
//     return (
//         <Conatainer>
//             <Wrapper>
//                 <Left>
//                     <Language>
//                         EN
//                     </Language>
//                     <SearchContainer>
//                         <Input/>
//                         <FaTimes />
     
//                     </SearchContainer> 
//                 </Left>
//                 <Center>
//                     <Logo>
//                         Logo
//                     </Logo>
//                 </Center>
//                 <Right>
//                   <MenuItem>Sign In</MenuItem>
//                   <MenuItem>Register</MenuItem>
//                   <MenuItem>
//                     <FaShoppingCart />
//                   </MenuItem>
//                 </Right>

//             </Wrapper>
//         </Conatainer>
//     )
// }

// export default Navbar