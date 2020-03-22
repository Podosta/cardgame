import React, {useContext} from 'react';

import PeerContext from '../peerContext';

export default () => {
    const {peerID, isHost} = useContext(PeerContext);

    return (
        <>
            <div>
                <label>PeerID: </label> {peerID}
            </div>
            <div>
                <label>IsHost</label> {isHost ? 'TRUE' : 'FALSE'}
            </div>
        </>
    )
}