<template>
   <div id="goods_information">
       <!-- <h2>{{ this.$store.state.test }}</h2> -->
       <!-- 小球 -->
       <transition name="ball" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
           <div @transitionend="finishHandle" class="ball" v-show="flag"></div>
       </transition>
       <!-- 商品轮播 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :swiper="this.swiper"></swiper>
                </div>
            </div>
        </div>
       <!-- 商品购买 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInformation.title }}</div>
            <div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="pric">
                            市场价:
                            <del>￥{{ goodsInformation.market_price }}</del>
                            活动价:
                            <span class="now_price">￥{{ goodsInformation.sell_price }}</span>
                        </p>
                        <p class="purchase">
                            <number @getCount="getSelectedCountHandle" :maxNum="goodsInformation.stock_quantity"></number>
                            <mt-button type="primary" size="small" @click="shoppingCartAdditionHandle">加入购物车</mt-button>
                            <mt-button type="danger" size="small">立即购买</mt-button>
                        </p>
					</div>
				</div>
        </div>
       <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{ goodsInformation.goods_no }}</p>
                    <p>库存情况:{{ goodsInformation.stock_quantity }}</p>
                    <p>上架时间:{{ goodsInformation.add_time }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDescription(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain  @click="goComment(id)">商品评论</mt-button>
            </div>
		</div>
   </div>
</template>

<script>
import Swiper from '@/components/common/Swiper.vue'
import Number from '@/components/common/Number.vue'
export default {
    components: {
        Swiper,
        Number    
    },
    data() {
        return {
            id:this.$route.params.id,
            goodsInformation: {},
            swiper: [],
            selectedCount: 1,
            flag: false,
            isShow: true
        }
    },
    created()  {
        this.getGoodsInformatica()
        this.getSwipe()
    },
    methods: {
        // 获取商品信息
        getGoodsInformatica() {
            this.$axios.get("/api/goods/getinfo/" + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    this.goodsInformation = result.data.message[0]
                }
            });
        },
        // 点击跳转图文介绍
        goDescription(id) {
            this.$router.push({ name: 'GoodsDescription', params: { id } })
        },
        // 点击跳转商品评论
        goComment(id) {
            this.$router.push({ name:'GoodsComment', params: { id } })
        },
        // 获取轮播图数据
        getSwipe() {
                this.$axios.get('api/getthumimages/' + this.id)
                .then(result => {
                    if(result.data.status === 0) {
                        result.data.message.forEach(item => {
                            item.img = item.src
                        })
                        this.swiper = result.data.message
                    }
                })
            },
        // 获取所选商品数量
        getSelectedCountHandle(num) {
            // console.log("父组件接受的值" + num);
            this.selectedCount = num
        },
        // 加入购物车
        shoppingCartAdditionHandle() {
            if(this.isShow) {
                this.isShow = false
                this.flag = !this.flag
                //把数据添加到store
                //  {id: 商品id，count: 商品数量, price: 单价, stock_quantity: 库存, selected: 状态}
                let goodsList = {
                    id: this.id,
                    count: this.selectedCount,
                    price: this.goodsInformation.sell_price,
                    stock_quantity: this.goodsInformation.stock_quantity,
                    selected: false
                }
                // 拼接好的信息加入store仓库
                this.$store.commit('addToCart', goodsList)
            }
        },
        // 设置小球动画
        beforeEnter(el) {
            if(!this.isShow){
                el.style.transform = "translate(0, 0)"
            }
        },
        enter(el, done) {
            if(!this.isShow) {
                el.offsetWidth
                // 获取小球的位置
                const ball = document.querySelector('.ball').getBoundingClientRect()
                // 获取徽标的位置
                const badge = document.querySelector('.mui-badge').getBoundingClientRect()
                // 求差
                const x = badge.left - ball.left
                const y = badge.top - ball.top
                // el.style.transform = "translate(-28px, 180px)"
                el.style.transform = `translate(${x}px, ${y}px)`
                el.style.transition = "all 1s cubic-bezier(.4, -0.3, 1, .6)"
                done()
            }
        },
        afterEnter() {
            this.flag = !this.flag
        },
        // 监听过度完成
        finishHandle() {
            this.isShow = true
        }
    },
    
}
</script>

<style>

#goods_information {
    background-color: #efeff4;
}
#goods_information .mui-card-header
#goods_information .mui-card-content-inner p {
    font-size: 12px;
}
#goods_information .mui-card-footer {
    display: block;
}
/* 小球样式 */
.ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 380px;
    right: 110px;
    z-index: 999;
}
/* 商品轮播 */

/* 商品购买 */
#goods_information .price del {
    margin-right: 18px;
}
#goods_information .now_price {
    color: pink;
    font-size: 14px;
}
#goods_information .purchase {
    display: flex;
    justify-content: right;
}
#goods_information .purchase button {
    margin-left: 10px;
    font-size: 12px;
}
#goods_information .purchase .mui-btn-numbox-minus,
#goods_information .purchase .mui-btn-numbox-plus {
    margin-left: 0px;
}
#goods_information .purchase .mint-button--primary {
    background-color: lightseagreen;
}
#goods_information .purchase .mint-button--danger {
    background-color: pink;
}
/* 商品参数 */
#goods_information .mui-card-footer button {
    margin: 10px 0;
}
#goods_information .mui-card-footer .mint-button--primary {
    color: lightseagreen;
    border-color: lightseagreen;
}
#goods_information .mui-card-footer .mint-button--danger {
    color: pink;
    border-color: pink;
}

</style>