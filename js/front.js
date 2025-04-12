

const openBtn1 = document.querySelector(".news_card:first-of-type .read-more");
const closeBtn1 = document.querySelector(".news_card:first-of-type dialog button");
const dialog1 = document.querySelector(".news_card:first-of-type dialog");
openBtn1.addEventListener("click", openDialog1);
closeBtn1.addEventListener("click", closeDialog1);

function openDialog1() {
  dialog1.showModal();
}
function closeDialog1() {
  dialog1.close();
}

const openBtn2 = document.querySelector(".news_card:nth-child(2) .read-more");
const closeBtn2 = document.querySelector(".news_card:nth-child(2) dialog button");
const dialog2 = document.querySelector(".news_card:nth-child(2) dialog");
openBtn2.addEventListener("click", openDialog2);
closeBtn2.addEventListener("click", closeDialog2);

function openDialog2() {
  dialog2.showModal();
}
function closeDialog2() {
  dialog2.close();
}

const openBtn3 = document.querySelector(".news_card:nth-child(3) .read-more");
const closeBtn3 = document.querySelector(".news_card:nth-child(3) dialog button");
const dialog3 = document.querySelector(".news_card:nth-child(3) dialog");
openBtn3.addEventListener("click", openDialog3);
closeBtn3.addEventListener("click", closeDialog3);

function openDialog3() {
  dialog3.showModal();
}
function closeDialog3() {
  dialog3.close();
}