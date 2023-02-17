import React from 'react';
import CardContainer from './components/card/CardContainer';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import SliderComponent from './components/Slidercomponent/Slider'


function App() {
  return (
    <div className="App">
      <Nav/>
      <SliderComponent/>
      <CardContainer/>
      {/* <CardSlider/> */}
      <Footer/>
    </div>
  );
}

export default App;
