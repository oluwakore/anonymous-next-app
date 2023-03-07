import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,

  // redux states to persist
  whitelist: [
    "userLogin",
    "userDetails",
    "storyIden",
    "therapistList",
    "therapistBooking",
    "storeApptDetails",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { persistor, store };
