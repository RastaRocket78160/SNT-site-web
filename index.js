const path = require(`path`);
const express = require(`express`);
const package  = require(path.join(__dirname, `package.json`));

const app = express();

app.set(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));
app.use(`/static`, express.static(path.join(__dirname, `public`)));

app.get(`/`, (req, res) => res.render(`pages/home`, {
    NAME: `TEST`,
    PAGE: `Home`,
    DESCRIPTION: `TEST`,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#0099ff`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.listen(process.env.PORT || 3000, () => console.log(`${package.name} est prêt ! http://localhost:${process.env.PORT || 3000}`));