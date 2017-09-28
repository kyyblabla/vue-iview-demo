<template>
    <div>
        <Row :gutter="16">
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    折叠面板
                </p>

                <div>

                    <Collapse v-model="value2">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">
                                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>


                </div>

            </Card>

            </Col>

            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    标签页
                </p>
                <div>
                    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                        <TabPane label="标签一" v-if="tab0"><br>标签一的内容 <br><br><br></TabPane>
                        <TabPane label="标签二" v-if="tab1"><br>标签二的内容 <br><br><br></TabPane>
                        <TabPane label="标签三" v-if="tab2"><br>标签三的内容 <br><br><br></TabPane>
                    </Tabs>
                </div>
            </Card>

            </Col>

        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value2: "1",
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .demo-carousel {
        text-align: center;
        color: #fff;
        font-size: 20px;
        position: relative;
        img {
            width: 100%;
            max-width: 100%;
        }
    }
</style>