import { useEffect, useState } from "react";
import "../style/main.css";
import AddPuppyForm from "./AddPuppyForm";
import Puppy from "./Puppy";
import PuppyInfo from "./PuppyInfo";
import { IPuppy, emptyForm } from "../types";
import EditPuppyForm from "./EditPuppyForm";

const Home = () => {
  const [listOfPuppies, setListOfPuppies] = useState([] as IPuppy[]);
  const [addPuppy, setAddPuppy] = useState<IPuppy>(emptyForm);
  const [puppyToShow, setPuppyToShow] = useState<IPuppy>(emptyForm);
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [puppyIndex, setPuppyIndex] = useState<number>(0);

  const fetchListOfPuppies = async () => {
    const response = await fetch("https://localhost:7253/api/Puppies");
    const allPuppies = await response.json();
    setListOfPuppies(allPuppies);
  };

  const createNewPuppy = async (newPuppy: IPuppy) => {
    fetch("https://localhost:7253/api/Puppies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPuppy),
    }).then((response) => response.json());

    updateList(newPuppy);
    setAddPuppy(emptyForm);
  };

  const removeFromList = (puppy: IPuppy) => {
    const puppyToRemove = listOfPuppies.filter(
      (p) => p.puppyId === puppy.puppyId
    )[0];
    const indexToDelete = listOfPuppies.indexOf(puppyToRemove);
    const copyOfList = [...listOfPuppies];
    copyOfList.splice(indexToDelete, 1);

    setListOfPuppies(copyOfList);
    setPuppyToShow(emptyForm);
  };

  const deletePuppy = async (puppy: IPuppy) => {
    fetch(`https://localhost:7253/api/Puppies/${puppy.puppyId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    removeFromList(puppy);
  };

  const updatePuppy = async (puppy: IPuppy) => {
    fetch(`https://localhost:7253/api/Puppies/${puppy.puppyId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(puppy),
    }).then((response) => response.json());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setAddPuppy({ ...addPuppy, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPuppy = {
      puppyId: Date.now().toString(),
      name: addPuppy.name,
      breed: addPuppy.breed,
      birthDate: addPuppy.birthDate,
    };
    createNewPuppy(newPuppy);
  };

  const updateList = (puppy: IPuppy) => {
    const listCopy = [...listOfPuppies];
    listCopy.push(puppy);
    setListOfPuppies(listCopy);
  };

  const updateListAfterEdit = (puppy: IPuppy) => {
    const listCopy = [...listOfPuppies];
    const indexOfPuppy = listCopy.findIndex((p) => p.puppyId === puppy.puppyId);
    listCopy[indexOfPuppy] = {
      puppyId: puppy.puppyId,
      name: puppy.name,
      breed: puppy.breed,
      birthDate: puppy.birthDate,
    };
    setListOfPuppies(listCopy);
  };

  useEffect(() => {
    fetchListOfPuppies();
  }, []);

  return (
    <article className="article">
      <header className="header">
        <h1 className="header-title">Puppies Everywhere</h1>
      </header>
      <main className="main-container">
        <section className="section-left">
          <div className="section-add-puppy">
            <h3 className="section-title">Add puppy</h3>
            <AddPuppyForm
              addPuppy={addPuppy}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="section-info">
            <h3 className="section-title">Details</h3>
            {puppyToShow.puppyId !== "" && !showEditForm && (
              <PuppyInfo
                puppyToShow={puppyToShow}
                deletePuppy={deletePuppy}
                editPuppy={() => setShowEditForm(true)}
                puppyIndex={puppyIndex}
              />
            )}
            {showEditForm && (
              <EditPuppyForm
                puppy={puppyToShow}
                updatePuppy={updatePuppy}
                setShowEditForm={setShowEditForm}
                setPuppyToShow={setPuppyToShow}
                updateListAfterEdit={updateListAfterEdit}
              />
            )}
          </div>
        </section>
        <section className="section-right">
          <div className="section-list">
            <h3 className="section-title">List of puppies</h3>
            {listOfPuppies.map((puppy, index) => {
              return (
                <Puppy
                  puppy={puppy}
                  key={index}
                  setPuppyToShow={setPuppyToShow}
                  setShowEditForm={setShowEditForm}
                  index={index}
                  setPuppyIndex={setPuppyIndex}
                />
              );
            })}
          </div>
        </section>
      </main>
    </article>
  );
};

export default Home;
