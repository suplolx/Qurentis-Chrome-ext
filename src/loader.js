// Elementen selecteren om in te injecteren
let formGroup = document.querySelector(".form-group");
let body = document.querySelector("body");


// Elementen maken van de modal en de buttons
let button = document.createElement("button");
let modal = document.createElement("div");
let modalHeader = document.createElement("div");
let closeBtn = document.createElement("span");
let modalContent = document.createElement("div");
let modalBody = document.createElement("div");
let modalFooter = document.createElement("div");
let textArea = document.createElement("textarea");
let copyBtn = document.createElement("button");

// Injecteren van aangemaakte elementen
body.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(modalHeader);
modalHeader.appendChild(closeBtn);
modalContent.appendChild(modalBody);
modalBody.appendChild(textArea);
modalContent.appendChild(modalFooter);
modalFooter.appendChild(copyBtn);
formGroup.appendChild(button);

// Classes en id's geven aan elementen voor css
modal.className = "modal";
modal.id = "my-modal";
modalContent.className = "modal-content";
modalHeader.className = "modal-header";
modalFooter.className = "modal-footer";
closeBtn.className = "close";
closeBtn.innerHTML = "&times;"
modalBody.className = "modal-body";
textArea.id = "text-area";
copyBtn.innerHTML = "KOPIEER NAAR KLEMBORD";
copyBtn.className = "btn btn-warning";
copyBtn.id = "copy-btn";

button.innerHTML = "Editor Lite";
button.className = "btn btn-primary";
button.id = "modal-btn";

// Event listener voor editor te openen
button.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// Event listener om editor te sluiten
closeBtn.addEventListener("click", () => modal.style.display = "none");

// Event listener om tekst te kopieëren naar klembord en editor te sluiten
copyBtn.addEventListener("click", function copyToClipboard(e) {
  e.preventDefault();
  textArea.select();
  document.execCommand("copy");
  modal.style.display = "none";
})