import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://layuji.com/",
  lang: "zh-CN",
  title: "蜡羽集",
  author: {
    name: "竹芊子",
    avatar: "/images/meidoavatar.jpg"
  },
  description: "",
  favicon: "/images/favicon.png",
  social: [
    {
      name: "RSS",
      link: "/atom.xml",
      icon: "i-ri-rss-line",
      color: "orange"
    }
  ],
  search: {
    enable: false
  },
  sponsor: {
    enable: false,
    title: "我很可爱，请给我钱！",
    methods: [
      {
        name: "支付宝",
        url: "https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line"
      },
      {
        name: "QQ 支付",
        url: "https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png",
        color: "#12B7F5",
        icon: "i-ri-qq-line"
      },
      {
        name: "微信支付",
        url: "https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line"
      }
    ]
  }
});