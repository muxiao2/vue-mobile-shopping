<template>
<!-- 封装组件 -->
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChangeHandle" ref="num">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.js'
export default {
    // 父组件传给子组件
    props: [
        "maxNum",
        "count",
        "goodsId"
    ],
    mounted() {
        // console.log(this.maxNum);
        // 父子组件传值异步操作
        mui('.mui-numbox').numbox()
    },
    methods: {
        countChangeHandle() {
            // console.log(this.$refs.num.value);
            // this.$emit('getCount',parseInt(this.$refs.num.value))
            //调用store中mutations得修改数量的方法
            this.$store.commit('updateGoods', { id: this.goodsId, count: parseInt(this.$refs.num.value) })
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
    float: left;
    transform: scale(.7);
    transform-origin: left;
}
</style>