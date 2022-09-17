import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetUsers } from "../../../Store/Actions";
import Loading from "../../Layouts/Loading/Loading";
import Table from "./Table";

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetUsers());
    }, [dispatch]);

    const { users } = useSelector(({ UsersReducer }) => ({
        users: UsersReducer.users,
      }));

  return (
    <>
      {users.length === 0 ? (
      <Loading/>
      ) : (
       <Table users={users}/>
      )}
    </>
  );
};

export default Users;
