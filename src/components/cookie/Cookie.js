import React from 'react'
import styled from 'styled-components';

import {setCookie} from "../../utils/cookies"

const CookieStyle = styled.div`
position:fixed;
bottom:0;
left:0;
width:100%;
background-color: #275fff;
padding:10px 10% 10px 10px;
color: white;
box-shadow: 0 0 15px black;
z-index:1;
`

const CloseButton = styled.button`
    background: none;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    margin-left:20px;
    padding:5px;
`

const Cookie = ({setCookieState}) => {
    
    const setCookieInfo=()=>{
        setCookieState("1");
        setCookie("cookieAccept", "1")
    }

    return ( 
        <CookieStyle>
            We use cookies to understand how you use our site and to improve your experience. 
            This includes personalizing content. To learn more, <a href="/cookies" target='_blank'>click here.</a> 
            By continuing to use our site, you accept our use of cookies, revised Privacy Policy and Terms and Conditions. 
            <CloseButton onClick={()=>setCookieInfo()}>Click here to close</CloseButton>
        </CookieStyle>
     );
}
 
export default Cookie;