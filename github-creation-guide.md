# GitHub仓库创建指南

## 步骤1：登录GitHub
1. 打开浏览器，访问 [GitHub](https://github.com)
2. 登录你的GitHub账号

## 步骤2：创建新仓库
1. 点击右上角的"+"图标，选择"New repository"
2. 填写仓库信息：
   - Repository name: 输入 `meloway-blog` 或你喜欢的名称
   - Description: 可选，填写描述信息
   - Visibility: 选择 "Public" 或 "Private"
   - 不要勾选 "Add a README file"
   - 不要勾选 "Add .gitignore"
   - 不要勾选 "Choose a license"
3. 点击 "Create repository" 按钮

## 步骤3：获取仓库URL
创建完成后，在仓库页面中，点击 "Code" 按钮，复制SSH或HTTPS URL

## 步骤4：关联本地仓库
在本地终端中运行以下命令（将 `YOUR_GITHUB_URL` 替换为你复制的URL）：

```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
```