# CICD-Demo-Vite

Demo for  `React + Vite + TypeScript`

动手完成基础 CI/CD

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
> 1. 服务器安装docker-compose
> 2. 编写docker-compose.yml文件
> 3. docker-compose up -d

### 版本号

- 每次package.json的version改变才会重新部署




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

### Github操作
- 提PullRequest
- 同意之后：Squash and merge
- 会将多个commit 合并为 一个commit

### 删除dev分支（功能分支）
```shell
# 在Github：Delete Branch

# 在终端
git checkout main
git branch -D dev

# 更新
git pull origin main
````