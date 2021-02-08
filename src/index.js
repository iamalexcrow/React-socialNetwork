import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './Store-context';


let renderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */}
        <App/>
        {/* updateNewPostText={store.updateNewPostText.bind(store)} */}
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(()=> {
  let state = store.getState();
  renderEntireTree(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
