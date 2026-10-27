<template>
    <div class="app">
        <backButton></backButton>
        <h1 style="margin: 0 16px 4px 16px;font-size: 16px;line-height: 24px;">链接</h1>
        <div style="font-size: 13px;line-height: 20px;margin: 0 16px 24px;">在个人资料中展示您的网站和社交账号。</div>

        <div class="links" v-if="webLinkURL.length">
            <div class="link-item" v-for="(item, index) in webLinkURL" :key="index">
                <i class="el-icon-link link-icon"></i>
                <div class="link-info">
                    <div class="link-name">{{ item.name }}</div>
                    <a class="link-url" :href="item.url" target="_blank" rel="noopener">{{ item.url }}</a>
                    <div class="link-text" v-if="item.text">{{ item.text }}</div>
                </div>
                <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info"
                    icon-color="red" title="确定删除吗？" @confirm="delLink(index)">
                    <el-button slot="reference" class="del"><i class="el-icon-delete"></i></el-button>
                </el-popconfirm>
            </div>
        </div>

        <div class="empty" v-else>还没有添加链接</div>

        <div class="form">
            <div>
                <label>链接名称</label>
                <el-input v-model="form.name" clearable placeholder="例如：bilibili"></el-input>
            </div>
            <div>
                <label>链接地址</label>
                <el-input v-model="form.url" clearable placeholder="https://example.com"></el-input>
            </div>
            <div>
                <label>链接说明</label>
                <el-input v-model="form.text" clearable placeholder="可选，一句话介绍"></el-input>
            </div>
            <el-button type="primary" round class="save" @click="save()">添加链接</el-button>
        </div>
    </div>
</template>

<script>
import backButton from '@/components/backButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'router4Com',
    components: {
        backButton,
    },
    computed: {
        ...mapState(['webLinkURL'])
    },
    data() {
        return {
            form: {
                name: '',
                url: '',
                text: '',
            },
        }
    },
    methods: {
        // 用户只输入 example.com 时补上协议，避免 href 变成相对路径
        normalizeUrl(url) {
            const value = url.trim();
            if (!value) return '';
            if (/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(value)) return value;
            return 'https://' + value;
        },
        isValidUrl(url) {
            try {
                const hostname = new URL(url).hostname;
                return hostname.includes('.');
            } catch (e) {
                return false;
            }
        },
        save() {
            const name = this.form.name.trim();
            const url = this.normalizeUrl(this.form.url);

            if (!name) {
                this.$message.warning('请填写链接名称');
                return;
            }
            if (!url) {
                this.$message.warning('请填写链接地址');
                return;
            }
            if (!this.isValidUrl(url)) {
                this.$message.error('请输入有效的链接地址');
                return;
            }

            this.$store.commit(`addNewLink`, { name: name, url: url, text: this.form.text.trim() });
            this.form = { name: '', url: '', text: '' };
            this.$message.success('已添加链接');
        },
        delLink(n) {
            this.$store.commit(`delLink`, n);
        }
    }
}
</script>


<style scoped>
.app {
    width: 380px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 16px 24px;
}

.link-item {
    align-items: flex-start;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    display: flex;
    gap: 12px;
    padding: 12px 16px;
}

.link-icon {
    color: rgb(64, 158, 255);
    font-size: 20px;
    line-height: 24px;
}

.link-info {
    flex: 1;
    min-width: 0;
}

.link-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
}

.link-url {
    color: #909399;
    display: block;
    font-size: 12px;
    line-height: 18px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.link-url:hover {
    color: rgb(64, 158, 255);
}

.link-text {
    color: #606266;
    font-size: 13px;
    line-height: 20px;
    margin-top: 2px;
    word-break: break-all;
}

.del {
    background: none;
    border: 0;
    color: #c0c4cc;
    height: 24px;
    padding: 0;
    width: 24px;
}

.del:hover {
    color: #f56c6c;
}

.empty {
    border: 1px dashed #dcdfe6;
    border-radius: 8px;
    color: #909399;
    font-size: 13px;
    margin: 0 16px 24px;
    padding: 24px 0;
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 16px;
}

label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
}

.save {
    width: 100%;
}
</style>
