import React, { useContext } from 'react';
import ModeContext from './utils/ModeContext';
import { useNavigate } from 'react-router-dom';
import { product } from '../Utils/Constants';



const CartSection = () => {

  const navigate = useNavigate()
  const [id,setId]=useContext(ModeContext)
  
  const handleBuyNow = (index) => {
    
    setId(index)
    navigate('/cart')

  }

  return (
    <>
      <nav class="navbar bg-primary ">
        <div class="container-fluid m-2 ">
          <span class="navbar-brand mb-0 h1 ml-5 text-white">NEW MODELS</span>
        </div>
      </nav>

      <div className="cartSection">
        {product.map((element, index) => (
          <div key={index} className="card m-4" style={{ width: '18rem' }}>
            <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {element.images.map((image, imageIndex) => (
                  <div key={imageIndex} className={`carousel-item ${imageIndex === 0 ? 'active' : ''}`}>
                    <img src={image} className="d-block w-100" alt={`Slide ${imageIndex + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${index}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon bg-success" style={{ color: '#fff', borderRadius: '50%' }} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel-${index}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon bg-success" style={{ color: '#fff', borderRadius: '50%' }} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="card-body">
            <div className="visually-hidden">{id}</div>
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
            </div>
            <div className="card-footer bg-black d-flex justify-content-center align-items-center">
              <button onClick={() => handleBuyNow(index)} type="button" className="btn btn-outline-light" >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      </>
      
  );
};

export default CartSection;

