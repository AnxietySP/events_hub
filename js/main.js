console.log("main.js is running");

document.getElementById("welcomeMsg").innerHTML =
"Welcome to <strong>JNEC Events Hub</strong>!";

// DEMO ONLY — do not leave this uncommented:
// document.write("<p>This can wipe the page after load</p>");

// window.alert("Registration opens Monday!"); console.log("Debug: main.js finished display demos");
const resetBtn = document.querySelector("#regForm button[type='reset']"); if (resetBtn) {
resetBtn.addEventListener("click", function (e) { if (!confirm("Clear the whole form?")) { e.preventDefault();
}
});
}
