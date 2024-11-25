import { RootState } from '../store/store';

export const selectNannies = (store: RootState) => store.nannies.items;
export const selectHasMore = (store: RootState) => store.nannies.hasMore;
export const selectLastDocId = (store: RootState) => store.nannies.lastDocId;
export const selectLoading = (store: RootState) => store.nannies.loading;
