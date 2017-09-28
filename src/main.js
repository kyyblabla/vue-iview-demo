import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    store.dispatch('titleChange', to.meta.title)
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);

});


const store = new Vuex.Store({
    state: {
        title: ''
    },
    getters: {
        title: (state) => state.title || ""
    },
    mutations: {
        TITLE_CHANGE(state, title){
            state.title = title
        }
    },
    actions: {
        titleChange: ({commit}, newTitle) => commit('TITLE_CHANGE', newTitle)
    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});