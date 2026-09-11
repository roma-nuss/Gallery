import{a as w,S,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const R="23838686-34a57fb5ee7e13f7202c685b1",q="https://pixabay.com/api/";async function m(o="",r){return(await w.get(`${q}`,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const B={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreButton:document.querySelector(".load-more-btn")},{form:M,galleryContainer:f,loader:g,loadMoreButton:d,galleryItem:x}=B,$=new S(".gallery a");function p(o){const r=o.map(s=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:l,views:v,comments:b,downloads:L}=s;return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${i}"
        alt="${t}"
      />
    </a>

    <div class="image-info">
      <div class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-value">${l}</p>
      </div>

      <div class="info-item">
        <p class="info-title">Views</p>
        <p class="info-value">${v}</p>
      </div>

      <div class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-value">${b}</p>
      </div>

      <div class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-value">${L}</p>
      </div>
    </div>
  </li>
`}).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function I(){f.innerHTML=""}function y(){g.classList.add("is-visible")}function h(){g.classList.remove("is-visible")}function E(){d.classList.add("is-visible")}function c(){d.classList.remove("is-visible")}let a=1,u="";async function O(o){o.preventDefault();const r=o.currentTarget,{query:s}=r.elements,i=s.value.trim();if(!i){n.error({message:"Empty search",position:"bottomRight"});return}a=1,u=i,c(),I(),y();try{const e=await m(u,a);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}r.reset(),p(e.hits),a*15<e.totalHits?E():(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}catch(e){n.error({message:e.message,position:"bottomRight"})}finally{h()}}async function P(){a+=1,y();try{const o=await m(u,a);p(o.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),a*15>=o.totalHits&&(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}catch(o){a-=1,n.error({message:o.message,position:"bottomRight"})}finally{h()}}M.addEventListener("submit",O);d.addEventListener("click",P);
//# sourceMappingURL=index.js.map
