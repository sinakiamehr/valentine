const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const overlay=document.getElementById("overlay");
const title=document.getElementById("title");
const visualContainer=document.getElementById("visual");
let yesScale=1;
function growYes(){
  yesScale*=1.25;
  yesBtn.style.transform=`scale(${yesScale})`;
  // Update text and image on No click
  title.innerText = "Zahr Mar! No too Koochassss!😤";
  visualContainer.innerHTML = '<img src="Yali.png" alt="Angry reaction" class="cat" style="width:220px;height:auto;border-radius:16px;">';
  
  const rect=yesBtn.getBoundingClientRect();
  const w=rect.width*yesScale;
  const h=rect.height*yesScale;
  noBtn.style.transform=`scale(${Math.max(0.8,1-(yesScale-1)*0.1)})`;
  noBtn.style.opacity=`${Math.max(0.4,1-(yesScale-1)*0.2)}`;
  if(w>=window.innerWidth*0.95||h>=window.innerHeight*0.95){showOverlay()}
}
function showOverlay(){overlay.hidden=false;spawnHearts(24)}
function spawnHearts(n){for(let i=0;i<n;i++){const el=document.createElement("div");el.className="confetti-heart";el.textContent="❤";const left=Math.random()*100;const size=16+Math.random()*24;const duration=2.5+Math.random()*2.5;el.style.left=`${left}vw`;el.style.fontSize=`${size}px`;el.style.animationDuration=`${duration}s`;document.body.appendChild(el);setTimeout(()=>{el.remove()},duration*1000)}}
noBtn.addEventListener("click",growYes);
yesBtn.addEventListener("click",showOverlay);
window.addEventListener("resize",()=>{const rect=yesBtn.getBoundingClientRect();const w=rect.width*yesScale;const h=rect.height*yesScale;if(w>=window.innerWidth*0.95||h>=window.innerHeight*0.95){overlay.hidden=false}});
