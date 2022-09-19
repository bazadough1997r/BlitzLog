const ReadOnlyRow = ({ user, editHandler, handleDelete }) => {
  
  return (
    <tr>
      <td>{user?.name}</td>
      <td className="aboutTD">{user?.about}</td>
      <td>{user?.age}</td>
      <td>
        <img
          src={process.env.PUBLIC_URL + "/assets/edit.png"}
          alt="edit"
          onClick={() => editHandler({ user })}
        />
          <img
            src={process.env.PUBLIC_URL + "/assets/delete.png"}
            alt="delete"
            onClick={() => handleDelete({ user })}
          />
      </td>
    </tr>
  );
};
export default ReadOnlyRow;
