import { createContext } from 'react';

export default createContext({ 
    peer: undefined,
    setPeer: () => {},
    isHost: false,
    setIsHost: () => {},
});
