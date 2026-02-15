import{a as c,S as d,i as n}from"./assets/vendor-LD8uiLYY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u="54627953-91354900f2659ddc705c1dc29";function f(r){return c.get("https://pixabay.com/api/",{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits)}let p=new d(".gallery a",{navButtons:!0,navText:["←","→"],showCounter:!0});function m(r){const o=document.querySelector(".gallery"),a=r.map(s=>`
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
    `).join("");o.innerHTML=a,p.refresh()}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function g(){document.querySelector(".loader").classList.add("is-loading")}function h(){document.querySelector(".loader").classList.remove("is-loading")}const i={createGallery:m,clearGallery:y,showLoader:g,hideLoader:h};let v=document.querySelector(".form");v.addEventListener("submit",r=>{r.preventDefault();const o=document.querySelector("input").value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query",titleColor:"#fff",messageColor:"#fff",position:"topRight"});return}i.clearGallery(),i.showLoader(),f(o).then(a=>{if(i.hideLoader(),a.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}i.createGallery(a)}).catch(a=>{i.hideLoader(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})})});
//# sourceMappingURL=index.js.map
