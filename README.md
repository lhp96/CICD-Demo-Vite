# CICD-Demo-Vite

Demo for `React + Vite + TypeScript`

动手完成基础 CI/CD

![CI](https://github.com/lhp96/CICD-Demo-Vite/actions/workflows/ci.yml/badge.svg)![CD](https://github.com/lhp96/CICD-Demo-Vite/actions/workflows/cd.yml/badge.svg)

## CI 持续集成

- Lint 代码扫描
  - eslint
  - prittier
  - stylelint
- Test 代码测试
  - Jest

## CD 持续部署

在编写**CD Workflow**前，我们要准备以下东西：

1. 内置`nginx`的服务器一台：用于部署制品
2. 服务器的密钥对：用于提供给流水线通过 ssh 免密登录到服务器进行部署
3. `Github`里的**Personal Access Token**：用于提供给流水线免密登录`github`账号进行发布制品的操作
4. 把步骤 2 和步骤 3 及其他关于机器的信息都放在对应仓库的**Secret**里

> 容器部署：
>
> 1. 服务器安装 docker-compose
> 2. 编写 docker-compose.yml 文件
> 3. docker-compose up -d
>
> 注意事项：
>
> 1. 需要先删除要部署目录的原有内容(静态资源文件/文件夹)
> 2. 上传文件之后，可以将dist(打包好的内容)解压或移动，并且做上传后的其他操作

### 版本号

- 每次 package.json 的 version 改变才会重新 发版&部署，不想发版需要把Realease注释
- Actions 如果到在 Create GitHub Release 之后失败，就需要重新发版或者手动部署

## Github 开源项目工作流（示例）

### 在本地终端操作

```shell
# 切换分支
git checkout -b dev

# 做修改 & push
git add .
git commit
...
git push --set-upstream origin dev

# rebase （变基）并且合并为一个commit
git rebase main
# 如果有冲突，解决冲突
...
# push 到远程，-f 代表强制，强推
git push -f origin dev
```

### Github 操作

- 提 PullRequest
- 同意之后：Squash and merge
- 会将多个 commit 合并为 一个 commit

### 删除 dev 分支（功能分支）

```shell
# 在Github：Delete Branch

# 在终端
git checkout main
git branch -D dev

# 更新
git pull origin main
```
