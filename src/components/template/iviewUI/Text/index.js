import {move} from '../../../../mixins/index';
import codeSizeControl from '../../../viewport/sizeControl.vue'
import {getOneStyle, getStringTypeAttr} from '../../../../utils/tools';

const template = `<div 
                :id="'text-stage'+uid"
                class="text-stage"
                :class="{'editor-able': contenteditable}"
                :style="getStyle"
                ref="text"
                @mousedown="handleMouseDown"
                >
                    <div
                    class="editor-text"
                    @blur="contenteditable=false"
                    @input="changeText"
                    :contenteditable="contenteditable"
                    >
                        <div v-html="element.content" ref="content"></div>
                    </div>
                    <code-size-control v-show="showState" :activeElement="activeElement"></code-size-control>
                </div>`;

export default {
    name: "eui-text",
    template: template,
    mixins: [move],
    props: ['element', 'uid'],
    data() {
        const vm = this;
        return {
            name: 'Text',
            contenteditable: false
        }
    },
    components: {
        codeSizeControl
    },
    watch: {
        element: {
            handler(newValue, oldValue) {
                // console.log("监听到了属性的变化");
                this.getRenderTemplate();
                this.getHeight();
            },
            deep: true
        },
    },
    computed: {
        getStyle() {
            return this.getStyleFn();
        },
        activeElement() {
            return this.$store.state.activeElement;
        }
    },
    mounted() {
		this.doubleText();
        this.getRenderTemplate();
    },
    methods: {
        getStyleFn() {
            const vm = this;
            let styles = {};
            styles.width = `${vm.element.width}px`;
            styles.height = `${vm.element.height}px`;
            styles['min-height'] = `${vm.element.minHeight}px`;
            styles.left = `${vm.element.left}px`;
            styles.top = `${vm.element.top}px`;
            styles.position = `${vm.element.position}`;
            styles.color = vm.element.color;
            styles['font-size'] = `${vm.element.fontSize}px`;
            styles['font-style'] = vm.element.fontStyle;
            styles['font-weight'] = vm.element.fontWeight;
            styles['text-decoration'] = vm.element.textDecoration;
            styles['text-align'] = vm.element.align;
            styles['line-height'] = vm.element.lineHeight;
            styles['transform'] = `rotate(${vm.element.rotate}deg)`;
            styles.opacity = vm.element.opacity / 100;
            return styles;
        },
        getRenderTemplate() {
            const vm = this;
            let attribute = {
                id: `text-stage${vm.uid}`,
                class: 'text-stage',
                style: vm.getStyleFn()
            };
            let stringAttr = getStringTypeAttr(attribute);
            let template = `<div ${stringAttr}>
                                <div class="editor-text">
                                    ${vm.element.content}
                                </div>
                            </div>`;
            vm.$store.state.element['Text'][vm.uid].template = template;
        },
        handleMouseDown(e) {
            const vm = this;
            e.stopPropagation();
            vm.$store.commit('select', {
                name: 'Text',
                index: vm.uid
            });
            if(!vm.contenteditable) {
                this.initMove(e);
            }
        },
        getHeight() {
            this.$nextTick(() => {
                this.$store.state.activeElement.height = parseInt(getOneStyle(this.$refs.content, 'height')) + 10;
            })
        },
		doubleText() {
            const vm = this;
            vm.$refs.text.ondblclick = function() {
                vm.contenteditable = true;
            }
        },
        changeText() {
            console.log(111)
        }
    }
}