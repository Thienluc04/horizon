import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { history, store } from 'app/store.ts';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { CookiesProvider } from 'react-cookie';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router history={history}>
      <CookiesProvider>
        <ToastContainer bodyClassName={'hidden lg:block'}></ToastContainer>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>
);
