import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme/themes';
import logo from './../img/logo.png'

const Header = () => {
    
    return ( 
    <Container>
        <DivOneH>
            <a href='#'><Image src={logo}></Image></a>
        </DivOneH>

        <DivTwoH>
        </DivTwoH>
    </Container>
    );
}
 
const Container = styled.div`
    background-color: ${Colors.primaryColor};
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 999;
`

const DivOneH = styled.div`
    margin: .1em;
`

const Image = styled.img`
    width: 12%;
    cursor: pointer;
    transition: all .2s;
    &:active{
        transform: scale(.98);
    }

    @media (max-width: 768px) {
        width: 18%; 
    }
    @media (max-width: 480px) {
        width: 26%; 
    }
`

const DivTwoH = styled.div`
    margin: .1em;
`

export default Header;