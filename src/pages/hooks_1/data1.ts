export const tabList = {
  code: 200,
  data: {
    tablist: [
      {
        id: 111,
        name: 'Face', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [
          {
            id: 101,
            name: 'Eyes', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
          {
            id: 102,
            name: 'Nose', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
          {
            id: 103,
            name: 'Ear', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
          {
            id: 104,
            name: 'Mouth', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
          {
            id: 105,
            name: 'Eyebrow', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
          {
            id: 106,
            name: 'Beard', //tab名称
            img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
          },
        ], //二级tab
      },
      {
        id: 2,
        name: 'Hairstyle', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [], //二级tab
      },
      {
        id: 3,
        name: 'Headwear', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [], //二级tab
      },
      {
        id: 4,
        name: 'Jacket', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [], //二级tab
      },
      {
        id: 5,
        name: 'Jacket1', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [], //二级tab
      },
      {
        id: 6,
        name: 'Jacket2', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
        children: [], //二级tab
      },
    ],
  },
};

export const goodsList = {
  code: 200,
  data: {
    result: [
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
      {
        goodsid: 1, //当前装扮的id
        tag: [
          {
            id: 1, //当前标签的id
            name: 'ssr', //当前标签的内容
          },
        ], //左上角标签，
        img: 'https://img.cdn.hsslive.cn/1613141138717Billd.jpg', //预览图片
        originPrice: 999, //原价，如果是-1，代表没有原价，不会显示
        presentPrice: 1999, //现价，如果是0，代表免费，显示Free
        priority: 1, //优先级，数值小的排前面
        shelfTime: 1629791760131, //上架时间的时间戳（毫秒）
        canUseTime: 86400000, //商品有效期（毫秒），如果是-1代表永久，显示Forever
        total: 100, //总存库，如果是-1代表不限量
        sales: 99, //销量
        owned: false, //是否拥有，true：拥有；false：未拥有
        autoDownTime: 432000000, //自动下架时间（毫秒），如果是-1代表是不限量的商品，卖完了就立即下架
        buyTime: 1629791760131, //购买时的日期时间戳（毫秒）
      },
    ],
    more: true,
  },
};
