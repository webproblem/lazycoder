<template>
    <div class="panel-wrap">
        <Tabs>
            <TabPane label="属性">
                <code-page :activeElement="activeElement"></code-page>
            </TabPane>
            <TabPane label="事件"></TabPane>
            <TabPane label="动画"></TabPane>
        </Tabs>
    </div>
</template>

<script>
    import codePage from './page/index.vue'

    export default {
        name: 'code-panel',
        data() {
            const vm = this;
            return {
            }
        },
        components: {
            codePage
        },
        computed: {
            activeElement() {
                return this.$store.state.activeElement;
            }
        }
    }
</script>

