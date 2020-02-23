import React from 'react';
import './style.css';


export default function Header() {
  return (
    <header>
      <img src="https://i.imgur.com/KDIDiSE.png" />
      <span>
        Meu perfil
        <i className="material-icons">account_circle</i>
      </span>
    </header>
  );
}
