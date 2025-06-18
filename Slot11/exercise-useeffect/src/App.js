import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import EmailPasswordForm from "./components/EmailPasswordForm";
import FullValidatedForm from "./components/FullValidatedForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h2>Exercises 4 - 6</h2>
      <hr />
      <ValidatedInput />
      <hr />
      <EmailPasswordForm />
      <hr />
      <FullValidatedForm />
    </div>
  );
}

export default App;
