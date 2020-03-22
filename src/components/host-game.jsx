import React, { useContext, useEffect, useState } from 'react';

import { START_GAME, RECIEVED_START_GAME } from '../constants/game-states';

import PeerContext from '../peerContext';
import Peer from 'peerjs';

export default () => {
    const { setIsHost, setPeerID, currentID } = useContext(PeerContext);

    useEffect(() => {
        setIsHost(true);

        const peer = new Peer(currentID);

        peer.on('connection', (connection) => { 
            console.log('connection!!!', connection)        
            setPeerID(connection.peer);      
        });    
    }, []);
    
    return (
        <div>
            Hi! Your Host ID is:
            <input readOnly value={currentID} />
        </div>
    )
}