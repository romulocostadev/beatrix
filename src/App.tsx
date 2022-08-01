import 'antd/dist/antd.variable.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import LayoutRoutes from './routes';

import { store } from './store/store';

ConfigProvider.config({
  theme: {
    primaryColor: '@primaryColor@',
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <LayoutRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
