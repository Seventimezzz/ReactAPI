import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
//import MarverlService from './services/MarvelService';

import './style/style.scss';

// После того как имортировали сюда класс засовываем его в переменную
//const marvelService = new MarverlService();

//вызываем эту функцию и получаем промис с реузльтатом
//marvelService.getAllCharactres().then(res => console.log(res));

// Только один персонаж по айди
//marvelService.getCharactres(1011052).then(res => console.log(res));


// Выводим только имена
//marvelService.getAllCharactres().then(res => res.data.results.forEach(item => console.log(item.name)));

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
   
      <App />
    
  );


