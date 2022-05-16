import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import OnlineForm from "./components/OnlineForm/OnlineForm";
import Bestsellers from "./components/bestsellers/Bestsellers";
import { ModalContext } from "./store/context";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <OnlineForm />
      <Bestsellers />
    </>
  );
}

export default App;
