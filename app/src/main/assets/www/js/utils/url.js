
/** Auto-generated url.js */
var REDIRECT_URI = false;
var IS_NATIVE_APP = true;
var DEVICE_TYPE = 1;
var XS_VERSION = '4.20.11';
window.location.hash = window.location.hash.replace(/\?__goto__=(.*)/, "");
var AVAILABLE_LANGUAGES = ['de','en','es','fr','it','ru','zh','zh_Hans'];
var DISABLE_BATTERY_OPTIMIZATION = false;

// WebView
if (typeof IS_PREVIEW === 'undefined' ||
    (typeof IS_PREVIEW !== 'undefined' && IS_PREVIEW !== true)) {
    PROTOCOL = 'https://';
    DOMAIN = 'https://app.appsfera.com';
    APP_KEY = '5f5dd56979b5d';
    BASE_PATH = '/'+APP_KEY;
}

var BASE_URL = DOMAIN + BASE_PATH;
var IMAGE_URL = DOMAIN + '/';