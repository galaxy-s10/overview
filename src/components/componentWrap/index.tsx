import { useEffect, useState } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import style from './index.less';
import 'highlight.js/styles/github-dark.css';
import '../../assets/css/github-markdown.min.css';
import '../../assets/css/override-markdown.css';

interface Iprops {
  name: string;
  html: string;
  children: JSX.Element[];
}
export default function ComponentWrap(props: Iprops) {
  const { name, html } = props;
  const [mdhtml, setMdhtml] = useState(html);
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
    setMdhtml(marked(mdhtml));
  };
  useEffect(() => {
    initMarked();
  }, []);
  return (
    <>
      <h1 className={style.name}>{name}</h1>
      <p>{props.children[0]}</p>
      <h2 className={style.whenUse}>何时使用</h2>
      <p>{props.children[1]}</p>
      <h2 className={style.codeDemo}>代码演示</h2>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: mdhtml }}
      ></div>
    </>
  );
}
