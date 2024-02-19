(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1207:function(t,s,a){t.exports=a.p+"assets/media/案例展示.7b53b532.mp4"},1208:function(t,s,a){t.exports=a.p+"assets/img/run_addOn.00186c20.gif"},1209:function(t,s,a){t.exports=a.p+"assets/img/developPage.432adecc.png"},1210:function(t,s,a){t.exports=a.p+"assets/media/open_customer_node.fa6d5e03.mp4"},1211:function(t,s,a){t.exports=a.p+"assets/img/crate_block.148d5ca0.gif"},1212:function(t,s,a){t.exports=a.p+"assets/img/Add_Http.57d4df37.gif"},1213:function(t,s,a){t.exports=a.p+"assets/img/program_hello.bbf58bd2.gif"},1214:function(t,s,a){t.exports=a.p+"assets/img/debug.249e6774.png"},1215:function(t,s,a){t.exports=a.p+"assets/img/debug1.95a87799.png"},1216:function(t,s,a){t.exports=a.p+"assets/img/debug2.a9e78f70.png"},1217:function(t,s,a){t.exports=a.p+"assets/img/debug3.1d4bfe87.png"},1218:function(t,s,a){t.exports=a.p+"assets/img/debug4.d499bb03.png"},1219:function(t,s,a){t.exports=a.p+"assets/img/自定义指令生成失败.1adf3b67.png"},1220:function(t,s,a){t.exports=a.p+"assets/img/AddOn没有运行.888c8775.png"},1221:function(t,s,a){t.exports=a.p+"assets/img/统一名称.d5588b6a.png"},1222:function(t,s,a){t.exports=a.p+"assets/img/服务器内部错误.01814901.png"},1223:function(t,s,a){t.exports=a.p+"assets/img/属性匹配失败.db86b142.png"},1224:function(t,s,a){t.exports=a.p+"assets/img/检查属性名.5c4c4ed7.png"},1761:function(t,s,a){"use strict";a.r(s);var n=a(81),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义指令开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令开发"}},[t._v("#")]),t._v(" 自定义指令开发")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("该页面旨在指导开发者如何开发具有自定义指令功能的 AddOn 包。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[t._v("本章为入门教程，主要目的是使开发者了解自定义指令的基础知识与基本开发流程。")]),t._v(" "),s("p",[t._v("若需了解如何开发带有具体应用功能、应用于具体工艺场景的自定义指令 AddOn 包，请参考后续的完整案例章节。")])]),t._v(" "),s("h2",{attrs:{id:"关于自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于自定义指令"}},[t._v("#")]),t._v(" 关于自定义指令")]),t._v(" "),s("h3",{attrs:{id:"自定义指令是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令是什么"}},[t._v("#")]),t._v(" 自定义指令是什么")]),t._v(" "),s("p",[t._v("自定义指令是指开发者根据自己的需求，在符合 JAKA 脚本规则的情况下，开发出的除 JAKA App 内标准程序指令之外的其他指令。")]),t._v(" "),s("h3",{attrs:{id:"自定义指令的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令的作用"}},[t._v("#")]),t._v(" 自定义指令的作用")]),t._v(" "),s("p",[t._v("如简介中所述，当机器人末端连接了新的第三方工具，或是应用于具体工作场景中去操作具体工艺时，往往需要在 JAKA App 编程界面编写繁杂的指令、设置繁多的参数。这一步骤较复杂，且不易于二次复用，所以此时就需要把这些繁、杂、多的指令和参数封装为一条直接易懂、简单易用的指令块，以节约时间成本、提升操作效率。")]),t._v(" "),s("h2",{attrs:{id:"创建-addon-自定义指令包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-addon-自定义指令包"}},[t._v("#")]),t._v(" 创建 AddOn 自定义指令包")]),t._v(" "),s("p",[t._v("在此处的示范中，我们将创建一个自定义指令类型的 AddOn ，该 AddOn 的功能是将指令块上输入和选择的内容显示在 App 日志中。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"800",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1207),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注：")]),t._v(" "),s("p",[t._v("下文中的 JAKA_Command 就是我们即将创建的 AddOn 自定义指令包的包名。")])]),t._v(" "),s("h3",{attrs:{id:"步骤一-创建-addon-文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-创建-addon-文件夹"}},[t._v("#")]),t._v(" 步骤一：创建 AddOn 文件夹")]),t._v(" "),s("p",[t._v("首先我们需要创建一个 AddOn 基本文件夹，该文件夹需包含一个 "),s("code",[t._v(".ini")]),t._v(" 格式的配置文件和一个保存数据的 Json 文件。\n您可以从头开始手动创建，也可以使用 AddOn 开发包仓库中  "),s("a",{attrs:{href:"https://github.com/JakaCobot/jaka_addon_kit",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),s("em",[t._v("Template")]),t._v('" '),s("OutboundLink")],1),t._v(" 目录下的 AddOn 模板进行修改。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("目录结构")]),t._v(" "),s("p",[t._v("|——JAKA_Command"),s("br"),t._v("\n   |——AddOn.json"),s("br"),t._v("\n   |——JAKA_Command_config.ini")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("AddOn.json")]),s("br"),t._v("\nJson 文件内容为空即可，后面的步骤中会自动生成数据写入。")]),t._v(" "),s("li",[s("strong",[t._v("JAKA_Command_config.ini")]),s("br"),t._v("\n配置文件具体内容如下:"),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Command")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[t._v("在日志中输出信息")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/myAddOnUi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("AddOn.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("详细的配置项说明可参考："),s("RouterLink",{attrs:{to:"/guide/addOn/7.1-IniConfig.html"}},[t._v("配置文件说明 "),s("strong",[t._v("[点击跳转]")]),t._v(" 👈")])],1)]),t._v(" "),s("h3",{attrs:{id:"步骤二-打包-上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-打包-上传"}},[t._v("#")]),t._v(" 步骤二：打包 & 上传")]),t._v(" "),s("p",[t._v("接下来我们会将步骤一中创建好的文件夹打包，上传至控制器中进行指令块开发，打包的要求格式为"),s("code",[t._v(".tar.gz")]),t._v("。")]),t._v(" "),s("p",[t._v("在 Windows 中您可以使用 7z 等打包工具进行二次压缩。"),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(655)}})]),s("p"),t._v(" "),s("p",[t._v("在 App 中附加管理程序页面上传 AddOn 。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(656)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("到此为止，我们完成了 AddOn 包的初始化工作，并打包为了 AddOn 的标准格式，上传至控制器。\n接下来我们可以进一步制作 AddOn 的具体功能。")])]),t._v(" "),s("h3",{attrs:{id:"步骤三-开发自定义指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-开发自定义指令"}},[t._v("#")]),t._v(" 步骤三：开发自定义指令")]),t._v(" "),s("ol",[s("li",[t._v("运行 AddOn 并查看 AddOn 运行的端口号。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1208)}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("打开浏览器，在地址栏中输入机器人 IP + 端口号（"),s("code",[t._v("IP:Portal")]),t._v("）进入开发者界面。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"1000",src:a(1209)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("当 AddOn 运行后，控制器会基于该 AddOn 包中的 "),s("code",[t._v("AddOn.json")]),t._v(" 文件启动一个 node-red 实例。\n我们可以通过机器人的 IP 和 AddOn 当前运行的端口号访问这个 node-red 实例。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[t._v("AddOn 的运行端口不是固定不变的，系统会根据实际情况进行动态分配。因此每当你需要使用 AddOn 的端口号时，\n都应该查询当前的端口号是多少。如果是你在 node-red 中编程时需要用到这个端口号，最佳的实践方式是从 AddOn 的配置文件 "),s("code",[t._v("xxx_config.ini")]),t._v(" 中查询。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在左侧节点栏 JAKA AddOn 目录中找到 "),s("code",[t._v("自定义指令")]),t._v(" 节点，拖入中间工作区中，点击部署。")])]),t._v(" "),s("p",[t._v("双击"),s("code",[t._v("自定义指令")]),t._v(" 节点，打开指令块生成工具页面。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"1000",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1210),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("自定义指令")]),t._v(" 节点的使用说明可以在 node-red 的节点帮助文档中查看。")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("在"),s("em",[t._v("基本配置")]),t._v("页面中，使用页面案例自带的属性定义指令块的样式和属性，不进行任何修改。\n同时，将指令块名称更改为"),s("em",[t._v("hello_jaka")]),t._v("，并将颜色调整为绿色。在"),s("em",[t._v("脚本生成")]),t._v("页面中，\n使用页面案例提供的脚本定义指令块的行为，保持原样不做更改。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"1000",src:a(1211)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("此处所使用的脚本语言为 JAKA 编程脚本，具体语法请参考"),s("RouterLink",{attrs:{to:"/guide/jks.html"}},[t._v("JAKA编程脚本👈")]),t._v("。")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("到此为止，我们已经成功的完成了自定义指令的定义，包括了样式、属性、脚本等。到这一步，其实在 App 中已经可以\n找到我们刚才制作的指令块了，但是并不能拖到程序中运行，是因为 App 还不能获取到自定义指令的脚本。"),s("br"),t._v("\n接下来我们就需要在 node-red 中继续完善流程，让 App 可以获取脚本。")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("使用 "),s("code",[t._v("http in")]),t._v(" 和 "),s("code",[t._v("http response")]),t._v(" 节点完善流程。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"1000",src:a(1212)}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[s("code",[t._v("http in")]),t._v(" 节点的 URL 要与自定义指令块的名称一致。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("可以认为，自定义指令其实是自定义服务的一种，通过 Http 请求的形式，为 App 提供自定义指令的脚本。\n当在 App 中保存或运行自定义指令时，会发起 Http GET 请求获取脚本，\n请求的 URL 是 "),s("code",[t._v("Robot_IP:AddOn_Port/Command_Name")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"步骤四-运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤四-运行"}},[t._v("#")]),t._v(" 步骤四：运行")]),t._v(" "),s("p",[t._v("在 node-red 中部署流程后，在附加程序页面点击刷新按钮，即可在 App 中编程页面的扩展指令中找到刚才制作的指令块。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"1000",src:a(1213)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("🎉恭喜！\n您已经完成了整个自定义指令的开发流程。接下来一起了解如何调试及处理一些常见问题吧。")])]),t._v(" "),s("h2",{attrs:{id:"调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),s("p",[s("strong",[t._v("如何检查通讯收发的参数是否正确？")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("在 node-red 中使用 debug 节点，是进行调试的常用手段。")])]),t._v(" "),s("p",[t._v("使用 debug 节点检查保存时 App 发来的指令块参数和返回的 JKS 是否正确。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1214)}})]),t._v(" "),s("p",[t._v("保存或运行程序时，App 发起 Get 请求，此时指令块中填入的内容作为请求的参数。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1215)}})]),t._v(" "),s("p",[t._v("此时debug1可以捕获到请求中传入的参数对象。该对象的键为指令块上属性的名字，值为属性的具体内容，包括属性值和属性类型。")]),t._v(" "),s("p",[t._v("以下面收到的内容为例，“Select1” 为定义的下拉框属性名，“value” 为属性值，0 代表此时选中了下拉框的第一个选项。“type” 为指令块上填入参数的类型，该参数仅对输入框类型的属性有意义。0 表示输入框内为手动写入的值，1 表示输入框内放入了变量类型的内容（系统变量、计算结果等数据类型的指令块）。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1216)}})]),t._v(" "),s("p",[t._v("debug2打印的信息中包含了本次保存生成的 JKS 脚本的对象。")]),t._v(" "),s("p",[t._v("其中 error_code 为生成 JKS 的错误码，0 是生成正常，-12 为内部错误。当该错误码不等于 0 时，App 会弹窗报错相应的错误码和错误信息。我们这里只需要关注 “jks” 这个属性即可，该属性的值即为实际生产的 JKS 脚本。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1217)}})]),t._v(" "),s("p",[s("strong",[t._v("模拟生成脚本")])]),t._v(" "),s("ul",[s("li",[t._v("脚本生成页面，在左侧指令块上输入参数后，点击“生成 JKS 脚本”可模拟生成脚本，在下方代码窗口内查看模拟生成的代码。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1218)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[t._v("点击“生成 JKS 脚本”按钮只是在下方的代码窗口中显示模拟生成的脚本，并没有其他实际的作用。")])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("p",[t._v("在开发过程中，可能会遇到如下问题，具体情况及相应解决方法请看下文。")]),t._v(" "),s("p",[s("strong",[t._v("自定义指令生成失败")]),s("br"),t._v("\n在 App 编程页面使用自定义指令块后，点击保存，报错“自定义指令生成失败”，可能是以下几个原因导致的。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1219)}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("AddOn 没有运行"),s("br"),t._v("\n解决方法：在附加程序页面找到该 AddOn ，点击运行按钮开启 AddOn 。\n")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1220)}})]),s("p")]),t._v(" "),s("li",[s("p",[t._v("node-red 中的 "),s("code",[t._v("http in")]),t._v(" 节点中 url 与指令块名字不一致"),s("br"),t._v("\n解决方法：将 url 与指令块名称统一。\n")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1221)}})]),s("p")])]),t._v(" "),s("p",[s("strong",[t._v("服务器内部错误")]),s("br"),t._v("\n当遇到服务器内部错误时，一般都是因为 App 没有收到 Http 请求的响应超时导致。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1222)}})]),t._v(" "),s("p",[t._v("解决方法：检查 node-red 端的 "),s("code",[t._v("http in")]),t._v(" 节点是否正确连接 "),s("code",[t._v("http response")]),t._v(" 节点，连接后在 App 端重启 AddOn 。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),s("p",[t._v("-恢复连接后任然需要重启 AddOn 服务，才能正常保存程序。"),s("br"),t._v("\n-报错信息中请重启控制器的描述有误，重启 AddOn 即可。")])]),t._v(" "),s("p",[s("strong",[t._v("属性匹配失败")]),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1223)}})]),s("p"),t._v(" "),s("p",[t._v("解决方法：检查 node-red 中自定义指令的属性名称是否与脚本定义中用到的一致。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1224)}})])])}),[],!1,null,null,null);s.default=e.exports},655:function(t,s,a){t.exports=a.p+"assets/img/compress_addon.01c8b684.gif"},656:function(t,s,a){t.exports=a.p+"assets/img/upLoad_addon.aedec686.png"}}]);