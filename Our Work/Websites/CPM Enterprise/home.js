// Marquee: duplicate logos for seamless loop
const tr=document.getElementById('track');tr.innerHTML+=tr.innerHTML+tr.innerHTML+tr.innerHTML;
tr.style.animationDuration='40s';
tr.style.setProperty('--x','-50%');
// Project filters
document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  document.querySelectorAll('.proj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='all'&&!p.dataset.c.split(' ').includes(b.dataset.f)));
});
// Testimonial slider (auto-hides dots if only one)
const sl=[...document.querySelectorAll('.tslide')],dots=document.getElementById('dots');let ti=0;
function show(i){sl.forEach((s,j)=>s.classList.toggle('on',j===i));[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));ti=i}
if(sl.length>1){sl.forEach((_,i)=>{const b=document.createElement('button');b.onclick=()=>show(i);dots.appendChild(b)});show(0);setInterval(()=>show((ti+1)%sl.length),7000)}
// Contact form -> opens email client (replace with your form backend if desired)
document.getElementById('cform').onsubmit=e=>{
  e.preventDefault();
  const g=id=>document.getElementById(id).value;
  const body=`Name: ${g('n')}%0D%0AEmail: ${g('e')}%0D%0APhone: ${g('p')}%0D%0AService: ${g('s')}%0D%0A%0D%0A${encodeURIComponent(g('m'))}`;
  location.href=`mailto:Admin@cpmenterprise.com?subject=${encodeURIComponent('Website inquiry from '+g('n'))}&body=${body}`;
  document.getElementById('ok').style.display='block';
};
