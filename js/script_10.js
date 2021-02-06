const buttonArr = Array.from(document.querySelectorAll(".button"));
const melodyArr = Array.from(document.querySelectorAll(".melody"));

const removeActive = () =>
  buttonArr.forEach((btn) => btn.classList.remove("active"));
const selectAudio = (name) =>
  melodyArr.filter((sound) => sound.classList.contains(name))[0];
const stopAudio = () => melodyArr.forEach((sound) => sound.pause());
const startAudio = (audio) => {
  audio.currentTime = 0;
  audio.play();
};

buttonArr.forEach((btn) => btn.addEventListener("click", connectBtnWithAudio));
function connectBtnWithAudio() {
  stopAudio();
  removeActive();
  this.classList.add("active");
  const btnName = this.getAttribute("data-btnName");
  startAudio(selectAudio(btnName));
}

document.addEventListener("keydown", connectPressedBtnWithAudio);
function connectPressedBtnWithAudio(e) {
  const btnCode = e.code;
  const condition = buttonArr
    .map((li) => li.getAttribute("data-btnName"))
    .includes(btnCode);
  if (!condition) return;
  stopAudio();
  removeActive();
  const pressedBtn = buttonArr.filter(
    (btn) => btn.getAttribute("data-btnName") === btnCode
  )[0];
  pressedBtn.classList.add("active");
  startAudio(selectAudio(btnCode));
}






	
