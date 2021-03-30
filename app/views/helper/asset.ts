import e from './env';
import tags from '../tags';
import { Context } from '../../modules/api';

let assetBaseUrl = () => e.env.assetBaseUrl;

export function assetUrl(path: string) {
  return `${assetBaseUrl()}/assets/${path}`;
}

function cssAt(path: string) {
  return tags.link(assetUrl(path));
}

function jsAt(path: string) {
  return tags.script(true, assetUrl(path));
}

export function jsModule(name: string) {
  return jsAt(`compiled/${name}${e.env.minifiedAssets?'.min':'.dev'}.js`);
}

export const cssTag = (name: string) =>
  cssAt(`css/${name}.dark.${e.env.minifiedAssets?'min':'dev'}.css`);


export const editorTag = () => jsModule('rotide');

export const embedJsUnsafe = (js: string) => (ctx: Context) => {
  let nonce = ctx.nonce ? ` nonce="${ctx.nonce}"`:'';

  return `<script${nonce}>${js}</script>`;
};

export const embedJsUnsafeLoadThen = (js: string) => (ctx: Context) => {
  return embedJsUnsafe(`chest.load.then(() =>{${js}})`)(ctx);
};

export const safeJsonValue = (_: any) => JSON.stringify(_);
