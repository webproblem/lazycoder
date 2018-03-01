<template>
    <div class="attribute-page-wrap">
        <panel-page :activeElement="activeElement" v-show="activeElement.name=='Page'"></panel-page>
        <panel-input :activeElement="activeElement" v-show="activeElement.name=='Input'"></panel-input>
        <panel-text :activeElement="activeElement" v-show="activeElement.name=='Text'"></panel-text>
    </div>
</template>

<script>
    import panelPage from './page.vue'
    import panelInput from './input.vue'
    import panelText from './text.vue'

    export default {
        name: "code-page",
        props: ['activeElement'],
        components: {
            panelPage,
            panelInput,
            panelText
        }
    }
</script>