<template>
    <div class="header-wrap">
        <i-button type="success" class="obtain-code-btn" @click.native="obtainCode">生成代码</i-button>
        <textarea type="text" id="v-copy-link-id" class="v-copy-link" v-model="copyContent"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'code-header',
        data() {
            return {
                copyContent: ''
            }
        },
        methods: {
            obtainCode() {
                this.copyContent = "测试";
                setTimeout(()=>{
                    this.copyFn("v-copy-link-id");
                })
            },
            copyFn(id) {
                const vm = this;
                document.getElementById(id).select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                alert("代码已复制到粘贴板，可粘贴");
            }
        }
    }
</script>

<style>
    .header-wrap {
        width: 100%;
        height: 50px;
        background-color: #186fdb;
    }
    .obtain-code-btn {
        margin: 8px 16px;
    }
    .v-copy-link{
        width:0; 
        height:0;
        position: absolute;
        opacity: 0;
    }
</style>
