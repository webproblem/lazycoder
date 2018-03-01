import {move} from '../../../../mixins/index';
import codeSizeControl from '../../../viewport/sizeControl.vue'
import {getOneStyle, getStringTypeAttr} from '../../../../utils/tools'

const template = `<div 
                :id="'input-stage'+uid"
                class="input-stage"
                :style="getStyle"
                ref="input"
                @mousedown="handleMouseDown" 
                >
                    <Input
                    v-model="element.vmodel"
                    :size="element.size"
                    :type="element.type"
                    :rows="element.rows"
                    :placeholder="element.placeholder" 
                    disabled
                    ></Input>
                    <code-size-control v-show="showState" :activeElement="activeElement"></code-size-control>
                </div>`;


export default {
    name: "eui-input",
    template: template,
    mixins: [move],
    props: ['element', 'uid'],
    data() {
        return {
            name: 'Input'
        }
    },
    components: {
        codeSizeControl
    },
    computed: {
        getStyle() {
            return this.getStyleFn();
        },
        activeElement() {
            return this.$store.state.activeElement;
        }
    },
    watch: {
        element: {
            handler() {
                this.getRenderTemplate();
                this.getHeight();
            },
            deep: true
        }
    },
    mounted() {
        this.getRenderTemplate();
        this.getHeight();
    },
    methods: {
        getStyleFn() {
            const vm = this;
            let styles = {};
            styles.width = `${vm.element.width}px`;
            styles.left = `${vm.element.left}px`;
            styles.top = `${vm.element.top}px`;
            styles.position = `${vm.element.position}`;
            return styles;
        },
        getRenderTemplate() {
            const vm = this;
            let attribute = {
                id: `input-stage${vm.uid}`,
                class: 'input-stage',
                style: vm.getStyleFn()
            };
            let inputAttr = {
                size: vm.element.size,
                type: vm.element.type,
                rows: vm.element.rows,
                placeholder: vm.element.placeholder
            };
            let stringAttr = getStringTypeAttr(attribute);
            let inputStringAttr = getStringTypeAttr(inputAttr);
            let template = `<div ${stringAttr}>
                                <Input ${inputStringAttr}></Input>
                            </div>`;
            vm.$store.state.element['Input'][vm.uid].template = template;
        },
        handleMouseDown(e) {
            const vm = this;
            e.stopPropagation();
            vm.$store.commit('select', {
                name: 'Input',
                index: vm.uid
            });
            this.initMove(e);
        },
        getHeight() {
            this.$nextTick(() => {
                this.$store.state.element['Input'][this.uid].height = parseInt(getOneStyle(this.$refs.input, 'height'));
            })
        }
    }
}