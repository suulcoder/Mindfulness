import * as types from '../types/appState'

const state = (state=0,action) => {
    switch (action.type) {
        case types.appstate_changed:
            return action.payload
        default:
            return state
    }
}

export default state

export const getAppState = state => state;