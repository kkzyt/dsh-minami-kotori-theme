# DSH Minami Kotori Theme

DeepSeek Harness Web 的南小鸟主题，内置 **南小鸟抱抱** 桌面宠物。无需另装 dsh-pet。

## v1.0.1 版本

本版本通过 **GitHub Packages** 分发：

- 包名：`@kkzyt/dsh-minami-kotori-theme`
- 版本：`1.0.1`
- Registry：`https://npm.pkg.github.com`
- [GitHub Packages 页面](https://github.com/kkzyt/dsh-minami-kotori-theme/pkgs/npm/dsh-minami-kotori-theme)
- [源码仓库](https://github.com/kkzyt/dsh-minami-kotori-theme)

新增「冬季私服」，修正白色鞋面、圆头缝线与金色蝴蝶结；修复点击互动时切回默认制服的问题。换装基于原始默认制服的 188 帧、9 组动画，保留原玩偶脸部、姿势、帧序与时长。保留原有服装、持久化好感度，以及「一起专注」25 / 45 分钟计时功能。

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

## 从 GitHub Packages 安装

GitHub Packages 是独立于 npmjs.org 的 npm registry。本插件使用 `https://npm.pkg.github.com`，请明确指定来源。

### 1. 在运行 DSH 的机器上配置认证

使用 GitHub **Personal access token（classic）**，安装所需权限为 `read:packages`。账号也须有该包的读取权限。GitHub npm Packages 的公开包同样需要认证。

在与 DSH 相同的系统用户下执行以下单行命令（PowerShell、macOS / Linux 均可）：

```text
npm login --scope=@kkzyt --auth-type=legacy --registry=https://npm.pkg.github.com
```

- Username：你的 GitHub 用户名。
- Password：GitHub classic Token，而非账号密码。
- 如果提示 Email，填写账号邮箱。

不要提交包含 Token 的配置文件，也不要把 Token 粘贴到聊天、截图或公开日志中。远程部署时应在服务器配置认证；浏览器所在电脑的登录不会自动传到服务器。

### 2. 在「添加插件」窗口填写

先完成上一步 GitHub Packages 登录，再打开 DSH 的「添加插件」窗口。

| 界面位置 | 填写内容 / 操作 |
| --- | --- |
| 顶部「输入插件的包名、GitHub 仓库地址或本地目录路径」输入框 | `@kkzyt/dsh-minami-kotori-theme@1.0.1` |
| 「安装源」下拉菜单 | 选择「自定义地址」 |
| 「自定义地址」输入框 | `https://npm.pkg.github.com` |
| 完成填写后 | 收起安装源菜单，点击安装按钮，按提示启用插件 |

**不要把 GitHub Packages 的网页链接填进安装源。** 包页面用于浏览，安装源需要填写 registry 地址 `https://npm.pkg.github.com`，不是 `https://github.com/kkzyt/dsh-minami-kotori-theme/pkgs/npm/dsh-minami-kotori-theme`。

本包在 GitHub Packages 发布，安装时请选择「自定义地址」，而非「npm 官方源」或「中国大陆镜像源」。Token 不填在这两个输入框中；认证由运行 DSH 的系统用户的 npm 配置提供。可以在该用户终端执行前面的 `npm login`；Windows 的用户配置通常位于 `%USERPROFILE%\.npmrc`，macOS / Linux 通常位于 `~/.npmrc`。若 DSH 运行在 Docker 或远程服务器，认证应配置在对应运行环境。

安装器若提示 `restart-required`，重启 DSH，再刷新网页。从旧本地包迁移时，先停用旧的 `@local/minami-kotori-theme` 或独立 `dsh-pet`，避免重复宠物和服务冲突。

### 3. 也可以请求 DSH 助手安装

在 DSH 中请求助手：

> 从 https://npm.pkg.github.com 安装并启用 @kkzyt/dsh-minami-kotori-theme@1.0.1。若存在旧的 @local/minami-kotori-theme 或独立 dsh-pet，请先检查并停用冲突项。

对应工具参数：

```json
{
  "action": "install_bundle",
  "target": "@kkzyt/dsh-minami-kotori-theme@1.0.1",
  "registry": "https://npm.pkg.github.com"
}
```

若返回 `restart-required`，重启 DSH，并刷新现有 Web 页面。`npm install` 只安装依赖，不保证注册、启用 Cordis bundle，请使用 DSH 插件管理。

### 4. 验证包是否可读取

```text
npm view @kkzyt/dsh-minami-kotori-theme@1.0.1 version --registry=https://npm.pkg.github.com
```

返回 `1.0.1` 表示当前账号可读取该版本。遇到 401 / 403，请检查 Token 类型、有效期、`read:packages` 和包读取权限；遇到 404，请检查包名、版本、账号权限及 registry。

## 从 GitHub Release 安装

1. 在 [Releases](https://github.com/kkzyt/dsh-minami-kotori-theme/releases) 下载对应版本的 `.tgz`。
2. 把文件放到运行 DSH 的机器上（远程部署时，不是浏览器所在机器）。
3. 如果安装了独立 `@linxin666/dsh-pet`，先在插件管理中停用它，避免 `pet` 服务和 `/api/pet/*` 路由冲突。其他覆盖相同品牌位置的主题也应先停用。
4. 在 DSH 中请求助手安装：

   > 请使用 plugin_manager 安装 `/绝对路径/kkzyt-dsh-minami-kotori-theme-1.0.1.tgz`，按安装器要求重启。

   对应工具参数：

   ```json
   {
     "action": "install_bundle",
     "target": "/绝对路径/kkzyt-dsh-minami-kotori-theme-1.0.1.tgz"
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

把生成的 `.tgz` 上传到 GitHub Release，标签为 `v1.0.1`。

## 维护者发布到 GitHub Packages

在源码根目录执行。发布账号需拥有 `@kkzyt` 的发布权限，GitHub classic Token 需要 `write:packages`（通常同时配置 `read:packages`）。

```text
npm pkg set publishConfig.registry=https://npm.pkg.github.com
npm login --scope=@kkzyt --auth-type=legacy --registry=https://npm.pkg.github.com
node --check main.js
node --check client.js
npm pack --dry-run
npm publish --registry=https://npm.pkg.github.com
npm view @kkzyt/dsh-minami-kotori-theme@1.0.1 version --registry=https://npm.pkg.github.com
```

`package.json` 中的 `publishConfig.registry` 应指向 GitHub Packages，而非 npmjs.org；包名保持 `@kkzyt/dsh-minami-kotori-theme`，`repository` 指向本 GitHub 仓库。版本号写成 `1.0.1`，Git 标签可写成 `v1.0.1`。

首次发布默认可见性为 private。如需公开，在包页面的 Package settings 中将可见性调整为 Public；公开 npm 包的下载仍需 GitHub Packages 认证。同一个 registry 中同一包名和版本不能重复发布，后续更新请递增版本。

GitHub 源码 push、Release 附件上传与 Packages 发布是三个独立操作。只修改 README 不会改变已经发布的安装包；README 修改后可直接提交源码仓库，若希望发布包内也包含新版 README，请发布新版本。

PowerShell 的换行符是反引号，不是反斜杠；上面使用单行命令以便直接复制。

参考：[GitHub 官方 npm registry 文档](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)。

## 许可与第三方素材

请阅读 [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md) 和 [LICENSE.pet-engine](./LICENSE.pet-engine)。

- 内置宠物引擎源自 linxin666 及贡献者的 `@linxin666/dsh-pet` 0.4.5，受 Apache-2.0 许可约束，保留原许可与修改说明。
- 原始宠物资源清单标注仅限个人使用。本仓库维护者在准备发布时声明已取得本发行版所含宠物素材、壁纸及 Logo 的公开分发许可；该声明尚未附授权凭证，也不赋予下游任意商用或再分发权利。
- Love Live! 角色和标识的权利属于各自权利人。本项目为非官方同人主题，不代表官方授权或背书。
- 本仓库没有把全部代码和美术统一授权为 Apache-2.0；不要把引擎许可扩展解释为素材许可。
