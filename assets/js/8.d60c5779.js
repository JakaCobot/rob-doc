(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1674:function(t,e,a){"use strict";a.r(e);var n=a(81),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"custom-command-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-command-development"}},[t._v("#")]),t._v(" Custom Command Development")]),t._v(" "),e("p",[e("strong",[t._v("This page aims to guide developers on how to develop custom command add-ons.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Please Note:")]),t._v(" "),e("p",[t._v("This chapter serves as an introductory tutorial, primarily to familiarize developers with the basic knowledge and development process of custom commands.")]),t._v(" "),e("p",[t._v("For information on how to develop AddOn packages with specific function for specific scenarios, please refer to the subsequent comprehensive case chapters.")])]),t._v(" "),e("h2",{attrs:{id:"about-custom-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-custom-commands"}},[t._v("#")]),t._v(" About Custom Commands")]),t._v(" "),e("h3",{attrs:{id:"what-are-custom-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-are-custom-commands"}},[t._v("#")]),t._v(" What are Custom Commands")]),t._v(" "),e("p",[t._v("Custom commands refer to commands that are not in the JAKA App commands directory, in compliance with JAKA script rules, but developed by developers according to their own needs.")]),t._v(" "),e("h3",{attrs:{id:"purpose-of-custom-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purpose-of-custom-commands"}},[t._v("#")]),t._v(" Purpose of Custom Commands")]),t._v(" "),e("p",[t._v("As mentioned in the introduction, when a robot's end effector is connected to a new third-party tool, or when it is used to operate specific processes in a specific work scenario, it often requires writing complex commands and setting numerous parameters in the JAKA App programming interface. This step is complex and not easily reusable, so it is necessary to encapsulate these complex, diverse commands and parameters into a single, straightforward, easy-to-use command block to save time and improve efficiency.")]),t._v(" "),e("h2",{attrs:{id:"creating-an-addon-custom-command-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-addon-custom-command-package"}},[t._v("#")]),t._v(" Creating an AddOn Custom Command Package")]),t._v(" "),e("p",[t._v("In this demonstration, we will create a custom command add-on, the function of which is to display the input and selected content from the instruction block in the App log.\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(782)}})]),e("p"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note:")]),t._v(" "),e("p",[t._v('In the following content, "JAKA_Command" refers to the package name of the AddOn custom command we are about to create.')])]),t._v(" "),e("h3",{attrs:{id:"step-one-create-an-addon-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-one-create-an-addon-folder"}},[t._v("#")]),t._v(" Step One: Create an AddOn Folder")]),t._v(" "),e("p",[t._v("First, we need to create a basic AddOn folder, which should contain a .ini format configuration file and a json file for data storage.")]),t._v(" "),e("p",[t._v("You can create a new folder, or you can modify the AddOn template under the "),e("a",{attrs:{href:"https://github.com/JakaCobot/jaka_addon_kit",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),e("em",[t._v("Template")]),t._v('"'),e("OutboundLink")],1),t._v(" directory in the AddOn development package repository.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Directory Structure")]),t._v(" "),e("p",[t._v("|——JAKA_Command"),e("br"),t._v("\n   |——AddOn.json"),e("br"),t._v("\n   |——JAKA_Command_config.ini")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("AddOn.json")]),e("br"),t._v("\nThe json file can be empty. Data will be generated and written in the subsequent steps.")]),t._v(" "),e("li",[e("strong",[t._v("JAKA_Command_config.ini")]),e("br"),t._v(" "),t._v("\nThe content of the "),e("RouterLink",{attrs:{to:"/en/guide/addOn/iniConfig.html"}},[t._v("configuration file 👈")]),t._v(" is as follows:"),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token section"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Command")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token inner-value"}},[t._v("Output information in the log")]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/myAddOnUi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("AddOn.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])])])],1)]),t._v(" "),e("h3",{attrs:{id:"step-two-package-upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-two-package-upload"}},[t._v("#")]),t._v(" Step Two: Package & Upload")]),t._v(" "),e("p",[t._v("Next, we will package the folder created in Step One and upload it to the controller. The required format for packaging is "),e("code",[t._v(".tar.gz")]),t._v(".")]),t._v(" "),e("p",[t._v("In Windows, you can use tools like 7z for secondary compression."),e("br")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(657)}})]),e("p"),t._v(" "),e("p",[t._v("In the App, use the attached management page to upload the add-on.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(658)}})]),t._v(" "),e("h3",{attrs:{id:"step-three-develop-custom-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-three-develop-custom-commands"}},[t._v("#")]),t._v(" Step Three: Develop Custom Commands")]),t._v(" "),e("ol",[e("li",[t._v("Run the add-on and check the port number it is running on.")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(783)}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Open a browser, enter the robot's IP address and port number in the address bar, "),e("code",[t._v("IP:Portal")]),t._v(", to access the developer interface.")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"1000",src:a(784)}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("In the left toolbar, find the "),e("code",[t._v("Customized Commands")]),t._v(' node, drag it to the middle, and click "Deploy".')])]),t._v(" "),e("p",[t._v("Double-click the "),e("code",[t._v("Customized Commands")]),t._v(" node to open the command block generation tool page.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("video",{attrs:{width:"1000",controls:"",autoplay:""}},[e("source",{attrs:{src:a(785),type:"video/mp4"}})])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[t._v("In the "),e("em",[t._v("Basic Configuration")]),t._v(" page, define the style and attributes of the command block. In this case, use the attributes provided by the example page without making any changes.")])]),t._v(" "),e("li",[e("p",[t._v("Change the instruction block name to "),e("em",[t._v("hello_jaka")]),t._v(" and set the color to green.")])]),t._v(" "),e("li",[e("p",[t._v("In the "),e("em",[t._v("Script Generation")]),t._v(" page, define the behavior of the command block. In this case, use the script provided by the example page without making any changes.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"1000",src:a(786)}})]),t._v(" "),e("ul",[e("li",[t._v("The script language used here is JAKA programming script. For specific syntax, please refer to "),e("RouterLink",{attrs:{to:"/guide/jks.html"}},[t._v("JAKA Programming Script 👈")]),t._v(".\n")],1)])]),t._v(" "),e("li",[e("p",[t._v("When saving custom commands in the App, a script will be obtained via an HTTP get request. Therefore, you need to use the "),e("code",[t._v("http in")]),t._v(" and "),e("code",[t._v("http response")]),t._v(" nodes to complete the flow.")])])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"1000",src:a(787)}})]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Please Note:")]),t._v(" "),e("p",[t._v("The URL of the "),e("code",[t._v("http in")]),t._v(" node must be consistent with the name of the custom command block.")])]),t._v(" "),e("h3",{attrs:{id:"step-four-run-the-developed-add-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-four-run-the-developed-add-on"}},[t._v("#")]),t._v(" Step Four: Run the Developed Add-on")]),t._v(" "),e("p",[t._v("After deploying the flow in node-red, click the refresh button on the attached programs page. You will find the newly created command block in the extended commands of the programming page in the App.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"1000",src:a(788)}})]),t._v(" "),e("h2",{attrs:{id:"debugging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[t._v("#")]),t._v(" Debugging")]),t._v(" "),e("p",[t._v("During the development process, you may encounter the following issues. Please refer to the following text for specific situations and corresponding debugging methods.")]),t._v(" "),e("p",[e("strong",[t._v("Custom Command Generation Failed")]),e("br"),t._v('\nWhen using a custom command block in the App programming page, clicking save may result in an error message "Custom command generation failed". This may be caused by the following reasons.')]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(789)}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Add-on is not running"),e("br"),t._v("\nSolution: Find the add-on in the attached programs page and click the run button to start the add-on.\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(790)}})]),e("p")]),t._v(" "),e("li",[e("p",[t._v("The URL in the "),e("code",[t._v("http in")]),t._v(" node in node-red does not match the name of the instruction block"),e("br"),t._v("\nSolution: Ensure that the URL matches the name of the instruction block.\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(791)}})]),e("p")])]),t._v(" "),e("p",[e("strong",[t._v("Internal Server Error")]),e("br"),t._v("\nWhen encountering an internal server error, it is generally due to a timeout in receiving the HTTP request in the App.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(792)}})]),t._v(" "),e("p",[t._v("Solution: Check if the "),e("code",[t._v("http in")]),t._v(" node in node-red is correctly connected to the "),e("code",[t._v("http response")]),t._v(" node. After connecting, restart the add-on on the App.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("ul",[e("li",[t._v("Currently, even after reconnecting, you still need to restart the AddOn service to save the program. This is caused by some unknown bugs internally and will be fixed in future versions.")]),t._v(" "),e("li",[t._v("The description in the error message that instructs to restart the controller is incorrect. Restarting the add-on is sufficient.")])])]),t._v(" "),e("p",[e("strong",[t._v("Attribute Matching Failed")]),e("br")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(793)}})]),e("p"),t._v(" "),e("p",[t._v("Solution: Check if the attribute names used in the custom command in node-red match those used in the script definition.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(794)}})]),t._v(" "),e("p",[e("strong",[t._v("How to Check if the Communication Parameters are Correct?")])]),t._v(" "),e("ul",[e("li",[t._v("Use the debug node in node-red for debugging. It can debug the parameters sent by the instruction block when saving and the returned JKS to see if they are correct.")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(795)}})]),t._v(" "),e("p",[t._v("When saving or running the program, the App initiates a GET request.")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(796)}})]),t._v(" "),e("p",[t._v("At this point, debug1 can capture the parameters transmitted in the request. The keys of this object are the names of the attributes on the instruction block, and the values are the specific content of the attributes, including the attribute value and type.")]),t._v(" "),e("p",[t._v('Using the content below as an example, "Select1" is the name of the dropdown box attribute defined, "value" is the attribute value, and 0 indicates that the first option in the dropdown box is selected at this time.')]),t._v(" "),e("p",[t._v('"type" is the type of parameter entered in the instruction block, which is only meaningful for input box type attributes. 0 indicates that the value entered in the input box is manually entered, and 1 indicates that the input box contains content of variable type (data types of instruction blocks such as system variables, calculation results, etc.).')]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(797)}})]),t._v(" "),e("p",[t._v("The information printed in debug2 includes the object of the JKS script generated this time.")]),t._v(" "),e("p",[t._v("Among them, "),e("code",[t._v("error_code")]),t._v(' is the error code for generating the JKS. 0 means normal generation, and -12 means internal error. When this error code is not equal to 0, the App will pop up an error message with the corresponding error code and error information. Here, we only need to pay attention to the "jks" attribute, which is the actual generated JKS script.')]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:a(798)}})]),t._v(" "),e("p",[e("strong",[t._v("Simulate Script Generation")])]),t._v(" "),e("ul",[e("li",[t._v('On the script generation page, after entering parameters in the left instruction block, click "Generate JKS Script" to simulate the generation of a script. View the simulated generated code in the code window below.')])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"800",src:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Please Note:")]),t._v(" "),e("p",[t._v('Clicking the "Generate JKS Script" button only displays the simulated generated script in the code window below, and has no other practical effect.')])])])}),[],!1,null,null,null);e.default=s.exports},657:function(t,e,a){t.exports=a.p+"assets/img/compress_addon.01c8b684.gif"},658:function(t,e,a){t.exports=a.p+"assets/img/upLoad_addon.48d7cc18.png"},782:function(t,e,a){t.exports=a.p+"assets/img/showcase.5e7e71ca.png"},783:function(t,e,a){t.exports=a.p+"assets/img/run_addOn.025972da.gif"},784:function(t,e,a){t.exports=a.p+"assets/img/developPage.01a9b62d.png"},785:function(t,e,a){t.exports=a.p+"assets/media/open_coustomer_node.39c25a63.mp4"},786:function(t,e,a){t.exports=a.p+"assets/img/creat_block.4dbac9b4.gif"},787:function(t,e,a){t.exports=a.p+"assets/img/Add_Http.1043a426.gif"},788:function(t,e,a){t.exports=a.p+"assets/img/program_hello.9354dcf8.gif"},789:function(t,e,a){t.exports=a.p+"assets/img/自定义指令生成失败.46defbf6.png"},790:function(t,e,a){t.exports=a.p+"assets/img/AddOn没有运行.ef5ccfe1.png"},791:function(t,e,a){t.exports=a.p+"assets/img/统一名称.d5588b6a.png"},792:function(t,e,a){t.exports=a.p+"assets/img/服务器内部错误.899b85fb.png"},793:function(t,e,a){t.exports=a.p+"assets/img/属性匹配失败.dc6359e5.png"},794:function(t,e,a){t.exports=a.p+"assets/img/检查属性名.1b68e5e5.png"},795:function(t,e,a){t.exports=a.p+"assets/img/debug.249e6774.png"},796:function(t,e,a){t.exports=a.p+"assets/img/debug1.fb957fa0.png"},797:function(t,e,a){t.exports=a.p+"assets/img/debug2.5325724d.png"},798:function(t,e,a){t.exports=a.p+"assets/img/debug3.12742cad.png"}}]);