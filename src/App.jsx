import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Checkout from "./pages/checkout/Checkout"
import Cart from "./pages/cart/Cart"


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop"  element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
