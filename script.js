emailjs.init("Ndod5dyOtljVUc_XI"); // EmailJS public key

function sendResponse(answer) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please enter your name and email 💌");
    return;
  }

  // EMAIL NOTIFICATION
  emailjs.send("service_rw76p7z", "template_fsjww7j", {
    sender_name: name,
    sender_email: email,
    response: answer
  });

  // WHATSAPP NOTIFICATION (Backend)
  fetch("https://YOUR-BACKEND-URL/send-whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      answer
    })
  });

  document.getElementById("message").innerText =
    `Response sent 💌 You said: ${answer}`;
}

function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function generateLink() {
    const senderName = document.getElementById("senderName").value;
    const senderEmail = document.getElementById("senderEmail").value;
    const recipientName = document.getElementById("recipientName").value;

    if(!senderName || !senderEmail || !recipientName) {
        alert("Please fill all fields 💌");
        return;
    }

    // encode the info in the link
    const params = new URLSearchParams({
        senderName, senderEmail, recipientName
    }).toString();

    const link = `${window.location.origin}/valentine.html?${params}`;

    document.getElementById("linkMessage").innerHTML = `
        Your Valentine link is ready! 💖<br>
        <a href="${link}" target="_blank">${link}</a>
        <p>Send this link to ${recipientName}</p>
    `;
    }
