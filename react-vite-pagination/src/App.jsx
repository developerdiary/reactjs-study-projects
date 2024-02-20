import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)
  const [totalPages, setTotalPages] = useState(0)

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    if (data && data.products) {
      setProducts(data.products)
      setTotalPages(Math.ceil(data.products.length / productsPerPage))
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage

  return (
    <>
      {
        products.length > 0 && (
          <>
            <h1>Products</h1>
            <ul>
              {products.slice(indexOfFirstProduct, indexOfLastProduct).map((product, index) => (
                <li key={index}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className='title'>{product.title}</div>
                  <div className='price'>Rs. {product.price}</div>
                </li>
              ))}
            </ul>
          </>
        )
      }

      {
        products.length > 0 && <div className='pagination'>
          <span
            onClick={() => setCurrentPage(currentPage - 1)}
            className={currentPage === 1 ? "disabled" : ""}>
            Previous
          </span>
          {
            [...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}>{index + 1}</span>
            ))
          }
          <span
            onClick={() => setCurrentPage(currentPage + 1)}
            className={indexOfLastProduct >= products.length ? "disabled" : ""}
          > Next
          </span>
        </div>
      }

    </>
  )
}

export default App
