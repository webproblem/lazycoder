<template>
    <div class="code-wrap">
        <code-header></code-header>
        <Row>
            <Col span="6">
                <code-tool-bar></code-tool-bar>
            </Col>
            <Col span="12">
                <code-view></code-view>
            </Col>
            <Col span="6">
                <code-panel></code-panel>
            </Col>
        </Row>
    </div>
</template>

<script>
    import codeHeader from './header/header.vue'
    import codeToolBar from './toolbar/toolbar.vue'
    import codeView from './viewport/view.vue'
    import codePanel from './panel/panel.vue'

    export default {
        data() {
            return {}
        },
        components: {
            codeHeader,
            codeToolBar,
            codeView,
            codePanel
        }
    }
</script>