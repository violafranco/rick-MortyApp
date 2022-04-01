import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme/themes';

const Pagination = ({pages, prev, next, onAnterior, onSiguiente}) => {

    const handleAnterior = () => {
        onAnterior();
    }

    const handleSiguiente = () => {
        onSiguiente();
    }

    return ( 
        <Container>
            <UL>
                {
                    prev 
                    ? 
                    <List>
                        <Button onClick={handleAnterior}>Anterior</Button>
                    </List>
                    : null
                }

                {
                    next 
                    ?
                    <List>
                        <Button onClick={handleSiguiente}>Siguiente</Button>
                    </List>
                    : null
                }
            </UL>
        </Container>
    );
}
 
const Container = styled.div`

`

const UL = styled.ul`
    display: flex;
    justify-content: center;
`

const List = styled.li`
    list-style: none;
`

const Button = styled.button`
    margin: 2em 1em 0 1em;
    font-size: 1em;
    border: none;
    padding: .6em 1em;
    background-color: ${Colors.primaryColor};
    color: ${Colors.white};
    border-radius: 15px;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background-color: #191d24;
        transform: scale(1.02);
    }
    &:active{
        transform: scale(.98);
    }
`

export default Pagination;