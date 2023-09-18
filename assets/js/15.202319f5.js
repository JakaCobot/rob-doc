(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1341:function(v,_,t){v.exports=t.p+"assets/img/image-20230606163729424.a26ceee9.png"},1342:function(v,_,t){v.exports=t.p+"assets/img/image-20230606163734797.550bfaa4.png"},1387:function(v,_,t){"use strict";t.r(_);var d=t(81),r=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"功能io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能io"}},[v._v("#")]),v._v(" 功能IO")]),v._v(" "),_("h2",{attrs:{id:"功能io介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能io介绍"}},[v._v("#")]),v._v(" 功能IO介绍")]),v._v(" "),_("p",[v._v("在I/O界面中可以对DI进行功能设置，在功能选择框下拉选择该DI所想设置的功能，点击“确认”，当该DI信号被触发时，则启动该功能。目前DI信号支持功能有：启动程序、暂停程序、继续运行程序、停止程序、打开电源、关闭电源、机器人上使能、机器人下使能、一级缩减模式、二级缩减模式、防护停止、回初始位置、清除故障、进入拖拽和退出拖拽功能。功能触发条件，如下表所示：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[v._v("功能名称")])]),v._v(" "),_("th",[_("strong",[v._v("触发方式")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("启动程序")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("暂停程序")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("继续运行程序")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("停止程序")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("打开电源")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("关闭电源")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("机器人上使能")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("机器人下使能")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("一级缩减模式")]),v._v(" "),_("td",[v._v("低电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("二级缩减模式")]),v._v(" "),_("td",[v._v("低电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("防护停止")]),v._v(" "),_("td",[v._v("低电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("回初始位置")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("清除故障")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("进入拖拽")]),v._v(" "),_("td",[v._v("上升沿信号")])]),v._v(" "),_("tr",[_("td",[v._v("退出拖拽")]),v._v(" "),_("td",[v._v("上升沿信号")])])])]),v._v(" "),_("p",[v._v("注：")]),v._v(" "),_("p",[v._v("清除故障只清除碰撞报警，其他异常报警无法清除。")]),v._v(" "),_("p",[v._v("二级缩减倍率应小于一级缩减倍率，在【设置】→【安全设置】→【防护系统】中进行设置缩减倍率。")]),v._v(" "),_("p",[v._v("NPN为输入24V OFF，PNP为输入24V ON。")]),v._v(" "),_("p",[v._v("在I/O界面中可以对DO进行功能设置，在功能选择框下拉设置DO所绑定的系统预定义的状态量，点击确认后，该DO信号将实时反映所绑定的系统状态量的状态。目前DO信号支持绑定的状态有：空闲、程序暂停、程序运行、错误、已上电、已使能、运动中、静止、已开机、系统急停按钮状态、机器人缩减状态、系统保护性停止状态、安全位置等。")]),v._v(" "),_("p",[v._v("不同状态下的信号状态如下表：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[v._v("机器人状态")])]),v._v(" "),_("th",[_("strong",[v._v("信号状态")])])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("空闲")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("程序暂停")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("程序运行")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("错误")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("已上电")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("已使能")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("运动中")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("静止")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("已开机")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("系统急停按钮状态")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("机器人缩减状态")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("系统保护性停止状态")]),v._v(" "),_("td",[v._v("高电平信号")])]),v._v(" "),_("tr",[_("td",[v._v("安全位置")]),v._v(" "),_("td",[v._v("高电平信号")])])])]),v._v(" "),_("p",[v._v("注：")]),v._v(" "),_("p",[v._v("空闲状态为机器人未运行程序状态，与机器人本体状态无关。")]),v._v(" "),_("p",[v._v("错误状态为机器人触发碰撞报警状态。")]),v._v(" "),_("p",[v._v("运动中状态为机器人处于运动（运行程序运动，手动控制，二次开发控制运动等等）状态便会触发，与程序状态无关。")]),v._v(" "),_("p",[v._v("静止状态为机器人处于静止（程序暂停，未运行程序，程序结束，等待信号等等）状态，与程序状态无关。")]),v._v(" "),_("p",[v._v("已开机状态为控制柜处于上电开机状态，与机器人本体状态无关。")]),v._v(" "),_("p",[v._v("机器人缩减状态为机器人是否触发二级缩减模式状态。")]),v._v(" "),_("p",[v._v("安全位置状态DO为用户在安全设置中姿态设置自定义配置的位置，当机器人处于此位置时，会触发此信号。")]),v._v(" "),_("p",[_("img",{attrs:{src:t(1341),alt:"image-20230606163729424"}})]),v._v(" "),_("p",[v._v("功能DI示意图")]),v._v(" "),_("p",[_("img",{attrs:{src:t(1342),alt:"image-20230606163734797"}})]),v._v(" "),_("p",[v._v("功能DO示意图")])])}),[],!1,null,null,null);_.default=r.exports}}]);