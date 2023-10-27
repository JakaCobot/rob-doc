(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1671:function(e,n,t){"use strict";t.r(n);var a=t(81),s=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"about-addon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#about-addon"}},[e._v("#")]),e._v(" About AddOn")]),e._v(" "),n("p",[n("strong",[e._v("This page aims to explain basic concepts for AddOn developers.")])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Please note:")]),e._v(" "),n("ol",[n("li",[e._v("The AddOn mentioned in this tutorial refers to AddOn 3.0 by default.")]),e._v(" "),n("li",[e._v("AddOn 3.0 development and usage are supported on JAKA controllers > 1.7.1.x _X64 version.")]),e._v(" "),n("li",[e._v("AddOn 1.0 and 2.0 are no longer maintained and provided with development support.")])])]),e._v(" "),n("h2",{attrs:{id:"what-is-addon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-addon"}},[e._v("#")]),e._v(" What is AddOn")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("JAKA AddOn is a plugin software product provided by JAKA. It supports users in developing custom command plugins, service plugins, web plugins, and composite plugins that include the above types.")]),e._v(" "),n("p",[e._v("By using AddOn, users can significantly extend the functionality of the robot operating system or customize existing functionalities according to their preferences.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("For ease of distinction, two terms are defined here:")]),e._v(" "),n("ul",[n("li",[e._v("JAKA AddOn Kit: The kit package required during the development environment setup, namely jaka_addon_kit.tar.gz.")]),e._v(" "),n("li",[e._v("JAKA AddOnXXX Package: A package with specific functionality after development, such as JAKA AddOn Palletizing Package, JAKA AddOn BigHand Gripper Package, JAKA AddOn Visual Guidance Package, JAKA AddOn Sensor Control Package, and so on.\n")])])]),e._v(" "),n("h2",{attrs:{id:"why-use-addon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-use-addon"}},[e._v("#")]),e._v(" Why Use AddOn")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("In typical scenarios, when a new third-party tool is connected at the end of the robot or when performing specific processes (such as palletizing, welding, etc.) in specific usage scenarios, new commands need to be set in the programming interface.")]),e._v(" "),n("p",[e._v("These commands often contain complex, lengthy codes and parameters that are difficult to understand, reuse, and add extra burden to simple actions or programs. For engineers who are proficient in specific operational processes but not well-versed in robot programming, setting instructions is particularly complex and difficult.")]),e._v(" "),n("p",[e._v("Using AddOn can abstract away the code, greatly simplifying the instruction-setting process. It skips the complex settings in this programming step and directly encapsulates them into a simple, clear, and understandable command, making it easier to operate. It also facilitates the reuse of pre-coded instructions, allowing users to focus on executing specific processes, thereby enhancing efficiency and productivity.")]),e._v(" "),n("p",[e._v("In summary, using AddOn can improve programming efficiency and reduce user learning costs.")]),e._v(" "),n("h2",{attrs:{id:"basic-functions-of-addon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-functions-of-addon"}},[e._v("#")]),e._v(" Basic Functions of AddOn")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("As mentioned earlier, AddOn has three basic functions: developing custom command plugins, custom service plugins, and custom web plugins.")]),e._v(" "),n("p",[e._v("The implementation of these functions empowers existing systems, allowing users to customize new functions as needed or make changes and upgrades to existing ones.")]),e._v(" "),n("p",[e._v("JAKA's application development team can develop official JAKA application packages, process packages, and process kits through the AddOn framework for users to download and use. They can also assist JAKA customers in developing custom functions, services, and interfaces to meet their customization needs.")]),e._v(" "),n("p",[e._v("JAKA partners can develop ecosystem-standard plugins through the AddOn framework to enhance product compatibility and usability.")]),e._v(" "),n("p",[e._v("JAKA robot end users can develop custom commands through the AddOn framework to encapsulate and reuse commonly used commands.")]),e._v(" "),n("h2",{attrs:{id:"addon-operation-mechanism"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addon-operation-mechanism"}},[e._v("#")]),e._v(" AddOn Operation Mechanism")]),e._v(" "),n("hr"),e._v(" "),n("ul",[n("li",[e._v("AddOn Custom Commands")])]),e._v(" "),n("p",[e._v("AddOn custom commands are based on a B/S architecture. The programming page in the JAKA App is the client (B), running as a server (S) based on node-red in the JAKA controller. The operation mechanism is as follows:")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"800",src:t(701)}})]),e._v(" "),n("ul",[n("li",[e._v("AddOn Custom Services")])]),e._v(" "),n("p",[e._v("AddOn custom services are developed based on node-red and run internally on the controller. They can call JAKA's provided HTTP API interface to query information and control the robot. The operation mechanism is as follows:")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"800",src:t(702)}})]),e._v(" "),n("ul",[n("li",[e._v("AddOn Custom Web Pages")])]),e._v(" "),n("p",[e._v("AddOn custom web pages are deployed in the JAKA control cabinet and can interact with the controller and JAKA App. The interaction with the controller is through HTTP requests, and with JAKA App, it is through the API provided by JAKA App (JS methods). The operation mechanism is as follows:")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"800",src:t(703)}})]),e._v(" "),n("h2",{attrs:{id:"addon-file-composition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#addon-file-composition"}},[e._v("#")]),e._v(" AddOn File Composition")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("The completed AddOnXXX package may contain various files, and below are the most commonly used ones:")]),e._v(" "),n("p",[n("strong",[e._v("Data File")]),n("br"),e._v("\nAn AddOn package generally contains a JSON file that includes the definition of flows and nodes in node-red. The name of this file can be customized but needs to be pointed to in the configuration.")]),e._v(" "),n("p",[n("strong",[e._v("Configuration File")]),n("br"),e._v("\nAny type of AddOn plugin must include an "),n("code",[e._v("xxx_config.ini")]),e._v(" file, i.e., "),n("a",{attrs:{href:"./iniConfig"}},[e._v("AddOn Configuration File👈")]),e._v(". Only packages containing the AddOn configuration file can be installed, initialized, and run.")]),e._v(" "),n("p",[n("strong",[e._v("Frontend Project")]),n("br"),e._v('\nUnder the AddOn directory containing custom pages, there is usually a folder for the frontend project, such as client or dist. It is recommended to uniformly use "client" as the frontend project folder.')]),e._v(" "),n("h2",{attrs:{id:"feedback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feedback"}},[e._v("#")]),e._v(" Feedback")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("We appreciate your feedback!")]),e._v(" "),n("p",[e._v("If you find any narrative errors or unclear descriptions in the document, feel free to submit "),n("a",{attrs:{href:"https://github.com/JakaCobot/JakaCobot.github.io/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues"),n("OutboundLink")],1),e._v(" in our document repository.\n")])])}),[],!1,null,null,null);n.default=s.exports},701:function(e,n,t){e.exports=t.p+"assets/img/自定义指令机制.092b79a3.png"},702:function(e,n,t){e.exports=t.p+"assets/img/自定义服务机制.271ae62a.png"},703:function(e,n,t){e.exports=t.p+"assets/img/自定义网页机制.20d36c06.png"}}]);