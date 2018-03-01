<template>
    <Form label-position="left" :label-width="100">
        <FormItem label="宽度" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" :max="750" v-model="width" @on-change="changeDataFn('width')"></InputNumber>
        </FormItem>
        <FormItem label="高度" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" :max="750" v-model="height" @on-change="changeDataFn('height')"></InputNumber>
        </FormItem>
        <FormItem label="横坐标" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" v-model="left" @on-change="changeDataFn('left')"></InputNumber>
        </FormItem>
        <FormItem label="纵坐标" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" v-model="top" @on-change="changeDataFn('top')"></InputNumber>
        </FormItem>
        <FormItem class="separator-line"></FormItem>
        <FormItem label="文字颜色" class="panel-form-item">
            <!-- <input class="info-text" type="color" v-model="color" @change="changeDataFn('color')"></input> -->
            <colorPicker v-model="color" @on-change="changeDataFn('color')" />
        </FormItem>
        <FormItem label="文字内容" class="panel-form-item">
            <Input class="info-text" type="textarea" :rows="5" v-model="content"  @on-change="changeDataFn('content')"></Input>
        </FormItem>
        <FormItem label="文字大小" class="panel-form-item">
            <InputNumber class="info-text" :mix="12" v-model="fontSize" @on-change="changeDataFn('fontSize')"></InputNumber>
        </FormItem>
        <FormItem label="对齐方式" class="panel-form-item">
            <Select class="info-text" v-model="align" @on-change="changeDataFn('align')">
                <Option v-for="item in alignList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="行高" class="panel-form-item">
            <InputNumber class="info-text" :mix="0" v-model="lineHeight" @on-change="changeDataFn('lineHeight')"></InputNumber>
        </FormItem>
        <FormItem label="旋转角度" class="panel-form-item">
            <Slider class="info-slider" :max="360" v-model="rotate" show-input @on-change="changeDataFn('rotate')" @on-input="changeDataFn('rotate')"></Slider>
        </FormItem>
        <FormItem label="透明度" class="panel-form-item">
            <Slider class="info-slider" v-model="opacity" show-input @on-change="changeDataFn('opacity')" @on-input="changeDataFn('opacity')"></Slider>
        </FormItem>
        <FormItem class="panel-form-item">
            <CheckboxGroup v-model="widget" @on-change="changeWidget">
                <Checkbox v-for="item in widgetList" :label="item.label" :key="item.label">{{ item.text }}</Checkbox>
            </CheckboxGroup>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        name: 'panel-text',
        props: ['activeElement'],
        data () {
            return {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                fontSize: 0,
                color: '#000000',
                widget: [],
                widgetList: [
                    {
                        label: 'weight',
                        text: '加粗'
                    },
                    {
                        label: 'style',
                        text: '斜体'
                    },
                    {
                        label: 'decoration',
                        text: '下划线'
                    }
                ],
                align: '',
                alignList: [
                    {
                       value: 'left',
                       label: '左对齐' 
                    },
                    {
                        value: 'center',
                        label: '居中对齐'
                    },
                    {
                        value: 'right',
                        label: '右对齐'
                    }
                ],
                lineHeight: 0,
                rotate: 0,
                opacity: 0,
                content: ''
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
                vm.width = vm.activeElement.width;
                vm.height = vm.activeElement.height;
                vm.left = vm.activeElement.left;
                vm.top = vm.activeElement.top;
                vm.fontSize = vm.activeElement.fontSize;
                vm.align = vm.activeElement.align;
                vm.lineHeight = vm.activeElement.lineHeight;
                vm.rotate = vm.activeElement.rotate;
                vm.opacity = vm.activeElement.opacity;
                vm.content = vm.activeElement.content;
            },
            changeDataFn(name) {
                const vm = this;
                vm.$store.state.activeElement[name] = vm[name];
            },
            changeWidget() {
                const vm = this;
                const element = vm.$store.state.activeElement;
                if(vm.widget.includes('weight')) {
                    element['fontWeight'] = 'bolder';
                }else {
                    element['fontWeight'] = 'normal';
                }

                if(vm.widget.includes('style')) {
                    element['fontStyle'] = 'italic';
                }else {
                    element['fontStyle'] = 'normal';
                }
                
                if(vm.widget.includes('decoration')) {
                    element['textDecoration'] = 'underline';
                }else {
                    element['textDecoration'] = 'none';
                }
            }
        }
    }
</script>