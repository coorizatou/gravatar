<template>
    <div class="app">
        <backButton></backButton>
        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">关于</h1>

        <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 0 16px;">
            <el-tab-pane label="基本资料" name="first">
                <div class="naka1">
                    <div>
                        <label>显示名称</label>
                        <el-input :placeholder=myname v-model="input" clearable @change="changeName(input)"></el-input>
                    </div>
                    <div>
                        <label>关于</label>
                        <!-- 用 v-model + @input 直接写回 store，右侧资料卡随输入实时更新 -->
                        <textarea type="text" class="kannke" v-model="shoukaiDraft" @input="changeShoukai(shoukaiDraft)"
                            placeholder="介绍一下你自己"></textarea>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="test" name="second">
                <div class="naka1">
                    <div>
                        <label>testname</label>
                        <el-input placeholder="" v-model="testZ.testname" clearable></el-input>
                    </div>
                    <div>
                        <label>testnaka</label>
                        <textarea type="text" class="kannke" v-model="testZ.testnaka" placeholder></textarea>
                    </div>
                    <el-button type="primary" round @click="addTest(testZ)">保存</el-button>
                    <el-button type="danger" round style="margin: 0;" @click="killTest()">危险按钮</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'router2Com',
    data() {
        return {
            activeName: 'first',
            input: '',
            shoukaiDraft: '',
            testZ: {
                testname: '',
                testnaka: '',
            },

        };
    },
    created() {
        // data() 执行时 computed 还没初始化，所以在这里取当前「关于」内容
        this.shoukaiDraft = this.shoukai
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        changeName(n) {
            this.$store.commit(`changeName`, n)
            console.log(this.myname);
        },
        changeShoukai(n) {
            this.$store.commit(`changeShoukai`, n)
        },
        addTest(n) {
            this.$store.commit(`addTest`,n)
            this.testZ.testname = '',
            this.testZ.testnaka = ''
        },
        killTest() {
            this.$store.commit(`killTest`)
        }
    },
    components: {
        backButton,
    },
    computed: {
        ...mapState(['myname', 'shoukai', 'text'])
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
}

/* #tab-first #tab-second {
    margin-bottom: 16px;
} */

.naka1 {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
}

.kannke {
    width: 100%;
    height: 130px;
    line-height: 40px;
    padding: 8px 12px;
    border: 1px solid #777b86;
    box-sizing: border-box;
    border-radius: 4px;
}
</style>