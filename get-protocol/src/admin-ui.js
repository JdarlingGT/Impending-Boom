// Admin UI for GET Protocol WordPress Plugin

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AdminApp() {
  return (
    <div className="admin-app">
      <h1>GET Protocol Admin</h1>
      <p>Welcome to the GET Protocol Admin Panel.</p>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('get-protocol-admin-root');
  if (rootElement) {
    ReactDOM.render(<AdminApp />, rootElement);
  }
});