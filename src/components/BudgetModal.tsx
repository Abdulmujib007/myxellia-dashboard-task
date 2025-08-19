import Modal from "react-modal";
import { modalContent } from "../constants/data";
import BudgetContentTemplate from "./BudgetContentTemplate";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const modalStyle = {
  overlay: {
    backgroundColor: "#00000040",
  },
  content: {
    width: "27.4rem",
    height: "fit-content",
    margin: "auto",
    borderRadius: "10px",
    padding: 0,
    border: "none",
  },
};

function BudgetModal({ modalIsOpen, closeModal }: Props) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyle}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <>
          <div className="bg-[url('src/assets/media.png')] bg-cover  bg-no-repeat flex items-center justify-center h-[13.3rem] ">
            <img src="src/assets/calculator.svg" />
          </div>
          <main className="py-6 px-[3rem] flex flex-col gap-6">
            {modalContent.map((content, ind) => (
              <BudgetContentTemplate key={ind} {...content} />
            ))}
            <button className="flex items-center justify-center rounded-full bg-[#18181B] py-3 ">
              <span className="text-white font-medium text-[1rem]">
                Create Budget
              </span>
            </button>
          </main>
        </>
      </Modal>
    </div>
  );
}

export default BudgetModal;
