window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
      navbar.style.backgroundColor = 'grey';
    } else {
      navbar.style.backgroundColor = 'brown';
    }
  });
  