import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import people from './people';

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
  return (
    <ul className="person-list">
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
}

function Person({ person }) {
  const { name, birthday, img } = person;
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
        <button className="person-controls__remove-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <button className="mobile-nav__add-btn">
        <i class="fas fa-plus"></i>
      </button>
    </nav>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
