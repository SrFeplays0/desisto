const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const express = require('express');
const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Endereço:', address);

    res.send('Formulário recebido!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
