<template>
    <div class="app">

        <div class="top-span">
            <h1 style="font-size: 16px;margin: 0;">My profile</h1>
        </div>

        <div class="mail">
            <span style="font-size: 15px;">111</span>
            <i class="el-icon-upload" style="font-size: 20px;"></i>
        </div>

        <div style="position: relative;">
            <div>
                <ul style="padding: 0; margin: 0;">
                    <div class="li-text" v-for="(item, index) in leftRouter" :key="index" style="color: black;">
                        <li class="li-all"><router-link :to="item.router">
                            <div class="li">
                                <div class="li-div">
                                    <i :class="item.class" style="font-size: 20px; padding: 0;"></i>{{ item.naka }}
                                </div>
                                <div style="align-items: center;line-height: 24px;width: 24px;">
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                        </router-link></li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'BaseLeft',
    methods: {

    },
    computed: {
        ...mapState(['leftRouter'])
    }
}
</script>


<style scoped>
.app {
    width: 380px;
    /* background-color: bisque; */
    padding-bottom: 40px;
}

.top-span {
    margin: 16px 0px;
    padding: 8px 16px;
}

.mail {
    align-items: center;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    margin: -8px 0 8px;
    padding: 12px 16px;
}

.li-all {
    padding: 8px 4px 8px 14px;
    list-style-type: none;
    font-size: 14px;
    /* border: 1px solid #e3eafc; */
}

.li-text :hover {
    background-color: rgb(238, 238, 238);
    border-radius: 4px;
}

.li {
    display: flex;
    justify-content: space-between;
}

.li-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    line-height: 24px;
}

a {
  text-decoration: none;
}
</style>