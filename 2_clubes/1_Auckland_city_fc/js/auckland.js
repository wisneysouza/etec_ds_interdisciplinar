// Usando fetch() para importar o header.html
    fetch('auckland_header.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('header').innerHTML = data;
        });
    fetch('auckland_footer.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('footer').innerHTML = data;
        });