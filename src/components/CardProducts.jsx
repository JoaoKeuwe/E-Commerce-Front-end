import camiseta from '../images/camiseta.png'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    description: 'Camiseta branca confortável',
    imageSrc: 'https://www.shutterstock.com/image-illustration/room-two-isometric-walls-designed-600w-1933787411.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    description: 'Camiseta branca confortável',
    imageSrc: 'https://www.shutterstock.com/image-illustration/room-two-isometric-walls-designed-600w-1933787411.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    description: 'Camiseta branca confortável',
    imageSrc: 'https://www.shutterstock.com/image-illustration/room-two-isometric-walls-designed-600w-1933787411.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

function CardProducts() {
  return (
    <div>
      <div>
        <h2>Customers also purchaseed</h2>

        <div >
          {products.map((product) => (
            <div key={product.id} >
              <div>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                />
              </div>
              <div>
                <div>
                  <h3>
                    <h2 style={{ fontSize: 50 }}>
                      <span aria-hidden="true" />
                      {product.name}
                    </h2>
                    <p>{product.description}</p>
                  </h3>
                  <p style={{ fontSize: 20 }}>{product.color}</p>
                </div>
                <p style={{ fontSize: 30 }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardProducts