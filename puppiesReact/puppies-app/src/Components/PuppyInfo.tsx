import { useEffect, useState } from "react";
import { IPuppy } from "../types";

type Props = {
  puppyToShow: IPuppy;
  deletePuppy: (puppy: IPuppy) => void;
  editPuppy: (puppy: IPuppy) => void;
  puppyIndex: number;
};

const PuppyInfo = (props: Props) => {
  const { puppyToShow, deletePuppy, editPuppy, puppyIndex } = props;
  const [puppyImg, setPuppyImg] = useState<string>("");

  const fetchImages = async () => {
    const response = await fetch(
      "https://api.unsplash.com/search/photos?page=1&query=puppy&client_id=fB50avnR4j7vlPZLah2Cbg_-7PUm5UQOqCPbG3-WmtI"
    );
    const tenImages = await response.json();
    const puppyUrl = await tenImages.results[puppyIndex].urls.small;

    setPuppyImg(puppyUrl);
  };

  useEffect(() => {
    fetchImages();
  });

  return (
    <div>
      <div className="form-container">
        <div className="info-container">
          <div>
            <div className="form-line info">
              <p className="form-label">Name: </p>
              <p className="puppy-info">{puppyToShow.name}</p>
            </div>
            <div className="form-line info">
              <p className="form-label">Breed: </p>
              <p className="puppy-info">{puppyToShow.breed}</p>
            </div>
            <div className="form-line info">
              <p className="form-label">Birth Date: </p>
              <p className="puppy-info">
                {puppyToShow.birthDate.substring(0, 10)}
              </p>
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
          <div className="image-container">
            <img alt="puppyImg" src={puppyImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyInfo;
