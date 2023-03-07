const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3003
hbs.registerPartials(__dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));


app.get("/paises", (req, res) => {

    res.render("index.hbs", {
        paises: [
            {
                "localidad 1": {
                    "Continente": "África",
                    "Pais": "Angola",
                    "Capital": "Luanda",
                    "Imagen" : "/img/angola.png"
                },
                "localidad 2": {
                    "Continente": "América del Norte",
                    "Pais": "Estados Unidos",
                    "Capital": "Washington DC",
                    "Imagen" : "/img/eeuu.png"
                },
                "localidad 3": {
                    "Continente": "América Central",
                    "Pais": "México",
                    "Capital": "Ciudad de México",
                    "Imagen" : "/img/mexico.png"
                },
                "localidad 4": {
                    "Continente": "América del Sur",
                    "Pais": "Brasil",
                    "Capital": "Brasilia",
                    "Imagen" : "/img/brasil.png"
                },
                "localidad 5": {
                    "Continente": "Europa",
                    "Pais": "España",
                    "Capital": "Madrid",
                    "Imagen" : "/img/espania.png"
                },
                "localidad 6": {
                    "Continente": "Europa",
                    "Pais": "Alemania",
                    "Capital": "Berlín",
                    "Imagen" : "/img/alemania.png"
                },
                "localidad 7": {
                    "Continente": "Oceanía",
                    "Pais": "Australia",
                    "Capital": "Camberra",
                    "Imagen" : "/img/australia.png"
                },
                "localidad 8": {
                    "Continente": "Asia",
                    "Pais": "Japón",
                    "Capital": "Tokio",
                    "Imagen" : "/img/japon.png"
                }
            }]
    })
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

