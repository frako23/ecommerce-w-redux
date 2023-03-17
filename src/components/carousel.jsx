import { data } from "../assets/data"
import "../styles/App.css"

export const Carousel = (props) => {
  return (

  //  <main id="carousel-container" className="mt-2">
  //   <ul id="carousel">
  //     <li className="slide">
  //     <i className="fa-solid fa-angle-left btn btn-light buttonR p-1"></i>
  //     <i className="fa-solid fa-angle-right btn btn-light buttonL p-1"></i>
  //       <img src="https://picsum.photos/300/200" alt=""/>
  //     </li>
  //     <li className="slide">
  //       <img src="https://picsum.photos/300/200" alt=""/>
  //     </li>
  //     <li className="slide">
  //       <img src="https://picsum.photos/300/200" alt=""/>
  //     </li>
  //   </ul>
  //  </main>

  <div id="demo" className="carousel slide mt-2" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>


  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.data.img[0]} alt="Los Angeles" className="d-block w-100"/>
      {console.log(props.data.img[0])}
    </div>
    <div className="carousel-item">
      <img src={props.data.img[1]} alt="Chicago" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={props.data.img[2]} alt="New York" className="d-block w-100"/>
    </div>
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
    
    

)}