import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CppPage from './CppPage';

function Dropdowns() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const renderSelectedPage = () => {
    switch (selectedOption) {
      case 'C++':
        return <CppPage />;
      case 'Java':
        return <h1>Java Page</h1>;
      case 'ReactJS':
        return <h1>ReactJS Page</h1>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="C++">C++</Dropdown.Item>
                <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
                <Dropdown.Item eventKey="ReactJS">ReactJS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {renderSelectedPage()}
    </div>
  );
}

export default Dropdowns;
