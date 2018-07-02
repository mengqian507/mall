<template>
    <div class="my-change">
        <div class="header">
            <div class="icon">
                <img class="icon-img" src="../../assets/images/return.png" alt="">
                <img class="icon-img" src="../../assets/images/close.png" alt="">
            </div>
            <div class="header-con">全部商品</div>
        </div>
        <ul class="menu">
            <li class="menu-li active">
                <span class="text">全部</span>
                <span class="underline"></span>
            </li>
            <li class="menu-li active">
                <span class="text">实物商品</span>
                <span class="underline"></span>
            </li>
            <li class="menu-li">虚拟商品</li>
            <li class="menu-li">优惠券</li>
        </ul>
        <div style="height: 0.2rem; background:#F2F2F2;margin-top: 2px"></div>
        <ul class="list">
            <li class="list-li">
                <div class="img-box">
                    <img class="goods-img" src="../../assets/images/bean.png" alt="">
                </div>
                <div class="goods">
                    <div class="goods-name">商品名称</div>
                    <div class="goods-introduce">商品简介</div>
                    <div class="price">兑换价格：20000竞豆</div>
                    <div class="exchange">
                        <div class="time">2018.06.31 15:59</div>
                        <div class="state">
                            <img src="../../assets/images/Oval.png" alt="">
                            <span>兑换成功</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'MyExchange'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .my-change {
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.36rem
        color #000
        .header {
            height 1.08rem
            line-height 1.08rem
            padding 0 0.4rem
            margin-bottom 0.3rem
            font-size 0.4rem
            .icon {
                float left
                margin-top 0.18rem
                .icon-img {
                    width 0.56rem
                    height 0.56rem
                }
            }
        }
        .menu{
            height 1rem
            line-height 1rem
            display flex
            .menu-li{
                width 25%
                color: #333333
                text-align center
                &.active{
                    color: #FF6262
                }
                .underline{
                    display block
                    margin: -0.1rem 0 0 1.05rem;
                    width 0.7rem
                    height 0.12rem
                    background-image: linear-gradient(90deg, #FF9749 0%, #FF5167 100%);
                    box-shadow: 0 1px 1px 0 rgba(255,255,255,0.50);
                    border-radius: 100px;
                }
            }
        }
        .list{
            width 100%
            padding 0 0.4rem
            box-sizing border-box
            .list-li{
                width 100%
                display flex
                border-bottom 1px solid #E9E9E9
                padding 0.4rem 0
                box-sizing border-box
                .img-box{
                    text-align center
                    width 3.2rem
                    height 2.4rem
                    line-height 0.24rem
                    .goods-img{
                        width 3.2rem
                        height 2.4rem
                    }
                }
                .goods{
                    width 100%
                    text-align left
                    margin-left 0.47rem
                    .goods-name{
                        font-weight bold
                        color #232323
                    }
                    .goods-introduce{
                        color #999999
                        font-size 0.3rem
                        margin 0.2rem 0 0.3rem 0
                    }
                    .price{
                        font-size 0.3rem
                        color #464646
                    }
                    .exchange{
                        .time{
                            float left
                            font-size 0.3rem
                            color #464646
                        }
                        .state{
                            float right
                            img{
                                width 0.3rem
                                height 0.3rem
                                vertical-align top
                                margin 0.1rem 0 0 0
                            }
                            span{
                                font-size 0.3rem
                                color #00BF58
                            }
                        }
                    }
                }
            }
        }
    }
</style>
