<template>
    <div class="Base" v-if="webLinkURL.length">
            <h2>链接</h2>
            <div class="webLink" v-for="(item, index) in webLinkURL" :key="index">
                <i class="el-icon-link" :style="{color: backColor[backColorNum].color3}"></i>
                <div style="gap: 2px;">
                    <div class="link">
                        <a :href=item.url target="_blank" rel="noopener" :style="{color: backColor[backColorNum].color3}">{{ item.name }}<i class="el-icon-top-right"></i></a>
                    </div>
                    <div>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    name: 'Base2Com',
    computed: {
        ...mapState(['webLinkURL','backColor','backColorNum'])
    }
}
</script>


<style scoped>
h2 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 12px;
}

.el-icon-link {
    width: 24px;
    height: 24px;
    font-size: 24px;
}

.webLink {
    display: flex;
    margin-bottom: 20px;
}

.link {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    list-style-type: none;
}
</style>