import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={300}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleClearSelectedOption}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;

// Create a new event handle in IndecisionApp that clears selectedOption state
// Pass that into OptionModal
// Call it on button click
