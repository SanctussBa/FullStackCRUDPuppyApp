import { IPuppy } from "../types";
import "../style/Puppy.style.css";

type Props = {
  puppy: IPuppy;
  setPuppyToShow: React.Dispatch<React.SetStateAction<IPuppy>>;
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPuppyIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const Puppy = (props: Props) => {
  const { puppy, setPuppyToShow, setShowEditForm, index, setPuppyIndex } =
    props;
  const onClickAction = () => {
    setPuppyToShow(puppyInfo);
    setShowEditForm(false);
    setPuppyIndex(index);
  };
  const puppyInfo = {
    puppyId: puppy.puppyId,
    name: puppy.name,
    breed: puppy.breed,
    birthDate: puppy.birthDate,
  };
  return (
    <div onClick={onClickAction} className="list-item">
      <p className="puppy-name">{puppy.name}</p>
    </div>
  );
};

export default Puppy;
