import dva from 'dva';
import { browserHistory } from 'dva/router';
// import createHistory from 'history/createHashHistory';
import './index.css';
import 'antd/dist/antd.less';

// 1. Initialize
const app = dva({
  history: browserHistory,
  // history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
