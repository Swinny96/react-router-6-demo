import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/test" element={(
            <div>
              <h2>Test page</h2>
            </div>
          )} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route 
            path="/checkout" 
            element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App