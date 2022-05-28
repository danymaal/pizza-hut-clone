import OnlineForm from '../components/OnlineForm/OnlineForm';
import Bestsellers from '../components/bestsellers/Bestsellers/Bestsellers';
import '../index.scss';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import { images } from '../assets/images';

const HomePage = () => {
  return (
    <>
      <OnlineForm />
      <SectionHeading text="BESTSELLERS" src={images.heart} />
      <Bestsellers />
    </>
  );
};

export default HomePage;
