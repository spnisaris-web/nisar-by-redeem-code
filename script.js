// Front-end integration placeholder.
// Your authorized API should be called through a secure backend.
// Never expose a private API key in GitHub Pages JavaScript.

document.addEventListener("DOMContentLoaded",()=>{if(REDEEM_CONFIG.apiEnabled&&REDEEM_CONFIG.apiBaseUrl)loadCodes()});

async function loadCodes(){
  try{
    const r=await fetch(REDEEM_CONFIG.apiBaseUrl+"/api/codes",{headers:{Accept:"application/json"}});
    if(!r.ok)throw new Error("API request failed");
    const data=await r.json();
    renderCodes(Array.isArray(data.codes)?data.codes:[]);
  }catch(e){console.error(e)}
}
function renderCodes(codes){
  const box=document.getElementById("codeList"); if(!codes.length)return;
  box.className="code-grid";
  box.innerHTML=codes.map(x=>`<article class="code-card">
    <div class="code-top"><span>● ACTIVE</span><span>${esc(x.region||"All regions")}</span></div>
    <code>${esc(x.code)}</code>
    <p>Expires: ${esc(x.expiresAt||"As specified by issuer")}</p>
    <button onclick="copyCode('${encodeURIComponent(x.code)}')">Copy code</button>
    <a class="redeem" href="${REDEEM_CONFIG.officialRedeemUrl}" target="_blank" rel="noopener">Redeem on official site →</a>
  </article>`).join("");
}
async function copyCode(v){await navigator.clipboard.writeText(decodeURIComponent(v));alert("Code copied.");}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}