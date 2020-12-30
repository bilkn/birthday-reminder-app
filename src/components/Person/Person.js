import "./Person.scss";
function Person({ person, removeItem }) {
  const { id, name, birthday, img } = person;

  return (
    <div className="person">
      <div className="person-img-container">
        <img className="person-img-container__img" src={img} alt={name} />
      </div>
      <div className="person-info">
        <p className="person-info__name">{name}</p>
        <p className="person-info__birthday">{birthday}</p>
      </div>
      <div className="person-controls">
        <button
          className="person-controls__remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Person;
