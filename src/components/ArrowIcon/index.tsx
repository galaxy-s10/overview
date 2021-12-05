import { memo } from 'react';
import style from './style.less';

const ArrowIcon = function (props: {
  rotate?: number;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: number;
}) {
  const { rotate, position, size } = props;
  const computedDeg = () => {
    if (rotate) {
      return rotate;
    }
    let deg = 0;
    if (position === 'left') {
      deg = 45;
    } else if (position === 'right') {
      deg = -135;
    } else if (position === 'top') {
      deg = 135;
    } else if (position === 'bottom') {
      deg = -45;
    }
    return deg;
  };
  return (
    <span
      className={style.arrowWrap}
      style={{
        width: `${size || 8}px`,
        height: `${size || 8}px`,
      }}
    >
      <span
        className={style.arrow}
        style={{
          transform: `rotate(${computedDeg()}deg)`,
        }}
      ></span>
    </span>
  );
};
export default memo(ArrowIcon);
