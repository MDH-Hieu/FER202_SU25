import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
} from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    case "SORT_ALPHA":
      return {
        ...state,
        items: [...state.items].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    case "SORT_TIME":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  filter: "",
};

function ItemListAdvanced() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName.trim() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, name: editName });
    setEditId(null);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "alpha") {
      dispatch({ type: "SORT_ALPHA" });
    } else if (value === "time") {
      dispatch({ type: "SORT_TIME" });
    }
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form.Group>
            <Form.Label>Add Item</Form.Label>
            <InputGroup>
              <Form.Control
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item"
              />
              <Button onClick={handleAddItem}>Add</Button>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Control
              placeholder="Search..."
              onChange={(e) =>
                dispatch({ type: "SET_FILTER", filter: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Sort Items</Form.Label>
            <Form.Select onChange={handleSortChange} defaultValue="">
              <option value="" disabled>
                Select sort method
              </option>
              <option value="alpha">Sort by Name </option>
              <option value="time">Sort by Time</option>
            </Form.Select>
          </Form.Group>

          <h4 className="mt-4">Items:</h4>
          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {editId === item.id ? (
                  <>
                    <Form.Control
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <Button
                      variant="success"
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    {item.name}
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(item.id, item.name)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListAdvanced;
