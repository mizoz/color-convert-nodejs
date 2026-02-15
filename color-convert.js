#!/usr/bin/env node
/** Color format converter (HEX/RGB) */
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: color-convert.js <#hex|rgb(r,g,b)>');process.exit(1);}
const v=a[0];
if(v.startsWith('#')){const h=v.slice(1);console.log(`RGB: (${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)})`);}
else{const m=v.match(/\d+/g);console.log(`HEX: #${Number(m[0]).toString(16).padStart(2,'0')}${Number(m[1]).toString(16).padStart(2,'0')}${Number(m[2]).toString(16).padStart(2,'0')}`);}
