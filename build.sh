# 配置文件
echo 全局安装yarn:
npm i yarn -g
echo 查看yarn版本:
yarn -v
echo 删除node_modules:
rm -rf node_modules
echo 开始安装依赖：
yarn install
echo 执行构建命令：
yarn run build:$1
