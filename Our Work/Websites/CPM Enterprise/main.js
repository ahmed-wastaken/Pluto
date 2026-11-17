// Shared header + footer (injected so every page stays in sync)
(function(){
const P=document.body.dataset.page||'',H=P==='home'?'':'index.html';
const a=(h,t,k)=>`<li><a class="link${P===k?' active':''}" href="${h}">${t}</a></li>`;
document.body.insertAdjacentHTML('afterbegin',`<div id="progress"></div>
<header id="top"><div class="wrap nav">
<a href="index.html" class="brand"><img src="https://static.wixstatic.com/media/25568c_c6a193d5684f4978b37fc864c6e9a136~mv2.png/v1/fill/w_150,h_116,al_c,q_85/cropped-logo-300x233-1.png" alt="CPM Enterprise logo"><span><b>CPM Enterprise</b><small>Carolina Projects Management Enterprise</small></span></a>
<nav><ul id="menu">
${a('index.html','Home','home')}${a('about.html','About','about')}
<li class="dd"><a class="link${P==='cpm'||P==='bim'?' active':''}" href="cpm-samples.html">Samples &#9662;</a>
<ul class="sub">${a('cpm-samples.html','CPM Samples','cpm')}${a('bim-samples.html','BIM Samples','bim')}</ul></li>
<li><a class="btn btn-primary" href="${H}#contact" style="padding:10px 22px">Contact Us</a></li>
</ul></nav><button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="fgrid2">
<div><h4>CPM Enterprise</h4><p>Carolina Projects Management Enterprise<br>5520 Louisburg Rd, Raleigh, NC 27616, USA</p>
<div class="social"><a href="https://maps.google.com/?cid=10872144585425849040" aria-label="Google">G</a><a href="https://www.facebook.com/Enterprise.CPM/" aria-label="Facebook">f</a><a href="https://www.linkedin.com/company/cpm-enterprise/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/cpmenterprise/?hl=en" aria-label="Instagram">ig</a><a href="https://www.youtube.com/channel/UCEUZdjX4EBQueb7JMs658uw" aria-label="YouTube">&#9654;</a></div></div>
<div><h4>Quick Links</h4><a href="index.html">Home</a><a href="about.html">About</a><a href="${H}#services">Services</a><a href="${H}#projects">Projects</a><a href="cpm-samples.html">CPM Samples</a><a href="bim-samples.html">BIM Samples</a><a href="${H}#testimonials">Testimonials</a><a href="${H}#contact">Contact</a></div>
<div><h4>Contact</h4><a href="mailto:Admin@cpmenterprise.com">Admin@cpmenterprise.com</a><a href="tel:7042518965">704-251-8965</a><p style="margin-top:8px">Mon - Fri, 8:00 AM - 4:00 PM (EST)</p></div>
</div><div class="copy">©2025 by CPM Enterprise.</div></div></footer>`);
})();

// Header, progress bar, active link
const hd=document.getElementById('top'),pg=document.getElementById('progress');
addEventListener('scroll',()=>{
  hd.classList.toggle('scrolled',scrollY>30);
  pg.style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';
});
// Mobile menu
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
// Scroll reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
window.observeRv=()=>document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));observeRv();
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'+';let t=0;
  const step=()=>{t+=1/50;el.innerHTML=Math.round(end*Math.min(t,1))+'<em>'+suf+'</em>';if(t<1)requestAnimationFrame(step)};step();
}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));