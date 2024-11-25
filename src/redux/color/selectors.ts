import { RootState } from '../store/store';

export const selectColor = (store: RootState) => store.color.color;
