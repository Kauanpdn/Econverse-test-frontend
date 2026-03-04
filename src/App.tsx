
import './App.css'

import Header from './components/Header/Header';
import BannerPromo from './components/BannerPromo/BannerPromo';
import Categorias from './components/CategoriaCard/Categorias';

// import ProductSection from './components/ProductSection/ProductSection';
// import { products } from './data/product';

import { ProductGrid } from "./components/ProductGrid/ProdutoGrid";
import { ProductModal } from "./components/ProductModal/ProductModal";

import CategoryTable from './components/CategoryTable/CategoryTable';
import { BannerSection } from './components/BannerSection/BannerSection';
import Marcas from './components/Marcas/Marcas';
import  {Footer}  from './components/Footer/Footer';
function App() {

      const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <>
      <div>
        <Header/>
        <BannerPromo/>
        <Categorias/>
         {/* Vitrine */}
      <ProductGrid onSelectProduct={setSelectedProduct} />

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
        {/* <ProductSection title='Produtos relacionados' products={products} extra={<CategoryTable />} /> */}
        <BannerSection/>
        {/* <ProductSection title='Produtos relacionados' products={products}
                extra={<div style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  marginBottom: "30px"
          }}>
                <span style={{ fontSize: "15px",
                fontWeight: 700,
                color: "rgba(63, 63, 64, 1)",
                cursor: "pointer"}}>Ver todos</span>
            </div>}
        /> */}
        <BannerSection/>
        <Marcas/>
        {/* <ProductSection title='Produtos relacionados' products={products}
              extra={<div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "30px"
          }}>
              <span style={{ fontSize: "15px",
              fontWeight: 700,
              color: "rgba(63, 63, 64, 1)",
              cursor: "pointer"}}>Ver todos</span>
          </div>}/> */}
          <Footer/>
      </div>
    </>
  )
}

export default App
