import React, { useState, useContext } from 'react';

import PeerContext from '../peerContext';
import Peer from 'peerjs';

export default () => {
    const { setPeerID: setContextPeerID, currentID } = useContext(PeerContext);
    const [peerID, setPeerID] = useState('');

    const connectToPeer = () => {        
        const peer = new Peer(currentID);

        peer.on('open', (id) => {
            const connection = peer.connect(peerID);

            setContextPeerID(peerID);        
        })
    }

    return (
       <>
        <label>Peer ID:</label>
        <input onChange={({ target: { value }}) => setPeerID(value)}/>
        <button onClick={connectToPeer}> Connect </button>
       </>
   ) 
}