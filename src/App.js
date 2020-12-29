import { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './people';

function App() {
  return (
    <>
      <AppHead />
      <Main />
      <MobileNav />
    </>
  );
}

function AppHead() {
  return <header className="app-head"></header>;
}

function Main() {
  return (
    <main className="home-main">
      <PersonList />
    </main>
  );
}

function PersonList() {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <ul className="person-list">
      {people.map((person) => (
        <Person key={person.id} person={person} removeItem={removeItem} />
      ))}
      < EmptyBox />
    </ul>
  );
}

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

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <button className="mobile-nav__add-btn">
        <i className="fas fa-plus"></i>
      </button>
    </nav>
  );
}

function EmptyBox() {
  return (
    <div className="empty-box">
      <button className="empty-box__add-btn">
        <i className="fa fa-plus empty-box__add-icon" aria-hidden="true"></i>
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
