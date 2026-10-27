<template>
    <div class="app">
        <backButton></backButton>

        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">头像</h1>
        <div style="font-size: 13px;line-height: 20px;margin: 0 16px 24px;">在使用电子邮件地址登录所有支持 Gravatar 的服务时，您的头像都将自动同步显示。
        </div>

        <div class="header">
            <el-avatar shape="square" :size="100" :src="header" fit="cover" style="border-radius: 4px;border: 4px solid rgb(60, 60, 245);background-color: white;display: flex;
            justify-content: center;align-items: center;"></el-avatar>
        </div>

        <div class="headerChange">
            <label for="fileInput" class="upload-btn">选择图片</label>
            <input @change="fileInput()" type="file" id="fileInput" accept="image/*">
        </div>
    </div>
</template>


<script>
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'router3Com',
    data() {
        return {
            file: '',
            files: [],
        }
    },
    methods: {
        fileInput() {
            const fileInput = document.getElementById('fileInput');
            this.files = fileInput.files;
            for (let i = 0; i < this.files.length; i++) {
                this.file = this.files[i];

                if (!this.file.type.startsWith('image/')) continue;

                const img = document.createElement('img');
                img.src = URL.createObjectURL(this.file);  // 创建临时URL
                console.log(img.src);

                this.$store.commit(`headerChange`, img.src)
            }
        }
    },
    components: {
        backButton,
    },
    computed: {
        ...mapState(['header'])
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

.header {
    margin-top: 40px;
}

.headerChange {
    margin: 0 16px;
    display: flex;
}

.headerChangeButton {
    width: 100%;
    margin-top: 32px;
}

#fileInput {
    display: none;
    /* 隐藏原始文件输入框 */
}

.upload-btn {
    width: 324px;
    padding: 6px 12px;
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(64, 158, 255);
    color: rgb(64, 158, 255);
    font-size: 16px;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
}

.upload-btn:hover {
    background-color: rgb(207, 231, 255);
}
</style>