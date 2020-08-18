<template>
    <div id="app">
        <Layout></Layout>
        <!--<router-view/>-->
        <!--<div id="vueView"></div>-->
    </div>
</template>

<script>
    import Layout from '@/views/layout/Default.vue'
    export default{
        components: {
            Layout
        },
    }
</script>

<style lang="scss">
#app {
    font-family: "Microsoft YaHei", "PingFang SC";
    font-size: 14px;
    color: #000000;
    font-weight:400;
}
</style>
