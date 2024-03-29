import ReactDOM from 'react-dom/client';
import './assets/css/config.css'
import './assets/css/global.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
