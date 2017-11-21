<template>
<yd-layout>
    <yd-cell-group>
        <yd-cell-item> <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="userName" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item> <span slot="left">密码：</span>
            <yd-input slot="right" type="password" v-model="pass" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon> <input type="text" slot="right" placeholder="请输入手机号码">
            <!-- ↓↓关键代码是这里↓↓ -->
            <yd-sendcode slot="right" v-model="start1" @click.native="sendCode1" type="warning"></yd-sendcode>
            <!-- ↑↑关键代码是这里↑↑ -->
        </yd-cell-item>
    </yd-cell-group>
    <yd-button-group>
        <yd-button size="large">提交</yd-button>
    </yd-button-group>
</yd-layout>
</template>

<script type="text/babel">
export default {
    data() {
        return {
            userName: '',
            pass: '',
            start1: false
        }
    },
    methods: {
        openConfrim() {
            this.$dialog.confirm({
                title: '提示信息',
                mes: '确认提交？',
                opts: () => {
                    this.$dialog.toast({
                        mes: 'ok',
                        timeout: 1000
                    });
                }
            });
        },
        sendCode1() {
            this.$dialog.loading.open('发送中...');
            setTimeout(() => {
                this.start1 = true;
                this.$dialog.loading.close();
                this.$dialog.toast({
                    mes: '已发送',
                    icon: 'success',
                    timeout: 1500
                });
            }, 1000);
        }
    }
}
</script>
