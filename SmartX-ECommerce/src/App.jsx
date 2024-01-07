import React from 'react'
import { Header, Main, Footer } from './layout/layout'
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart)
  return (
    <>
      <Header />
      {/* <Main  /> */}
      <Footer />
    </>
  )
}

export default App;