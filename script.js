function calc(op) {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  let r = "—";

  if (!isNaN(a) && !isNaN(b)) {
    if (op === "+") r = a + b;
    if (op === "-") r = a - b;
    if (op === "*") r = a * b;
    if (op === "/") r = b !== 0 ? a / b : "∞";
  }

  document.getElementById("result").innerText = "Result: " + r;
}

const toggle = document.getElementById("themeToggle");
let dark = true;

toggle.onclick = () => {
  dark = !dark;
  document.body.style.background = dark
    ? "radial-gradient(circle at top, #1e3c72, #0f2027)"
    : "linear-gradient(135deg, #fdfbfb, #ebedee)";
  document.body.style.color = dark ? "white" : "#111";
  toggle.textContent = dark ? "🌙" : "☀️";
};
