# 配置文件
echo 删除node_modules:
rm -rf node_modules
echo 开始安装依赖：
yarn install
echo 执行构建命令：
yarn run build:$1
