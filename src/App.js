import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsSinceMount: 0,
      
      person: {
        fullName: 'Jake Campbell',
        bio: 'Here to be creative and innovative.',
        imgSrc: './cloth.jpg',
        profession: 'Designer',
      },
      
      show: false,
    };
  }

   componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ secondsSinceMount: this.state.secondsSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }
   
  render() { 
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return ( <>
    <p>Time since last mount: {this.state.secondsSinceMount} seconds</p>
    <button style={btnStyle} onClick={this.toggleShow}>View Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} style = {{width: 144, height: 180}} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
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