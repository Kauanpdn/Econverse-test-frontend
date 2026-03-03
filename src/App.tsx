
import './App.css'

import Header from './components/Header/Header';
import BannerPromo from './components/BannerPromo/BannerPromo';
import Categorias from './components/CategoriaCard/Categorias';

function App() {

  return (
    <>
      <div>
        <Header />
        <BannerPromo />
        <Categorias/>
      </div>
    </>
  )
}

export default App
