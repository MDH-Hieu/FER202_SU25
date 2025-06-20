import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Import các component của bài 4, 5, 6
import ItemListAdvanced from "./components/ItemListAdvanced";
import QuestionBank from "./components/QuestionBank";
import QuestionBankAdvanced from "./components/QuestionBankAdvanced";

function App() {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Exercise 4: Item List Advanced (Edit, Sort, Filter)</h2>
      <ItemListAdvanced />

      <hr className="my-5" />

      <h2 className="mb-3">Exercise 5: Basic Quiz (QuestionBank)</h2>
      <QuestionBank />

      <hr className="my-5" />

      <h2 className="mb-3">Exercise 6: Advanced Quiz (with feedback, timer, high score)</h2>
      <QuestionBankAdvanced />
    </Container>
  );
}

export default App;
