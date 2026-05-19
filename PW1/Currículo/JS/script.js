const botao= document.getElementById("tema")

//carregar preferência
if (localStorage.getItem("tema")==="dark") {
    document.body.classList.add("dark");
}

                       //alternar tema
                    botao.addEventListener("click",() => {
                        document.body.classList.toggle("dark");

                        if (document.body.classList.contains("dark")) {
                            localStorage.setItem("tema", "dark");
                        } else {
                            localStorage.setItem("tema", "light");
                        }
                    });
                    
                   
                    const updateButonIcon = () => {
                        if (!botao) return;
                        const darkMode = document.body.classList.contains("dark");
                        botao.textContent = darkMode ? "☀️"
                        : "🌙";
                        botao.title = darkMode ? "Mudar para modo claro" : "Mudar para modo escuro";
                    };

                    const temaAtual = localStorage.getItem ("tema") === "dark" ? "dark"
                    if (temaAtual === "dark");



                        updateButonIcon();

                        if (botao) {
                            botao.addEventListener("click", ()=>)
                        }