import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'goBarber',
      storage,
      whiteList: ['auth', 'user'], // Only persists the reducers inside the whiteList
    },
    reducers
  );

  return persistedReducer;
};
