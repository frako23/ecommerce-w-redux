import { data } from "../assets/data"
import "../styles/App.css"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";


export const Carousel = (props) => {

    const images = [
      props.data.img[0],
      props.data.img[1],
      props.data.img[2],
  ];

  return (

    <Slide>
    <div className="each-slide-effect rounded">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            
        </div>
    </div>
    <div className="each-slide-effect rounded">
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            
        </div>
    </div>
    <div className="each-slide-effect rounded">
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            
        </div>
    </div>
    </Slide>
    
    

)}