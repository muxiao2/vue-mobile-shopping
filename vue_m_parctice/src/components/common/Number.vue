<template>
<!-- 封装组件 -->
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input ref="num" @change="countChangeHandle" id="test" class="mui-input-numbox" type="number" value="1">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.js'
export default {
    // 父组件传给子组件
    props: [
        "maxNum"
    ],
    mounted() {
        // console.log(this.maxNum);
        // 父子组件传值异步操作
    },
    methods: {
        countChangeHandle() {
            // console.log(this.$refs.num.value);
            this.$emit('getCount',parseInt(this.$refs.num.value))
        }
    },
    watch: {
        maxNum: function(newVal, oldVal) {
            // console.log(newVal, oldVal);
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
</script>

<style scoped>
.mui-numbox {
    transform: scale(.7);
    transform-origin: left;
    margin-right: 30px;
}
</style>