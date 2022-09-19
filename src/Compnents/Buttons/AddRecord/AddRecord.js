import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NewRecord, GetUsers } from "../../../Store/Actions";
import "./AddRecord.css";

const AddRecord = () => {
  const dispatch = useDispatch();
  const [newRecord, setNewRecord] = useState({ age: "", name: "", about: "" });
  const [created, setCreated] = useState(false);

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch, created]);

  const nameChangeHandler = (e) => {
    setNewRecord({ ...newRecord, name: e.target.value });
  };

  const ageChangeHandler = (e) => {
    setNewRecord({ ...newRecord, age: parseInt(e.target.value) });
  };

  const aboutChangeHandler = (e) => {
    setNewRecord({ ...newRecord, about: e.target.value });
  };

  const createNewRecordHandler = (e) => {
    e.preventDefault();
    setCreated(false)
    dispatch(NewRecord(newRecord, doneCreating));
    setNewRecord({age: "", name: "", about: "" })
    console.log(newRecord);
  };

  const doneCreating = () => setCreated(true)

  return (
    <form onSubmit={createNewRecordHandler} className="createButtonContainer">
      <input
        placeholder="name"
        required
        onChange={nameChangeHandler}
        value={newRecord?.name}
      />
      <input
        placeholder="description"
        required
        onChange={aboutChangeHandler}
        value={newRecord?.about}
      />
      <input
        maxLength="2"
        placeholder="age"
        required
        onChange={ageChangeHandler}
        value={newRecord?.age}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddRecord;
