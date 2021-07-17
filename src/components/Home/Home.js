import React, { useState, useEffect } from 'react';
import './Home.css';
import Player from './../Player/Player';
import { Col, Row } from 'react-bootstrap';
import playerData from '../../data/playerData.json';
import Cart from './../Cart/Cart';

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlayers(playerData);
    }, [])

    const handleAddPlayer = (player) => {
        console.log("added", player)
        const newCart = [...cart, player]
        setCart(newCart);
    }

    return (
        <div className="home">
            <div className="player-data">
                <Row>
                    {
                        players.map(player => 
                        <Col style={{display: 'flex', justifyContent: 'center'}} className="mt-3">
                            <Player key={player.id} handleAddPlayer={handleAddPlayer} player={player}></Player>
                        </Col>)
                    }
                </Row>
            </div>
            <div className="cart">
                <h2>Player Cart</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;