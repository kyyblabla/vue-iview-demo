<template>
    <div>

        <Row :gutter="16">
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    折线图
                </p>
                <line-chart></line-chart>
            </Card>

            </Col>

            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    柱状图
                </p>
                <bar-stack-chart></bar-stack-chart>
            </Card>

            </Col>

        </Row>
        <br>
        <Row :gutter="16">
            <Col span="24">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    地图
                </p>
                <map-chart></map-chart>
            </Card>

            </Col>
        </Row>
    </div>
</template>
<script>
    import LineChart from './chart/line-chart.vue'
    import BarStackChart from './chart/bar-stack-chart.vue'
    import MapChart from './chart/map-chart.vue'
    export default {
        components: {LineChart, BarStackChart, MapChart},
        methods: {},
    };
</script>

<style rel="stylesheet/less" lang="less">
</style>