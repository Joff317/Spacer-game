let selectRules = document.querySelector(".rules");
let selectRulesTitle = document.getElementById("rules-title");
let selectRulesList = document.querySelector(".rules-list");

selectRulesList.classList.add("hidden");

selectRulesTitle.addEventListener("click", function () {
  if (selectRulesList.classList.contains("hidden")) {
    selectRulesTitle.innerHTML = "Click to hide rules";
    selectRulesList.style.display = "flex";
    selectRulesList.style.left = "50%";
    selectRulesList.classList.remove("hidden");
  } else {
    selectRulesTitle.innerHTML = "Click to check rules";
    selectRulesList.style.left = "-1000px";
    selectRulesList.classList.add("hidden");
  }
});
