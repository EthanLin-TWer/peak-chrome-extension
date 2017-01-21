# peak-chrome-plugin [![][Badges: Travis CI]][Links: Travis CI]

刚好在看《刻意练习》，顺手取来书名四个大写字母 PEAK 做仓库名。这个插件，意图用来戒掉我的一个习惯：通过刷邮件、Github 来填补空虚和学习焦虑的习惯。想自己撸插件的原因有二：

* StayFocused 设定的时间（20分钟）太长，并且有时在刷知乎上瘾了的时候还会直接关掉插件
* 我想练习撸代码

就此。

## 本地开发 Local development 

### 持续构建 Continuous build

### 持续测试及反馈 Continuous testing & feedback

## 构建 Build

项目使用 Travis 进行流水线构建。如果项目下存在 `yarn.lock` 文件，Travis 默认会使用 yarn 来安装 npm 依赖。`npm test` 会被用来作为默认的测试命令，其实是直接调用的 mocha + babel 来进行 ES6 代码的测试。

产品代码方面，主要是使用了 Browserify + Babelify 来转译 ES6 代码到浏览器上，因为当前 `import/export` 仍然未能在浏览器及 Node 版本上得到支持。

## 参考 Reference

* 使用 Travis 构建 NodeJS 应用：https://docs.travis-ci.com/user/languages/javascript-with-nodejs
* 迁移指南 - npm/yarn 命令比较：https://yarnpkg.com/en/docs/migrating-from-npm
* yarn CLI 简介：https://yarnpkg.com/en/docs/cli/

[Badges: Travis CI]: https://travis-ci.org/linesh-simplicity/peak-chrome-extension.svg?branch=master
[Links: Travis CI]: https://travis-ci.org/linesh-simplicity/peak-chrome-extension
