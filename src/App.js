import { Ads } from './components/ads/Ads';
import { Categories } from './components/categories/Categories';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Info } from './components/info/Info';
import { Items } from './components/items/Items';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Ads/>
        <Navbar/>
        <Header/>
        <Info/>
        <Categories/>
        <Items/>
        <Footer/>
    </div>
  );
}

export default App;
