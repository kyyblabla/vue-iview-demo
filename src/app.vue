<template>
    <div class="layout">
        <Row type="flex">
            <Col span="5" class="layout-menu-left">
            <Menu @on-select="onSelect" active-name="1" theme="dark" width="auto">
                <div class="layout-logo-left">
                    Logo on the way
                </div>
                <MenuItem name="/">
                    <Icon type="ios-home"></Icon>
                    <router-link class="router-link" to="/">首页</router-link>
                </MenuItem>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="steam"></Icon>
                        组件展示
                    </template>
                    <MenuItem name="/form">
                        <router-link class="router-link" to="/form">表单</router-link>
                    </MenuItem>
                    <MenuItem name="/table">
                        <router-link class="router-link" to="/table">表格</router-link>
                    </MenuItem>
                    <MenuItem name="/chart">
                        <router-link class="router-link" to="/chart">图表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-grid-view"></Icon>
                        视图展示
                    </template>
                    <MenuItem name="/carousel">
                        <router-link class="router-link" to="/carousel">轮播图</router-link>
                    </MenuItem>
                    <MenuItem name="/container">
                        <!--<router-link class="router-link" to="/container"></router-link>-->
                        容器
                    </MenuItem>
                    <MenuItem name="/message">
                        <!--<router-link class="router-link" to="/message"></router-link>-->
                    </MenuItem>
                </Submenu>
            </Menu>
            </Col>
            <Col span="19">
            <div class="layout-header">

                <Dropdown :transfer="true" style="margin-left: 20px" placement="bottom-end">
                    <Badge count="20">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                    </Badge>
                    <DropdownMenu slot="list">
                        <DropdownItem>个人信息</DropdownItem>
                        <DropdownItem>消息</DropdownItem>
                        <DropdownItem>设置</DropdownItem>
                        <DropdownItem>退出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="#">首页</BreadcrumbItem>
                    <BreadcrumbItem>{{title}}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <router-view></router-view>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; TalkingData
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Util from './libs/util';
    import {
        mapGetters
    } from 'vuex'

    export default {
        computed: mapGetters([
            'title'
        ]),
        methods: {
            onSelect(name){

            }
        }
    }
</script>


<style rel="stylesheet/less" lang="less">
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 400px;
        margin: 15px;
        overflow: hidden;
        border-radius: 4px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        line-height: 60px;
        background: #fff;
        text-align: right;
        padding-right: 20px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        color: #ccc;
    }

    .router-link {
        display: inline-block;
        color: #fff;
    }
</style>
