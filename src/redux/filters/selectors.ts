import { RootState } from '../store/store';

export const selectFilters = (store: RootState) => store.filters.filter;
