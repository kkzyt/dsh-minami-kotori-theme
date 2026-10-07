# DSH Minami Kotori Theme

DeepSeek Harness Web 的南小鸟主题，内置 **南小鸟抱抱** 桌面宠物。无需另装 dsh-pet。

## 1.0.0 版本

本次发行整合当前主题与南小鸟抱抱功能：

- 主题化代码块、南小鸟动态思考图标及新会话装饰。
- 深色模式开关、南小鸟发色的统一滑动开关，以及液态玻璃透明度控制。
- 设置导航使用南小鸟图标；宠物输入项与说明集中在“南小鸟抱抱设置”。
- 宠物拖动、摸头、喂食和好感度持久化保持不变。

本发行包已通过 JavaScript 语法检查；不是对所有 DSH 版本或所有设备的兼容性保证。

## 效果预览

### 桌面端

浅色主题下的南小鸟壁纸、液态玻璃界面、大 Love Live! Logo，以及内置南小鸟抱抱宠物。

![南小鸟主题桌面端效果](https://raw.githubusercontent.com/kkzyt/dsh-minami-kotori-theme/main/docs/images/desktop-preview.png)

### 移动端

移动端收起任务栏时显示小 μ’s Logo，展开任务栏时显示大 Love Live! Logo。宠物默认隐藏；打开或切换对话不会自动聚焦输入框，点击输入框后才进入输入。

<img src="https://raw.githubusercontent.com/kkzyt/dsh-minami-kotori-theme/main/docs/images/mobile-preview.png" alt="南小鸟主题移动端效果" width="360" />

> 截图展示浅色模式，主题也支持暗黑模式。截图中的其他插件、账号状态与用量信息仅为演示环境，不属于本主题功能。

## 壁纸资源

明亮和暗黑模式的壁纸均包含在 `assets` 目录，并随 npm 包发布：

- [明亮模式壁纸](assets/wallpaper-light.webp)
- [暗黑模式壁纸](assets/wallpaper-dark.jpg)

客户端直接加载 DSH 本地提供的这两张图片，不再内嵌壁纸 Base64，也不依赖 GitHub 或其他外部图片地址。替换相应图片、重新打包并安装后，刷新页面即可显示新壁纸；切换明暗模式会自动选择对应图片。

## 功能

- 南小鸟壁纸、液态玻璃面板、奶油金 / 樱花粉配色，适配明暗主题。
- 桌面显示 Love Live! Logo；视口宽度 **≤ 1024px（含 1024px）** 收起任务栏时显示小 μ’s Logo，展开左侧任务栏时显示大 Love Live! Logo。
- 南小鸟徽章 favicon，以及主题化发送按钮和移动端触控样式。移动端可编辑区域使用至少 16px 字号以避免聚焦自动放大，不禁用手动缩放。
- 只包含南小鸟抱抱一个宠物，保留摸头、喂食、拖动、气泡和好感度持久化。
- 视口宽度 ≤1024px 默认隐藏宠物并停止 Client 轮询；在设置 → 南小鸟主题取消勾选「移动端隐藏宠物」并保存可恢复显示。窗口跨越断点自动更新，不改变存档或全局显示开关。
- 内置经过修改的 dsh-pet 0.4.5 引擎；不依赖独立 dsh-pet 包，移除了外部每日遥测。

任务完成铃声默认启用：在 **设置 → 南小鸟主题** 勾选或取消「启用任务完成通知铃声」并保存。仅正常完成的主会话回合通知，错误、手动停止和子代理不会响；首次使用需点击页面或按键以允许浏览器音频。铃声不受宠物隐藏或停用影响，页面关闭时不会播放。

浏览器通知默认关闭：在 **设置 → 南小鸟主题** 勾选「启用任务完成浏览器通知」，允许浏览器权限后保存。与铃声独立；页面需保持打开（后台标签页也可）。通知权限取决于浏览器和系统，仅支持安全上下文（HTTPS 或本机 localhost）；拒绝后需在网站设置中重新允许。通知不包含会话内容，点击通知会聚焦当前 DSH 窗口。

## 按 npm 包名安装

插件包名：`@kkzyt/dsh-minami-kotori-theme`。

**本源码已准备为 npm 发布格式，不代表已经发布到 npm。维护者完成下方发布步骤后，才能按包名安装。**

发布后可在 DSH 插件安装页面填写上述包名，或请求助手：

> 请使用 plugin_manager 安装 @kkzyt/dsh-minami-kotori-theme；先停用独立 dsh-pet 和旧的 @local/minami-kotori-theme，避免重复配置及服务冲突。

对应参数：

```json
{"action":"install_bundle","target":"@kkzyt/dsh-minami-kotori-theme"}
```

如果你的 DSH CLI 支持 `plugin add` 子命令（可先查看 `dsh plugin --help`），可以使用：

```bash
dsh plugin add @kkzyt/dsh-minami-kotori-theme
```

`pnpm add` 仅安装依赖，不保证注册和启用 DSH bundle，优先使用 DSH 插件管理。
从旧本地包迁移时应先停用旧包，再安装新包；宠物存档位置不变。

## 从 GitHub Release 安装

1. 在 [Releases](https://github.com/kkzyt/dsh-minami-kotori-theme/releases) 下载对应版本的 `.tgz`。
2. 把文件放到运行 DSH 的机器上（远程部署时，不是浏览器所在机器）。
3. 如果安装了独立 `@linxin666/dsh-pet`，先在插件管理中停用它，避免 `pet` 服务和 `/api/pet/*` 路由冲突。其他覆盖相同品牌位置的主题也应先停用。
4. 在 DSH 中请求助手安装：

   > 请使用 plugin_manager 安装 `/绝对路径/kkzyt-dsh-minami-kotori-theme-1.0.0.tgz`，按安装器要求重启。

   对应工具参数：

   ```json
   {
     "action": "install_bundle",
     "target": "/绝对路径/kkzyt-dsh-minami-kotori-theme-1.0.0.tgz"
   }
   ```

5. 若安装器返回 `restart-required`，重启 DSH，并对网页强制刷新（桌面通常是 Ctrl+Shift+R）。
6. 在 **设置 → 南小鸟主题** 中调整显示开关、大小、位置和气泡比例。

不要直接通过 `npm install` 修改 DSH profile；请使用 DSH 的插件管理安装接口。

## 兼容性与数据

- 目标平台：DeepSeek Harness Web。不是独立网站，也不是浏览器扩展。
- 使用 DSH 提供的 Cordis 和 Schemastery，不在 dependencies 中重复安装公共框架包；其他 DSH 版本的兼容性需实测。
- 单包实现已在作者当前 DSH 环境验证加载和存档读取；1024px Logo 断点及最新版窄屏布局尚需跨设备实测。
- 沿用当前 DSH 数据目录的宠物存档位置，升级前建议备份个人数据。
- 安装包只含代码和素材，不携带作者的好感度、聊天记录或账号配置。
- 安装器可能提示 profile 中已有的 peer dependency 问题；如无法加载，请提供 DSH 版本及错误信息，不要绕过版本检查。

## 源码与打包

`main.js` 是 Host 入口；`client.js` 是可直接运行的组合 Client 入口。
`vendor/` 为经过修改的上游宠物引擎，`assets/minami-kotori-hug/` 为唯一宠物资源。

当前仓库包含已构建 Client，不需要访问作者机器上的原始 dsh-pet 安装目录。
主题与宠物 Client 逻辑统一维护在 `client.js`，不再保留历史入口。

```bash
node --check main.js
node --check client.js
npm pack --ignore-scripts
```

把生成的 `.tgz` 上传到 GitHub Release，标签为 `v1.0.0`。

## 维护者发布到 npm

GitHub 上传不会自动发布 npm。需要持有 npm 的 `kkzyt` 用户名或组织 scope 的发布权限；GitHub 用户名与 npm 用户名不是自动关联的。如果没有该 scope 权限，应先统一改成你自己的 npm scope。

在本仓库根目录执行：

```bash
npm login --registry=https://registry.npmjs.org/
npm whoami --registry=https://registry.npmjs.org/
node --check main.js
node --check client.js
npm pack --dry-run
npm publish --access public --registry=https://registry.npmjs.org/
npm view @kkzyt/dsh-minami-kotori-theme version --registry=https://registry.npmjs.org/
```

按 npm 提示完成浏览器登录和安全验证，不要将密码、验证码或 Token 写入仓库。
同一包名的同一版本不能重复发布；后续更新提高 `package.json` 的版本号。
`publishConfig` 已设为公开发布到官方 npm registry，保留了原有 DSH bundle 配置和入口。
源码修改与本地检查不等同于已发布成功，以上最后一条命令能返回目标版本才代表 registry 可访问。

## 许可与第三方素材

请阅读 [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md) 和 [LICENSE.pet-engine](./LICENSE.pet-engine)。

- 内置宠物引擎源自 linxin666 及贡献者的 `@linxin666/dsh-pet` 0.4.5，受 Apache-2.0 许可约束，保留原许可与修改说明。
- 原始宠物资源清单标注仅限个人使用。本仓库维护者在准备发布时声明已取得本发行版所含宠物素材、壁纸及 Logo 的公开分发许可；该声明尚未附授权凭证，也不赋予下游任意商用或再分发权利。
- Love Live! 角色和标识的权利属于各自权利人。本项目为非官方同人主题，不代表官方授权或背书。
- 本仓库没有把全部代码和美术统一授权为 Apache-2.0；不要把引擎许可扩展解释为素材许可。
