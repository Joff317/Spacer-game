let selectRules = document.querySelector(".rules");
let selectRulesTitle = document.getElementById("rules-title");
let selectRulesList = document.querySelector(".rules-list");

// Ajoutez une classe CSS initialement pour masquer la rules-list
selectRulesList.classList.add("hidden");

selectRulesTitle.addEventListener("click", function () {
  if (selectRulesList.classList.contains("hidden")) {
    selectRulesTitle.innerHTML = "Click to hide rules";
    selectRulesList.style.display = "flex";
    selectRulesList.style.left = "34%"; // Déplacez-le vers le centre
    selectRulesList.classList.remove("hidden"); // Supprimez la classe "hidden"
  } else {
    selectRulesTitle.innerHTML = "Click to check rules";
    selectRulesList.style.left = "-1000px"; // Revenez à la position initiale (gauche)
    selectRulesList.classList.add("hidden"); // Réajoutez la classe "hidden"
  }
});
