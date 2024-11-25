import { RootState } from '../store/store';

export const selectLogin = (store: RootState) => store.auth.login;
export const selectUserInfo = (store: RootState) => store.auth.user;
export const selectUserLoading = (store: RootState) => store.auth.loading;
