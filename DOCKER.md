# Docker 部署指南

本文档说明如何使用Docker部署至索科技网站。

## 前置要求

- Docker 20.10+
- Docker Compose 2.0+ (可选)

## 快速开始

### 方法一：使用 Docker Compose (推荐)

1. 构建并启动容器：
\`\`\`bash
docker-compose up -d
\`\`\`

2. 访问应用：
打开浏览器访问 `http://localhost:3000`

3. 停止容器：
\`\`\`bash
docker-compose down
\`\`\`

### 方法二：使用 Docker 命令

1. 构建镜像：
\`\`\`bash
docker build -t zhisuo-tech:latest .
\`\`\`

2. 运行容器：
\`\`\`bash
docker run -d -p 3000:3000 --name zhisuo-tech zhisuo-tech:latest
\`\`\`

3. 查看日志：
\`\`\`bash
docker logs -f zhisuo-tech
\`\`\`

4. 停止容器：
\`\`\`bash
docker stop zhisuo-tech
docker rm zhisuo-tech
\`\`\`

## 环境变量配置

如果需要配置环境变量，创建 `.env.production` 文件：

\`\`\`env
# 示例环境变量
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
\`\`\`

然后在 docker-compose.yml 中取消注释 env_file 配置。

## 生产部署建议

### 1. 使用反向代理 (Nginx)

创建 `nginx.conf`：

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
\`\`\`

### 2. 配置 HTTPS

使用 Let's Encrypt 获取免费SSL证书：

\`\`\`bash
# 安装 certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com
\`\`\`

### 3. 资源限制

在 docker-compose.yml 中添加资源限制：

\`\`\`yaml
services:
  web:
    # ... 其他配置
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
\`\`\`

## 故障排查

### 容器无法启动

检查日志：
\`\`\`bash
docker logs zhisuo-tech
\`\`\`

### 端口被占用

更改映射端口：
\`\`\`bash
docker run -d -p 8080:3000 --name zhisuo-tech zhisuo-tech:latest
\`\`\`

### 构建失败

清理Docker缓存：
\`\`\`bash
docker system prune -a
\`\`\`

## 更新部署

1. 拉取最新代码
2. 重新构建镜像：
\`\`\`bash
docker-compose build --no-cache
\`\`\`

3. 重启容器：
\`\`\`bash
docker-compose up -d
\`\`\`

## 备份和恢复

### 导出镜像
\`\`\`bash
docker save zhisuo-tech:latest | gzip > zhisuo-tech.tar.gz
\`\`\`

### 导入镜像
\`\`\`bash
docker load < zhisuo-tech.tar.gz
\`\`\`

## 性能优化

1. 使用多阶段构建减小镜像体积
2. 启用 Next.js 的 standalone 输出模式
3. 使用 .dockerignore 排除不必要的文件
4. 考虑使用 CDN 托管静态资源

## 支持

如有问题，请联系技术支持团队。
