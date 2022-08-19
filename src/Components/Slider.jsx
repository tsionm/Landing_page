// import styled from "styled-components"
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import {sliderItems} from "../data.js"
// import React, { useState } from 'react';




// const Container = styled.div`
//     position: relative;
  
//     height: 100vh !important;
//     width: 100% !important;
//     display: flex;
    
// `
// const Arrow = styled.div`
//     width: 5% !important;
//     height: 5% !important;
 
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: ${props => props.direction === 'left' && '10px'};
//     right: ${props => props.direction === 'right' && '10px'};
//     margin: auto;
//     border-radius: 50% !important;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     opacity: .8;
//     z-index: 2;
// `
// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transform: translateX(${props=>props.slideIndex * -100}vw);
// `
// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: space-between;
//   background-color: ${props => props.bg};

// `
// const ImageContainer = styled.div`
//  flex: 1;
//  height: 100%;
  
// `
// const Image = styled.img`
//  height: 100%;
//  width: 100%;
//  object-fit: cover;
//  overflow: hidden;
  
// `
// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `
// const Title = styled.h1`
//   margin: 0 !important;
//   padding: 0 !important;
// `
// const Description = styled.p`
//   font-weight: 10px;
// `
// const Button = styled.button`
  
// `

// const Slider = () => {

  
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {

//     console.log("clicked")
//     if (direction === "left"){
//       setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);

//     }else{
//       setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
//     }
//   }

//   return (

//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <FaArrowLeft />
//       </Arrow>

//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item)=>(

//         <Slide bg={item.bg}>
//           <ImageContainer>
//             <Image src={item.img} />
//           </ImageContainer>
//           <InfoContainer>
            
//             <Title>{item.Title}</Title>
//             <Description>{item.desc}</Description>
//             <Button>Click Eden Bitch</Button>

//           </InfoContainer>

//         </Slide>


      
// ))}

 

//       </Wrapper>

//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <FaArrowRight />
//       </Arrow>


//     </Container>
//   )
// }

// export default Slider