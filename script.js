function generate() {
    const name = document.getElementById("nameInput").value.trim();
    const nameField = document.getElementById("recipientName");
    const dateField = document.getElementById("date");
  
    if (name === "") {
      alert("Please enter a name.");
      return;
    }
  
    nameField.textContent = name;
    const today = new Date();
    dateField.textContent = today.toLocaleDateString();
  }
  