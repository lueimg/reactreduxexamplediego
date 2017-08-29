import { combineReducers } from 'redux';
import favoritosReducer from './favoritos-reducer';
import amigosReducer from './amigos-reducer';

const rootReducer = combineReducers({
    amigos: amigosReducer,
    favoritos: favoritosReducer,
    apellido: 'apex store 1'
});

export default rootReducer;