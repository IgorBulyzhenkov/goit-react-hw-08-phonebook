export const getInLoggedIn = state => state.user.isLoggedIn;
export const getName = state => state.user.user.name;
export const getIsFetchingCurrent = state => state.user.isRefreshing;
