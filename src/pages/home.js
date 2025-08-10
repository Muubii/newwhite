import '../css/home.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="containerOne">
        <h1>NewWhite</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>
        <button>Go to store</button>
      </div>
      <div className="containerTwo">
        <div className="TextTwo">
          <h4>Lorem ispum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>
        </div>
        <div className='ImageTwo'>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>
      </div>
      <div className="containerThree">
        <h1>Lorem ispum</h1>
        <div className="threeGrid">
          <div>
            <div className='item'>
              <img src="https://via.placeholder.com/120" alt="Box 1" className="item-img" />
            </div>
            <p className='desc'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
          </div>
          <div>
            <div className='item'>
              <img src="https://via.placeholder.com/120" alt="Box 2" className="item-img" />
            </div>
            <p className='desc'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
          </div>
          <div>
            <div className='item'>
              <img src="https://via.placeholder.com/120" alt="Box 3" className="item-img" />
            </div>
            <p className='desc'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
          </div>
          <div>
            <div className='item'>
              <img src="https://via.placeholder.com/120" alt="Box 4" className="item-img" />
            </div>
            <p className='desc'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>

      <Footer/>
      
    </div>
  );
}

export default Home;
