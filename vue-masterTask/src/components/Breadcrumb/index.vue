<template>
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <i v-if="item.meta.icon" :class="'iconfont ' + `${item.meta.icon}`"></i>
                <span
                    v-if="item.meta.redirect == 'noredirect'|| index == levelList.length-1"
                    class="no-redirect"
                >{{item.meta.title}}</span>
                <router-link v-else :to="item.redirect || item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    data () {
        return {
            levelList: ''
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb () {
            const routerFunc = this.$route.meta.func
            console.log(23232,routerFunc)
            let matched = this.$route.matched.filter(item => {
                if (item.meta.title) {
                    return true
                }
            })
            routerFunc && routerFunc(matched, this.$route)
            this.levelList = matched
        }
    },
    mounted () {
        this.getBreadcrumb()
    }
}
</script>
<style lang="scss" scoped>
.iconfont {
    margin-right: 10px;
    font-size: 14px;
    color: $grayColor;
}
.router-link-exact-active.router-link-active {
    color: #000 !important;
    font-weight: 400 !important;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
    font-weight: 400;
    color: $hosjoyColor;
}
.el-breadcrumb__inner a:hover,
.el-breadcrumb__inner.is-link:hover {
    color: $hosjoyColorHover;
}
.el-breadcrumb__inner a:active,
.el-breadcrumb__inner.is-link:active {
    color: $hosjoyColorActive;
}
.no-redirect {
    color: $grayColor;
}
.el-breadcrumb__item:last-child {
    .no-redirect {
        color: #000;
    }
}
</style>
