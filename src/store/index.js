// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backColor: [
      {
        color1: '#e3eafc',
        color2: '#ffffff',
        color3: '#1a3dbb'
      },
      {
        color1: '#e6fff7',
        color2: '#ffffff',
        color3: '#00866c'
      },
      {
        color1: '#00622b',
        color2: '#ffffff',
        color3: '#1e8655'
      }
    ],
    backColorNum: '0',


    // 头像
    header: require('../assets/logo.png'),

    // 显示名称
    myname: 'yukikaze',

    // 关于
    shoukai: 'Add a short bio. Tell the world who you are and what you do.',


    // 链接
    webLinkURL: [
      {
        name: 'bilibili',
        url: 'https://space.bilibili.com/75088453/favlist?fid=464417853&ftype=create',
        text: 'makabaka'
      },
      {
        name: 'Element-UI',
        url: 'https://element.eleme.cn/#/zh-CN/component/custom-theme',
        text: '最高だ'
      }
    ],

    // 兴趣
    tags: [
      { name: '标签一', type: '' },
      { name: '标签二', type: 'success' },
      { name: '标签三', type: 'info' },
      { name: '标签四', type: 'warning' },
      { name: '标签五', type: 'danger' }
    ],

    // 图片
    pictures: [
      require('@/assets/logo.png'),
      require('@/assets/Meme_32.png'),
      require('@/assets/Meme_57.png'),
    ],

    // test
    text: [
      {
        title: '一致性 Consistency',
        naka: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
      },
      {
        title: '反馈 Feedback',
        naka: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
      },
      {
        title: '效率 Efficiency',
        naka: '简化流程：设计简洁直观的操作流程；'
      },
      {
        title: '可控 Controllability',
        naka: '用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
      },
      {
        title: 'yukikaze',
        naka: '何でもない'
      }
    ],

    leftRouter: [
      {
        router: '/router1',
        class: 'el-icon-edit',
        naka: '设计'
      },
      {
        router: '/router2',
        class: 'el-icon-user',
        naka: '关于'
      },
      {
        router: '/router3',
        class: 'el-icon-camera',
        naka: '头像'
      },
      {
        router: '/router4',
        class: 'el-icon-paperclip',
        naka: '链接'
      },
      {
        router: '/router5',
        class: 'el-icon-picture-outline-round',
        naka: '照片'
      },
      {
        router: '/router6',
        class: 'el-icon-menu',
        naka: '兴趣'
      }
    ]
  },

  mutations: {
    // 背景色
    backColorNumChange(state,n) {
      state.backColorNum = n
    },

    // 头像
    headerChange(state,n) {
      state.header = n
    },

    //删除tag
    tagDel(state,n) {
      // 用 findIndex 定位，找不到时返回 -1，绝不能删掉第一个标签
      const index = state.tags.findIndex(tag => tag.name === n)
      if (index !== -1) {
        state.tags.splice(index,1)
      }
    },

    // 新增tag
    addNewTag(state,n){
      state.tags.push({name:n,type:''})
    },

    // 新增图片
    addNewPic(state, n) {
      state.pictures.push(n)
    },
    // 删除图片
    delPic(state, n) {
      state.pictures.splice(n,1)
    },
    // 新增链接
    addNewLink(state, n) {
      state.webLinkURL.push({
        name: n.name,
        url: n.url,
        text: n.text
      })
    },
    // 删除链接
    delLink(state, n) {
      state.webLinkURL.splice(n,1)
    },
    // 修改名称
    changeName(state, n) {
      state.myname = n
      if ( n === '') {
        state.myname = 'yukikaze'
      }
    },
    // 修改关于
    changeShoukai(state, n) {
      state.shoukai = n
    },
    // 增加test
    addTest(state, n) {
      state.text.push({title: n.testname, naka: n.testnaka})
    },
    // 危险按钮
    killTest(state) {
      state.text = []
    },
  },

  actions: {

  },

  getters: {

  }
})
