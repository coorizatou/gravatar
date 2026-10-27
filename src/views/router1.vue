<template>
    <div class="app">
        <backButton></backButton>
        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">Design</h1>
        <div style="font-size: 13px;line-height: 20px;margin: 0 16px 24px;">Customize your public profile with images
            and colors.</div>

        <div class="setting">
            <h2 style="font-size: 14px; margin-bottom: 8px;">color</h2>
            <div class="color">
                <!-- <button @click="change(0)"></button>
                <button @click="change(1)"></button>
                <button @click="change(2)"></button> -->
                <div v-for="(item, index) in backColor" :key="index" class="color">
                    <button @click="change(index,item)">
                        <div style="height: 25px;position: relative;width: 51px;margin: 0 auto;">
                            <div :style="{backgroundColor: item.color1}" class="btnC"></div>
                            <div :style="{backgroundColor: item.color2}" class="btnC" style="left: 25%;"></div>
                            <div :style="{backgroundColor: item.color3}" class="btnC" style="left: 50%;"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import { mapMutations } from 'vuex';
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';



export default {
    name: 'router1Com',
    methods: {
        back() {
            this.$router.push({
                path: '/'
            })
        },
        change(n,m) {
            this.$store.commit(`backColorNumChange`, n)
            console.log(m)
        }
    },
    components: {
        backButton,
    },
    computed: {
        ...mapState(['backColor', 'backColorNum'])
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

.setting {
    margin: 0 16px;
}

.color {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px;
    gap: 24px;
}

button {
    padding: 12px;
}

.btnC {
    background-color: rgb(241, 238, 238);
    border: 3px rgb(255, 255, 255) solid;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
}
</style>