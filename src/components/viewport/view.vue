<template>
    <div class="view-wrap" ref="view" @mousedown="handleMouseDown" :style="getViewStyle">
        <eui-input v-for="(inputItem, index) in element.Input" :key="'input'+index" :element="inputItem" :uid="index"></eui-input>
        <eui-text v-for="(textItem, index) in element.Text" :key="'text'+index" :element="textItem" :uid="index"></eui-text>
        <div class="ruler-line x-line" :style="xLine" v-show="moveState"></div>
        <div class="ruler-line y-line" :style="yLine" v-show="moveState"></div>
        <div class="ruler-line center-line" v-show="isCenter && moveState" ref="center-line"></div>
        <!-- <code-size-control :activeElement="activeElement"></code-size-control> -->
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import euiInput from '../template/iviewUI/Input/index'
    import euiText from '../template/iviewUI/Text/index'
    // import codeSizeControl from './sizeControl.vue'
    import {getOneStyle} from '../../utils/tools'

    export default {
        name: 'code-view',
        data() {
            return {
                isCenter: false
            }
        },
        components: {
            euiInput,
            euiText,
            // codeSizeControl
        },
        computed: {
            ...mapState([
                'element',
                'activeElement',
                'moveState'
            ]),
            xLine() {
                let styles = {};
                styles.left = `${this.activeElement.left}px`;
                return styles;
            },
            yLine() {
                let styles = {};
                styles.top = `${this.activeElement.top}px`;
                return styles;
            },
            getViewStyle() {
                let styles = {};
                styles['background-color'] = this.activeElement.backgroundColor;
                return styles;
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initPage();
                this.centerLine();
                this.deleteElement();
            })
        },
        watch: {
            'activeElement.left': {
                handler() {
                    this.centerLine();
                },
                deep: true
            }
        },
        methods: {
            ...mapMutations([
                'initPage'
            ]),
            centerLine() {
                const element = this.activeElement;
                const center = parseInt(getOneStyle(this.$refs['view'], 'width')) / 2;
                if((element.left + element.width / 2) == center) {
                    this.isCenter = true;
                }else {
                    this.isCenter = false;
                }
            },
            handleMouseDown(e) {
                const vm = this;
                e.stopPropagation();
                vm.$store.commit('select', {
                    name: 'Page',
                    index: 0
                });
            },
            deleteElement() {
                const vm = this;
                document.onkeydown = (e) => {
                    if(e.keyCode == 46) {
                        vm.$store.commit('deleteElement');
                    }
                }
            }
        }
    }
</script>

