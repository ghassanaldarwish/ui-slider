import*as e from"react";import*as r from"@radix-ui/react-slider";import{cn as t}from"@wds-utilities/cn";var o=function(){return o=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},o.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n=e.forwardRef((function(t,n){return e.createElement(r.Track,o({ref:n},t))})),a=e.forwardRef((function(t,n){return e.createElement(r.Range,o({ref:n},t))})),l=e.forwardRef((function(t,n){return e.createElement(r.Thumb,o({ref:n},t))})),i=e.forwardRef((function(i,s){var c=i.className,f=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}(i,["className"]);return e.createElement(r.Root,o({ref:s,className:t("relative flex w-full touch-none select-none items-center",c)},f),e.createElement(n,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"},e.createElement(a,{className:"absolute h-full bg-primary"})),e.createElement(l,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"}))}));i.displayName=r.Root.displayName;export{i as Slider};
//# sourceMappingURL=index.js.map
