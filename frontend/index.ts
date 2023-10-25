import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './views/App.js';

createRoot(document.getElementById('outlet')!).render(createElement(App));
