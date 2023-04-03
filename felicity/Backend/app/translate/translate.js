import { useTranslation } from "react-i18next";
import "./Translate/i18nextConfig";
import enResources from "./Languages/en.json";
import laoResources from "./Languages/lao.json";

function switchLanguageToLo({resourceKey,text}) {
    const { t, i18n } = useTranslation();
    Object.keys(laoResources).forEach(function (key){
        if (resourceKey == key) 
            return i18n.changeLanguage(text)
        else {
            const express = require("express");
            const app = express();

            //req = { text: "Hello!", LngTo : "lo"}
            app.get("/translate", (req, res) => {
            translate(req[0], {from: "en", to: req[1]}).then(res => {
            console.log(res.text);
            }).catch(err => {
            console.error(err);
            });
            })
        }

    })
}