<template>
    <div class="nav-menu-aside">
        <Sidebar :menus="menus" mode="vertical" :collapse="isCollapse"/>
        <div class="menusSwitch" :class="isCollapse?'close':'open'">
            <div @click="onSwitch" class="hand">
                <i :class="isCollapse?'iconfont hosjoy_indent':'iconfont hosjoy_outdent'"></i>
                <span>收起</span>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar'
import { routerMapping } from '@/router.js'
import { mapState } from 'vuex'
export default {
    name: 'NavMenuHead',
    components: {
        Sidebar
    },
    data () {
        return {
            isCollapse: false
        }
    },
    computed: {
        menus () {
            return this.resolveMenus(routerMapping)
        },
        ...mapState({
            userInfo: state => state.userInfo
        })
    },
    watch: {
        isCollapse (val) {
            this.$emit('back-event', val)
        }
    },
    methods: {
        onSwitch () {
            this.isCollapse = !this.isCollapse
        },
        resolveMenus (menus) {
            menus = JSON.parse(JSON.stringify(menus))
            // 将router中非菜单的排除掉
            return menus.filter((item) => {
                if (item.children && item.children.length > 0) {
                    item.children = this.resolveMenus(item.children)
                }
                // const menuRoles = item.meta.role
                // const userRoles = this.userInfo.authorities
                // const resultRole = userRoles.filter(item => menuRoles && menuRoles.includes(item))
                return item.meta.isMenu
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-menu-aside {
    position: relative;
    padding-bottom: 60px;
    .menusSwitch {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 60px;
        text-align: left;
        line-height: 60px;
        background: $blackLight;
        color: $whiteColor;

        i {
            margin-right: 10px;
            font-size: 16px;
            color: #bfbfbf;
        }
        span {
            font-size: 12px;
            color: #bfbfbf;
        }
        div {
            margin: 0 24px;
            border-top: 1px solid #292929;
        }
    }
}

/deep/ .el-menu {
    border: 0;
    background-color: $blackLight;
    .el-menu-item,
    .el-submenu {
        text-align: left;
        font-size: 14px;
        .el-menu-item {
            padding-left: 50px !important;
            font-size: 12px;
            color: #bfbfbf;
        }
        .el-submenu {
            font-size: 12px;
            color: #bfbfbf;

            .el-submenu__title {
                padding-left: 50px !important;
                font-size: 12px;
                color: #bfbfbf;
            }
            .el-menu-item {
                padding-left: 70px !important;
            }
        }
    }
}
/deep/ .el-menu-item {
    padding-left: 24px !important;
    color: #bfbfbf;

    i {
        margin-right: 10px;
    }
}
/deep/ .el-submenu__title {
    padding-left: 24px !important;
    color: #bfbfbf;

    i {
        margin-right: 10px;
    }
}
    .hand{
        cursor: pointer;
    }
</style>
<style lang="scss">
.el-menu--vertical ul {
    background: rgba($color: #191919, $alpha: 0.9);

    .el-menu-item,
    .el-submenu {
        color: #bfbfbf;
        font-size: 12px;

        .el-submenu__title {
            color: #bfbfbf;
            font-size: 12px;
        }
    }
}
.el-menu-item:focus {
    background-color: $blackColor !important;
}
.el-menu-item:hover {
    background-color: $blackColor !important;
}
.el-submenu__title:hover {
    background-color: $blackColor !important;
}
</style>
