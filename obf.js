document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("showButton").addEventListener("click", onImpButtonClick);
});

let isDeobf = false;
function onImpButtonClick() {
  if (isDeobf) return;
  setContact();
  isDeobf = true;

  const elements = document.getElementsByClassName("obf");
  Array.from(elements).forEach((el) => {
    el.innerHTML = deobf(el.innerHTML)
  });
  document.getElementById("mail").href = "mailto:" + document.getElementById("mail2").innerHTML + document.getElementById("mail3").innerHTML;
  document.getElementById("showButton").style.setProperty("display", "none");
  document.documentElement.style.setProperty("--hiddenDisplay", "block");
}

const key = "df32Mo%ekMN187wr"
function deobf(text) {
  return text.split('')
    .map((c, i) => String.fromCharCode(
      c.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join('');
}

function setContact() {
  // __SET_CONTACT__
}