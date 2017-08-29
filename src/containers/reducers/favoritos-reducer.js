

export default function favoritosReducer (state = [], action) {
    switch (action.type) {
        case 'ADD_FAVORITO':
            return [ ...state, action.amigo ]
        case 'REMOVE_FAVORITO':
            const allamigos = state;
            const indexAmigo = allamigos.indexOf(action.amigo);
            return state
        default:
            return state;
    }
}