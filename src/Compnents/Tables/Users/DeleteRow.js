const DeleteRow = ({ user, editHandler, handleDelete, deleteLoading }) => {
  
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
          {deleteLoading ? (
            <i className="fa fa-refresh fa-spin" />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/assets/delete.png"}
              alt="delete"
              onClick={() => handleDelete({ user })}
            />
          )}
        </td>
      </tr>
    );
  };
  export default DeleteRow;
  