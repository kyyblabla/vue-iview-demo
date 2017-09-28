<template>
    <div>
        <Carousel :autoplay-speed="3000" autoplay v-model="value1">
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assert/1.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assert/2.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assert/3.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assert/4.png" alt="">
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
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