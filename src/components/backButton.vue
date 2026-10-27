<template>
    <div>
        <button @click="back()" class="back">
            <div class="el-icon-back"></div>
            <span class="span1">返回</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'backButton',
    methods: {
        back() {
            // 回到左侧菜单页（'/' 路由），不再依赖 '*' 兜底碰巧匹配
            this.$router.push({
                path: '/'
            })
        },
    }
}
</script>

<style scoped>
.back {
    /* width: 32px; */
    /* height: 32px; */
    /* border-radius: 16px; */
    border: 0;
    align-items: center;
    line-height: 32px;
    display: flex;
    gap: 8px;
    background-color: white;
    /* background-color: aqua; */
    padding: 0;
    margin: 3px 16px 16px 16px;
}
.back :hover~.span1 {
    opacity: 1;
    font-size: 16px;
    font-weight: 500;
    color: rgb(0, 94, 255);
}
.back :hover~.el-icon-back {
    background-color: blue;
    color: rgb(181, 33, 255);
}

/* .span1 :hover {
    opacity: 1;
    font-size: 16px;
    font-weight: 500px;
    color: blue;
} */

.el-icon-back {
    width: 32px;
    height: 32px;
    background-color: gainsboro;
    border-radius: 16px;
    align-items: center;
    line-height: 32px;
}

.span1 {
    opacity: 0;
    transition: 0.3s;
}
</style>