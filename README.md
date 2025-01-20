# NetEaseMusicWorld+

解锁网易云音乐网页版海外限制

## 安装

1. 下载或克隆本仓库
2. 打开Chrome浏览器，访问 chrome://extensions/
3. 启用右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本项目的根目录

## 使用

- 普通模式: 同 [acgotaku/NetEaseMusicWorld](https://github.com/acgotaku/NetEaseMusicWorld) 原版功能
- 增强模式: 解决海外 CDN 分发问题，无需写入 hosts

## 修改说明

- 迁移到Manifest V3规范
- 使用declarativeNetRequest API替代webRequest
- 移除inject script方式，改用declarativeNetRequest规则
- 优化代码结构，提高兼容性和稳定性
- 移除图标设置功能以解决兼容性问题

## 注意事项

- 本扩展仅用于学习和研究目的
- 请勿上架至Chrome Web Store
- 切换模式后需要刷新页面以应用更改
