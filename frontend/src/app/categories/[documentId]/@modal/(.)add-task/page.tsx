import { Modal } from "@/components/ui/Modal";
import PrimaryButton from "@/components/ui/primaryButton";

const AddNewTask = () => {
  return (
    <Modal>
      <div>
        <p>add new task form</p>
        <PrimaryButton>Add</PrimaryButton>
      </div>
    </Modal>
  );
};

export default AddNewTask;
