<template>
    <div class="sidebar">
        <el-menu :default-active="$route.path" :collapse="collapse" @select="handleSelect"
                 mode="mode" active-text-color="#FF7A45" unique-opened>
            <template v-for="(item,index) in routes" v-if="!item.hidden" >
                <!-- 一级菜单 -->
                <el-menu-item :index="item.path">
                    <i v-if="item.meta.icon" :class="['iconfont', item.meta.icon]"></i>
                    <span>{{item.meta.title}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {
            }
        },
        props: {
            menus: {
                type: Array,
                default: () => ([])
            },
            mode: {
                type: String,
                default: 'horizontal'
            },
            collapse: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            ...mapMutations(['MIN_TASK']),
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if(key==='/vue'||key==='/react'){
                    this.$store.commit('MIN_TASK', true);
                    window.history.pushState({},null,key)
                } else {
                    this.$store.commit('MIN_TASK', false)
                    this.$router.push(key)
                }
            }
        },
        computed:{
            routes() {
                return this.$router.options.routes
                console.log(routes)
            },
        },
    }
</script>