import './public-path'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router'
import './styles/base.scss'
import 'animate.css'
import { RootHoc } from './Hoc'
import store from "./store";
import '@/services/axios.js'
import * as serviceWorker from './serviceWorker';

@RootHoc()
class Root extends Component {
    render () {
        return <Provider store={store}>
            <AppRouter />
        </Provider>
    }
}


function renderApp(props) {
    const { container } = props;
    ReactDOM.render(<Root />, container?container.querySelector('#root') : document.querySelector('#root'))
}

if (!window.__POWERED_BY_QIANKUN__) {//子任务会全局有该变量用来判断是否是用qiankun打开的子任务
    renderApp({});
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);
    renderApp(props)
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

serviceWorker.unregister();
