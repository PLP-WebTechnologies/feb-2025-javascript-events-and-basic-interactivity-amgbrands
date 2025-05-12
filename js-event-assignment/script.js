// --- Event Handling ---

// Button Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightblue");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "");

// Keypress Detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Secret Double-click Action
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Secret double-click unlocked!");
});

// --- Interactive Elements ---

// Color Changer Button
document.getElementById("colorChanger").addEventListener("click", () => {
  document.getElementById("colorChanger").style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
  document.getElementById("colorChanger").textContent = "Color changed!";
});

// Image Gallery (Next/Prev)
const images = [
  "https://via.placeholder.com/200x100?text=Image+1",
  "https://via.placeholder.com/200x100?text=Image+2",
  "https://via.placeholder.com/200x100?text=Image+3"
];
let currentImageIndex = 0;
const galleryImage = document.getElementById("galleryImage");

document.getElementById("nextImg").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  galleryImage.src = images[currentImageIndex];
});

document.getElementById("prevImg").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentImageIndex];
});

// Tabs (Accordion-style Content)
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// --- Form Validation ---

// Form Submit Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  let isValid = true;
  const feedback = document.getElementById("formFeedback");
  feedback.innerHTML = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    feedback.innerHTML += "<p>Name is required!</p>";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.innerHTML += "<p>Please enter a valid email address.</p>";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    feedback.innerHTML += "<p>Password must be at least 8 characters long.</p>";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();  // Prevent form submission if validation fails
  }
});
