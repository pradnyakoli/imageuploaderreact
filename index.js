import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ImageUpload from './components/ImageUpload';
//import Search from './components/Search';

ReactDOM.render(<ImageUpload />,
  document.getElementById('root'));
registerServiceWorker();
