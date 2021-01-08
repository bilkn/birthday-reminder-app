import "./PersonOptions.scss";

function PersonOptions() {
  return (
    <div className="person-options-container">
      <ul className="person-options-list">
        <li className="person-options-list__item">
          <label className="person-options-list__label" htmlFor="favourite">
            Add to favorites
          </label>
          <input
            id="favourite"
            type="text"
            hidden={true}
            value="add-favourite"
            readOnly={true}
          />
        </li>
        <hr className="person-options-list__line" />
        <li className="person-options-list__item">
          <label className="person-options-list__label" htmlFor="edit">
            Edit
          </label>
          <input
            id="edit"
            type="text"
            hidden={true}
            value="edit-person"
            readOnly={true}
          />
        </li>
      </ul>
    </div>
  );
}

export default PersonOptions;
