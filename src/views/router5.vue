<template>
    <div class="app">
        <backButton></backButton>
        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">照片</h1>
        <div style="font-size: 13px;line-height: 20px;margin: 0 16px 24px;">上传一些照片，讲述您的故事。</div>

        <div class="shashinn">
            <div class="picture">
                <div v-for="(item, index) in pictures" :key="index" style="position: relative;width: 100px;height: 100px;" class="int">
                    <img :src="pictures[index]">
                    <div class="delbutton">
                        <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                            icon-color="red" title="确定删除吗？" class="del" @confirm="delPic(index)">
                            <el-button slot="reference" class="del"><i class="el-icon-delete"></i></el-button>
                        </el-popconfirm>
                    </div>
                </div>
            </div>

            <div>
                <label for="fileInput" class="upload-btn">上传新图片</label>
                <input @change="fileInput()" type="file" id="fileInput" accept="image/*">
            </div>
        </div>
    </div>
</template>

<script>
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';


export default {
    name: 'router5Com',
    components: {
        backButton,
    },
    computed: {
        ...mapState(['pictures'])
    },
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

                this.$store.commit(`addNewPic`, img.src)
            }
        },

        delPic(n) {
            console.log(n);
            this.$store.commit(`delPic`,n)
        }
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

.shashinn {
    margin: 0 16px;
}

.picture {
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    border-radius: 4px;
}

img {
    width: 100px;
    background-color: azure;
    height: 100px;
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

.delbutton {
    width: 28px;
    height: 28px;
    /* background-color: aqua; */
    position: absolute;
    bottom: 3px;
    right: 3px;
    display: flex;
}

/* .delbutton:hover .del {
    display: block;
} */

.int:hover .del {
    display: block;
}

.del {
    width: 28px;
    height: 28px;
    padding: 0;
    background-color: rgba(1, 2, 2, 0.3);
    /* background: none; */
    border: 0;
    border-radius: 4px;
    color: white;
    display: none;
}
</style>