# billyhetech.github.io

GitHub Pages 静态站点仓库，线上地址 <https://billyhetech.github.io/>。

目前只承载一件事：**轻轻 / Feather（iOS 照片清理与智能整理 App）的对外页面**。

## 这个仓库是发布产物

`feather/` 下的每一个文件都由发布流程**整目录覆盖**同步生成，不在这里手写。

所以：**不要直接在这里改 `feather/` 里的任何东西**，下一次同步会把改动无声地抹掉。

本仓库里只有 `README.md`、`LICENSE`、`.nojekyll` 是本地维护的。

## 线上地址

隐私政策 / 使用条款 / 支持页必须公开可访问——App Store 审核员会逐个点开。
下面这些地址在 App 内和全部提审材料里都是写死的，换目录结构就得连着改一大圈，所以别动。

| 页面 | 地址 |
| --- | --- |
| 产品主页 | <https://billyhetech.github.io/feather/> |
| 隐私政策 | <https://billyhetech.github.io/feather/privacy.html> |
| 使用条款 | <https://billyhetech.github.io/feather/terms.html> |
| 支持与常见问题 | <https://billyhetech.github.io/feather/support.html> |

## 目录结构

```
.
├── .nojekyll        # 页面里没有 Jekyll 语法，关掉可以少一层构建
├── LICENSE
├── README.md
└── feather/         # ← 同步产物，勿手改
    ├── index.html       产品主页
    ├── privacy.html     隐私政策
    ├── terms.html       使用条款
    ├── support.html     支持与常见问题
    ├── style.css
    ├── site.js          零依赖：语言开关 + 页脚年份
    ├── brandmark.png
    └── photo-{1,2,3}.jpg
```

站点是中英双语的，靠 `<html data-lang>` 切换，语言判定写在每页 `<head>` 的内联脚本里
（必须同步执行，否则会先闪一下中文）。`site.js` 是 defer 的，只管首屏之后的交互。

## Pages 配置

Settings → Pages → Source: **Deploy from a branch**，Branch: **main / (root)**。
改成 GitHub Actions 构建的话上面这套同步就失效了，别改。

## License

MIT，见 [LICENSE](LICENSE)。`feather/` 下的文案、品牌标识与照片素材不在此授权范围内。
