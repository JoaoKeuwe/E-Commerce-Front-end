import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselProducts() {
    return (
        <div style={{width: 700}}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://revistalivemarketing.com.br/wp-content/uploads/2022/09/Neo-Quimica-lanca-promocao-com-premio-de-um-ano-de-farmacia-gratis.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/psd-premium/mega-oferta-no-brasil-promocao-de-template-de-renderizacao-3d_363450-157.jpg?w=2000"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://prodype.blob.core.windows.net/prod-cdn/images/homepage/banner-novo-desktop.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );

      
}

export default CarouselProducts