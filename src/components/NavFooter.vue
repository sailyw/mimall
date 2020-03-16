<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://blog.csdn.net/qq_34634181" target="_blank">saiyi绒小花</a><span>|</span>
            <a href="https://blog.csdn.net/qq_34634181" target="_blank">vue全家桶课程</a><span>|</span>
            <a href="https://blog.csdn.net/qq_34634181" target="_blank">es6基础课程</a><span>|</span>
            <a href="https://blog.csdn.net/qq_34634181" target="_blank">react全家桶课程</a><span>|</span>
            <a href="https://blog.csdn.net/qq_34634181" target="_blank">微信小程序</a>
        </div>
        <div class="copyRight">CopyRight @2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    .footer{
        height:234px;
        background-color: #333333;
        border-top: 1px solid #ff6600;
        font-size: 16px;
        color: #999999;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            margin-bottom: 13px;
            a{
                color: #999999;
                display: inline-block;
                &:hover{
                    color: #ff6600;
                }
            }
            span{
                margin: 0 10px;
            }
        }
        .copyRight{
            .domain{
                color: #ff6600;
            }
        }
    }
</style>