<template>
    <div class="Base">
            <h2 :style="{color: backColor[backColorNum].color3}">兴趣</h2>
            <div style="gap: 8px;display: flex;">
                <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">
                    {{ tag.name }}
                </el-tag>
            </div>
    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    name: 'Base5Com',
    computed: {
        ...mapState(['tags','backColor','backColorNum'])
    }
}
</script>


<style scoped>
h2 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 12px;
}
</style>