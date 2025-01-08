import Modal from "react-modal";
import { css } from "styled-system/css";

Modal.setAppElement("#main");

const DEFAULT_MODAL_STYLES = css.raw({
  width: ["5/6", "1/2", "1/3"],
  height: "4/5",
  overflow: "auto",
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  WebkitOverflowScrolling: "touch",
  borderRadius: "lg",
  px: "10",
  py: "12",
  bg: "bingo.black",
  color: "bingo.white",
});
const DEFAULT_OVERLAY_STYLE = css.raw({
  bg: "bingo.darkGray/95",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export default function ReusableModal({
  isOpen,
  onClose,
  children,
  modalStyle,
  overlayStyle = null,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css(DEFAULT_MODAL_STYLES, modalStyle)}
      overlayClassName={css(DEFAULT_OVERLAY_STYLE, overlayStyle)}
      contentLabel="Bingo Modal"
    >
      {children}
    </Modal>
  );
}
