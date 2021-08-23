import React from "react"
import { Provider } from 'react-redux'
import store from "@/models"
import useInitialSetting from "@/hooks/useInitialSetting";
import "./polyfill/promise-polyfill";
import "./polyfill/lodash-polyfill";
import "./app.scss";

const App: React.FC = (props) => {

  useInitialSetting()

  return (
    <React.StrictMode>
      <Provider store={store}>
        {props.children}
      </Provider>
    </React.StrictMode>
  );
};

export default App;
