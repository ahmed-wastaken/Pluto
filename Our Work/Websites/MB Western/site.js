const M='https://impro.usercontent.one/appid/oneComWsb/domain/mbwestern.com/media/mbwestern.com/onewebmedia/';
const u=(f,e,t,w=700)=>M+f+'?etag=%22'+e+'%22&sourceContentType=image%2F'+t+'&withoutEnlargement&resize='+w+'%2C'+w+'&quality=60';
const IMG={logo:M+'13608b1.png?etag=%223dec2-5fc05439%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=574%2B150',
hero:u('Depositphotos_111729120_xl-2015.jpg','e12417-5fbd9386','jpeg',1000),
pile:u('Depositphotos_77094081_xl-2015.jpg','55f48a-5fbc21a3','jpeg'),
pile2:u('IMG_0522.jpg','35a891-5fbc29a6','jpeg'),
civil:u('shutterstock_320022941.jpg','cdb12f-5fbc154a','jpeg'),
civil2:u('Depositphotos_35316117_ds.jpg','9d984e-5fbc1dbd','jpeg'),
marine:u('Depositphotos_105489246_xl-2015.jpg','698408-5fbc22c2','jpeg'),
marine2:u('Depositphotos_111729120_xl-2015.jpg','e12417-5fbd9386','jpeg'),
j1:u('2020%2004%2006%20newpp-hwt-pht-20200406-311-drone%20central%20plant_1x1.jpg','21a24-5fc2db2d','jpeg'),
j2:u('IMG_0547.png','ba1987-5fc2cc0a','png'),
j3:u('Bratio3x2_1200.jpg','174c2-5fc2c743','jpeg'),
j4:u('Depositphotos_16950051_xl-2015.jpg','8f6227-5fbd9109','jpeg'),
j5:u('shell-deerpark-refinery.jpg','1b8e2-5fc2e6e6','jpeg')};
const ICO=n=>`<svg class="i"><use href="#${n}"/></svg>`;
// logo with text fallback
['logo','flogo'].forEach(id=>{const el=document.getElementById(id);if(el)el.src=IMG.logo});
// jobs
const JOBS=[
['j1','Houston Area Water Corporation (City of Houston)','Raw Water Intake Structure, Earthwork and Pump Station','$4,567,632.00',['Raw Water Intake Structure for Northeast Purification Plant, Lake Houston.','A 66 diameter sheet pile cell was constructed in the lake to access the lake bottom in 23 feet of water. A second braced rectangular sheet pile tunnel pit was installed to allow the 84 inch bore from 20 feed deeper. The 84 inch intake pipe was installed from the offshore intake structure to the onshore pumping station, some 550 feet away.']],
['j2','Fort Bend County','Willow Fork of Buffalo Bayou Channel Bank Stabilization','$3,165,000',['The project consist of stabilizing the channel banks along Willow Fork of Buffalo Bayou. The channel has multiple slope failures along their length. The banks became saturated as result of high water from Hurricane Harvey and failed when the water receded.','Sheet piling will be driven at the base of the channel slopes and extend above the channel bottom to a height that will allow for a stable slope above the wall. The completed slopes will be vegetated above the walls.']],
['j3','TxDOT / James Construction','Hempstead Road Reconstruction','$3,540,000',['Located within the city of Houston in Harris County, this project is a vital link on the Hempstead roadway and will provide traffic an alternate route to US 290. The proposed project consists of the construction of a six-lane divided urban street facility.','This project consists of a significant amount of construction on UPRR facilities, including the replacement of three existing railroad overpasses and related track realignment.']],
['j4','LBC Terminals','Sheet Pile Retaining Wall','$8,210,198',['Sheet Pile Retaining Wall, LBC Terminals. A new steel sheet pile wall, complete with double channel wales, tie rods and sheet pile anchor wall was installed to allow expansion of the access road along the edge of the existing drainage ditch.']],
['j5','Shell','Shell Deer Park Sheet Piling','Undisclosed',['Project is located at the Shell Deer Park Refinery complex. For this exciting project, MB Western Industrial Contracting Company furnished the necessary labor, equipment, and material to complete the installation of 10 pairs of steel sheet piling in 20 feet lengths as directed along the existing slope.','Scope includes degrading of the top of the levee sufficiently to allow access for the 110 Ton Crawler crane to the top of the levee all along the pile alignment.']]];
const jl=document.getElementById('joblist')||document.createElement('div');jl.innerHTML=JOBS.map(j=>`<article class="job rv"><div class="clip"><div class="ph" data-i="${j[0]}"></div></div><div><h3>${j[1]}</h3><div class="sub">${j[2]}</div><span class="amt">${ICO('doc')}Contract Amount: ${j[3]}</span>${j[4].map(t=>`<p>${t}</p>`).join('')}<a class="lnk" href="#contact">Get in touch ${ICO('arrow')}</a></div></article>`).join('');
// roles
const R='Manage field personnel, maintain schedules, and develop safety plans for major infrastructure projects. Will be responsible for the overall direction of a project to ensure safety while staying within budget, on schedule and meeting quality standards for the company and customer.';
const ROLES=[['Estimator','Construction Estimator to work on a diverse portfolio of projects. Projects include marine construction, industrial, and commercial projects. Candidate must have the ability to read plans, procure bids, and professionally communicate with customers, architects, engineers, in-house labor force, and subcontractors.'],
['Superintendent',R],
['Foreman','Monitor work performance and productivity of crew to ensure compliance with specifications, procedures, quality, and safety requirements. Promote job site safety, encouraging safe work practices and ensuring compliance to safety policies. Conducting daily huddles with crew and weekly tool box talks covering pertinent safety topics.'],
['Project Manager','This position works closely with the project superintendent to ensure overall direction, completion, and financial outcome of assigned projects. Oversees or participates in the allocation of resources to ensure a safe, timely, and quality project while meeting all project goals.'],
['Crane Operator',R],['Pile Driver/Welder',R],['Concrete Crew/Carpenter',R],['Field Crew/Labor',R]];
const rl=document.getElementById('roles')||document.createElement('div');
rl.innerHTML=ROLES.map((r,i)=>`<div class="acc rv${i==0?' open':''}"><button aria-expanded="${i==0}">${r[0]}${ICO('down')}</button><div class="pn"><div><p>${r[1]}</p></div></div></div>`).join('');
rl.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const a=b.parentElement;a.classList.toggle('open');b.setAttribute('aria-expanded',a.classList.contains('open'))});
// lists, images
document.querySelectorAll('[data-l]').forEach(ul=>ul.innerHTML=ul.dataset.l.split('|').map(t=>`<li>${ICO('check')}<span>${t}</span></li>`).join(''));
document.querySelectorAll('[data-i]').forEach(d=>{d.style.backgroundImage=`url("${IMG[d.dataset.i]}")`});
document.querySelectorAll('nav a[data-p]').forEach(l=>l.classList.toggle('on',l.dataset.p===document.body.dataset.page));
document.getElementById('mb').onclick=()=>document.getElementById('nav').classList.toggle('open');
addEventListener('scroll',()=>document.getElementById('hd').classList.toggle('s',scrollY>10),{passive:true});
if(location.hash)setTimeout(()=>{const t=document.getElementById(location.hash.slice(1));t&&t.scrollIntoView({behavior:'smooth'})},250);
// reveal + counters
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);
t.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n,f=c.dataset.f||'',fmt=v=>(n===1989?v:v.toLocaleString())+f;if(calm){c.textContent=fmt(n);return}
const s=performance.now();(function k(now){const p=Math.min((now-s)/1400,1),v=Math.round(n*(1-Math.pow(1-p,3)));c.textContent=fmt(v);if(p<1)requestAnimationFrame(k)})(s)})}),{threshold:.15});
function watch(){document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el))}
// form
(document.getElementById('cf')||{}).onsubmit=e=>{e.preventDefault();const f=e.target;
location.href='mailto:info@mbwestern.com?subject='+encodeURIComponent('Project inquiry from '+f.n.value)+'&body='+encodeURIComponent(f.m.value+'\n\n'+f.n.value+'\n'+f.e.value)};
watch();