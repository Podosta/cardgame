import React from 'react';


export default ({ history }) => {
    return (
        <div className="App">
          This is our card game!
          
                <div>
                    <button onClick={() => history.push('/host-game')}>Host Game</button>
                </div>
                <div>
                    <button onClick={() => history.push('/join-game')}>Join Game</button>
                </div>
        </div>
    )
}
