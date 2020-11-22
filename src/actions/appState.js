import * as types from '../types/appState'

export const change_app_state = (app) => ({
    type: types.appstate_changed,
    payload: app
})