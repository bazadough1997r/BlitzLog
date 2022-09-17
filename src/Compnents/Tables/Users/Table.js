const Table = ({ users }) => {

  const mapping = () => {
    return users.map((user) => {
      return (
        <tbody key={user?.userId}>
          <tr>
            <td>
              <img src={user?.avatar} alt="user's avatar" />
            </td>
            <td>{user?.name}</td>
            <td>{user?.about}</td>
            <td>{user?.age} years</td>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/assets/edit.png"}
                alt="edit"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/delete.png"}
                alt="delete"
              />
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>avatar</th>
          <th>name</th>
          <th>about</th>
          <th>age</th>
          <th>actions</th>
        </tr>
      </thead>
      {mapping()}
    </table>
  );
};

export default Table;
