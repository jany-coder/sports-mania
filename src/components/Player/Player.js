import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Player = (props) => {
    const {name, salary, image} = props.player;
    const handlePlayer = props.handleAddPlayer;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       Yearly Salary: {salary} $
                    </Card.Text>
                    <Button onClick={() => handlePlayer (props.player)} variant="primary">Add Player</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Player;