import "./Table.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  DeleteUser,
  GetUsers,
  EditUser,
  SaveUpdatedUser,
} from "../../../Store/Actions";
import { ReadOnlyRow, EditableRow, DeleteRow } from "../../../Compnents";

const Table = ({ users, deleteLoading, editLoading }) => {
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleted, setDelete] = useState(false);
  const [modification, setModification] = useState({
    name: "",
    age: "",
    about: "",
  });

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch, editId, deleted]);

  const aboutChangeHandler = (e) => {
    e.preventDefault();
    setModification({ ...modification, about: e.target.value });
  };

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setModification({ ...modification, name: e.target.value });
  };

  const ageChangeHandler = (e) => {
    e.preventDefault();
    setModification({ ...modification, age: parseInt(e.target.value) });
  };

  const saveUpdatesHandler = ({ modification }) => {
    dispatch(SaveUpdatedUser(modification, editingDone));
  };

  const editingDone = () => setEditId(null);

  const editHandler = ({ user }) => {
    setEditId(user?.id);
    setModification({
      id: user?.id,
      name: user?.name,
      age: user?.age,
      about: user?.about,
    });
    dispatch(EditUser(user));
  };

  const handleDelete = ({ user }) => {
    setDelete(false);
    setDeleteId(user?.id);
    dispatch(DeleteUser(user?.id, deletingDone));
  };

  const deletingDone = () => setDelete(true);

  const mapping = () =>
    users.map((user) => (
      <tbody key={user?.id}>
        {editId === user?.id ? (
          <EditableRow
            nameChangeHandler={nameChangeHandler}
            aboutChangeHandler={aboutChangeHandler}
            ageChangeHandler={ageChangeHandler}
            saveUpdatesHandler={saveUpdatesHandler}
            handleDelete={handleDelete}
            modification={modification}
            user={user}
            editLoading={editLoading}
          />
        ) : deleteId === user?.id ? (
          <DeleteRow
            user={user}
            editHandler={editHandler}
            handleDelete={handleDelete}
            deleteLoading={deleteLoading}
          />
        ) : (
          <ReadOnlyRow
            user={user}
            editHandler={editHandler}
            handleDelete={handleDelete}
          />
        )}
      </tbody>
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>About</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      {mapping()}
    </table>
  );
};

export default Table;
