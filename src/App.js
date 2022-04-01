import './App.css'
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Pagination from './components/Pagination';
import styled from 'styled-components';


const App = () => {

  const [character, setCharacters] = useState();
  const [info, setInfo] = useState({});
  const [pages, setPages] = useState({})

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchCharters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => 
      {
        setCharacters(data.results);
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  const onAnterior = () => {
    fetchCharters(info.prev)
  }

  const onSiguiente = () => {
    fetchCharters(info.next)
  }

  useEffect(() => {
    fetchCharters(initialUrl)
  }, [])

  return (
    <>
      <Header />
      <Mains>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onAnterior={onAnterior} 
          onSiguiente={onSiguiente}
        />

        <Main character={character} />
      </Mains>
    </>
  );
}

const Mains = styled.div`
  background: radial-gradient(circle, rgba(1,171,179,1) 34%, rgba(0,99,119,1) 100%);
`

export default App;