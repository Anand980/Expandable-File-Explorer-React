import React from 'react';
import './styles.css';
import Folder from './component/Folder';
import explorer from './data/folderData';

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
