<template>
    <div>
        <Row :gutter="16">

            <Col span="14">
            <Card>

                <p slot="title">
                    <Icon type="grid"></Icon>
                    全局消息
                </p>

                <br>
                <div>
                    <Button type="primary" @click="info">显示普通提醒</Button>
                    <Button type="success" @click="success">显示成功提示</Button>
                    <Button type="warning" @click="warning">显示警告提示</Button>
                    <Button type="error" @click="error">显示错误提示</Button>
                    <Button @click="loading">显示加载中...</Button>
                </div>
                <br>
                <br>
            </Card>

            </Col>

            <Col span="10">
            <Card>

                <p slot="title">
                    <Icon type="grid"></Icon>
                    提醒
                </p>

                <div>
                    <p>带描述信息</p>
                    <Button type="primary" @click="noticeInfo(false)">消息</Button>
                    <Button type="success" @click="noticeSuccess(false)">成功</Button>
                    <Button type="warning" @click="noticeWarning(false)">警告</Button>
                    <Button type="error" @click="noticeError(false)">错误</Button>
                    <p>仅标题</p>
                    <Button type="primary" @click="noticeInfo(true)">消息</Button>
                    <Button type="success" @click="noticeSuccess(true)">成功</Button>
                    <Button type="warning" @click="noticeWarning(true)">警告</Button>
                    <Button type="error" @click="noticeError(true)">错误</Button>

                </div>

            </Card>

            </Col>

        </Row>
        <br>
        <Row>
            <Col span="12">
            <Card>

                <p slot="title">
                    <Icon type="grid"></Icon>
                    对话框
                </p>

                <div>

                    <Button type="primary" @click="modal1 = true">显示对话框</Button>

                    <Button @click="render">自定义内容</Button>
                    <span>您输入的内容:{{value}}</span>

                    <Modal
                            v-model="modal1"
                            title="普通的Modal对话框标题"
                            @on-ok="ok"
                            @on-cancel="cancel">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>


                </div>

            </Card>

            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                value: ''
            }
        },
        methods: {
            info () {
                this.$Message.info('这是一条普通的提醒');
            },
            success () {
                this.$Message.success('这是一条成功的提示');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            },
            loading () {
                const msg = this.$Message.loading({
                    content: '正在加载中...',
                    duration: 0,
                    closable: true
                });
                setTimeout(msg, 3000);
            },

            noticeInfo (nodesc) {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            noticeSuccess (nodesc) {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            noticeWarning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            noticeError (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            render () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: '请输入一些东西...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
</style>