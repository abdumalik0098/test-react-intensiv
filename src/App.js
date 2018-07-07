import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';


class App extends Component {
  render() {
    return (
    <div className="wrapper">
      <FullName name="Sami" surname="Yusuf" link="vk.com" />
      <FullName name="Maher" surname="Zain" link="ok.ru" />
      <FullName name="Ivan" surname="Ivanov" link="#" />
    </div>

    );
  }
}


function FullName (props){
  return (
      <div>
      <h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link} >Link to my page...</a>
      </div>
    )
}



export default App;
