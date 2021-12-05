import insertCss from './insert-css';

export const generatorCss = (style: string) => {
  // console.log(style, 2222);
  insertCss(style, {
    prepend: true,
  });
};
