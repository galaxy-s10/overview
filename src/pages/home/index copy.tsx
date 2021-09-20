import { useEffect, useState } from 'react';
import { setLocale, getLocale, getIntl, FormattedMessage } from 'umi';

/**
 * i8n国际化
 * #warn: 使用antd的时候，可能会报：Warning: The current popular language does not exist, please check the locales folder
 * 需要在locales文件夹下添加一个zh-CN.ts。
 */

export default function Home() {
  console.log(getIntl().formatMessage({ id: 'button.save' }));
  // console.log(getIntl().formatMessage({ id: 'user.age' }));
  // console.log(styles);
  const [hobby, setHobby] = useState<any[]>(['aa', 'bb', 'cc', 'dd']);

  useEffect(() => {
    console.log('useEffect获取当前选择的语言', getLocale());
  });

  function setLangue(lang: string) {
    setLocale(lang, false); //setLocal默认刷新页面，设置false关闭刷新
    console.log('获取当前选择的语言', getLocale());
  }

  function handleClick() {
    console.log('handleClick');
    let clone = [...hobby];
    let res1 = clone.push('ee');
    setHobby(clone);
    let res2 = clone.splice(1, 1);
    setHobby(clone);
  }
  return (
    <div>
      Home页面
      <div>
        我要买100个商品
        <FormattedMessage
          id="button.buyNProducts"
          values={{ N: 100 }}
        ></FormattedMessage>
      </div>
      <div>保存 {getIntl().formatMessage({ id: 'button.save' })}</div>
      <div>
        切换语言：
        <button onClick={() => setLangue('en')}>英语</button>
        <button onClick={() => setLangue('ar')}>阿语</button>
      </div>
      <button onClick={() => handleClick()}>btn</button>
    </div>
  );
}
