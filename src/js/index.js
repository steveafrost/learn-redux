import React from 'react';
import { render } from 'react-dom';
import store from '../js/store/index';
import { addArticle } from '../js/actions/index';

const App = () => <h1>Setting up React with Parcel bundler</h1>;

const wrapper = document.getElementById('app');

wrapper ? render(<App />, wrapper) : false;

window.store = store;
window.addArticle = addArticle;
