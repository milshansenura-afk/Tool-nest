/* ToolNest V3: presentation-only enhancements, preserves all V2 tool handlers. */
(()=>{
const theme=document.getElementById('theme');
function syncTheme(){const dark=document.body.classList.contains('dark');theme.innerHTML=dark?'☀ <span>Light mode</span>':'☾ <span>Dark mode</span>';theme.setAttribute('aria-pressed',String(dark));}
syncTheme();theme.addEventListener('click',()=>requestAnimationFrame(syncTheme));
const directory=document.getElementById('directory');
const oldOpen=openTool;
openTool=function(tool){directory.hidden=true;oldOpen(tool);document.getElementById('workspace').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});};
const oldBack=document.getElementById('back').onclick;
document.getElementById('back').onclick=function(){oldBack?.();directory.hidden=false;document.getElementById('workspace').hidden=true;window.scrollTo({top:0,behavior:'smooth'});};
const oldRender=render;
render=function(){oldRender();document.getElementById('tool-count').textContent=cards.children.length===1&&cards.children[0].tagName!=='BUTTON'?'0 tools':`${cards.querySelectorAll('button.card').length} tools`;};
render();
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!e.ctrlKey&&!e.metaKey){e.preventDefault();document.getElementById('search').focus();}});
})();
