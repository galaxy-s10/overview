/**
 * 删除对象中值为: null, undefined, NaN, ''的属性
 */
export const deleteNullObjectKey = (obj: object | null) => {
  for (const key in obj) {
    /**
     * for in 在循环对象的属性时也会遍历原型链，所以当遍历多继承的对象时效率较低。
     * 因此使用hasOwnProperty控制只遍历自身属性
     */
    if (obj.hasOwnProperty(key)) {
      if ([null, undefined, NaN, ''].includes(obj[key])) {
        delete obj[key];
      }
    }
  }
};

/**
 * 判断数据类型
 * https://github.com/iview/iview/blob/2.0/src/utils/assist.js
 */
export const judgeType = (obj: any): string => {
  const { toString } = Object.prototype;
  const map: any = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return map[toString.call(obj)];
};

/**
 * myName转化为my-name
 * https://github.com/vueComponent/ant-design-vue/blob/HEAD/antd-tools/generator-types/src/utils.ts
 * @param  {string} input
 * @returns string
 */
export const toKebabCase = (input: string): string =>
  input.replace(
    /[A-Z]/g,
    (val, index) => (index === 0 ? '' : '-') + val.toLowerCase()
  );

/**
 * 获取滚动条宽度
 * https://github.com/iview/iview/blob/2.0/src/utils/assist.js
 */
export const getScrollBarSize = () => {
  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  const outer = document.createElement('div');
  const outerStyle = outer.style;

  outerStyle.position = 'absolute';
  outerStyle.top = '0px';
  outerStyle.left = '0px';
  outerStyle.pointerEvents = 'none';
  outerStyle.visibility = 'hidden';
  outerStyle.width = '200px';
  outerStyle.height = '150px';
  outerStyle.overflow = 'hidden';
  console.log(outerStyle.top);

  outer.appendChild(inner);

  document.body.appendChild(outer);

  const widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  return widthContained - widthScroll;
};

/**
 * 使用json进行深克隆
 */
export const deepCloneByJson = (obj: object): object =>
  JSON.parse(JSON.stringify(obj));

/**
 * 判断字符串的开头和结尾是否有空格,
 * 有空格就返回true,否则返回false
 * @param value
 * @returns boolean
 */
export const judgeStringSpace = (value: string): boolean => {
  const reg1 = /^\s+/g; // 匹配开头空格
  const reg2 = /\s+$/g; // 匹配结尾空格
  if (reg1.test(value) || reg2.test(value)) {
    return true;
  }
  return false;
};

/**
 * 时间戳转换成日期
 * 将new Date()或时间戳转换为："2020-10-01 12:24:03"
 * 不能传"2020-10-01",会转成"2020-10-01 08:00:00"
 */
export const formatTime = (v: string | number) => {
  const date = new Date(v);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `0${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}-${m}-${d} ${h}:${minute}:${second}`;
};

/**
 * 将内容复制到剪切板
 */
export const copyToClipBoard = (text: string): void => {
  const oInput = document.createElement('input');
  oInput.value = text;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令
  oInput.parentElement?.removeChild(oInput);
};

/** 返回设备类型 */
export const judgeDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  console.log(ua);
  const isAndroid = ua.indexOf('android') !== -1; // Android
  const isiOS = ua.indexOf('iphone os') !== -1; // iOS
  const isIpad = ua.indexOf('ipad') !== -1; // ipad
  return {
    isAndroid,
    isiOS,
    isIpad,
  };
};

/** 判断是否是浏览器环境 */
export const isBrowser = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
