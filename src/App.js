import {
  BrowserRouter,
  Routes,
  Route,


} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/main/Hero"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Help from "./components/Help"
import About from "./components/About";
import Feedeback from "./components/Feedback";
import List from "./components/List"
import ScrollToTop from "react-scroll-to-top";
import StickyFooter from "./components/StickyFooter"

import shoe from "./components/shoe.json"
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import CartItems from "./components/CartItems";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Address from "./components/Address";


const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;




function App() {

  const [cartItems, setCartItems] = useState([]);





  const addToCart = (id) => {
    const selectedShoe = shoe.find((item) => item.id === id);
    setCartItems([...cartItems, selectedShoe]);
    toast.success('Item added to cart successfully!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.info('Item has been removed from cart!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
  };

  return (


    <ClerkProvider publishableKey={publishableKey} >
      <SignedIn>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>

                    <ToastContainer />
                    <Navbar />
                    <Hero />
                    <List addToCart={addToCart} />
                    <About />
                    <Help />
                    <Contact />
                    <Feedeback />
                    <Footer />
                    <StickyFooter />
                  </>
                }
              >
              </Route>


              <Route path="/CartItems" element={<CartItems cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
              <Route path="/Address" element={<Address />} />


            </Routes>

            <ScrollToTop smooth width="full" className="animate-bounce" />
          </BrowserRouter>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex justify-center items-center m-auto">
          <SignIn />
        </div>
      </SignedOut>
    </ClerkProvider>



  );
}

export default App;

