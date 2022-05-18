import classes from "./Modal.module.scss";
import bike from "../assets/bike.svg";
import { useContext } from "react";
import { ModalContext } from "../store/context";

const Modal = () => {
  const { showModal, setShowModal, activateTake } = useContext(ModalContext);

  const hideModal = () => {
    setShowModal(false);
  };

  const onChooseTake = () => {
    activateTake();
    hideModal();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
          <div className={classes.img}>
            <img src={bike} alt="bike img" className={classes.bike} />
          </div>
          <div className={classes["sorry-massage"]}>
            <h1 className={classes.sorry}>
              WE ARE SORRY, BUT WE CANNOT DELIVER TO THIS ADDRESS
            </h1>
          </div>
          <div className={classes.par}>
            <p>
              We are working on making delivery to this address possible. Do you
              want to order with takeaway?
            </p>
          </div>
          <div className={classes.buttons}>
            <button className={classes.button1} onClick={hideModal}>
              No
            </button>
            <button className={classes.button2} onClick={onChooseTake}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
