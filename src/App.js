import logo from "./logo.svg";
import "./App.css";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";
import Form from 'react-bootstrap/Form';

function App() {
  const b = 20;

  const z = 100;

  const obj = {
    name: "foulen",
    age: 20,
    email: "foulen@email.com",
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <ComponentB a="falten" otherProps={b} obj={obj} /> */}
        <ComponentD>
          <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
              <Form.Label>Disabled file input example</Form.Label>
              <Form.Control type="file" disabled />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Small file input example</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Large file input example</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </div>
        </ComponentD>

         <hr></hr>
         <hr></hr>
         <hr></hr> 

        <ComponentD>
          <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            
          </div>
        </ComponentD>
      </header>
    </div>
  );
}

export default App;
