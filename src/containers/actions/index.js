

export function  addFavorito (amigo = '') {
    const action = {
        type: 'ADD_FAVORITO',
        amigo: amigo
    }
    return action;
}

export function  removeFavorito (amigo = '') {
    const action = {
        type: 'REMOVE_FAVORITO',
        amigo: amigo
    }
    return action;
}