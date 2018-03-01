import {defaultParams} from '../utils/config'

const ELEMENT_TYPE = 'ELEMENT_TYPE';

export default {
    [ELEMENT_TYPE] (state, type) {
        state.name = type;
    },
    initPage(state) {
        state.element.Page = Object.assign({}, defaultParams.page);
    },
    addInput(state) {
        state.element.Input.push(Object.assign({}, defaultParams.input));
    },
    addText(state) {
        state.element.Text.push(Object.assign({}, defaultParams.text));
    },
    select(state, params) {
        state.activeOption.name = params.name;
        state.activeOption.index = params.index;
        const element = state.element[params.name];
        if(Array.isArray(element)) {
            state.activeElement = state.element[params.name][params.index];
        }else {
            state.activeElement = state.element[params.name];
        }
    },
    startMove(state, params) {
        state.activeOption.startX = params.startX;
        state.activeOption.startY = params.startY;
        state.activeOption.originX = params.originX;
        state.activeOption.originY = params.originY;
    },
    move(state, params) {
        state.moveState = true;
        var target = state.activeElement;
        var dx = params.x - state.activeOption.startX;
        var dy = params.y - state.activeOption.startY;
        var left = state.activeOption.originX + dx;
        var top = state.activeOption.originY + dy;
        target.left = left > 0 ? left : 0;
        target.top = top > 0 ? top : 0;
    },
    stopMove(state) {
        state.moveState = false;
    },
    resize(state, params) {
        var dx = params.x - state.activeOption.startX;
        var dy = params.y - state.activeOption.startY;
        if(params.type == 'n') {
            var top = state.activeOption.originX + dy;
            var height = state.activeOption.originY - dy;
            state.activeElement.top = top > 0 ? top : 0;
            state.activeElement.height = height > 10 ? height : 10;
            console.log("height:" + state.activeElement.height);
        }else if(state.type == 's') {
            //
        }else if(state.type == 'w') {
            //
        }else if(state.type = 'e') {
            //
        }
    },
    deleteElement(state) {
        if(state.activeElement.name && state.activeElement.name != 'Page') {
            state.element[state.activeElement.name].splice(state.activeOption.index, 1);
            state.activeElement = {};
        }
    }
}