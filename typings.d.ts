declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.md';
declare module 'nprogress';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}
