import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
    name: null,
    activeElement: {},
    moveState: false,
    activeOption: {
        originX: 0,
        originY: 0,
        startX: 0,
        startY: 0,
        index: 0,
        name: null 
    },
    element: {
        Page: {},
        Input: [],
        Text: []
    }
};

export default new Vuex.Store({
    state,
    mutations
})