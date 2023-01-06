import { IPuppy } from "../types";

type Props = {
  puppyToShow: IPuppy;
  deletePuppy: (puppy: IPuppy) => void;
  editPuppy: (puppy: IPuppy) => void;
};

const PuppyInfo = (props: Props) => {
  const { puppyToShow, deletePuppy, editPuppy } = props;

  return (
    <div>
      <div className="form-container">
        <div className="form-line">
          <p className="form-label">Name: </p>
          <p className="puppy-info">{puppyToShow.name}</p>
          
        </div>
        <div className="form-line">
          <p className="form-label">Breed: </p>
          <p className="puppy-info">{puppyToShow.breed}</p>
        </div>
        <div className="form-line">
          <p className="form-label">Birth Date: </p>
          <p className="puppy-info">{puppyToShow.birthDate.substring(0, 10)}</p>
        </div>
        <div>
          <div className="form-label"></div>
          <div>
            <input
            className="delete-button"
              
              type="button"
              value="Delete"
              onClick={() => deletePuppy(puppyToShow)}
            />
            <input
              className="edit-button"
              type="button"
              value="Edit"
              onClick={() => editPuppy(puppyToShow)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyInfo;
