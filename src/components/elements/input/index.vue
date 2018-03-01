<template>
    <div 
    :id="'input-stage'+uid"
    class="input-stage"
    :style="getStyle"
    @mousedown="handleMouseDowm" 
    >
        <Input
        :placeholder="data.placeholder" 
        disabled
        ></Input>
    </div>
</template>

<script>
    import {move} from '../../../mixins/index';

    export default {
        name: "eui-input",
        mixins: [move],
        props: ['data', 'uid'],
        data() {
            const vm = this;
            return {
            }
        },
        computed: {
            getStyle() {
                const vm = this;
                let styles = {};
                styles.width = `${vm.data.width}px`;
                styles.height = `${vm.data.height}px`;
                styles.left = `${vm.data.left}px`;
                styles.top = `${vm.data.top}px`;
                styles.position = `${vm.data.position}`;
                return styles;
            }
        },
        methods: {
            handleMouseDowm(e) {
                const vm = this;
                e.stopPropagation();
                vm.$store.commit('select', {
                    type: 'input',
                    index: vm.uid
                });
                this.initMove(e);
            }
        }
    }
</script>

<style>
    .input-stage input.ivu-input {
        background-color: #fff;
        cursor: default;
    }
</style>
