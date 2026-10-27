<template>
  <div id="app">
    <top></top>
    <div class="body">
      <div>
        <!-- <Baseleft></Baseleft> -->
        <router-view></router-view>
      </div>
      <div class="naka" :style="{backgroundColor: backColor[backColorNum].color1}" style="box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 12px rgba(0, 0, 0, .04)">
        <Base1 :style="{backgroundColor: backColor[backColorNum].color2}"></Base1>
        <Base2 :style="{backgroundColor: backColor[backColorNum].color2}"></Base2>
        <Base3 :style="{backgroundColor: backColor[backColorNum].color2}"></Base3>
        <Base4 :style="{backgroundColor: backColor[backColorNum].color2}"></Base4>
        <Base5 :style="{backgroundColor: backColor[backColorNum].color2}"></Base5>
      </div>
    </div>
  </div>
</template>

<script>
// import Baseleft from "./components/Baseleft.vue"
import top from "./components/top.vue"
import Base1 from './components/Base1.vue'
import Base2 from './components/Base2.vue'
import Base3 from './components/Base3.vue'
import Base4 from './components/Base4.vue'
import Base5 from './components/Base5.vue'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    // Baseleft,
    top,
    Base1,
    Base2,
    Base3,
    Base4,
    Base5,
  },
  computed: {
    ...mapState(['backColor','backColorNum'])
  },
  // created: {

  // },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.body {
  display: flex;
  gap: 16px;
  margin: 0px 16px 16px 16px;
}

.naka {
  width: 100%;
  padding: 48px 20px;
  /* background-color: #e3eafc; */
  border-radius: 5px;
  min-width: 630px;
}

.Base {
  /* background-color: var(--g-profile-color-surface, #fff); */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 24px;
  max-width: 560px;
  padding: 32px 40px;
  position: relative;
}
</style>
