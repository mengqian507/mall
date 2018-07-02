<template>
    <div class="detail">
        <div class="header">
            <div class="icon">
                <img class="icon-img" src="../../assets/images/return.png" alt="">
                <img class="icon-img" src="../../assets/images/close.png" alt="">
            </div>
            <div class="header-con">兑换商城</div>
        </div>
        <img class="commodity-img" src="../../assets/images/bean.png" alt="">
        <div class="commodity">
            <div class="comm-title">商品名称</div>
            <div class="comm-intro">商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介</div>
            <div class="comm-message">
                <div class="bean">
                    <img src="../../assets/images/bean-52.png" alt="">
                    <span>200000竞豆</span>
                </div>
                <div class="price">参考价（500元）</div>
                <div class="stock">剩余99999件</div>
            </div>
            <div style="clear: both"></div>
        </div>
        <div style="height: 0.1rem; background:#F2F2F2 "></div>
        <div class="introduce">
            <div class="title">
                <span></span>
                商品介绍
            </div>
            <div class="content">商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介
                商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介</div>
        </div>
        <div style="height: 1px;background: #E9E9E9;width:10rem;margin: 0 auto"></div>
        <div class="introduce" style=" margin-bottom: 1.8rem">
            <div class="title">
                <span></span>
                兑换说明
            </div>
            <div class="content">商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介
                商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介</div>
        </div>
        <div class="footer">
            <div class="my-bean">我的竞豆：555555</div>
            <div class="btn">立即兑换</div>
        </div>
        <!--弹框-->
        <div class="model">
            <div class="md-modal">
                <div class="md-modal-inner">
                    <div class="md-content" style="margin-top: 20px;">
                        <div class="confirm-tips">
                            兑换将使用竞豆
                        </div>
                        <div class="btn-wrap">
                            <button class="cancel">取消</button>
                            <button class="confirm">确认</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="md-modal modal-msg md-modal-transition" v-if="mdShow1">-->
                <!--<div class="md-modal-inner">-->
                    <!--<div class="md-content" style="margin-top: 20px;">-->
                        <!--<div class="confirm-tips">-->
                            <!--{{mag}}-->
                        <!--</div>-->
                        <!--<div class="btn-wrap">-->
                            <!--<button class="confirm" @click="handleConfirm1">确认</button>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--遮罩层-->
            <div class="md-overlay"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .detail{
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.3rem
        color #000
        .header{
            height 1.08rem
            line-height 1.08rem
            padding 0 0.4rem
            margin-bottom 0.3rem
            font-size 0.4rem
            .icon{
                float left
                margin-top 0.18rem
                .icon-img{
                    width 0.56rem
                    height 0.56rem
                }
            }
        }
        .commodity-img{
            width 100%
            height 8.1rem
        }
        .commodity{
            padding 0.4rem 0.46rem 0.5rem 0.4rem
            box-sizing border-box
            text-align left
            .comm-title{
                font-family: 'MicrosoftYaHeiUI-Bold'
                font-size: 0.42rem
                color: #232323
                font-weight bold
            }
            .comm-intro{
                margin 0.2rem 0 0.23rem 0
                color: #999999
            }
            .comm-message{
                height 0.75rem
                line-height 0.75rem
                color #999
                .bean{
                    float left
                    img{
                        width 0.52rem
                        height 0.53rem
                        vertical-align top
                        margin 0.06rem 0.05rem 0 0
                    }
                    span{
                        font-family: 'MicrosoftYaHeiUI'
                        font-weight bold
                        font-size: 0.45rem
                        color: #FF8400
                    }
                }
                .price{
                    float left
                    margin-left 0.5rem
                }
                .stock{
                    float right
                }
            }
        }
        .introduce{
            padding 0.3rem 0.46rem 0.5rem 0.4rem
            box-sizing border-box
            text-align left
            .title{
                color: #232323
                margin-bottom 0.2rem
                span{
                    display inline-block
                    width 0.1rem
                    height 0.3rem
                    background: #FFA912
                    margin-right 0.1rem
                }
            }
            .content{
                color: #999999
            }
        }
        .footer{
            width 100%
            position fixed
            left 0
            bottom 0
            .my-bean{
                background #fff
                color #FF5566
            }
            .btn{
                height 1.6rem
                line-height 1.6rem
                text-align center
                background linear-gradient(90deg,rgba(255,151,73,1),rgba(255,81,103,1))
                box-shadow 0rem 1rem 1rem 0rem rgba(255,255,255,0.5)
                font-family 'MicrosoftYaHeiUI-Bold'
                font-size 0.56rem
                color #FFFFFF
            }
        }
        .model{
            .md-modal {
                position fixed
                width 7.6rem
                height 4rem
                background #fff
                left 50%
                top 50%
                transform translate(-50%, -50%)
                z-index 999
                border-radius:0.108rem
                box-shadow:0 0.10rem 0.22rem 0 rgba(0,0,0,0.1);
                .confirm-tips {
                    font-size .42rem
                    color #232323
                    margin 1rem 0 1.2rem 0
                }
                .btn-wrap{
                    display flex
                    justify-content space-around
                    .cancel, .confirm{
                        font-size 0.38rem
                        color #fff
                        width 3.2rem
                        height 0.86rem
                        background rgba(198,198,198,1)
                        box-shadow 0 0.06rem 0.11rem 0 rgba(153,153,153,0.36)
                        border-radius:0.108rem
                        &.confirm {
                            background #FF6262
                        }
                    }
                }
            }
        .md-overlay {
            background #000
            opacity 0.4
            width 100%
            height 100%
            position fixed
            top 0
            left 0
            right 0
            z-index 99
            }
        }
    }
</style>
