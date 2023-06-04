document.getElementById('button').addEventListener('click', function() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 1 },
  });
});