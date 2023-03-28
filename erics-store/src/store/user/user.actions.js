import { USER_ACTION_TYPES } from "./user.types";
import { createReducerAction } from "../reducer.utils";

export const setCurrentUser = (user) =>
    createReducerAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)