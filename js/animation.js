let selectRules = document.querySelector(".rules");
let selectRulesTitle = document.getElementById("rules-title");
let selectRulesList = document.querySelector(".rules-list");

document.getElementById("rules-title").addEventListener("click", () => {
  selectRulesList.style.display = "flex";
});
