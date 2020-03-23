import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import HostGame from './components/host-game';
import JoinGame from './components/join-game';
import Game from './components/game';

import PeerContext from './peerContext';
import Peer from 'peerjs';

import { v4 } from 'uuid';

import { v4 } from 'uuid';

export default () => {
    const [peerID, setPeerID] = useState('');
    const [currentID] = useState(v4());

    const [isHost, setIsHost] = useState(false);

    return (
        <Router>
            <PeerContext.Provider value={{ setPeerID, peerID, currentID, setIsHost, isHost }}>
                {
                    (peerID) ? (
                        <Game />
                    ) : (
                            <>
                                <Route exact path="/" component={Home} />
                                <Route path="/host-game" component={HostGame} />
                                <Route path="/join-game" component={JoinGame} />
                            </>
                        )
                }

            </PeerContext.Provider>

        </Router>
    )
}

