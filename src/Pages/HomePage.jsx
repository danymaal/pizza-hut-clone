import OnlineForm from '../components/OnlineForm/OnlineForm';
import Bestsellers from '../components/bestsellers/Bestsellers';
import '../index.scss';
import { images } from '../UI/images';

const HomePage = () => {
  return (
    <>
      <OnlineForm />
      <div className="title-bestseller">
        <h1>
          <span style={{ padding: 0, margin: 0 }}>
            <img className="heart-image" src={images.heart} alt="heart" />
          </span>
          BESTSELLERS
        </h1>
      </div>
      <Bestsellers />
    </>
  );
};

export default HomePage;
