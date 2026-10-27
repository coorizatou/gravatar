<template>
    <div class="Base">
        <div class="picture">
            <img v-for="(item, index) in pictures" :src=pictures[index] :key="index">
        </div>

    </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    name: 'Base3Com',
    computed: {
        ...mapState(['pictures'])
    }
}
</script>


<style scoped>
.picture {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(122px, .25fr));
}

img {
    max-width: 100%;
    height: 100%;
    min-width: 110px;
}
</style>