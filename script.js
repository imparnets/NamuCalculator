function calcularDiaria() {
    var diaria = 0;

    if (document.getElementById('semestral').value !== '') {
        diaria = (parseFloat(document.getElementById('semestral').value) * 0.9) / 12;
    } else if (document.getElementById('anual').value !== '') {
        diaria = (parseFloat(document.getElementById('anual').value) / 2 * 0.9) / 12;
    } else if (document.getElementById('trimestral').value !== '') {
        diaria = (parseFloat(document.getElementById('trimestral').value) * 2 * 0.9) / 12;
    } else if (document.getElementById('mensal').value !== '') {
        diaria = (parseFloat(document.getElementById('mensal').value) * 6 * 0.9) / 12;
    }

     var formattedDiaria = roundedDiaria.toFixed(2).replace('.', ','); // Replaces dot with comma
    document.getElementById('resultado').innerHTML = 'A diária é: R$' + formattedDiaria;
}
