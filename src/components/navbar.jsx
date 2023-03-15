import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = ( ) =>{
 const { totalCount } = useSelector(state => state.cart)

  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top pt-3" data-bs-theme="dark">
      <div className="container-fluid ">
        <Link className="text-decoration-none" to={'/'}>
        <span className="navbar-brand text-white">Pastillas de freno</span>
        </Link>
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="ms-2" to="/cart">
              <button className="btn btn-primary text-white position-relative" aria-current="page" >
                <i className="fa-solid fa-cart-shopping ms-1"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCount}
                </span>
              </button>
              </Link>
            </li>
          </ul>
        
      </div>
    </nav>
    </>
 )
}