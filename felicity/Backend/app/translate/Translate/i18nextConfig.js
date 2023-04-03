const translate = require('google-translate-api');
import { useTranslation } from 'react-i18next';
import enResources from "../Languages/en.json";
import laoResources from "../Languages/lao.json";




const { t, i18n } = useTranslation()
const changelanguageToLo = () => i18n.changeLanguage('lo')
const changelanguageToEn = () => i18n.changeLanguage('en')



const fallbackLng = ['en'];
const availableLanguages = ['en', 'lo'];
const resources = {
  en: {
    translation: enResources
  },
  lo: {
    translation: laoResources
  }
};
i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    lng: "en",
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;
/*
function Translate() { 
	//initialization
	this.init =  function(attribute, lng){
		this.attribute = attribute;
		this.lng = lng;	
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "../Language/"+this.lng+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}


const setLanguage = language => {
    let messages = {};
    switch (language) {
      case 'lao':
        messages = Object.assign(messages, require(`../Languages/lao.json`));
        break;
      default:
      case 'en':
        messages = Object.assign(messages, require(`../Languages/en.json`));
        break;
    }
    return messages;
  };

const initialState = {
locale: 'lao',
messages: setLanguage('lao')
};
  
const intlData = (state = initialState, action) => {
if (action === undefined) return state;
switch (action.type) {
    case 'UPDATE_LANGUAGE':
    return {
        locale: action.language,
        messages: setLanguage(action.language)
    };
    default:
    return state;
}
};
const updateLanguage = language => {
    return dispatch => {
      dispatch({
        type: 'UPDATE_LANGUAGE',
        language
      });
    };
};

_updateLanguage = lang => {
    const { updateLanguage } = this.props;
  
    updateLanguage(lang);
  };
  
exports.updateLanguage = updateLanguage;
exports.intlData= intlData;
*/