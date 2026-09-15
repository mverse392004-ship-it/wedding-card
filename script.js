const envelope = document.getElementById('envelopeWrapper');
const music = document.getElementById('weddingMusic');

envelope.addEventListener('click', function() {
  envelope.classList.toggle('open');

  // محاولة تشغيل الصوت بدون ما يوقف حركة الظرف لو فيه مشكلة في التراك
  if (envelope.classList.contains('open')) {
    music.play().catch(error => {
      console.log("المتصفح منع تشغيل الصوت التلقائي");
    });
  } else {
    music.pause();
  }
});