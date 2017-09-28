<template>
    <div>
        <Row :gutter="16">
            <Col :xs="24" :sm="16" :md="18">
            <Card>
                <p slot="title">
                    <Icon type="aperture"></Icon>
                    轮播图
                </p>
                <div style="height: 270px">
                    <demo-carousel></demo-carousel>
                </div>
            </Card>
            <br>
            </Col>

            <Col :xs="24" :sm="8" :md="6">
            <Card>
                <p slot="title">
                    <Icon type="information-circled"></Icon>
                    消息
                </p>

                <div style="height: 270px">
                    <Timeline>
                        <TimelineItem color="green">
                            <Icon type="trophy" slot="dot"></Icon>
                            <span>发布里程碑版本</span>
                        </TimelineItem>
                        <TimelineItem color="green">发布1.0版本</TimelineItem>
                        <TimelineItem color="green">发布1.5版本</TimelineItem>
                        <TimelineItem color="green">发布2.0版本</TimelineItem>
                        <TimelineItem color="green">发布2.5版本</TimelineItem>
                        <TimelineItem color="red">严重故障</TimelineItem>
                        <TimelineItem><a href="#">查看更多</a></TimelineItem>
                    </Timeline>
                </div>

            </Card>
            <br>
            </Col>
        </Row>
        <Row :gutter="16">

            <Col :xs="24" :sm="12" :md="6">
            <Card>
                <p slot="title">
                    <Icon type="stats-bars"></Icon>
                    状态示例
                </p>
                <div class="card-content">
                    <i-circle :size="140" :percent="100" stroke-color="#5cb85c">
                        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                    </i-circle>
                </div>
            </Card>
            <br>
            </Col>


            <Col :xs="24" :sm="12" :md="6">
            <Card>
                <p slot="title">
                    <Icon type="ios-timer"></Icon>
                    完成度示例
                </p>
                <a slot="extra" @click="random('c1',1,100)">
                    <Icon type="ios-loop-strong"></Icon>
                    刷新
                </a>

                <div class="card-content">
                    <i-circle :size="140" :percent="c1">
                        <span class="demo-Circle-inner" style="font-size:24px">{{c1}}%</span>
                    </i-circle>
                </div>
            </Card>
            <br>
            </Col>

            <Col :xs="24" :sm="12" :md="6">
            <Card>
                <p slot="title">
                    <Icon type="flag"></Icon>
                    失败示例
                </p>
                <div class="card-content">
                    <i-circle :size="140" :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
                    </i-circle>
                </div>
            </Card>
            <br>
            </Col>

            <Col :xs="24" :sm="12" :md="6">
            <Card>
                <p slot="title">
                    <Icon type="document-text"></Icon>
                    统计信息
                </p>
                <a slot="extra" @click="random('consumerUserCount',0,userCount)">
                    <Icon type="ios-loop-strong"></Icon>
                    刷新
                </a>

                <div class="card-content">
                    <i-circle
                            :size="140"
                            :trail-width="4"
                            :stroke-width="5"
                            :percent="consumerUserPercent"
                            stroke-linecap="square"
                            stroke-color="#43a3fb">
                        <div class="demo-Circle-custom">
                            <h1>{{consumerUserCount}}</h1>
                            <p>消费人群规模</p>
                            <span>
                总占人数
                <i>{{consumerUserPercent}}%</i>
            </span>
                        </div>
                    </i-circle>
                </div>
            </Card>
            <br>
            </Col>

        </Row>

        <Row :gutter="16">
            <Col :sm="24" :md="12">
            <Card>
                <p slot="title">
                    <Icon type="wand"></Icon>
                    活动
                </p>

                <Steps :current="1">
                    <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                    <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                </Steps>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid debitis dignissimos earum
                    facilis fugiat illo nesciunt quasi soluta! Ipsum libero necessitatibus pariatur. Consequuntur
                    expedita ipsam magnam repellendus rerum tempora.</p>


                <br>
            </Card>
            <br>
            </Col>

            <Col :sm="24" :md="12">
            <Card>
                <p slot="title">
                    <Icon type="shuffle"></Icon>
                    步骤
                </p>

                <Steps :current="1">
                    <Step title="注册" icon="person-add"></Step>
                    <Step title="上传头像" icon="camera"></Step>
                    <Step title="验证邮箱" icon="email"></Step>
                </Steps>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorem eius, inventore ipsum
                    laudantium nostrum praesentium quidem reiciendis, suscipit ut velit voluptate? Eius illum mollitia
                    omnis praesentium, quibusdam ut veniam.</p>
                <br>

            </Card>
            <br>
            </Col>
        </Row>


    </div>
</template>
<script>
    import DemoCarousel from './demo-carousel.vue'
    import Util from '../libs/util'

    export default {
        data(){
            return {
                c1: 80,
                userCount: 1000000,
                consumerUserCount: 800000
            }
        },
        computed: {
            consumerUserPercent(){
                return parseInt((this.consumerUserCount / this.userCount * 100).toFixed(0))
            }
        },
        components: {DemoCarousel},
        methods: {
            random(key, min, max){
                this[key] = Util.random(min, max)
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less" scoped>

    .card-content {
        height: 150px;
        text-align: center;
    }

    .demo-Circle-custom {
        & h1 {
            color: #3f414d;
            font-size: 18px;
            font-weight: normal;
        }
        & p {
            color: #657180;
            font-size: 14px;
            margin: 5px 0 5px;
        }
        & span {
            display: block;
            padding-top: 5px;
            color: #657180;
            font-size: 12px;
        }
        & span i {
            font-style: normal;
            color: #3f414d;
        }
    }

    .ivu-steps.ivu-steps-horizontal {
        height: 80px;
    }
</style>