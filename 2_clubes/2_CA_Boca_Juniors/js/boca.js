// Usando fetch() para importar o header.html
    fetch('boca_header.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('header').innerHTML = data;
        });
    fetch('boca_footer.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('footer').innerHTML = data;
        });