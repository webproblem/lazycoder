<template>
    <div class="component-handle-wrap" :style="getStyle">
        <template v-if="activeElement.name!='Input'">
            <div class="handle handle-n" @click="handlemousedown($event, 'n')"></div>
            <div class="handle handle-s" @click="handlemousedown($event, 's')"></div>
            <div class="handle handle-w" @click="handlemousedown($event, 'w')"></div>
            <div class="handle handle-e" @click="handlemousedown($event, 'e')"></div>
            <div class="handle handle-nw" @click="handlemousedown($event, 'nw')"></div>
            <div class="handle handle-ne" @click="handlemousedown($event, 'ne')"></div>
            <div class="handle handle-sw" @click="handlemousedown($event, 'sw')"></div>
            <div class="handle handle-se" @click="handlemousedown($event, 'se')"></div>
        </template>
    </div>
</template>

<script>
    import {move} from '../../mixins/index';
    import {getOneStyle} from '../../utils/tools'

    export default {
        name: "code-size-control",
        props: ['activeElement'],
        mixins: [move],
        data() {
            const vm = this;
            return {
                type: ''
            }
        },
        computed: {
            getStyle() {
                const vm = this;
                let styles = {};
                styles.width = `${vm.activeElement.width}px`;
                styles.height = `${vm.activeElement.height}px`; 
                styles.top = 0;
                if(vm.activeElement.minHeight) {
                    styles['min-height'] = `${vm.activeElement.minHeight}px`;
                }
                return styles;
            }
        },
        methods: {
            handlemousedown(e, type) {
                // e.stopPropagation();
                // const vm = this;
                // let target = vm.activeElement;
                // vm.type = type;
                // vm.$store.commit('startMove', {
                //     startX: e.pageX,
                //     startY: e.pageY,    
                //     originX: target.left,
                //     originY: target.top
                // })
                // document.addEventListener('mousemove', vm.handlemousemove, true);
                // document.addEventListener('mouseup', vm.handlemouseup, true);
            },
            handlemousemove(e) {
                e.stopPropagation();
                e.preventDefault();
        
                this.$store.commit('resize', {
                    x: e.pageX,
                    y: e.pageY,
                    type: this.type
                })
            },
            handlemouseup() {
                document.removeEventListener('mousemove', this.handlemousemove, true);
                document.removeEventListener('mouseup', this.handlemouseup, true);
                this.$store.commit('stopMove');
            }
        }
    }
</script>
