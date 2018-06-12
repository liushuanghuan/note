//获取浏览器语言
function getBrowserLang() {
	var special = {
			"zh": "cn",
			"zh-chs": "cn",
			"zh-cn": "cn",
			"zh-cht": "cn",
			"zh-hk": "cn",
			"zh-mo": "zh",
			"zh-tw": "cn",
			"zh-sg": "zh"
		},
		localLang = (window.navigator.language || window.navigator.userLanguage ||
			window.navigator.browserLanguage || window.navigator.systemLanguage || B.getLang()).toLowerCase(),
		browserLang;
		
	console.info(">>> window.navigator.language", window.navigator.language);
	console.info(">>> window.navigator.userLanguage", window.navigator.userLanguage);
	console.info(">>> window.navigator.browserLanguage", window.navigator.browserLanguage);
	console.info(">>> window.navigator.systemLanguage", window.navigator.systemLanguage);
	console.info(">>> window.navigator.systemLanguage", window.navigator.systemLanguage);
	console.info(">>> B.getLang()", B.getLang());

	
	console.info("===================================================");
		
	console.info(">>本地语言--localLang", localLang);
	
	/*console.info(">>本地语言--special[localLang]", special[localLang]);
	
	console.info(">>>localLang.split("-")[0].toString()", localLang.split("-")[0].toString());*/

	browserLang = special[localLang] || localLang.split("-")[0].toString();
        console.info
	browserLang = browserLang.toUpperCase();
	console.info(browserLang);
}
getBrowserLang()


//获取浏览器语言列表
navigator.languages

Google Chrome界面目前使用的是这种语言