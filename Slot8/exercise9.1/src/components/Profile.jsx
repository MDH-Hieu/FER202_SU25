import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profile = () => {
  return (
    <div>
    <div style={{ padding: '20px', fontFamily: 'Arial', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }}>
      <h2>Hello, I'm Mai Đăng Hiếu!</h2>
      <p>
        I'm a student at FPT University, currently learning React and exploring the world of web development.
      </p>
    </div>


 <Card style={{ padding: '20px', fontFamily: 'Arial', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Hello, I'm Mai Đăng Hiếu!</Card.Title>
        <Card.Text>
          I'm a student at FPT University, currently learning React and exploring the world of web development.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>

  );
};

export default Profile;
