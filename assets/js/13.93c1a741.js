(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1169:function(t,a,s){t.exports=s.p+"assets/img/showcase.b662f1fe.jpg"},1170:function(t,a,s){t.exports=s.p+"assets/img/openPageInApp.4deb0e98.png"},1171:function(t,a,s){t.exports=s.p+"assets/img/openPageInWeb.c772f44f.png"},1697:function(t,a,s){"use strict";s.r(a);var n=s(81),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义页面开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义页面开发"}},[t._v("#")]),t._v(" 自定义页面开发")]),t._v(" "),a("p",[a("strong",[t._v("该页面旨在指导开发者如何开发具有自定义页面功能的AddOn包。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),a("p",[t._v("本章为入门教程，主要目的是使开发者了解自定义页面的基础知识与基本开发流程。")]),t._v(" "),a("p",[t._v("若需了解如何开发带有具体应用功能、应用于具体工艺场景的AddOn自定义页面包，请参考后续的完整案例章节：。")])]),t._v(" "),a("h2",{attrs:{id:"关于自定义页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于自定义页面"}},[t._v("#")]),t._v(" 关于自定义页面")]),t._v(" "),a("h3",{attrs:{id:"自定义页面是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义页面是什么"}},[t._v("#")]),t._v(" 自定义页面是什么")]),t._v(" "),a("p",[t._v("自定义页面是指开发者根据自己的需求，在符合web开发规范的情况下，开发出的除JAKA App内已有页面之外的其他页面。")]),t._v(" "),a("h3",{attrs:{id:"自定义页面的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义页面的作用"}},[t._v("#")]),t._v(" 自定义页面的作用")]),t._v(" "),a("p",[t._v("在实际的应用场景中，可能需要在不同的App中来回切换，或是在JAKA App的不同页面中来回切换，或是停止正在进程中的工作去调试第三方设备。如此一来，可能会对工作节奏和效率产生影响。")]),t._v(" "),a("p",[t._v("若使用AddOn自定义页面的话，只需在JAKA App页面中即可解决“来回切换”的问题。")]),t._v(" "),a("h2",{attrs:{id:"创建jaka-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建jaka-web"}},[t._v("#")]),t._v(" 创建JAKA_Web")]),t._v(" "),a("p",[t._v("在此处的示范中，我们将创建一个自定义页面类型的AddOn，该AddOn的功能是在页面中显示“Hello JAKA!”。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1169)}})]),t._v(" "),a("h3",{attrs:{id:"步骤一-创建addon文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-创建addon文件夹"}},[t._v("#")]),t._v(" 步骤一：创建AddOn文件夹")]),t._v(" "),a("p",[t._v("首先我们需要创建一份AddOn基本文件夹，该文件夹需包含一个.ini格式的配置文件和前端工程文件，我们建议使用client作为前端工程的文件夹名称。")]),t._v(" "),a("p",[t._v("您可以从头开始手动创建，也可以使用AddOn开发包仓库中 "),a("a",{attrs:{href:"https://github.com/JakaCobot/jaka_addon_kit",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Template")]),t._v('"'),a("OutboundLink")],1),t._v(" 目录下的AddOn模板进行修改。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("目录结构")]),t._v(" "),a("p",[t._v("|—JAKA_Web"),a("br"),t._v("\n   |—client"),a("br"),t._v("\n   |  |—index.html"),a("br"),t._v("\n   |—JAKA_Web_config.ini")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("index.html")]),a("br"),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("HelloJAKA!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#f5f6fa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10vh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Hello JAKA!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("JAKA_Web_config.ini")]),a("br"),t._v(" "),a("RouterLink",{attrs:{to:"/guide/addOn/iniConfig.html"}},[t._v("配置文件")]),t._v("内容如下:"),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Web")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("在页面中显示“Hello JAKA!”")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/JAKA_Web/client/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("0")]),t._v("\n")])])])],1)]),t._v(" "),a("h3",{attrs:{id:"步骤二-打包-上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-打包-上传"}},[t._v("#")]),t._v(" 步骤二：打包&上传")]),t._v(" "),a("p",[t._v("接下来我们会将步骤一中创建好的文件夹打包，上传至控制器中进行指令块开发，打包的要求格式为"),a("code",[t._v(".tar.gz")]),t._v("。")]),t._v(" "),a("p",[t._v("在Windows中您可以使用7z等打包工具进行二次压缩。"),a("br")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(655)}})]),a("p"),t._v(" "),a("p",[t._v("在App中附加管理程序页面上传AddOn。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(656)}})]),a("p"),t._v(" "),a("h3",{attrs:{id:"步骤三-访问页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-访问页面"}},[t._v("#")]),t._v(" 步骤三：访问页面")]),t._v(" "),a("p",[t._v("下面将介绍两种方式访问之前制作的页面。")]),t._v(" "),a("ul",[a("li",[t._v("方法1 在附加程序找到JAKA_Web，点击小地球按钮访问AddOn中的页面。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1170)}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("方法2 在浏览器中输入"),a("code",[t._v("http://172.30.2.216/addon/JAKA_Web/client/")]),t._v("，注意将链接IP替换为当前机器人的IP。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1171)}})])])]),t._v(" "),a("h2",{attrs:{id:"兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),a("p",[t._v("在进行自定义页面开发时，需注意目标浏览器的版本，避免因版本而产生的不兼容。")]),t._v(" "),a("ul",[a("li",[t._v("JAKA App中用来显示自定义页面的web view插件使用的浏览器内核为"),a("code",[t._v("Chromium:74.0.3729.157")]),t._v("。")])])])}),[],!1,null,null,null);a.default=e.exports},655:function(t,a,s){t.exports=s.p+"assets/img/compress_addon.01c8b684.gif"},656:function(t,a,s){t.exports=s.p+"assets/img/upLoad_addon.aedec686.png"}}]);