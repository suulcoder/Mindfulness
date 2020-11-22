import { combineReducers } from 'redux';

import state,* as appStateSelectors from './appState'

const reducer = combineReducers({
    state,
})

export default reducer

export const getAppState = (state) => appStateSelectors.getAppState(state.appState)