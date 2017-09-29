<template>
    <div>
        <Row>
            <Col span="6">
            <Card>
                <p slot="title">
                    <Icon type="grid"></Icon>
                    测试demo
                </p>
                <div>
                    <Input v-model="user.name" placeholder="请输入姓名..." style="width: 200px"></Input>
                </div>
                <br>
                <div>
                    <Input v-model="user.age" placeholder="请输入年龄..." style="width: 200px"></Input>
                </div>
                <br>
                <p>
                    用户名：{{user.name}}
                    年龄：{{user.age}}
                </p>
            </Card>

            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: null,
                    age: null
                }
            }
        },
        methods: {}
    };
</script>
