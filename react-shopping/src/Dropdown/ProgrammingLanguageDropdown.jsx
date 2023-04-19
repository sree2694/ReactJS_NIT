import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import CppPage from './CppPage';
import JavaPage from './JavaPage';
import ReactJSPage from './ReactJSPage';
import MySqlPage from './MySqlPage';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProgrammingLanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedLanguage(eventKey);
  };

  const renderPage = () => {
    switch (selectedLanguage) {
      case 'C++':
        return <CppPage />;
      case 'Java':
        return <JavaPage />;
      case 'ReactJS':
        return <ReactJSPage />;
      case 'MySql':
        return <MySqlPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedLanguage ? selectedLanguage : 'Select a language'}
        onSelect={handleSelect}
        as="nav"
      >
        <Dropdown.Item eventKey="C++" as="a">C++</Dropdown.Item>
        <Dropdown.Item eventKey="Java" as="a">Java</Dropdown.Item>
        <Dropdown.Item eventKey="ReactJS" as="a">ReactJS</Dropdown.Item>
        <Dropdown.Item eventKey="MySql" as="a">MySql</Dropdown.Item>
      </DropdownButton>
      {renderPage()}
    </div>
  );
};

export default ProgrammingLanguageDropdown;
