// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import { App } from './App';

const App = () => {
  return (
    <div className="starter">
      <section className="position">
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="grid3">
          <div className="position__left">
            <div className="text11">POSITION</div>
            <div className="h2 position__title">DEVeloper</div>
            <a href="#artist" data-w-id="28f0574f-4734-2a8c-838c-4878fc3fbffa" className="div-block-21 w-inline-block"></a>
          </div>

          <div className="position__rigth">
            <img src="https://uploads-ssl.webflow.com/6253f225413b098d55210b61/627ba6aefedd66079c57de02_photo%20(4).jpg" alt="img" className="img-40" />
          </div>
        </div>
      </section>
      {/* <Provider onClick={() => ({})}>
        <TodoList />
      </Provider> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
