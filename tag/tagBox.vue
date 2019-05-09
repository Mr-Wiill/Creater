<template>
    <span>
        <el-input
            v-if="inputVisible"
            class="input-new-tag"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            />
        <el-tag
            v-else
            type="info"
            :color="tagBgColor"
            :closable="isClosable"
            :disable-transitions="true"
            @close="handleClose">
            <a v-if="isClosable" @click="showInput">{{inputValue}}</a>
            <span v-else>{{inputValue}}</span>
        </el-tag>
    </span>
</template>

<script>
export default {
    name: 'TagBox',
    props:['value', 'tagBgColor', 'isClosable'],
    data() {
        return {
            inputVisible: false,
            inputValue: this.value
        }
    },
    methods: {
        // 关闭
        handleClose(value){
            this.$emit('handleClose', value)
        },
        // 切换输入框
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        // 编辑并切换标签
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.$emit('handleSet',inputValue)
            }
            this.inputVisible = false;
        }
    },
    watch:{
        value(){
            this.inputValue = this.value
        }
    }
}
</script>

<style lang="less" scoped>
    .tagMargin(){
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .el-tag{
        border: 1px solid #ddd;
        .tagMargin;
    }
    .input-new-tag {
        width: 100px;
        vertical-align: bottom;
        .tagMargin;
    }
</style>
