<template>
    <section class="tagBox">
        <div class="show">
            <div class="head">
                <v-col span="10" class="title">{{title}}</v-col>
                <v-col span="2" class="edit" v-show="tags.length>0">
                    <a v-if="!isClosable" @click.stop="isClosable=true">编辑</a>
                    <a v-else @click="isClosable=false">取消</a>
                </v-col>
            </div>
            <div v-if="tags.length>0" class="tags">
                <template v-for="(item,index) in tags">
                    <tag-box :key="index"
                        :value="item[tagName]" 
                        :tagBgColor="tagBgColor" 
                        :isClosable="isClosable"
                        @handleSet="handleSet(item)"
                        @handleClose="handleClose(item)">
                    </tag-box>
                </template>
                <new-btn v-if="!isClosable" v-show="addable" @handleAdd="handleAdd"></new-btn>
            </div>
            <div v-else class="noData">暂无数据</div>
        </div>
    </section>
</template>

<script>
import NewBtn from './newBtn'
import TagBox from './tagBox'

export default {
    name:'TagList',
    props:['title', 'tags', 'tagName', 'addable'],
    components:{ NewBtn, TagBox },
    data() {
        return {
            tagBgColor: this.addable ? '#fff' : '#eee',
            isClosable: false
        }
    },
    methods: {
        /* 关闭 */
        handleClose(value) {
            this.$emit('close',value)
        },
        /* 添加 */
        handleAdd(value){
            this.$emit('add',value)
        },
        /* 编辑 */
        handleSet(value){
            this.$emit('set',value)
        }
    }
}
</script>

<style lang="less" scoped>
    @main_color: #01659e;
    .tagBox{
        padding: 0 20px;
        a{
            text-decoration: none;
        }
        .show{
            width: 100%;
            .head{
                height: 50px;
                line-height: 50px;
                margin: 3px 0;
                .title{
                    color: @main_color;
                    font-size: 14px;
                }
                .edit{
                    text-align: right;
                    a{
                        color: red;
                    }
                }
            }
            .tags{
                min-height: 100px;
                .el-tag{
                    margin-right: 20px;
                    margin-bottom: 20px;
                    border: 1px solid #ddd;
                }
            }
            
            .noData{
                height: 80px;
                line-height: 60px;
                text-align: center;
                color: #999;
            }
        }
    }
</style>
