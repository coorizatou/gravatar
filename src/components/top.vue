<template>
    <div>
        <div class="top">
            <i class="el-icon-platform-eleme" style="font-size: 32px;"></i>
            <div class="top2">
                <i class="el-icon-question"></i>
                <img :src="header" class="header-img">
                <!-- <i class="el-icon-s-tools"></i> -->
                <el-col :span="12">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <span style="font-size: 13px;padding: 14px 16px;">11111111111111111</span>
                            <el-dropdown-item icon="el-icon-user">XXX1</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-link">XXX2</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-s-tools">XXX3</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-user-solid">XXX4</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-close">XXX5</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'topCom',
    computed: {
        ...mapState(['header'])
    },
}
</script>

<style scoped>
.top {
    align-items: center;
    display: flex;
    flex-grow: 1;
    gap: 24px;
    justify-content: space-between;
    padding: 0 32px;
    /* background-color: aqua; */
    height: 64px;
}

.top2 {
    align-items: center;
    display: flex;
    gap: 10px;
}

.header-img {
    width: 32px;
    height: 32px;
    background-color: azure;
    border-radius: 16px;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}

.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
</style>