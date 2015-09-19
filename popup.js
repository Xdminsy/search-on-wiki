'use strict'
window.onload = function(){
    var langs = ["al", "ar", "eu", "be", "be", "bn", "bs", "ca", "km", "ck", "zh", "hr", "cs", "da", "nl", "en", "eo", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "io", "id", "ia", "it", "ja", "kn", "kk", "ko", "ky", "la", "lv", "no", "nn", "oc", "fa", "pl", "pt", "ro", "ru", "sr", "sh", "si", "zh", "zh", "zh", "sk", "es", "sv", "th", "zh", "zh", "zh", "zh", "tr", "uk", "ur", "vi", "wa", "xh", "yi"]
    var languages = ["Alemannic", "Arabic", "Basque", "Belarussian", "Belarussian Taraškievica", "Bengali", "Bosnian", "Catalan; Valencian", "Central Khmer", "Central Kurdish/Kurdish Sorani", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Finnish", "French", "Galician", "German", "Greek", "Hebrew", "Hindi", "Hungarian", "Ido", "Indonesian", "Interlingua", "Italian", "Japanese", "Kannada", "Kazakh", "Korean", "Kyrgyz", "Latin", "Latvian", "Norwegian (Bokmål)", "Norwegian (Nynorsk)", "Occitan", "Persian", "Polish", "Portuguese", "Romanian", "Russian", "Serbian", "Serbo-Croatian", "Simple English", "Simplified Chinese", "Simplified Chinese (China)", "Simplified Chinese (Singapore)", "Slovak", "Spanish", "Swedish", "Thai", "Traditional Chinese", "Traditional Chinese (Hong Kong)", "Traditional Chinese (Macau)", "Traditional Chinese (Taiwan)", "Turkish", "Ukranian", "Urdu", "Vietnamese", "Waray", "Xhosa", "Yiddish"]
    let btn = document.getElementById('search')
    btn.onclick = search
}

function search(){
    let tb = document.getElementById('data')
    window.open('http://www.wikiwand.com/en/' + tb.value, '_blank')
}