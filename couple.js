var female = [
  "https://i.imgur.com/wDmx6HU.jpg",
  "https://i.ibb.co/93HHJtK/IMG-20241110-131304.jpg",
  "https://i.imgur.com/upTRsUR.jpg",
  "https://i.imgur.com/PxUPRxU.jpg",
  "https://i.imgur.com/lMdXBoj.jpg",
  "https://i.imgur.com/3SKHBgX.jpg",
  "https://i.imgur.com/NYMPIHr.jpg",
  "https://i.imgur.com/q0QNph2.jpg"'
  "https://i.imgur.com/aez9IYU.jpg",
  "https://i.imgur.com/TvgbWZh.jpg",
];
var male = [
  "https://i.imgur.com/MG7M3a3.jpg",
  "https://i.imgur.com/ehTlIGL.jpg",
  "https://i.imgur.com/pPnTzm3.jpg",
  "https://i.imgur.com/AOnpyRl.jpg",
  "https://i.ibb.co/Scn8kkb/IMG-20241111-WA0001.jpg",
  "https://i.imgur.com/BTwodfc.jpg",
  "https://i.ibb.co/7vgdydS/Screenshot-20241110-185645.jpg",
  "https://i.ibb.co/BwSFXMQ/albin.jpg",
  "https://i.imgur.com/yk86EYH.jpg",
  "https://i.ibb.co/8xCNVZC/IMG-20241111-WA0011.jpg",
  "https://i.ibb.co/tCwmqJN/IMG-20240523-001855-008.jpg",
  "https://i.ibb.co/ZXXfZTG/IMG20241102102648-01-01.jpg",
  "https://i.ibb.co/jVfJJGr/1000007669-01.jpg",
  "https://i.imgur.com/DH1RPtN.jpg",
  "https://i.ibb.co/xFjT2Tz/IMG-20240419-113137-747.jpg",
  "https://i.ibb.co/6cKwYhs/IMG-20241111-WA0003.jpg",
  "https://i.imgur.com/rz2SB1f.jpg",
  "https://i.imgur.com/3vKs3qx.jpg",
  "https://i.ibb.co/rM7vj15/IMG-20241030-154754.jpg",
  "https://i.imgur.com/it4OVsI.jpg",
  "https://i.ibb.co/rw89shL/Screenshot-2024-11-01-20-31-04-826-com-whatsapp-edit.jpg",
  "https://i.imgur.com/7jemc1C.jpg",
  "https://i.ibb.co/N9tK2Qj/Screenshot-2024-11-04-19-40-49-985-com-google-android-apps-photos-edit.jpg",
  "https://i.imgur.com/PISafrh.jpg",
  "https://i.imgur.com/6fggyRZ.jpg",
  "https://i.ibb.co/RjfL41D/IMG-20241104-WA0030.jpg",
  "https://i.ibb.co/bJjnDb4/Christo.jpg",
  "https://i.imgur.com/05fvTid.jpg",
  "https://i.ibb.co/ZchbDzY/SAVE-20241030-173830.jpg",
];
function showCouple() {
  var femaleImg = Math.floor(Math.random() * female.length);
  var maleImg = Math.floor(Math.random() * male.length);
  alert(femaleImg,maleImg);
  const cont = document.getElementById("cup");
  cont.replaceChildren();
  const imgMale = document.createElement("img");
  const imgFemale = document.createElement("img");
  var faceCont = document.createElement("div");
  faceCont.classList.add("faceCont");
  imgMale.classList.add("face");
  imgFemale.classList.add("face");
  imgMale.src = male[maleImg];
  imgFemale.src = female[femaleImg];
  faceCont.append(imgFemale);
  cont.appendChild(faceCont);
  const love = document.createElement("h2");
  love.textContent = "❤️";
  cont.appendChild(love);
  faceCont = document.createElement("div");
  faceCont.classList.add("faceCont");
  faceCont.append(imgMale);
  cont.appendChild(faceCont);
}
