import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es-mx';
import './assets/styles/index.scss';
import App from './App';

moment.locale('es-mx');

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={esES}>
    <App />
  </ConfigProvider>,
);
