// Description: Utility functions for reducers
// used by all reducers to create a reducer action object.
export const createReducerAction = (type, payload) => ({ type, payload });