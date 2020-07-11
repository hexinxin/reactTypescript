import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Portal from './portal';
import * as serviceWorker from './serviceWorker';

let app:any;
ReactDOM.render(
  <React.StrictMode>
    <Portal/>
  </React.StrictMode>,
  document.getElementById('root'), () => {
      // app.componentWillUnmount();
     // console.log(ReactDOM.findDOMNode(app))
      // setTimeout( () =>{
      //     ((document.getElementById('root') as HTMLElement).firstChild as HTMLElement).remove()
      //     ReactDOM.unmountComponentAtNode( document.getElementById('root') as HTMLElement )
      // },3000)
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
