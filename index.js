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
    TITLE: `Disorder \| Accueil`,
    DESCRIPTION: ``,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#E10000`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.get(`/news`, (req, res) => res.render(`pages/news`, {
    TITLE: `Disorder \| Actualités`,
    DESCRIPTION: ``,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#E10000`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.get(`/speedrun`, (req, res) => res.render(`pages/speedrun`, {
    TITLE: `Disorder \| Speedrun`,
    DESCRIPTION: ``,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#E10000`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.get(`/esports`, (req, res) => res.render(`pages/esports`, {
    TITLE: `Disorder \| Esports`,
    DESCRIPTION: ``,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#E10000`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.get(`/contact`, (req, res) => res.render(`pages/contact`, {
    TITLE: `Disorder \| Contact`,
    DESCRIPTION: ``,
    ROBOTS: `index, follow`,
    KEYWORDS: ``,
    FACEBOOK_APP_ID: ``,
    THEME_COLOR: `#E10000`,
    OG_IMAGE: ``,
    OG_URL: ``,
    LANGUAGE: `fr_FR`,
    CARD: `summary`,
    DOMAIN: req.hostname,
    TWITTER_IMAGE: ``,
    FAVICON: ``
}));

app.listen(process.env.PORT || 3000, () => console.log(`${package.name} est prêt ! http://localhost:${process.env.PORT || 3000}`));