'use strict'
const langs = ["als", "ar", "eu", "be", "be-x-old", "bn", "bs", "ca", "km", "ckb", "zh", "hr", "cs", "da", "nl", "en", "eo", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "io", "id", "ia", "it", "ja", "kn", "kk", "ko", "ky", "la", "lv", "no", "nn", "oc", "fa", "pl", "pt", "ro", "ru", "sr", "sh", "simple", "zh-hans", "zh-cn", "zh-sg", "sk", "es", "sv", "th", "zh-hant", "zh-hk", "zh-mo", "zh-tw", "tr", "uk", "ur", "vi", "war", "xh", "yi"]
const languages = ["Alemannic - Alemannisch", "Arabic - العربية", "Basque - euskara", "Belarussian - беларуская", "Belarussian Taraškievica - беларуская (тарашкевіца)‎", "Bengali - বাংলা", "Bosnian - bosanski", "Catalan; Valencian - català", "Central Khmer - ភាសាខ្មែរ", "Central Kurdish/Kurdish Sorani - کوردی", "Chinese - 中文", "Croatian - hrvatski", "Czech - česky", "Danish - dansk", "Dutch - Nederlands", "English - English", "Esperanto - Esperanto", "Finnish - suomi", "French - français", "Galician - galego", "German - Deutsch", "Greek - Ελληνικά", "Hebrew - עברית", "Hindi - हिन्दी", "Hungarian - magyar", "Ido - Ido", "Indonesian - Bahasa Indonesia", "Interlingua - interlingua", "Italian - italiano", "Japanese - 日本語", "Kannada - ಕನ್ನಡ", "Kazakh - қазақша", "Korean - 한국어", "Kyrgyz - Кыргызча", "Latin - Latina", "Latvian - latviešu", "Norwegian (Bokmål) - norsk (bokmål)", "Norwegian (Nynorsk) - norsk (nynorsk)‎", "Occitan - occitan", "Persian - فارسی", "Polish - polski", "Portuguese - português", "Romanian - română", "Russian - русский", "Serbian - српски / srpski", "Serbo-Croatian - srpskohrvatski / српскохрватски", "Simple English - Simple English", "Simplified Chinese - 中文（简体)", "Simplified Chinese (China) - 中文（中国大陆)", "Simplified Chinese (Singapore) - 中文（新加坡）", "Slovak - slovenčina", "Spanish - español", "Swedish - svenska", "Thai - ไทย", "Traditional Chinese - 中文（繁體）", "Traditional Chinese (Hong Kong) - 中文（香港）", "Traditional Chinese (Macau) - 中文（澳門）", "Traditional Chinese (Taiwan) - 中文（台灣）", "Turkish - Türkçe", "Ukranian - українська", "Urdu - اردو", "Vietnamese - Tiếng Việt", "Waray - Winaray", "Xhosa - isiXhosa", "Yiddish - ייִדיש"]
let language;

window.onload = function(){
    chrome.storage.sync.get(['language'], function(data){
        document.getElementById('lang').value = data['language'];
    });

    let data = document.getElementById('data')
    data.onkeypress = function(e){if (13 === e.charCode){search()}}

    let languageSelector = document.getElementById('lang')
    for(let i = 0;i < langs.length;i++){
        let o = document.createElement('option')
        o.value = langs[i]
        o.innerHTML = languages[i]
        languageSelector.appendChild(o)
    }
    language = languageSelector.value || 'en'
    languageSelector.value = language
}

function syncLanguage(){
    language = document.getElementById('lang').value
    chrome.storage.sync.set({"language" : language}, function(){})
    document.getElementById('data').focus()
}

function search(){
    let data = document.getElementById('data')
    let lang = document.getElementById('lang').value
    if(langs.every(function(elem, index, arr){return elem !== lang}))lang = 'en'
    language = lang
    syncLanguage()
    window.open('http://www.wikiwand.com/' + language + '/' + data.value, '_blank')
}
