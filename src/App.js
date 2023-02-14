import './App.css'
import Product from './components/Product'
import './css/main.css'
import products from './products.json'
import ContentPage from './components/ContentPage'
import Header from './components/Header'
import Nav from './components/Nav'
import Titel from './components/Title'


function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <ContentPage name="Ninjago"/>
    </div>
  );
}

export default App;
