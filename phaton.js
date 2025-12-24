
function trocar() {
  const botoes = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c")
  ];
  const ordem = [1, 2, 3].sort(() => Math.random() - 0.5);
  botoes.forEach((btn, i) => {
    btn.style.order = ordem[i];
  });
}

async function verificarConvite() {
  const ref = document.referrer;

  console.log("Veio de:", ref);

  if (!ref) {
    console.log("Sem referrer");
    return;
  }

  const res = await fetch("lista.txt");
  const texto = await res.text();

  const blocos = texto.split("------------------------------------------------⌫");

  for (const bloco of blocos) {
    const origemMatch = bloco.match(/⚿\s*(.+)/);
    const destinoMatch = bloco.match(/➪\s*(.+)/);

    if (!origemMatch || !destinoMatch) continue;

    const origem = origemMatch[1].trim();
    const destino = destinoMatch[1].trim();

    console.log("Comparando com:", origem);
    
    if (ref.includes(origem)) {
      alert(
        "MATCH ENCONTRADO!\n\n" +
        "Veio de: " + origem + "\n" +
        "Vai para: " + destino
      );

      window.location.href = destino;

      return;
    }
  }

  console.log("Nenhum convite encontrado");
}

verificarConvite();