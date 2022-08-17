<template>
    <div class="goods_list">
        <!-- 商品列表
        <router-link to="'/home/goodsInfo' + item.id" tag="div" class="goods_item" v-for="item in goodsList" :key="item.id">
            <img :src="item.img_url" alt="">
            <div class="info">
                <h2 class="title">{{ item.title }}</h2>
                <p class="price">
                    <span class="old">￥{{ item.market_price }}</span>
                    <span class="now">￥{{ item.sell_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->
        
        <!-- 编程式导航 -->
        <div class="goods_item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <div class="info">
                <h2 class="title">{{ item.title }}</h2>
                <p class="price">
                    <span class="old">￥{{ item.market_price }}</span>
                    <span class="now">￥{{ item.sell_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <!-- 加载更多 -->
        <mt-button type="primary" size="large" @click="getMoreHandle">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            goodsList: [],
            pageIndex: 1
        }
    },
    created()  {
        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            this.$axios.get('/api/getgoods?pageindex=' + this.pageIndex)
            .then(result => {
                if(result.data.status === 0) {
                    this.goodsList = result.data.message
                    if(result.data.message.length !== 0) {
                        this.goodsList = this.goodsList.concat(result.data.message)
                    }else {
                        Toast("没有更多商品")
                    }
                }else {
                    Toast("网络错误，获取商品信息失败")
                }
            })
        },
        getMoreHandle() {
            this.pageIndex++
            this.getGoodsList()
        },
        goDetail(id) {
            //$route:路由参数对象,比如params/query
            //$router:路由的导航对象，实现路由的前进后退、跳转指定URL
            // this.$router.push("/home/goodsInfo" + id)
            // this.$router.push({ path: "/home/goodsInfo" + id })
            this.$router.push({ name: 'GoodsInfo', params: {id} })
        }
    }
}
</script>

<style>
.goods_list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 15px;
    justify-content: space-between;
}
.goods_list .goods_item {
    width: 48%;
    border-radius: 9px;
    box-shadow: 0 0 8px #ccc;
    margin: 7px 0;
    padding: 7px;
    display: flex;
    /* 主轴方向 */
    flex-direction: column;
    justify-content: space-between;
}
.goods_list .goods_item img {
    width: 100%;
    border-radius: 5px;
}
.goods_list .info .title {
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goods_list .info p {
    margin: 0;
}
.goods_list .info .price {
    display: flex;
    justify-content: left;
}
.goods_list .goods_item .info .price .old {
    color: #ccc;
    text-decoration: line-through;
    font-size: 12px;
    transform: scale(.9);
    transform-origin: left;
}
.goods_list .goods_item .info  .price .now {
    color: pink;
    font-size: 12px;
    margin-left: 5px;
}
.goods_list .info .sell {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 8px;
} 
.mint-button--primary  {
    font-size: 16px;
    background-color: pink;
}
</style>