import React, { useContext, useEffect, useState } from 'react';
import Peer from 'peerjs';

import PeerContext from '../peerContext';

export default () => {
    const { hostID } = useContext(PeerContext)

    return (
        <div>
            Hi! Your Host ID is:
            <input readOnly value={hostID} />
        </div>
    )
}