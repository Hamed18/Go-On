import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store"; // make sure path is correct
import Root from "./Layout/Root";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import routes from "./Routes/Route";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <RouterProvider router={routes}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
