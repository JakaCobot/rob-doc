(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1683:function(t,a,n){"use strict";n.r(a);var s=n(81),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"multilanguage-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multilanguage-implementation"}},[t._v("#")]),t._v(" Multilanguage Implementation")]),t._v(" "),a("p",[t._v("The JAKA AddOn supports multilanguage functionality. After completing the development of a certain package's functionality, you can set up multilanguage options as needed.")]),t._v(" "),a("p",[t._v("Currently supported languages include Chinese, English, and Japanese.")]),t._v(" "),a("p",[t._v("The specific steps for configuration are as follows:")]),t._v(" "),a("h2",{attrs:{id:"multilanguage-for-custom-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multilanguage-for-custom-commands"}},[t._v("#")]),t._v(" Multilanguage for Custom Commands")]),t._v(" "),a("p",[t._v("When creating custom commands, there will be a small globe icon to the right of the content input box that supports multilanguage. Clicking on it will allow you to configure multilanguage options. Currently, it supports Chinese, English, and Japanese.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"500",src:n(733)}})]),t._v(" "),a("h2",{attrs:{id:"multilanguage-for-custom-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multilanguage-for-custom-pages"}},[t._v("#")]),t._v(" Multilanguage for Custom Pages")]),t._v(" "),a("p",[t._v("When a custom page is opened in the JAKA App, it needs to retrieve the current language of the app in order to synchronize the language of the user's custom page with that of the app. This can be achieved using the following method.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"500",src:n(734)}})]),t._v(" "),a("p",[t._v("In the web initialization JavaScript code, call the method "),a("code",[t._v("JAKAController.jakaCall(result)")]),t._v(". After calling this, the JAKA App will invoke the "),a("code",[t._v("window.changeLanguageHandler(language)")]),t._v(" function and pass in the current app language.")]),t._v(" "),a("p",[a("strong",[t._v("Example Code:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getLanguage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nJAKAController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jakaCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Callback function from the App after triggering getAppLanguage.\n * @param {*} language Current language passed in by the App.\n */")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("changeLanguageHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Current language is {language}")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports},733:function(t,a,n){t.exports=n.p+"assets/img/multiLan.37eaa187.png"},734:function(t,a,n){t.exports=n.p+"assets/img/getLanuage.61790ef8.png"}}]);