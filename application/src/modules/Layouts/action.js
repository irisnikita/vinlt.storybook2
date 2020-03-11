export const types = {
    GET_USER: 'GET_USER'
}

export function getUser(payload) {
    return {type: types.GET_USER, payload};
}