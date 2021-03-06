import { memo, useEffect, useState } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import style from './index.less';
import 'highlight.js/styles/github.css';
import '../../assets/css/github-markdown.min.css';
import '../../assets/css/override-markdown.css';

interface Iprops {
  name: string;
  html?: string;
  children: JSX.Element[];
}
const ComponentWrap = (props: Iprops) => {
  const { name, html } = props;
  const [mdhtml, setMdhtml] = useState<Iprops['html']>(html);
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });
  const initMarked = () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    mdhtml && setMdhtml(marked(mdhtml));
  };

  useEffect(() => {
    initMarked();
  }, []);
  useEffect(() => {
    console.log('mdhtml副作用', mdhtml);
  }, [mdhtml]);
  return (
    <>
      <h1 className={style.name}>{name}</h1>
      <div>{props.children[0]}</div>
      <h2 className={style.whenUse}>何时使用</h2>
      <div>{props.children[1]}</div>
      <h2 className={style.demo}>Demo</h2>
      <div>{props.children[2] || <div>暂无~</div>}</div>

      {mdhtml && (
        <>
          <h2 className={style.codeDemo}>代码演示</h2>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: mdhtml }}
          ></div>
        </>
      )}
    </>
  );
};
export default memo(ComponentWrap);
