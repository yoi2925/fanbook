for (var i = 0; i < 20; i++) {var d = document.createElement('div');d.className = 'bubble';var a = Math.random() * 5 + 5 + 'px';d.style.width = a;d.style.height = a;d.style.bottom = Math.random() * 1000 + 'px';d.style.left = Math.random() * document.body.offsetWidth + 'px';document.body.appendChild(d);Animate(d)}

function Animate(a) {
  $(a).animate({
    bottom: document.body.offsetHeight + 'px',
    left: '+=' + ((Math.random() * 200) - 100) + 'px'
  }, Math.random() * 20000 + 4000, 'linear', function() {
    a.style.bottom = '0px';Animate(a)
  });
}

$('.color').click(function(){
    $('.bubble').css("background-color", $(this).attr('id'));
});