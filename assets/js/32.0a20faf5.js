(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1466:function(a,t,s){"use strict";s.r(t);var e=s(81),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"addon配置文件规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addon配置文件规范"}},[a._v("#")]),a._v(" AddOn配置文件规范")]),a._v(" "),t("h2",{attrs:{id:"_1-文件编码要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件编码要求"}},[a._v("#")]),a._v(" 1.文件编码要求")]),a._v(" "),t("p",[a._v("  要求使用UTF-8编码")]),a._v(" "),t("h2",{attrs:{id:"_2-文件命名要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件命名要求"}},[a._v("#")]),a._v(" 2.文件命名要求")]),a._v(" "),t("p",[a._v('  "AddOnName"+"_config.ini"，例如JAKA_Command_config.ini。AddOnName强制要求和AddOn文件夹同名。')]),a._v(" "),t("h2",{attrs:{id:"_3-文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-文件内容"}},[a._v("#")]),a._v(" 3.文件内容")]),a._v(" "),t("p",[a._v("  一个典型的AddOn配置文件如下所示：")]),a._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("AddOnInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("convention")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3.0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("JAKA_Command")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("description")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("在日志中输出信息")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("version")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("1.0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("portal")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("10006")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("url")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://localhost/myAddOnUi")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("languagetype")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("node-red")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("service")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("AddOn.json")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("serviceenabled")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("1")]),a._v("\n")])])]),t("h2",{attrs:{id:"_4-字段说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-字段说明"}},[a._v("#")]),a._v(" 4.字段说明：")]),a._v(" "),t("h4",{attrs:{id:"convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#convention"}},[a._v("#")]),a._v(" convention")]),a._v(" "),t("p",[a._v("  AddOn包解析器版本。若不填或所填解析器版本错误则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。")]),a._v(" "),t("h4",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" name")]),a._v(" "),t("p",[a._v("  AddOn包名称，建议和AddOn文件夹同名。在APP附加程序界面显示对应为“程序名”。")]),a._v(" "),t("h4",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v("  AddOn功能描述，在APP附加程序界面显示对应为“描述”。长度限制在35个字符以内，超出APP附加程序界面的“版本号”则显示“INVALID”,且“描述”显示为空，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。")]),a._v(" "),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" version")]),a._v(" "),t("p",[a._v("  AddOn自身版本号，可以自定义。在APP附加程序界面对应为“版本号”。")]),a._v(" "),t("h4",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[a._v("#")]),a._v(" type")]),a._v(" "),t("p",[a._v("  AddOn类型：1代表自定义指令，2代表自定义服务，3代表自定义页面。填1或2在APP附加程序界面没有小地球按钮，填3会出现小地球按钮。若不填或填其他数值及字符无效，APP附加程序界面的“版本号”将显示“INVALID”,且“描述”显示为空。APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。")]),a._v(" "),t("h4",{attrs:{id:"portal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#portal"}},[a._v("#")]),a._v(" portal")]),a._v(" "),t("p",[a._v("  控制器内部自动分配给当前AddOn的端口，无需用户设置，可留空不填。")]),a._v(" "),t("h4",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[a._v("#")]),a._v(" url")]),a._v(" "),t("p",[a._v("  AddOn前端的html地址，即小地球按钮跳转的URL，若无保持默认。若有则将含有前端工程的文件夹（命名如：client、dist）放置在该AddOn目录下，例如：url = http://localhost/JAKA_Command/dist 。若不填则APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。若填的路径错误点击小地球按钮时则会提示“加载失败，请检查路径是否正确”。")]),a._v(" "),t("h4",{attrs:{id:"languagetype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#languagetype"}},[a._v("#")]),a._v(" languagetype")]),a._v(" "),t("p",[a._v("  后端使用的语言为node-red。")]),a._v(" "),t("h4",{attrs:{id:"service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[a._v("#")]),a._v(" service")]),a._v(" "),t("p",[a._v("  填写json格式的数据文件名。该文件来源于AddOn文件目录下的json文件，包含了在node-red中定义流和节点信息，文件名称可以自定义，但二者需保持一致。若名称不一致，APP开启该AddOn状态时会弹出“AddOn服务不存在”提示。")]),a._v(" "),t("h4",{attrs:{id:"serviceenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serviceenabled"}},[a._v("#")]),a._v(" serviceenabled")]),a._v(" "),t("p",[a._v("  Addon开机启动，0代表开机此AddOn包为关闭状态，1代表开机此AddOn包为开启状态。若不填或填其他数值及字符无效，APP开启该AddOn状态时会弹出“操作失效AddOn失败”提示。")])])}),[],!1,null,null,null);t.default=n.exports}}]);