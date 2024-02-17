let isTextVisible = false;
document.addEventListener('DOMContentLoaded', () => {
  let sect = document.getElementsByClassName('sections');

  for (let i = 0; i <= sect.length -1; i++) {
    sect[i].addEventListener('scroll', () => {

      if (!isTextVisible) {
        showText(4400);
      } else {
        hideText();
      }
    });
  }
});

showText(2500);

function showText(time) {
    let scrollText = document.getElementById('scrollText');
    let scrollText1 = document.getElementById('scrollText1');

    setTimeout(() => {
      scrollText.classList.add('show-text');
      scrollText1.classList.add('show-text');
      isTextVisible = true;

      setTimeout(() => hideText(), 15000)
    }, time)
}

function hideText() {
  let scrollText = document.getElementById('scrollText');
  let scrollText1 = document.getElementById('scrollText1');

  scrollText.classList.remove('show-text');
  scrollText1.classList.remove('show-text');

  isTextVisible = false;
}