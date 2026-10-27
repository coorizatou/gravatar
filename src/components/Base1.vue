<template>
    <div class="Base">
        <div class="header">
            <el-avatar :size="148" :src="header" style="display: flex;justify-content: center;align-items: center;" :style="{backgroundColor: backColor[backColorNum].color1}"></el-avatar>
            <!-- <img :src="header"> -->
        </div>
        <h1>{{ myname }}</h1>
        <div class="link">
            <i class="el-icon-success" :style="{color: backColor[backColorNum].color3}"></i>
            <span>—</span>
            <i class="el-icon-success" :style="{color: backColor[backColorNum].color3}"></i>
        </div>
        <div style="margin-top: 16px;">
            <div>
                <p class="g-truncate__inner" data-sidebar-focus="aboutMe" tabindex="0">{{ shoukai }}</p>
            </div>
        </div>
        <div class="button">
            <el-button class="btn" :style="{color: backColor[backColorNum].color3,backgroundColor: backColor[backColorNum].color2}">默认按钮</el-button>
            <el-button class="btn" :style="{color: backColor[backColorNum].color3,backgroundColor: backColor[backColorNum].color2}">默认按钮</el-button>
            <el-button class="btn" :style="{color: backColor[backColorNum].color3,backgroundColor: backColor[backColorNum].color2}">默认按钮</el-button>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    name: 'Base1Com',
    computed: {
        ...mapState(['backColor','backColorNum','header','myname','shoukai'])
    }
}
</script>


<style scoped>
.header {
    width: 148px;
    height: 148px;
    margin-bottom: 16px;
}

img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-color: aqua;
}

h1 {
    font-size: 34px;
    margin: 0;
}

.link {
    align-items: center;
    display: flex;
    margin-top: 16px;
    padding: 8px 0;
}

.el-icon-success {
    /* width: 22px; */
    /* height: 22px; */
    font-size: 22px;
    margin-right: 10px;
    /* color: #1d4fc4; */
}

span {
    font-weight: 200;
    margin-right: 4px;
}

.g-truncate__inner {
    margin: 0;
    font-size: 16px;
}

.button {
    margin-top: 24px;
    margin-bottom: -6px;
}

.btn {
    /* padding: 6px 12px; */
    width: 176px;
    font-size: 16px;
    height: 42px;
    /* color: #1d4fc4; */
}
</style>