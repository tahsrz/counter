function Modal(props) {
  return (
    <div className="modal">
      <p>Remove From Cart?</p>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClick}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
