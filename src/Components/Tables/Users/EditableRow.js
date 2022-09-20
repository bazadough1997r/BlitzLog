const EditableRow = ({
  user,
  modification,
  nameChangeHandler,
  aboutChangeHandler,
  ageChangeHandler,
  saveUpdatesHandler,
  handleDelete,
  editLoading,
}) => {
  return (
    <tr>
      <td>
        <input
          required
          placeholder="name"
          onChange={nameChangeHandler}
          defaultValue={user.name}
        />
      </td>
      <td className="aboutTD">
        <input
          required
          placeholder="description"
          onChange={aboutChangeHandler}
          defaultValue={user.about}
        />
      </td>
      <td>
        <input
          required
          maxLength="2"
          type="number"
          placeholder="age"
          onChange={ageChangeHandler}
          defaultValue={modification.age}
        />
      </td>
      <td>
        {editLoading ? (
          <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/assets/check.png"}
            alt="save"
            onClick={() => saveUpdatesHandler({ modification }, user)}
          />
        )}
        <img
          src={process.env.PUBLIC_URL + "/assets/delete.png"}
          alt="delete"
          onClick={() => handleDelete({ modification })}
        />
      </td>
    </tr>
  );
};

export default EditableRow;
