<template>
    <Form label-position="left" :label-width="100">
        <FormItem label="宽度" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" :max="750" v-model="width" @on-change="changeDataFn('width')"></InputNumber>
        </FormItem>
        <FormItem label="横坐标" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" v-model="left" @on-change="changeDataFn('left')"></InputNumber>
        </FormItem>
        <FormItem label="纵坐标" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" v-model="top" @on-change="changeDataFn('top')"></InputNumber>
        </FormItem>
        <FormItem class="separator-line"></FormItem>
        <FormItem label="提示文字" class="panel-form-item">
            <Input class="info-text" v-model="placeholder" @on-change="changeDataFn('placeholder')"></Input>
        </FormItem>
        <FormItem label="尺寸" class="panel-form-item">
            <Select class="info-text" v-model="size" @on-change="changeDataFn('size')">
                <Option v-for="item in sizeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="类型" class="panel-form-item">
            <Select class="info-text" v-model="type" @on-change="changeDataFn('type')">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        name: 'panel-input',
        props: ['activeElement'],
        data () {
            return {
                placeholder: '',
                width: 0,
                size: '',
                type: '',
                left: 0,
                top: 0,
                sizeList: [
                    {
                        value: 'small',
                        label: '小尺寸'
                    },
                    {
                        value: 'default',
                        label: '默认尺寸'
                    },
                    {
                        value: 'large',
                        label: '大尺寸'
                    }
                ],
                typeList: [
                    {
                        value: 'text',
                        label: '单行文本'
                    },
                    {
                        value: 'password',
                        label: '密码'
                    },
                    {
                        value: 'textarea',
                        label: '多行文本'
                    }
                ]
            }
        },
        watch: {
            activeElement: {
                handler() {
                    this.initData();
                },
                deep: true
            }
        },
        mounted() {
            this.initData();
        },
        methods: {
            initData() {
                const vm = this;
                vm.placeholder = vm.activeElement.placeholder;
                vm.width = vm.activeElement.width;
                vm.size = vm.activeElement.size;
                vm.type = vm.activeElement.type;
                vm.rows = vm.activeElement.rows;
                vm.left = vm.activeElement.left;
                vm.top = vm.activeElement.top;
            },
            changeDataFn(name) {
                const vm = this;
                if(vm.type == 'textarea') {
                    if(vm.size == 'small') {
                        vm.rows = 3;
                    }else if(vm.size == 'default') {
                        vm.rows = 5;
                    }else if(vm.size == 'large') {
                        vm.rows = 7;
                    }
                    vm.$store.state.activeElement.rows = vm.rows;
                }
                vm.$store.state.activeElement[name] = vm[name];
            }
        }
    }
</script>

<style scoped>

</style>