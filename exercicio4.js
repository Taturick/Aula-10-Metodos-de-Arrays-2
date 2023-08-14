const professores = [
    {nome : "Guido", stack: "backend"},
    {nome : "Vidal", stack: "backend"},
    {nome : "Dani", stack: "Frontend"},
    {nome : "Diego", stack: "Frontend"},
    {nome : "Léo", stack: "backend"},
    {nome : "Ruli", stack: "Frontend"}
];

console.log("Professores de Backend:",professores.filter((back) => back.stack === "backend"));

console.log("Professores de Frontend:",professores.filter((front) => front.stack === "Frontend"));
