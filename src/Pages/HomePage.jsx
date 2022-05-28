import OnlineForm from '../components/OnlineForm/OnlineForm';
import Bestsellers from '../components/bestsellers/Bestsellers/Bestsellers';
import '../index.scss';
import { images } from '../UI/images';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <OnlineForm />
      <div className="title-bestseller" id="bestsellers">
        <h1>
          <span style={{ padding: 0, margin: 0 }}>
            <img className="heart-image" src={images.heart} alt="heart" />
          </span>
          BESTSELLERS
        </h1>
      </div>
      <Bestsellers />
      <Footer />
    </>
  );
};

export default HomePage;
