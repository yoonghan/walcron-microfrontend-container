import{_ as n}from"./preload-helper-101896b7.js";import u from"./__federation_expose_Mount-588f0447.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=o=>{o&&o instanceof Function&&n(()=>import("./web-vitals-dfcc5b9a.js"),[]).then(({onCLS:r,onFID:s,onFCP:i,onLCP:e,onTTFB:t})=>{r(o),s(o),i(o),e(o),t(o)})};function d(o){console.log(o)}u(document.getElementById("root"),!0);l(d);
