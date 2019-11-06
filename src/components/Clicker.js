import React, { useState } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import Value from './Value';

const Clicker = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '3rem' }}>
      <Header>React Clicker</Header>
      <Button.Group>
        <Button onClick={decrement}>-</Button>
        <Value value={value} />
        <Button positive onClick={increment}>
          +
        </Button>
      </Button.Group>
    </Container>
  );
};

export default Clicker;
