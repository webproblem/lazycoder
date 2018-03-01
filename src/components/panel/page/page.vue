<template>
    <Form label-position="left" :label-width="100">
        <FormItem label="背景颜色" class="panel-form-item">
            <colorPicker v-model="backgroundColor" @on-change="changeDataFn('backgroundColor')" />
        </FormItem>
        <FormItem label="背景图片" class="panel-form-item">
            <Upload
            action="https://jsonplaceholder.typicode.com/posts/"
            >
                <div>
                    <Icon type="image" size="20"></Icon>
                </div>
            </Upload>
        </FormItem>    
    </Form>
</template>

<script>
    export default {
        name: 'panel-page',
        props: ['activeElement'],
        data () {
            return {
                backgroundColor: '#fff'
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
            },
            changeDataFn(name) {
                const vm = this;
                vm.$store.state.activeElement[name] = vm[name];
            }
        }
    }
</script>