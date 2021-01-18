import './AddPersonUIInfo.scss';

function AddPersonUIINfo(props) {
  const { nameContainer, dateContainer, name, birthday } = props;
  let formattedBirthday = null;
  if (birthday) {
    formattedBirthday = birthday.split('.').reverse().join('-');
  }

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
        defaultValue={formattedBirthday || ''}
        maxLength="10"
        placeholder="dd/mm/yyyy"
      />
    </div>
  );
}

export default AddPersonUIINfo;
