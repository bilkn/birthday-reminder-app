import './AddPersonUIInfo.scss';

function AddPersonUIINfo(props) {
  const { nameContainer, dateContainer, name, birthday } = props;

  return (
    <div className="add-person-ui-info-container">
      <input
        type="text"
        className="add-person-ui-info-container__name"
        ref={nameContainer}
        maxLength="15"
        placeholder="Name"
        defaultValue={name || ''}
      />
      <input
        type="text"
        className="add-person-ui-info-container__birthday"
        ref={dateContainer}
        defaultValue={birthday || ''}
        maxLength="10"
        placeholder="dd/mm/yyyy"
      />
    </div>
  );
}

export default AddPersonUIINfo;
