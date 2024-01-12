import React, { Component } from 'react';
import Image from './Image/my image.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jonathan Omar',
        bio: 'A MERN Stack Developer, that Love to build things that Lives on the web.',
        imgSrc: Image,
        profession: 'Fullstack Developer',
      },
      show: false,
      mountedTime: new Date(),
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div className="content">
          <div className='container'>
            <div className='profiler'>
              <h2>Name: {fullName}</h2>
              <p>Bio: {bio}</p>
              <p>Profession: {profession}</p>
              <img style={{width:'7cm'}} src={imgSrc} alt="Image" />
            </div>
            <p>Time since mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;