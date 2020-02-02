export function menuOpen() {
  if (document.getElementById('header').className == 'main-header') {
    document.getElementById('header').className = 'main-header active';
  }
  else {
    document.getElementById('header').className = 'main-header';
  }
}
