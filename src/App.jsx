import { NavbarDefault } from "./components/layouts/Navbar"
import ProductPage from "./components/pages/products"
import { CarouselDefault } from "./components/fragments/Carousel"

function App() {
  return (
    <>
      <NavbarDefault />
      <CarouselDefault />
      <ProductPage />
    </>
  )
}

export default App
