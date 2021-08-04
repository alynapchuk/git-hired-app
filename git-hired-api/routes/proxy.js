const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch');

router.get('/', async function (req, res, next) {
    const { url } = req.query;
    let urlToProxy = url;
    if (Object.entries(req.query).length > 1) {
        const queryParams = Object.entries(req.query);
        let queryString = url;
        for (const [key, value] of queryParams) {
            if (key != 'url') {
                queryString += `&${key}=${value}`;
            }
        }
        urlToProxy = encodeURI(queryString);
    }
    try {
        const response = await fetch(urlToProxy, {
            headers: {
                Authorization: "Token 54c71eed92b25643440bd52f5693e049c6f1b3fb",
            }
        })
            .then(response => response.json());
        res.status(200).send(response)
    }
    catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;