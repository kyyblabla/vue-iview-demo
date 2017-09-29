<template>
    <div>
        <Row :gutter="16">
            <Col span="12">
            <Card>

                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    表单组件示例
                </p>

                <Form :model="formItem1" :label-width="100">
                    <FormItem label="输入框">
                        <Input v-model="formItem1.input" placeholder="请输入"></Input>
                    </FormItem>
                    <FormItem label="选择器">

                        <Select v-model="formItem1.select" clearable filterable style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                            </Option>
                        </Select>

                    </FormItem>

                    <FormItem label="选择器（多选）">

                        <Select v-model="formItem1.mutiSelect" multiple filterable style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                            </Option>
                        </Select>

                    </FormItem>
                    <FormItem label="日期控件">
                        <Row>
                            <Col span="11">
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem1.date"></DatePicker>
                            </Col>
                            <Col span="2" style="text-align: center">
                            -</Col>
                            <Col span="11">
                            <TimePicker type="time" placeholder="选择时间" v-model="formItem1.time"></TimePicker>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="单选框">
                        <RadioGroup v-model="formItem1.radio">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="多选框">
                        <CheckboxGroup v-model="formItem1.checkbox">
                            <Checkbox label="吃饭"></Checkbox>
                            <Checkbox label="睡觉"></Checkbox>
                            <Checkbox label="跑步"></Checkbox>
                            <Checkbox label="看电影"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="开关">
                        <i-switch v-model="formItem1.switch" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </FormItem>
                    <FormItem label="滑块">
                        <Slider v-model="formItem1.slider" range></Slider>
                    </FormItem>


                    <FormItem label="文本域">
                        <Input v-model="formItem1.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                               placeholder="请输入..."></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" @click="handleReset('formItem1')" style="margin-left: 8px">重置</Button>
                    </FormItem>
                </Form>

            </Card>
            </Col>
            <Col span="12">
            <Card>
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    表单校验示例
                </p>

                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="姓名" prop="name">
                        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                    </FormItem>
                    <FormItem label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                    </FormItem>
                    <FormItem label="城市" prop="city">
                        <Select v-model="formValidate.city" placeholder="请选择所在地">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="选择日期">
                        <Row>
                            <Col span="11">
                            <FormItem prop="date">
                                <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                            </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">
                            -</Col>
                            <Col span="11">
                            <FormItem prop="time">
                                <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                            </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="性别" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="爱好" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="吃饭"></Checkbox>
                            <Checkbox label="睡觉"></Checkbox>
                            <Checkbox label="跑步"></Checkbox>
                            <Checkbox label="看电影"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="介绍" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                               placeholder="请输入..."></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        <Button @click="randomFormDate()" style="margin-left: 8px">随机</Button>
                    </FormItem>
                </Form>

            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    var Random = Mock.Random

    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                formItem1: {
                    input: '',
                    select: '',
                    mutiSelect: [],
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ],
                    city: [
                        {required: true, message: '请选择城市', trigger: 'change'}
                    ],
                    gender: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    interest: [
                        {required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change'},
                        {type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change'}
                    ],
                    date: [
                        {required: true, type: 'date', message: '请选择日期', trigger: 'change'}
                    ],
                    time: [
                        {required: true, type: 'date', message: '请选择时间', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请输入个人介绍', trigger: 'blur'},
                        {type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted(){
            let _this = this
            Random.extend({
                city: function (date) {
                    var citys = _this.cityList.map(({value}) => value)
                    return this.pick(citys)
                }
            })
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            randomFormDate(){

                this.formValidate = {
                    name: Random.cname(),
                    mail: Random.email(),
                    city: Random.city(),
                    gender: 'male',
                    interest: [],
                    date: Random.date(),
                    time: Random.time(),
                    desc: Random.csentence(10,50)
                }

            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }

        }
    };
</script>

<style rel="stylesheet/less" lang="less">
</style>