import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card2">
      <h2>{props.text}</h2>
      <div className="actions">
        {" "}
        <button className="btn" onClick={deleteHandler}>
          Remove From Cart
        </button>
      </div>
      {modalIsOpen && <Modal onClick={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default Todo;
