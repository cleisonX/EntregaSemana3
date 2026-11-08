import express from "express";
const app = express();
// Configura o EJS como motor de views
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views");
const PORT = 3000;

// Array de times
const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena do Grêmio",
        cidade: "Porto Alegre"
    },
    {
        id: 2,
        nome: "Internacional",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre"
    },
    {
        id: 3,
        nome: "Flamengo",
        estadio: "Maracanã",
        cidade: "Rio de Janeiro"
    }
];

// Rota inicial
app.get("/", (req, res) => {
    res.render("index", {
        mensagem: "Bem-vindo ao sistema de cadastro de times!"
    });
});

// Lista de times
app.get("/times", (req, res) => {
    res.render("times", { times });
});

// Detalhes do time
app.get("/times/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const time = times.find(t => t.id === id);

    if (!time) {
        return res.send("Time não encontrado.");
    }

    res.render("detalhe", { time });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});