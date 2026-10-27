<template>
    <div class="app">

        <div class="top-span">
            <h1 style="font-size: 16px;">My profile</h1>
        </div>

        <div class="mail">
            <span style="font-size: 15px;">111</span>
            <i class="el-icon-paperclip" style="font-size: 20px;"></i>
        </div>

        <div style="position: relative;">
            <div>
                <ul style="padding: 0;">

                    <div class="li-text">
                        <li class="li-all" @click="test()">
                            <div class="li">
                                <div class="li-div">
                                    <li class="el-icon-folder-opened" style="font-size: 24px; padding: 0;"></li>1
                                </div>
                                <div style="align-items: center;line-height: 24px;width: 24px;">
                                    <li class="el-icon-arrow-right"></li>
                                </div>
                            </div>
                        </li>
                    </div>

                    <div class="li-text">
                        <li class="li-all">
                            <div class="li">
                                <div class="li-div">
                                    <li class="el-icon-folder-opened" style="font-size: 24px; padding: 0;"></li>2
                                </div>
                                <div style="align-items: center;line-height: 24px;width: 24px;">
                                    <li class="el-icon-arrow-right"></li>
                                </div>
                            </div>
                        </li>
                    </div>

                    <div class="li-text">
                        <li class="li-all">
                            <div class="li">
                                <div class="li-div">
                                    <li class="el-icon-folder-opened" style="font-size: 24px; padding: 0;"></li>3
                                </div>
                                <div style="align-items: center;line-height: 24px;width: 24px;">
                                    <li class="el-icon-arrow-right"></li>
                                </div>
                            </div>
                        </li>
                    </div>

                <!-- <li><router-link>4</router-link></li> -->
                <!-- <li><router-link>5</router-link></li> -->
                </ul>
            </div>
        </div>

        <div class="left-text">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
export default {
    name: 'BaseLeft',
    methods: {
        test() {
            console.log(111);
        }
    }
}
</script>


<style scoped>
.app {
    width: 380px;
    background-color: bisque;
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
}
.li-text :hover {
    background-color: darkgray;
    border-radius: 4px;
}

.li {
    display: flex;
    justify-content: space-between;
}

.li-div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

a {
  text-decoration: none;
}
</style>