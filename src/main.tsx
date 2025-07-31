import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";

import 'antd/dist/reset.css';

import {store} from "./store/store";
import {MainPage} from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MainPage/>
    </Provider>
  </StrictMode>,
);
