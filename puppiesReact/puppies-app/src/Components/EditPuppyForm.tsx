import { useState } from "react";
import { IPuppy } from "../types";

type Props = {
  puppy: IPuppy;
  updatePuppy: (updatedPuppy: IPuppy) => void;
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPuppyToShow: React.Dispatch<React.SetStateAction<IPuppy>>;
  updateListAfterEdit: (updatedPuppy: IPuppy) => void;
};

const Puppy = (props: Props) => {
  const {
    puppy,
    updatePuppy,
    setShowEditForm,
    setPuppyToShow,
    updateListAfterEdit,
  } = props;

  const [puppyName, setPuppyName] = useState(puppy.name);
  const [puppyBreed, setPuppyBreed] = useState(puppy.breed);
  const [puppyBirthDate, setPuppyBirthDate] = useState(puppy.birthDate);

  const onNameChange = (e: any) => {
    setPuppyName(e.target.value);
  };
  const onBreedChange = (e: any) => {
    setPuppyBreed(e.target.value);
  };
  const onBirthDateChange = (e: any) => {
    setPuppyBirthDate(e.target.value);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    const updatedPuppy: IPuppy = {
      puppyId: puppy.puppyId,
      name: puppyName,
      breed: puppyBreed,
      birthDate: puppyBirthDate,
    };
    updatePuppy(updatedPuppy);
    setPuppyToShow(updatedPuppy);
    updateListAfterEdit(updatedPuppy);
    setShowEditForm(false);
  };

  return (
    <div>
      <form onSubmit={handleEditSubmit} className="form-container">
        <div className="form-line">
          <label className="form-label">Name : </label>
          <input
            name="name"
            type="text"
            value={puppyName}
            onChange={onNameChange}
            required
          />
        </div>
        <div className="form-line">
          <label className="form-label">Breed : </label>
          <input
            name="breed"
            type="text"
            value={puppyBreed}
            onChange={onBreedChange}
            required
          />
        </div>
        <div className="form-line">
          <label className="form-label">Birth Date : </label>
          <input
            name="birthDate"
            type="date"
            value={puppyBirthDate.substring(0, 10)}
            onChange={onBirthDateChange}
            required
          />
        </div>
        <div className="form-line">
          <div className="form-label"></div>
          <input
            className="add-puppy-button"
            type="submit"
            value="Edit Puppy"
          />
        </div>
      </form>
    </div>
  );
};

export default Puppy;
