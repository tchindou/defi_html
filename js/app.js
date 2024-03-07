document.querySelector(".email-input").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  var email = document.querySelector("#email").value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regex pour valider l'email

  if (emailRegex.test(email)) {
    // Si l'email est valide
    document.querySelector(".main").style.display = "none"; // Cache le main
    document.querySelector(".dialog").style.display = "flex"; // Affiche le dialog
    document.getElementById("output").innerHTML += email; // Affiche l'email dans le span avec id output
    document.getElementsByTagName("title").innerHTML =
      "Thank you! | NewsLetter"; // Modifie le titre
  } else {
    document.querySelector("#email").style.border = "1px solid red";
    document.querySelector("#email").style.background = "#F0DADA";
    document.querySelector(".error").style.display = "flex";
  }
});
