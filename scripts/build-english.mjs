// Generate a fully translated static /en/ entry from the Persian page and shared copy.
// Run this after editing index.html or script.js; GitHub Pages itself needs no build.
import fs from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const source=fs.readFileSync(path.join(root,'script.js'),'utf8');
const marker='  const root=document.documentElement;';
if(!source.includes(marker))throw new Error('Could not locate the translation dictionary');
const context={};
vm.runInNewContext(source.replace(marker,'  globalThis.translations=copy; return;\n'+marker),context);
const english=context.translations.en;
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const checked=key=>{if(typeof english[key]!=='string')throw new Error('Missing English translation: '+key);return escape(english[key]);};
html=html.replace('<html lang="fa" dir="rtl"','<html lang="en" dir="ltr"');
html=html.replace(/(<([a-z][\w-]*)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/gi,
  (_,start,tag,key,content,end)=>start+checked(key)+end);
html=html.replace(/<[^>]*\bdata-i18n-aria="([^"]+)"[^>]*>/g,(tag,key)=>{
  if(!/\baria-label="[^"]*"/.test(tag))throw new Error('Missing aria-label: '+key);
  return tag.replace(/\baria-label="[^"]*"/,'aria-label="'+checked(key)+'"');
});
html=html.replace(/<[^>]*\bdata-i18n-alt="([^"]+)"[^>]*>/g,(tag,key)=>{
  if(!/\balt="[^"]*"/.test(tag))throw new Error('Missing alt: '+key);
  return tag.replace(/\balt="[^"]*"/,'alt="'+checked(key)+'"');
});
html=html.replace(/<title>[^<]*<\/title>/,'<title>'+checked('title')+'</title>')
  .replace(/(<meta name="description" content=")[^"]*(">)/,'$1'+checked('description')+'$2')
  .replace(/(<meta property="og:title" content=")[^"]*(">)/,'$1'+checked('title')+'$2')
  .replace(/(<meta property="og:description" content=")[^"]*(">)/,'$1'+checked('description')+'$2')
  .replace(/(<button class="lang-switch" id="language-toggle" type="button" aria-label=")[^"]*(">)[^<]*(<\/button>)/,'$1'+checked('languageAria')+'$2فا$3')
  .replaceAll('./assets/','../assets/')
  .replace('href="./styles.css"','href="../styles.css"')
  .replace('src="./script.js"','src="../script.js"');
if(!html.includes('<html lang="en" dir="ltr"'))throw new Error('Could not set English language');
for(const directory of ['en','dist/en']){
  fs.mkdirSync(path.join(root,directory),{recursive:true});
  fs.writeFileSync(path.join(root,directory,'index.html'),html);
}
console.log('Generated en/index.html and dist/en/index.html');
