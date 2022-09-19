const EditableRow = ({
  user,
  modification,
  nameChangeHandler,
  aboutChangeHandler,
  ageChangeHandler,
  saveUpdatesHandler,
  handleDelete,
}) => {
  return (
      <tr>
        <td>
          <input
            // size="15"
            onChange={nameChangeHandler}
            defaultValue={user.name}
          />
        </td>
        <td className="aboutTD">
          <input
            // size="98"
            onChange={aboutChangeHandler}
            defaultValue={user.about}
          />
        </td>
        <td>
          <input
            maxLength="2"
            // size="2"
            onChange={ageChangeHandler}
            defaultValue={modification.age}
          />
        </td>
        <td>
          <img
            src={process.env.PUBLIC_URL + "/assets/check.png"}
            alt="save"
            onClick={() => saveUpdatesHandler({ modification })}
          />
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
