function goToPage() {
  window.location.href = "products.html";
};

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 } 
);


cards.forEach((card) => {
  observer.observe(card);
});






function valid() {
  let namee = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let titel = document.getElementById("title").value;
  let phone = document.getElementById("phone").value;
  let mass = document.getElementById("massage").value;

  if (
    namee === "" ||
    email === "" ||
    pass === "" ||
    titel === "" ||
    phone === "" ||
    mass === ""
  ) {
    alert("Enter All Date");
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Enter The Email Filed");
  } else if (phone >= 12 || phone <= 12) {
    alert("Enter True Number");
  } else if (mass >= 300 || mass <= 30) {
    alert("Write Massage More Than 30 & lass than 300");
  } else {
    alert(`welcome ${namee}`);
  }
}
