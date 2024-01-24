import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Box from './components/Box/Box';
import Person from './components/Person/Person';
import PersonList from './components/PersonList/PersonList';
import Button from './components/Button/Button';
import ContainerStyle from './components/ContainerStyle/ContainerStyle';

function App() {
  return (
    <div className="App">
      <h1> first project by typescript</h1>
      <ContainerStyle>
        <div dir='rtl' className='row'>
          <Button >
            לחץ עלי
          </Button>

          <PersonList></PersonList>
        </div>
      </ContainerStyle>


    </div>
  );
}

export default App;
