import logo from './logo.svg';
import './App.css';
import './ProductData'
import ProductData from './ProductData';

function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+new Date().getMinutes()
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0'+new Date().getMinutes()
  return (
    <div className="App">
      <header className="App-header">
        <nav className="topBar">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
          
          </nav>
      </header>
      
      <div className="main-container">
        <div className="product-preview">
          <img src="https://images.dailyobjects.com/marche/product-images/1801/black-silicone-apple-watchband-38-40mm-images/Black-Silicone-Apple-WatchBand-38-40mm-3.png?tr=cm-pad_resize,w-412,h-490,dpr-2" alt='product-preview'/>
          <div className='time'>
            <p>{currentHour}:{currentMinutes}</p>
          </div>
        </div>
        <div className='product-data'>
          <h1 className='title'>{ProductData.title}</h1>
          <p className='product-description'>{ProductData.description}</p>
          <h3 className='select-color'>Select Color</h3>
          <div className='select-watch-container'>
          <img className='select-watch' src='https://imgur.com/iOeUBV7.png' alt='watch with black strap'/>
          <img className='select-watch' src='https://imgur.com/PTgQlim.png' alt='watch with blue strap'/>
          <img className='select-watch' src='https://imgur.com/Mplj1YR.png' alt='watch with red strap'/>
          <img className='select-watch' src='https://imgur.com/xSIK4M8.png'/>
          </div>
          <h3 className='select-color'>Features</h3>
          <div>
            <button className='btn'>Time</button>
            <button className='btn'>Heart Rate</button>
          </div>
          <br/>
          <div>
          <button className='btn-buy-now'>BUY NOW</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
