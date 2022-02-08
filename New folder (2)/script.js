// Entire sign up form
function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {
    (document.getElementById('nameField').value = '')
  }
}
// function will remove the text "example: 212-123-1234" in the Phone Number box when clicked

function clearPhone() {
  if (document.getElementById('phoneField').value == 'example: 212-123-1234') {
    (document.getElementById('phoneField').value = '')
  }
}

function clearEmail() {
  if (document.getElementById('emailField').value == 'JohnDoe@Example.com') {
    (document.getElementById('emailField').value = '')
  }
}
// Function to bring back default text if name field is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    (document.getElementById('nameField').value = 'First and Last Name')
  }
}

function resetPhone() {
  if (document.getElementById('phoneField').value == '') {
    (document.getElementById('phoneField').value = 'example: 212-123-1234')
  }
}


function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    (document.getElementById('emailField').value = 'JohnDoe@Example.com')
  }
}
//on focus - when the object is triggered by mouse clicks, works when object becomes focused on or highlighted
// on click - works only when user clicks with a mouse
// Code adds an example that goes away when clicked on. If there is nothing in the box and you click off the text will come back. If you type and click off, what you typed the text will stay on it for you to submit.

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
//balls
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 75)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 25)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? 0 : 0),
    y: Math.random() * 200
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 7000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
document.body.style.zoom="100%"
