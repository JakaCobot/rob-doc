---
title: 关于开发
sidebarDepth: 1
---

# 关于开发

## 开发资源获取
---
开发AddOn需要一系列的资源支持，此处将AddOn开发中必备的资源集中在一起，并将进行持续更新，方便开发者获取完整的、最新的资源版本内容。

在后续章节需要用到下面内容的地方会再次给出链接，此处只是做一个提示及汇总。
1. [JAKA虚拟机](https://github.com/JakaCobot/JAKASim)
2. [AddOn套件包](https://github.com/JakaCobot/jaka_addon_kit/releases)
3. AddOn[开发模板](https://github.com/JakaCobot/jaka_addon_kit)
4. 教程中包含的[Demo](https://github.com/JakaCobot/jaka_addon_kit)

:::tip 提示
套件包中会附带与之匹配的最新App和控制器版本。
:::


## 开发教程一览
---

### 入门教程
如果您不知道从哪里开始，先学习下面的入门教程吧：

* 在[快速入门:point_left:](./QuickStart.md)章节快速了解AddOn开发的完整流程。
* 按照[AddOn开发环境搭建:point_left:](./environment.md)中的步骤搭建AddOn开发环境。
* 通过制作 "[JAKA_Command:point_left:](./JAKA_Command.md)"学习自定义指令类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_Serve:point_left:](./JAKA_Serve.md)"学习自定义服务类型AddOn开发的基本流程和规则。
* 通过制作 "[JAKA_web:point_left:](./JAKA_web.md)"学习自定义网页类型AddOn开发的基本流程和规则。

### 高级教程——具体案例
---
入门教程的目的是让开发者明晰流程，所以只介绍了基础功能，缺乏实际的应用场景场景。

高级教程则与具体场景案例相结合，让开发者能了解学习在入门指南中未提及或粗略提及的功能。

所以，在了解了AddOn的基本开发流程后，您可以选择一个具体场景的AddOn模板案例进行学习，这些具体案例包含了自定义指令、自定义服务、自定义网页这三种功能中的至少两种，被称为复合型AddOn：
<!-- demo还需要确定，至少包含三种不同类型的？目前只提供自定义指令块的详细的？ -->
1. [Ewellix升降轴:point_left:](./demo_LiftKit.md) 
<!-- 2. [大寰夹爪]()  -->
:::tip 更多模板案例正在赶来的路上···
:::


<!-- todo 这里补充更多的教程覆盖到每一种场景：夹爪、升降轴、视觉等 -->


## 开发所需文档
---

- [**JAKAScript**:point_left:](/guide/jks.html): 用来实现自定义指令功能的脚本语言。
<!-- - [**JAKA http APIs**](https://console-docs.apipost.cn/preview/4799a89c0be775ce/48bff16c603e4a42): 提供与机器人交互的http接口。 -->
- [**JAKA App APIs**:point_left:](/guide/addOn/AppAPI.html): 提供前端与JAKA App交互的js函数。
- [**node-red**](https://nodered.org/docs/): 是AddOn的开发平台和后端服务。
- [**JavaScript**](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript): 在node-red中编写脚本和逻辑。
<!-- - [**前端技术**](https://web.dev/learn/html/): 在开发自定义页面插件时需要掌握一定的前端技术 -->
- [**前端技术**](https://www.w3school.com.cn/): 在开发自定义页面插件时需要掌握一定的前端技术
- [**配置文件**:point_left:]((/guide/addOn/iniConfig)): 在开发自定义页面插件时需要掌握一定的前端技术


