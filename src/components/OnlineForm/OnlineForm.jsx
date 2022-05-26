import classes from "./OnlineForm.module.scss";
import { useState } from "react";
import Modal from "../../UI/Modal";
import { ModalContext } from "../../store/context";

const OnlineForm = () => {
  const [activeDel, setActiveDel] = useState(false);
  const [activeTake, setActiveTake] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  const activateDel = () => {
    setActiveDel(true);
    setActiveTake(false);
  };

  const activateTake = () => {
    setActiveTake(true);
    setActiveDel(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (activeDel) {
      setShowModal(true);
    }
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const buttonClicked = () => {
    window.location = "/cart";
  };

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, activateTake }}>
      <div className={classes.wrapper}>
        <div className={classes.online}>
          <form onSubmit={submitHandler}>
            <h1 className={classes.title}>ORDER YOUR PIZZA ONLINE</h1>
            <div className={classes.radios}>
              <div
                className={`${classes.radioEl} ${activeDel && classes.active} `}
                onClick={activateDel}
              >
                <input type={"radio"} id="delivery" />
                <label htmlFor="delivery">
                  <div>Delivery</div>
                </label>
              </div>
              <div
                className={`${classes.radioEl} ${
                  activeTake && classes.active
                } `}
                onClick={activateTake}
              >
                <input type={"radio"} id="takeaway" />
                <label htmlFor="delivery">Takeaway</label>
              </div>
            </div>
            <div className={classes.text}>
              <input
                type="text"
                className={classes.location}
                placeholder="Enter your address"
                onChange={onInputChange}
                value={input}
              />
            </div>
            <div className={classes.order}>
              <button
                type="submit"
                className={`${classes.orderBtn} ${!input && classes.disabled}`}
                disabled={!input}
                onClick={activeTake && buttonClicked}
              >
                Begin your order
              </button>
            </div>
          </form>
          {showModal && (
            <div className={classes.modalAbs}>
              <Modal />
            </div>
          )}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export default OnlineForm;
