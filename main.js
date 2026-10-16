// main.js — small interactive helpers
document.addEventListener('DOMContentLoaded',()=>{
  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // hamburger menu
  const ham=document.getElementById('hamburger'); const nav=document.getElementById('main-nav');
  ham && ham.addEventListener('click',()=>{nav.classList.toggle('open'); ham.classList.toggle('is-open');});

  // simple game card click demo
  document.querySelectorAll('.game-card').forEach(card=>{
    card.addEventListener('click',()=>{
      const name=card.getAttribute('data-game')||card.querySelector('h4')?.textContent||'Game';
      // For now just open a small modal-like window with a demo message
      alert('Launching demo: '+name+' — This is a placeholder. Replace with actual game launch code.');
    })
  })

  // newsletter submit
  const form=document.getElementById('newsletter');
  form && form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=form.querySelector('#email').value;
    if(!email) return;
    // show a friendly confirm. Replace with real API call.
    alert('Thanks — '+email+' has been subscribed (demo).');
    form.reset();
  })
});
