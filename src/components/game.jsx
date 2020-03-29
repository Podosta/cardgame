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
            <iframe src={process.env.PUBLIC_URL + '/game/index3.html'} width={500} height={500}/>
        </>
    )
}