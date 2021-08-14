import React, { useEffect } from "react"
import { Provider } from 'react-redux'
import store from "@/models"
import "@taroify/icons/index.scss"
import "./polyfill/promise-polyfill";
import "./router";
import "./app.scss";

const App: React.FC = (props) => {

  useEffect(() => {
    // dispatch.common.getSystemInfoSync()
    store.dispatch.common.getSystemInfoSync()
  }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>{props.children}</Provider>
    </React.StrictMode>
  );
};

export default App;
