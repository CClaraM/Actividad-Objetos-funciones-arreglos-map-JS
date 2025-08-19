function capitales(pais) {
    const datoPais = new Map([
        ["Colombia", "Bogota"],
        ["Peru", "Lima"],
        ["Ecuador", "Quito"],
        ["Chile", "Santiago"],
        ["Argentina", "Buenos Aires"],
        ["Brasil", "Brasilia"],
        ["Mexico", "Ciudad de Mexico"],
        ["Espania", "Madrid"],
        ["Francia", "Paris"],
        ["Italia", "Roma"]
    ]);
    return datoPais.get(pais) || "No registrado"
}

console.log(capitales("Colombia"));

console.log(capitales("congo"));