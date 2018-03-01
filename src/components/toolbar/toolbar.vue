<template>
    <div class="toolbar-wrap">
        <!-- <Row :gutter="16">
            <Col span="11">
                <Card class="tool-card" @click="addContainer('inpit')">
                    <span>input输入框</span>
                </Card>
            </Col>
            <Col span="11">
                <Card class="tool-card">
                    <span>text文字</span>
                </Card>
            </Col>
        </Row> -->
        <div class="element-ui-wrap">
            <Card class="tool-card" v-for="elementItem in elementList" :key="elementItem.element" @click.native="addContainer(elementItem.element)">
                <span>{{ elementItem.text }}</span>
            </Card>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import {elementList} from '../../utils/config'

    export default {
        name: 'code-tool-bar',
        data() {
            return {
                elementList
            }
        },
        methods: {
            ...mapMutations([
                'ELEMENT_TYPE',
                'addInput',
                'addText'
            ]),
            addContainer(name) {
                const vm = this;
                vm.$store.state.name = name;
                vm.ELEMENT_TYPE(name);
                if(name == 'Input') {
                    vm.addInput();
                }else if(name == 'Text') {
                    vm.addText();
                }
                vm.selectElement(name);
            },
            selectElement(type) {
                const vm = this;
                vm.$store.commit('select', {
                    name: type,
                    index: vm.$store.state.element[type].length - 1
                });
            }
        }
    }
</script>

