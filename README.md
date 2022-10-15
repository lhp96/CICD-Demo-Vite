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