import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {}

function siteHead() {
  return <header className="site-head"></header>;
}

function Main() {
  <PersonList />;
}

function PersonList() {
  <Person />;
}

function Person(props) {
  const { personName, birthday, imgSrc } = props;
  return (
    <div className="person">
      <div className="person-img-container">
        <img
          className="person-img-container__img"
          src={imgSrc}
          alt={personName}
        />
      </div>
      <div className="person-info">
        <p className="person-info__name">{personName}</p>
        <p className="person-info__birthday">{birthday}</p>
      </div>
    </div>
  );
}

function mobileNav() {
  return (
    <nav className="mobile-nav">
      <button className="mobile-nav__btn">
        <i class="fas fa-plus"></i>
      </button>
    </nav>
  );
}

export default App;
