import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar/Navbar';
import HomeSection from './Components/Home/HomeSection';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
// import './App.css'

class App extends Component{

  componentDidMount(){
    Aos.init({
        duration: 1000      
    });     
    // this.onScrollEvent();
  }


  nav_menu = ['Home', /* 'About', */ 'Skills', 'Portfolio', 'Contact me'];
  home_details = {
    name:'Sachin Pundir',
     position: 'Software Engineer',
      home_content:'Lorem ipsum dolor sit amet. Sed unde Quis ut nihil exercitationem qui accusamus cumque? Ut blanditiis nihil est neque provident'
  }      
  // onScrollEvent(){
  //   this.temp = window.addEventListener('scroll', function(){
  //     console.log(window.scrollY);
  //   })
  // }

  // componentWillUnmount(){
  //   // removeEventListener(window, 'scroll');
  // }

  render(){
    const {name, position, home_content}  = this.home_details;
    return(
      <div className='App'>
      <Navbar nav_menu = {this.nav_menu} />
      <HomeSection name = {name} position = {position} home_content = {home_content}/>        
      <Skills />
        <Portfolio />
      </div>
    )
  }
}

/* <div className='box'>
<div id='Home'>Home</div>
<div  id='Skills'> skills</div>
<div data-aos ="fade-right"  id='Portfolio'>Portfoil</div>
<div data-aos="fade-right" id='About'>About</div>
<div data-aos="fade-left">one</div>
<div>one</div>
<div>one</div>
</div> */


export default App;
