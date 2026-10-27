<template>
    <div class="app">
        <backButton></backButton>
        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">兴趣</h1>
        <div style="font-size: 13px;line-height: 20px;margin: 0 16px 24px;">分享您的兴趣爱好与关注话题。</div>

        <div class="kyoumi">
            <div>主题</div>
            <div>
                <div class="tags">
                    <div class="tag" @click="focusDiv()">
                        <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type" class="tag1">
                            {{ tag.name }}<i class="el-icon-close" @click="tagDel(tag.name)"></i>
                        </el-tag>
                        <input type="text" ref="inputFocus" v-model="newTag" @keydown.enter="addNewTag(newTag)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'router6Com',
    components: {
        backButton,
    },
    computed: {
        ...mapState(['tags'])
    },
    methods: {
        focusDiv () {
            this.$refs.inputFocus.focus();
        },
        tagDel(n) {
            console.log(n);
            this.$store.commit(`tagDel`,n)
        },
        addNewTag(n) {
            console.log(this.newTag);
            this.$store.commit(`addNewTag`,n)
            this.newTag = ''
        }
    },
    data() {
        return {
            newTag: '',
        }
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

.kyoumi {
    margin: 0 16px;
}

div {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
}

.tags {
    padding-top: 9px;
    border: 1px solid #e3eafc;
    min-height: 118px;
    border-radius: 2px;
    height: auto;
}

.tag {
    padding: 0 12px 9px;
    display: flex;
    flex-wrap: wrap;
}

.tag1 {
    margin: 0 10px 8px 0;
    font-size: 14px;
    /* padding: 0; */
}

input {
    line-height: 24px;
    padding: 4px 0;
    margin-bottom: 9px;
    font-size: 14px;
    max-width: 100%;
    min-width: 50px;
    width: 100%;
    flex: 1;
    border: 0;
    outline: none;
    box-shadow: none;
}

</style>