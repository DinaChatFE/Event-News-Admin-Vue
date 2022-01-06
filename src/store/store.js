import { createStore } from "vuex";
import auth from "./modules/auth/index";
import { BREADCRUMB, LOADING_SPINNER_MUTATION, SIDEBAR_HIDDEN_MUTATION } from "./storeconstants";

const store = createStore({
    modules: {
        auth
    },
    state() {
        return {
            isLoading: false,
            sidebarHidden: false,
            breadcrumb: ''
        };
    },
    mutations: {
        [LOADING_SPINNER_MUTATION](state, payload) {
            state.isLoading = payload;
        },
        [SIDEBAR_HIDDEN_MUTATION](state, payload) {
            state.sidebarHidden = payload;
        },
        [BREADCRUMB](state, payload) {
            state.breadcrumb = payload;
        }
    }
})

export default store