import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetUsers } from "../../../Store/Actions";
import { Loading, Table } from "../../../Compnents";

const Users = () => {
  const dispatch = useDispatch();

  const { users, deleteLoading, editLoading } = useSelector(({ UsersReducer }) => ({
    users: UsersReducer.users,
    deleteLoading: UsersReducer.deleteLoading,
    editLoading: UsersReducer.editLoading
  }));

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  return <>{users.length === 0 ? <Loading /> : <Table users={users} deleteLoading={deleteLoading} editLoading={editLoading}/>}</>;
};

export default Users;
