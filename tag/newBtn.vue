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
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加</el-button>
    </span>
</template>

<script>
export default {
    name: 'NewBtn',
    data() {
        return {
            inputVisible: false,
            inputValue: ''
        }
    },
    methods: {
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.$emit('handleAdd', inputValue)
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    },
}
</script>

<style lang="less" scoped>
    @main_color: #01659e;
    .tagMargin(){
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .button-new-tag {
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
        background-color: @main_color;
        color: #fff;
        border-radius: 5    px;
        .tagMargin;
    }
    .input-new-tag {
        width: 100px;
        vertical-align: bottom;
        .tagMargin;
    }
</style>
