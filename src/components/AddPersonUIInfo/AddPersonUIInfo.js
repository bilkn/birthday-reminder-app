import './AddPersonUIInfo.scss';

function AddPersonUIINfo({ nameContainer, dateContainer, name, birthday }) {
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
        type="date"
        className="add-person-ui-info-container__birthday"
        ref={dateContainer}
        defaultValue={formattedBirthday || ''}
      />
    </div>
  );
}

export default AddPersonUIINfo;
