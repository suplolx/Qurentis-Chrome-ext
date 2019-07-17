if (window.location.href.split("/")[3] === "ReportSupportingReport") {
  // Elementen selecteren om in te injecteren
  let formGroup = document.querySelectorAll(".form-group")[1].firstElementChild;
  let body = document.querySelector("body");

  // Elementen maken van de modal en de buttons
  let button = document.createElement("button");
  let modal = document.createElement("div");
  let modalHeader = document.createElement("div");
  let modalHeaderText = document.createElement("h4");
  let closeBtn = document.createElement("button");
  let modalContent = document.createElement("div");
  let modalBody = document.createElement("div");
  let modalFooter = document.createElement("div");
  let textArea = document.createElement("textarea");
  let copyBtn = document.createElement("button");
  let savedBtn = document.createElement("button");

  // Injecteren van aangemaakte elementen
  body.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalHeaderText);
  modalHeader.appendChild(closeBtn);
  modalContent.appendChild(modalBody);
  modalBody.appendChild(textArea);
  modalContent.appendChild(modalFooter);
  modalFooter.appendChild(copyBtn);
  modalFooter.appendChild(closeBtn);
  formGroup.appendChild(button);

  if (localStorage.getItem("saved")) {
    modalFooter.appendChild(savedBtn);

    savedBtn.className = "btn btn-warning";
    savedBtn.innerHTML = "Laatst opgeslagen tekst";

    savedBtn.addEventListener("click", function() {
      textArea.value = localStorage.getItem("saved");
    })
  }

  // Classes en id's geven aan elementen voor css
  modal.className = "modal";
  modal.id = "my-modal";
  modalContent.className = "modal-content";
  modalHeader.className = "modal-header";
  modalHeaderText.className = "modal-title"
  modalFooter.className = "modal-footer";
  closeBtn.className = "btn btn-danger";
  closeBtn.innerHTML = "SLUITEN"
  modalBody.className = "modal-body";
  textArea.id = "text-area";
  copyBtn.innerHTML = '<i class="fa fa-clipboard"></i> KOPIEER EN SLUIT';
  copyBtn.className = "btn btn-primary";
  copyBtn.id = "copy-btn";

  modalHeaderText.innerHTML = "Super coole editor"
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

  textArea.addEventListener("keyup", function() {
    localStorage.setItem("saved", textArea.value)
  })

} else {
  
  var nameElement = document.querySelector(".col-md-9");
  var fullName = nameElement.firstElementChild.innerHTML.split(" ");
  var firstName = fullName.slice(0, fullName.length - 1).join(" ");
  var lastName = fullName[fullName.length - 1];

  console.log(firstName, lastName);
  
  fetch('/Clients/Clients_Read', {
    method: 'POST',
  })
    .then(response => response.json())
  
    .then(response => {
     var newArray = response.Data.filter(function(el) {
       return el.Firstname == firstName && el.Lastname == lastName
     })
     nameElement.firstElementChild.innerHTML = `<a style="color:inherit;" href="/Clients/Details/${newArray[0].ID}">${firstName} ${lastName}</a>`;
    });
}
