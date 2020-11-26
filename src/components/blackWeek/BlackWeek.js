import React from 'react';
import styled from 'styled-components';

import blackWeekImage from "../../assets/images/blackweek.png" 

const Content = styled.div`
    background-image: url(${blackWeekImage}) ;
    background-position:center;
    background-repeat:no-repeat;
    background-color:black;
    background-size:contain;
    width:100%;
    height:125px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`

const BlackWeek = () => {
    return ( 
        <Content>
        </Content>
     );
}
 
export default BlackWeek;