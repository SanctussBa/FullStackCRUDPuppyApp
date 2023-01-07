import "../style/AddPuppyForm.style.css";
import { IPuppy } from "../types";

type Props = {
  addPuppy: IPuppy;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddPuppyForm = (props: Props) => {
  const { addPuppy, handleChange, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-line">
          <label className="form-label">Name : </label>
          <input
            name="name"
            type="text"
            value={addPuppy.name}
            onChange={handleChange}
            required
          />
          <input type="hidden" name="puppyId" value={Date.now().toString()} />
        </div>
        <div className="form-line">
          <label className="form-label">Breed : </label>
          <input
            name="breed"
            type="text"
            value={addPuppy.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-line">
          <label className="form-label">Birth Date : </label>
          <input
            name="birthDate"
            type="date"
            value={addPuppy.birthDate.substring(0, 10)}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-line">
          <div className="form-label"></div>
          <input className="add-puppy-button" type="submit" value="Add Puppy" />
        </div>
      </form>
    </div>
  );
};

export default AddPuppyForm;
