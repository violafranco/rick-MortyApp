import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme/themes';

const Main = ({ character = [] }) => {

    console.log(character);
    return (
        <Container>
            {character.map((item, index) => {
                return (
                    <Card key={index}>
                        <ImageCard src={item.image}></ImageCard>
                        <Name>{item.name}</Name>
                        {(item.status) === 'Alive' ? <Data>Estado: VIVO</Data> : false}
                        {(item.status) === 'Dead' ? <Data>Estado: MUERTO</Data> : false}
                        {(item.status) === 'unknown' ? <Data>Estado: NO SE SABE</Data> : false}
                        <Data>Especie: {item.species}</Data>
                        {item.gender === 'Male' ? <Data>Género: Masculino</Data> : false}
                        {item.gender === 'Female' ? <Data>Género: Femenino</Data> : false}
                    </Card>

                )
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Card = styled.div`
    background-color: rgba(34, 40, 49, 0.8);
    width: 20%;
    height: 22em;
    margin: 1em;
    text-align: center;
    color: ${Colors.white};
    border-radius: 10px;
    box-shadow: 2px 10px 38px 0px rgba(0,0,0,0.5);
    transition: all .2s;
    cursor: pointer;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    &:hover{
        transform: scale(1.05);
        box-shadow: 2px 10px 38px 0px rgba(255,255,255,0.3);
    }
`

const ImageCard = styled.img`
    width: 85%;
    margin-top: 1em;
    border-radius: 10px;
`

const Name = styled.h3`
    margin-top: .3em;
    font-size: 1.6em;
`

const Data = styled.p`
    text-align: center;
    margin-top: -.7em;
`

export default Main;