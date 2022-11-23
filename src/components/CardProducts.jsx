const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://d2r9epyceweg5n.cloudfront.net/stores/166/116/products/camiseta_branca_111-f67bc5ead21c830a6c15126446617311-1024-1024.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://d2r9epyceweg5n.cloudfront.net/stores/166/116/products/camiseta_branca_111-f67bc5ead21c830a6c15126446617311-1024-1024.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://d2r9epyceweg5n.cloudfront.net/stores/166/116/products/camiseta_branca_111-f67bc5ead21c830a6c15126446617311-1024-1024.jpg',
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
                    <a href={product.href}>
                      <span aria-hidden="true" />
                      {product.name}
                    </a>
                  </h3>
                  <p>{product.color}</p>
                </div>
                <p style={{fontSize: 30}}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardProducts