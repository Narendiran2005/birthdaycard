
function flip() {
const envolope = document.querrySelector('.envolope-wrapper');
	envolope.addEventListener('click', () => {
		envolope.classList.toggle('flap');
	});

}	

/*:root{
  --primary: #fff;
  --bg-color: rgb(5, 53, 61);
  --bg-envelope-color: #f5edd1;
  --envelope-tab: #ecdeb8;
  --envelope-cover: #e6cfa7;
  --shadow-color: rgba(0, 0, 0, 0.2);
  --txt-color: #444;
  --heart-color: rgb(252, 8, 231);
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
.container > .envelope-wrapper {
  background: var(--bg-envelope-color);
  box-shadow: 0 0 40px var(--shadow-color);
}
.envelope-wrapper > .envelope {
  position: relative;
  width: 300px;
  height: 230px;
}
.envelope-wrapper > .envelope::before {
  content: "";
  position: absolute;
  top: 0;
  z-index: 2;
  border-top: 130px solid var(--envelope-tab);
  border-right: 150px solid transparent;
  border-left: 150px solid transparent;
  transform-origin: top;
  transition: all 0.5s ease-in-out 0.7s;
}
.envelope-wrapper > .envelope::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 0px;
  height: 0px;
  border-top: 130px solid transparent;
  border-right: 150px solid var(--envelope-cover);
  border-bottom: 100px solid var(--envelope-cover);
  border-left: 150px solid var(--envelope-cover);
}
.envelope > .letter {
  position: absolute;
  right: 20%;
  bottom: 0;
  width: 54%;
  height: 80%;
  background: var(--primary);
  text-align: center;
  transition: all 1s ease-in-out;
  box-shadow: 0 0 5px var(--shadow-color);
  padding: 20px 10px;
}

.envelope > .letter > .text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: var(--txt-color);
  text-align: left;
  font-size: 10px;
}
.heart {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  background: var(--heart-color);
  z-index: 4;
  transform: translate(-50%, -20%) rotate(45deg);
  transition: transform 0.5s ease-in-out 1s;
  box-shadow: 0 1px 6px var(--shadow-color);
  cursor: pointer;
}
.heart:before, 
.heart:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: var(--heart-color);
  border-radius: 50%;
}
.heart:before {
  top: -7.5px;
}
.heart:after {
  right: 7.5px;
}
.flap > .envelope:before {
  transform: rotateX(180deg);
  z-index: 0;
}
.flap > .envelope > .letter {
  bottom: 100px;
  transform: scale(1.5);
  transition-delay: 1s;
}
.flap > .heart {
  transform: rotate(90deg);
  transition-delay: 0.4s;
}*/