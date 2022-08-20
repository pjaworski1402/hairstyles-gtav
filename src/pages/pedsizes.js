import React from "react";
import PedSizesImage from "../assets/images/pedsizes.png"
import styled from "styled-components";

const Wrapper=styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: Roboto;
font-size: 22px;
text-align: center;
span{
    color:red;
    font-size: 24px;
}
img{
    width: 75%;
}
@media only screen and (max-width: 1100px) {
  img{
    width: 100%;
  }
}
`

const PedSizes=()=>{
    return(
        <Wrapper>
            
            <div>
                <h1>Ped sizes</h1>
            The sizes of peds are seen in the image below.
            <br />
            Each peds is selected # according to the size. Please choose the right size for you. 
            <br />
            <b><span>Warning!</span> After purchase, you cannot exchange the model for a larger or smaller one. Please make your purchase wisely.</b>
            </div>

            <img src={PedSizesImage} alt="All GTA 5 peds sizes" />
        </Wrapper>

    );
}

export default PedSizes