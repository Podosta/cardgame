import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import HostGame from './components/host-game';
import JoinGame from './components/join-game';
import Peer from 'peerjs';
import Test from "./components/test"

import PeerContext from './peerContext';

export default () => {
    const [peer] = useState(new Peer());
    const [hostID, setHostID] = useState(undefined)

    peer.on('open', (id) => {
        console.log('connection opened with id of', id);
        setHostID(id);
    });

    return (
        <Router>
            <PeerContext.Provider value={{ peer, hostID }}>
                <Route exact path="/" component={Home} />
                <Route path="/host-game" component={HostGame} />
                <Route path="/join-game" component={JoinGame} />
                <Route path="/test" component={Test} />
            </PeerContext.Provider>

        </Router>
    )
}

