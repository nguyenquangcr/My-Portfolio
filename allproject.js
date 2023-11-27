const backtoWorkBtn = document.querySelector(".backtoWorkBtn");
backtoWorkBtn.addEventListener("mouseover", function () {
  cursor.classList.add("link-grow_cursor");
  cursor2.classList.add("link-grow_cursor2");
});
backtoWorkBtn.addEventListener("mouseleave", function () {
  cursor.classList.remove("link-grow_cursor");
  cursor2.classList.remove("link-grow_cursor2");
});

const nextProject = document.querySelector(".nextproject-caption h2");
nextProject.addEventListener("mouseover", function () {
  cursor.classList.add("link-grow_cursor");
  cursor2.classList.add("link-grow_cursor2");
});
nextProject.addEventListener("mouseleave", function () {
  cursor.classList.remove("link-grow_cursor");
  cursor2.classList.remove("link-grow_cursor2");
});

const projectImg = document.querySelectorAll(".desktop--img");
projectImg.forEach((img) => {
  img.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
  });
  img.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
  });
});

// WORD DOM TO SET ANIMATION
function complete() {
  clearInterval(timer);
  timer = null;
}
const text = document.querySelector(".text-project");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
function onTick() {
  let span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  span.addEventListener("mouseover", function () {
    cursor.classList.add("link-grow_cursor");
    cursor2.classList.add("link-grow_cursor2");
  });
  span.addEventListener("mouseleave", function () {
    cursor.classList.remove("link-grow_cursor");
    cursor2.classList.remove("link-grow_cursor2");
  });
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
let timer = setInterval(onTick, 50);

function CompleteTextTitle() {
  clearInterval(Timer);
  Timer = null;
}
const textTitle = document.querySelector(".text-projectTitle");
const StrTextTitle = textTitle.textContent;
const SplitTextTitle = StrTextTitle.split("");
textTitle.textContent = "";
for (let i = 0; i < SplitTextTitle.length; i++) {
  textTitle.innerHTML += "<span>" + SplitTextTitle[i] + "</span>";
}
let Char = 0;
function OnTickTitle() {
  let Span = textTitle.querySelectorAll("span")[Char];
  Span.classList.add("Fade");
  Char++;
  if (Char === SplitTextTitle.length) {
    CompleteTextTitle();
    return;
  }
}
let Timer = setInterval(OnTickTitle, 50);
