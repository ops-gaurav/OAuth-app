import fs from "fs";
import express from "express";
import OAuth from "oauth";
import Grant from "grant-express";
import logger from "morgan";
import session from "express-session";

import config from './dynamic_config';

// TODO -> use this in development environment
// let grant = new Grant (require ("./config.json"));
let grant = new Grant (config);

const app = express();
app.use (logger ("dev"))
app.use (session ({secret: "winteriscoming"}))

const appKey = process.env.FB_APP_KEY;
const appSecret = process.env.FB_APP_SECRET;
const OAuth2 = OAuth.OAuth2;

app.use (grant)

app.get ("/success", (req, res) => {
	console.log (req.query);
	res.end (JSON.stringify (req.query, null, 4));
});

app.listen (3000, () => console.log ("server running on port 3000"))
