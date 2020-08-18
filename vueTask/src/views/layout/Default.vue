<template>
    <el-container class="body-container">
        <el-header class="header">
            <NavMenuHead />
        </el-header>
        <el-container class="container clearfix">
            <el-main class="content">
                <div
                    v-loading="loading"
                    element-loading-text="处理中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.5)"
                >
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavMenuHead from './NavMenuHead'
import { mapState } from 'vuex'
export default {
    name: 'default-layout',
    components: {
        NavMenuHead
    },
    data () {
        return {
            isCollapse: false,

        }},
    computed: {
        ...mapState({
            loading: state => state.loading,
            minTask: state => state.minTask
        })
    },
    methods: {

    },
    mounted () {

    }

}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 50px !important;
    background-color: $blackColor;
}
.container {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #efeff4;
}
.aside {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: $blackLight;
}
.content {
    position: relative;
}
.minLeft {
    left: 64px;
    transition: 0.3s;
}
.maxLeft {
    left: 200px;
    transition: 0.3s;
}
/deep/ .el-loading-spinner i {
    color: $hosjoyColor;
}
/deep/ .el-loading-spinner .el-loading-text {
    color: $hosjoyColor;
}
/deep/ .el-loading-parent--relative {
    position: relative !important;
    overflow: hidden;
}
/deep/ .el-loading-mask {
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
}
    .edit-password{
        padding: 34px 0;
    }
    .hosjoy_right1{
        color: #52c41a;
        margin-left: 12px;
        display: none;
    }
</style>
<style  lang="scss">
    .el-form .el-form-item__label{
        color: #000000;
    }
    .el-form .el-input__inner{
        border: 1px solid #E5E5EA;
        /*width: 224px;*/
        /*line-height: 40px;*/
    }
    .dialog-footer {
        .el-button{
            border: 1px solid #E5E5EA;
            border-radius: 4px;
            color: #666666;
        }
        .el-button--primary{
            border: 1px solid #FF7A45;
            background: #FF7A45;
            color: #ffffff;
        }
        .el-button--primary:hover{
            border: 1px solid #FF7A45;
            background: rgba(229,109,61,1);
            color: #ffffff;
        }
        .el-button--primary:focus{
            border: 1px solid #FF7A45;
            background: rgba(229,109,61,1);
            color: #ffffff;
        }
    }
    .el-form-item.is-error .el-input__inner{
        border: 1px solid #E02020;
    }
    .el-form-item.is-success  .hosjoy_right1{
        display: inline-block;
    }
</style>
