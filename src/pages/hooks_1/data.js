// 获取所有整理好的tab
// 响应结构
let a = {
  code: 200,
  data: {
    tablist: [
      {
        id: 1,
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
export const tabList = a;
/**
 * 第二个接口，根据tab的id获取对应的tab数据，应该返回：所有有库存的装扮，以及限量装扮卖完后且在自动下架时间之前（即一个装扮是限量的，
 * 它卖完后，它的库存是0了，但它不会立即下架，而是会在买完后的autoDownTime后才下架）的装扮
 * 1，目前的显示的装扮，可以说是限量不限时的，即一个商品卖完了才会下架，并不会在某个时间内不管卖没卖完都会下架（即不限时）
 * 2，如何判断某个装扮是自己的。后端判断请求接口时，不管有没有登录，都得有owned这个字段，如果没登录，那么owned就全是false,
 * 如果登录了，则根据当前用户判断每个装扮是否拥有，给每个装扮返回一个owned字段并设置对应的值。
 * 3，如果一个限量的装扮a，且a的有效期是15天，a被卖完的话，5天后会自动下架了，但是假设我是下最后一个买a的，所以a下架后，
 * 我的装扮a应该还有10天，那么这时候就和第一点冲突了，因此以第一点为准。即我买的这个a不会显示在tabdata里，只会显示在mine里
 */
// 请求参数
let xx = {
  tabid: 1,
  page: 1,
  limit: 10,
};
// 响应结构
let b = {
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
      },
      {
        goodsid: 2, //当前装扮的id
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
      },
    ],
    more: true,
  },
};
/**
 * 第三个接口，获取当前用户所有未过期的装扮。对比第二个接口，最主要是多了一个buyTime字段
 * 这里的装扮应该是不管限不限量了，只要过期了就不返回这个装扮。
 */
// 请求参数
let dd = {
  tabid: 1,
  page: 1,
  limit: 10,
};

// 响应结构
let c = {
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
    ],
    more: true,
  },
};

/**
 * 第四个接口，点击buy的时候。
 * 1，前端支付
 *    第一种方式：这里前端不判断金额，前端只负责把选中的装扮id数组传给后端，后端计算好金额后返回金额给前端
 *    第二种方式：前端把装扮id数组以及计算好的金额传给后端，但有风险（可直接通过接口篡改金额），不使用这个方式。
 * 2，后端判断有没有支付
 */

// 1，前端支付
// 请求参数
let d = {
  goodsid: [1, 2], //数据结构
};

let bb = [
  {
    id: 1,
    name: 'Face', //tab名称
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
    children: [
      {
        id: 101,
        name: 'Eyes', //tab名称
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', //tab图标
      },
    ],
  },
];
