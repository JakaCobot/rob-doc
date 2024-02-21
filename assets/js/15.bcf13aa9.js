(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1207:function(t,s,a){t.exports=a.p+"assets/img/打包.a436a9fd.png"},1208:function(t,s,a){t.exports=a.p+"assets/img/上传.3b236757.png"},1209:function(t,s,a){t.exports=a.p+"assets/img/运行AddOn.be2088db.png"},1210:function(t,s,a){t.exports=a.p+"assets/img/进入开发页面.432adecc.png"},1211:function(t,s,a){t.exports=a.p+"assets/media/配置获取信息节点.26353954.mp4"},1212:function(t,s,a){t.exports=a.p+"assets/media/添加Http监听.85d7b14f.mp4"},1213:function(t,s,a){t.exports=a.p+"assets/media/响应请求.f7ba003a.mp4"},1214:function(t,s,a){t.exports=a.p+"assets/media/测试.f23247be.mp4"},1761:function(t,s,a){"use strict";a.r(s);var e=a(81),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义服务开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义服务开发"}},[t._v("#")]),t._v(" 自定义服务开发")]),t._v(" "),s("p",[s("strong",[t._v("该页面旨在指导开发者如何开发具有自定义服务功能的 AddOn 包。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[t._v("本章为入门教程，主要目的是使开发者了解自定义服务的基础知识与基本开发流程。")]),t._v(" "),s("p",[t._v("若需了解如何开发带有具体应用功能、应用于具体工艺场景的自定义服务 AddOn 包，请参考后续的完整案例章节。")])]),t._v(" "),s("h2",{attrs:{id:"关于自定义服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于自定义服务"}},[t._v("#")]),t._v(" 关于自定义服务")]),t._v(" "),s("h3",{attrs:{id:"自定义服务是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义服务是什么"}},[t._v("#")]),t._v(" 自定义服务是什么")]),t._v(" "),s("p",[t._v("自定义服务是一种在后台执行任务的服务，用户不会直接感知其存在。")]),t._v(" "),s("h3",{attrs:{id:"自定义服务的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义服务的作用"}},[t._v("#")]),t._v(" 自定义服务的作用")]),t._v(" "),s("p",[t._v("自定义服务负责处理与用户交互无关的、后台数据处理和业务逻辑处理的部分。与 Http 节点配合，可以和前台界面进行数据交互，为自定义指令、自定义网页、或其他客户端提供接收、处理、存储、计算和分析数据等服务。")]),t._v(" "),s("h2",{attrs:{id:"创建addon自定义服务包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建addon自定义服务包"}},[t._v("#")]),t._v(" 创建AddOn自定义服务包")]),t._v(" "),s("p",[t._v("在此处的示范中，我们将创建一个自定义服务类型的AddOn。该AddOn的功能是对外提供查询机器人电源状态的服务。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注：")]),t._v(" "),s("p",[t._v("下文中的 JAKA_Service 就是我们即将创建的 AddOn 自定义指令包的包名。")])]),t._v(" "),s("h3",{attrs:{id:"步骤一-创建-addon-文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-创建-addon-文件夹"}},[t._v("#")]),t._v(" 步骤一：创建 AddOn 文件夹")]),t._v(" "),s("p",[t._v("首先我们需要创建一个 AddOn 基本文件夹，该文件夹需包含一个 "),s("code",[t._v(".ini")]),t._v(" 格式的配置文件和一个保存数据的 Json 文件。")]),t._v(" "),s("p",[t._v("您可以从头开始手动创建，也可以使用 AddOn 开发包仓库中  "),s("a",{attrs:{href:"https://github.com/JakaCobot/jaka_addon_kit",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),s("em",[t._v("Template")]),t._v('" '),s("OutboundLink")],1),t._v(" 目录下的AddOn模板进行修改。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("目录结构")]),t._v(" "),s("p",[t._v("|——JAKA_Service"),s("br"),t._v("\n   |——AddOn.json"),s("br"),t._v("\n   |——JAKA_Service_config.ini")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("AddOn.json")]),s("br"),t._v("\nJson 文件内容为空即可，后面的步骤中会自动生成数据写入。")]),t._v(" "),s("li",[s("strong",[t._v("JAKA_Service_config.ini")]),s("br"),t._v("\n配置文件具体内容如下:"),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[t._v("JAKA AddOn Service Demo")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/myAddOnUi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("AddOn.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("详细的配置项说明可参考："),s("RouterLink",{attrs:{to:"/guide/addOn/7.1-IniConfig.html"}},[t._v("配置文件说明 "),s("strong",[t._v("[点击跳转]")]),t._v(" 👈")])],1)]),t._v(" "),s("h3",{attrs:{id:"步骤二-打包-上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-打包-上传"}},[t._v("#")]),t._v(" 步骤二：打包&上传")]),t._v(" "),s("p",[t._v("接下来我们会将步骤一中创建好的文件夹打包，上传至控制器中进行指令块开发，打包的要求格式为"),s("code",[t._v(".tar.gz")]),t._v("。")]),t._v(" "),s("p",[t._v("在 Windows 中您可以使用 7z 等打包工具进行二次压缩。"),s("br")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1207)}})]),s("p"),t._v(" "),s("p",[t._v("在 App 中附加管理程序页面上传 AddOn 。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1208)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("到此为止，我们完成了 AddOn 包的初始化工作，并打包为了 AddOn 的标准格式，上传至控制器。\n接下来我们可以进一步制作 AddOn 的具体功能。")])]),t._v(" "),s("h3",{attrs:{id:"步骤三-开发自定义服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-开发自定义服务"}},[t._v("#")]),t._v(" 步骤三：开发自定义服务")]),t._v(" "),s("ol",[s("li",[t._v("运行 AddOn 并查看 AddOn 运行的端口号。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"800",src:a(1209)}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("打开浏览器，在地址栏中输入机器人 IP + 端口号（"),s("code",[t._v("IP:Portal")]),t._v("）进入开发者界面。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"1000",src:a(1210)}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("当 AddOn 运行后，控制器会基于该 AddOn 包中的 "),s("code",[t._v("AddOn.json")]),t._v(" 文件启动一个 node-red 实例。\n我们可以通过机器人的 IP 和 AddOn 当前运行的端口号访问这个 node-red 实例。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意：")]),t._v(" "),s("p",[t._v("AddOn 的运行端口不是固定不变的，系统会根据实际情况进行动态分配。因此每当你需要使用 AddOn 的端口号时，\n都应该查询当前的端口号是多少。如果是你在代码需要用到这个端口号，最佳的实践方式是从 AddOn 的配置文件，"),s("code",[t._v("xxx_config.ini")]),t._v(" 中查询。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在左侧节点栏 JAKA AddOn 目录中找到 "),s("code",[t._v("获取机器人信息")]),t._v(" 节点，\n双击打开编辑页面，设置名称“电源状态”,并依次选择“机器人状态”——“电源状态”。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"1000",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1211),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("获取机器人信息")]),t._v(" 节点的使用说明可以在 node-red 的节点帮助文档中查看。")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("添加 "),s("code",[t._v("http in")]),t._v(" 节点,监听 Get 请求。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"1000",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1212),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("http in")]),t._v(" 节点连接，并定义了 URL 后，我们可以通过 "),s("code",[t._v("Robot_IP:AddOn_Port/Your_URL")]),t._v(" 对我们的服务进行请求。\n但无法收到响应，所以接下来需要制作响应消息对象，然会返回给请求。")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("生成响应消息，并使用 "),s("code",[t._v("http response")]),t._v(" 响应请求。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"1000",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1213),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("一开始我们不确定查询结果的类型和数据结构，可以使用 "),s("code",[t._v("inject")]),t._v(" 节点手动触发查询，用 "),s("code",[t._v("debug")]),t._v(" 节点观察返回值。")]),t._v(" "),s("li",[t._v("响应只能是字符串（String）或对象（Object）类型，因此需要将布尔值（Boolean） 放到一个对象中再返回。")])])]),t._v(" "),s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("p",[t._v("这里将使用 API 接口测试工具，对我们刚才制作的服务进行测试。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("video",{attrs:{width:"1000",controls:"",autoplay:""}},[s("source",{attrs:{src:a(1214),type:"video/mp4"}})])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("恭喜")]),t._v(" "),s("p",[t._v("🎉现在我们已经可以通过自定义服务查询机器人的电源状态了！")])])])}),[],!1,null,null,null);s.default=n.exports}}]);