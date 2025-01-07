import Modal from "react-modal";
import { styled } from "styled-system/jsx";

Modal.setAppElement("#main");

export default function ReusableModal({ isOpen, onClose, children, style }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
      contentLabel="Bingo Modal"
    >
      {children}
    </Modal>
  );
}
