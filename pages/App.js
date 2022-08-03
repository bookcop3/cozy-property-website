import React from 'react'
import Slider from 'react-slick'
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

import data from '../utils/data';
export default function App() {
  return (
    <div className="App">
        {data.map((item) => (
            <div className="card">
        <div className="card-top">
            <div className="card-bottom">
            </div>
        ))}
      
        </div>
      </div>
    </div>
  )
}
