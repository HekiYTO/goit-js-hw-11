import{a as c,S as d,i as n}from"./assets/vendor-LD8uiLYY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u="54627953-91354900f2659ddc705c1dc29";function f(t){return c.get("https://pixabay.com/api/",{params:{key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const p={getImagesByQuery:f};let m=new d(".gallery a",{});function y(t){const r=document.querySelector(".gallery"),i=t.map(s=>`
      <li class="photo-card">
        <a href="${s.largeImageURL}">
          <img class="gal_element" src="${s.webformatURL}" alt="${s.tags}" />
        </a>

        <div class="stats">
          <div class="stat-item">
            <p class="stat-title">Likes</p>
            <p>${s.likes}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Views</p>
            <p>${s.views}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Comments</p>
            <p>${s.comments}</p>
          </div>

          <div class="stat-item">
            <p class="stat-title">Downloads</p>
            <p>${s.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");r.innerHTML=i,m.refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){document.querySelector(".loader").classList.add("is-loading")}function L(){document.querySelector(".loader").classList.remove("is-loading")}const a={createGallery:y,clearGallery:g,showLoader:h,hideLoader:L};let v=document.querySelector("button");v.addEventListener("click",()=>{event.preventDefault();const t=document.querySelector("input").value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query",titleColor:"#fff",messageColor:"#fff",position:"topRight"});return}a.clearGallery(),a.showLoader(),p.getImagesByQuery(t).then(r=>{if(a.hideLoader(),r.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}a.createGallery(r)}).catch(r=>{a.hideLoader(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})})});
//# sourceMappingURL=index.js.map
