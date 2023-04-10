import { createSelector } from 'reselect';

// Select the products BASE state
const selectUserReducer = (state) => state.current_user;

// Create a selector for the shopping cart items
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (User) => User
);