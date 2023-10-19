(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1426:function(t,a,s){t.exports=s.p+"assets/img/showcase.23bc5a40.png"},1427:function(t,a,s){t.exports=s.p+"assets/img/compress_addon.01c8b684.gif"},1428:function(t,a,s){t.exports=s.p+"assets/img/upLoad_addon.aedec686.png"},1429:function(t,a,s){t.exports=s.p+"assets/img/run_addOn.00186c20.gif"},1430:function(t,a,s){t.exports=s.p+"assets/img/developPage.01a9b62d.png"},1431:function(t,a,s){t.exports=s.p+"assets/img/creat_block.148d5ca0.gif"},1432:function(t,a,s){t.exports=s.p+"assets/img/Add_Http.57d4df37.gif"},1433:function(t,a,s){t.exports=s.p+"assets/img/program_hello.bbf58bd2.gif"},1478:function(t,a,s){"use strict";s.r(a);var n=s(81),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"カスタムコマンドの基礎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#カスタムコマンドの基礎"}},[t._v("#")]),t._v(" カスタムコマンドの基礎")]),t._v(" "),a("p",[a("strong",[t._v("JAKA_Commandの作成を通じて、カスタムコマンド型のAddOnの開発プロセスと基本を学びます。")])]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("  このチュートリアルでは、指令ブロックの内容に基づいて、異なる内容をAppログに出力するカスタムコマンド型のAddOnを作成します。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1426)}})]),t._v(" "),a("h2",{attrs:{id:"jaka-commandの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jaka-commandの作成"}},[t._v("#")]),t._v(" JAKA_Commandの作成")]),t._v(" "),a("h3",{attrs:{id:"ステップ1-addonパッケージの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ステップ1-addonパッケージの作成"}},[t._v("#")]),t._v(" ステップ1: AddOnパッケージの作成")]),t._v(" "),a("p",[t._v("  まず、.ini形式の設定ファイルとデータを保存するJSONファイルを含む基本的なAddOnファイルを作成する必要があります。手動で作成するか、AddOn開発パッケージリポジトリの"),a("a",{attrs:{href:"https://github.com/JakaCobot/jaka_addon_kit",target:"_blank",rel:"noopener noreferrer"}},[t._v('"'),a("em",[t._v("Template")]),t._v('"'),a("OutboundLink")],1),t._v("ディレクトリからAddOnのテンプレートを変更できます。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("ディレクトリ構造")]),t._v(" "),a("p",[t._v("|——JAKA_Command"),a("br"),t._v("\n   |——AddOn.json"),a("br"),t._v("\n   |——JAKA_Command_config.ini")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AddOn.json")]),a("br"),t._v("\n  JSONファイルの内容は空でかまいません。後続のステップでデータが自動的に書き込まれます。")]),t._v(" "),a("li",[a("strong",[t._v("JAKA_Command_config.ini")]),a("br"),t._v(" "),a("RouterLink",{attrs:{to:"/ja/guide/addOn/iniConfig.html"}},[t._v("設定ファイル")]),t._v("の内容は以下の通りです:"),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("AddOnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("convention")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("3.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("JAKA_Command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("description")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token inner-value"}},[t._v("ログに情報を出力する")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("portal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10006")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://localhost/myAddOnUi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("languagetype")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("node-red")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("AddOn.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("serviceenabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n")])])])],1)]),t._v(" "),a("h3",{attrs:{id:"ステップ2-パッケージ化とアップロード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ステップ2-パッケージ化とアップロード"}},[t._v("#")]),t._v(" ステップ2: パッケージ化とアップロード")]),t._v(" "),a("p",[t._v("  次に、AddOnをパッケージ化し、コマンドブロックの開発のためにコントローラにアップロードします。パッケージの形式は"),a("code",[t._v(".tar.gz")]),t._v("である必要があります。Windowsでは、7zなどのツールを使用して二次的な圧縮を行うことができます。"),a("br")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1427)}})]),t._v("\n  App内の添付マネージャーページでAddOnをアップロードします。"),a("br"),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"800",src:s(1428)}})]),a("p"),t._v(" "),a("h3",{attrs:{id:"ステップ3-カスタムコマンドの開発"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ステップ3-カスタムコマンドの開発"}},[t._v("#")]),t._v(" ステップ3: カスタムコマンドの開発")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("AddOnを実行し、ポートを確認")])]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"1000",src:s(1429)}})]),a("p")]),t._v(" "),a("li",[a("p",[a("strong",[t._v("開発者インターフェースにアクセス")]),t._v(" "),a("code",[t._v("IP:Port")]),t._v("を使用して開発者インターフェースにアクセスします。\n"),a("img",{attrs:{src:"",alt:"開発者インターフェース"}})]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"1000",src:s(1430)}})]),a("p")]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Customized Commandsノードをデプロイ")]),t._v("\n左のツールバーで"),a("code",[t._v("Customized Commands")]),t._v("ノードを見つけ、キャンバスにドラッグして、デプロイをクリックします。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("コマンドブロック生成ツールを開く")]),t._v(" "),a("code",[t._v("Customized Commands")]),t._v("ノードをダブルクリックして、コマンドブロック生成ツールページを開きます。\n")]),a("div",{attrs:{align:"center"}},[a("video",{attrs:{width:"1000",controls:"",autoplay:""}},[a("source",{attrs:{src:s(653),type:"video/mp4"}})])]),a("p")]),t._v(" "),a("li",[a("p",[a("strong",[t._v("コマンドブロックの名前と色を変更")]),t._v("\nコマンドブロックの名前を"),a("em",[t._v("hello_jaka")]),t._v("に変更し、色を緑に設定します。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("デフォルトの属性を使用")]),t._v(" "),a("em",[t._v("基本設定")]),t._v("ページでは、コマンドブロックのスタイルと属性を定義します。変更せずにデフォルトの属性を使用します。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("デフォルトのスクリプトを使用")]),t._v(" "),a("em",[t._v("スクリプト生成")]),t._v("ページでコマンドブロックの動作を定義します。変更せずにデフォルトのスクリプトを使用します。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"1000",src:s(1431)}})]),a("p"),t._v(" "),a("ul",[a("li",[t._v("JAKAスクリプトの構文については、"),a("RouterLink",{attrs:{to:"/guide/jks.html"}},[t._v("JAKAプログラミングスクリプト")]),t._v("を参照してください。")],1),t._v(" "),a("li",[a("code",[t._v("Customized Commands")]),t._v("ノードの詳しい使用方法については、"),a("RouterLink",{attrs:{to:"/guide/addOn/Commands_Tool.html"}},[t._v("カスタムコマンド作成ノード")]),t._v("を参照してください。")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("HTTPプロセスを完了")]),t._v("\nAppでカスタムコマンドを保存するとき、スクリプトはHTTP GETリクエストを介して取得されます。そのため、"),a("code",[t._v("http in")]),t._v("および"),a("code",[t._v("http response")]),t._v("ノードを使用してプロセスを完了します。")])])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"1000",src:s(1432)}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意！")]),t._v(" "),a("p",[a("code",[t._v("http in")]),t._v("ノードのURLは、カスタムコマンドブロックの名前と一致している必要があります！")])]),t._v(" "),a("h3",{attrs:{id:"ステップ4-実行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ステップ4-実行"}},[t._v("#")]),t._v(" ステップ4: 実行")]),t._v(" "),a("p",[t._v("  Node-REDでフローをデプロイした後、Appでカスタムコマンドブロックを使用できます。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"1000",src:s(1433)}})]),t._v(" "),a("h2",{attrs:{id:"デバッグ方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#デバッグ方法"}},[t._v("#")]),t._v(" デバッグ方法")])])}),[],!1,null,null,null);a.default=e.exports},653:function(t,a,s){t.exports=s.p+"assets/media/open_coustomer_node.fa6d5e03.mp4"}}]);