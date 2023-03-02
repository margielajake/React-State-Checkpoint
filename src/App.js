import cloth from './cloth.jpg';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
    fullName: '',
    bio: '',
    imgSrc:'',
    profession: '',
    secondsSinceMount: 0
   }
  }

   person = () => {
    this.setState({
      fullName: 'Jake Campbell',
      bio: 'Here to be creative and innovative',
      imgSrc: cloth,
      profession: 'Designer'
    })
   }

   componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ secondsSinceMount: this.state.secondsSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
   
  render() { 
    return ( <>
    <p>Time since last mount: {this.state.secondsSinceMount} seconds</p>
    <h3>{this.state.fullName}</h3>
    <h3>{this.state.bio}</h3>
    <h3>{this.state.profession}</h3>
    <img src={this.person.imgSrc} alt="Cloth" />

    <button type='button' style={btnStyle} onClick={this.person}>View Profile</button>
    </> );
  }
}

const btnStyle = {
    padding: 6,
    margin: 5,
    color: 'white',
    backgroundColor: '#FFA500',
    borderRadius: '10px',
    border: 'none'
  }

 
export default App ;