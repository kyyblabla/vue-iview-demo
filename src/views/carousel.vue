<template>
    <div>
        <Row>
            <Col span="24">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    轮播图
                </p>

                <div>
                    <demo-carousel></demo-carousel>
                </div>

            </Card>

            </Col>
        </Row>
    </div>
</template>

<script>
    import DemoCarousel from './demo-carousel.vue'
    export default {
        components: {DemoCarousel},
        data() {
            return {
                value1: 0
            }
        },
        methods: {}
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