import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewRecord, GetUsers } from "../../../Store/Actions";
import { LoadingButton } from "../../../Components";
import "./AddRecord.css";

const AddRecord = () => {
  const dispatch = useDispatch();

  const { createLoading } = useSelector(({ UsersReducer }) => ({
    createLoading: UsersReducer.createLoading,
  }));

  const [newRecord, setNewRecord] = useState({ age: "", name: "", about: "" });
  const [created, setCreated] = useState(false);

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch, created]);

  const nameChangeHandler = (e) => {
    setNewRecord({ ...newRecord, name: e.target.value });
  };

  const ageChangeHandler = (e) => {
    setNewRecord({ ...newRecord, age: e.target.value });
  };

  const aboutChangeHandler = (e) => {
    setNewRecord({ ...newRecord, about: e.target.value });
  };

  const createNewRecordHandler = (e) => {
    e.preventDefault();
    setCreated(false);
    dispatch(NewRecord(newRecord, doneCreating));
    setNewRecord({ age: "", name: "", about: "" });
  };

  const doneCreating = () => setCreated(true);

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
        type="number"
        required
        onChange={ageChangeHandler}
        value={newRecord?.age}
      />
      <LoadingButton
        loading={createLoading}
        type="submit"
        className="createRecordButton"
        staticLabel="Create"
        loadingLabel="Creating"
        onClick={() => {}}
      />
    </form>
  );
};

export default AddRecord;
