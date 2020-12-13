import React from 'react';
import styled from 'styled-components';

import eventBannerImage from "../../assets/images/christmas.png" 
import snow from "../../assets/images/snow.gif" 

const Content = styled.div`
    background-image: url(${eventBannerImage}) ;
    background-position:center;
    background-repeat:no-repeat;
    background-color: #11171e;
    background-size:contain;
    width:100%;
    height:125px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
const Snow = styled.div`
    background-image: url(${snow});
    width:100%;
    height:100%;
    background-size:contain;
`

const EventBanner = () => {
    return ( 
        <Content>
            <Snow />
        </Content>
     );
}
 
export default EventBanner;