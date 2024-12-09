# AI数字人第三方对接指南

## API接口规范

### 1. 接口认证
```http
POST /api/v1/auth/token
Content-Type: application/json

{
  "apiKey": "your-api-key",
  "secretKey": "your-secret-key"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 3600
}
```

### 2. 数字人管理
```http
# 创建数字人
POST /api/v1/digital-human
Authorization: Bearer your-token
Content-Type: application/json

{
  "name": "AI助手",
  "avatar": "https://example.com/avatar.jpg",
  "description": "专业的AI助手",
  "personality": "友好、专业",
  "voice": {
    "type": "female",
    "language": "zh-CN"
  }
}

# 获取数字人列表
GET /api/v1/digital-humans
Authorization: Bearer your-token

# 更新数字人
PUT /api/v1/digital-human/{id}
Authorization: Bearer your-token
Content-Type: application/json

{
  "name": "新名称",
  "avatar": "新头像URL",
  "description": "新描述",
  "personality": "新性格设置"
}

# 删除数字人
DELETE /api/v1/digital-human/{id}
Authorization: Bearer your-token
```

### 3. 对话接口
```http
# 发送消息
POST /api/v1/chat
Authorization: Bearer your-token
Content-Type: application/json

{
  "digitalHumanId": "dh123",
  "message": "你好",
  "context": ["之前的对话内容"],
  "options": {
    "temperature": 0.7,
    "maxTokens": 100
  }
}

# 获取对话历史
GET /api/v1/chat/history/{digitalHumanId}
Authorization: Bearer your-token

# 清除对话历史
DELETE /api/v1/chat/history/{digitalHumanId}
Authorization: Bearer your-token
```

### 4. 表情动作
```http
# 触发表情
POST /api/v1/expression
Authorization: Bearer your-token
Content-Type: application/json

{
  "digitalHumanId": "dh123",
  "emotion": "happy",
  "intensity": 0.8,
  "duration": 1000
}

# 触发动作
POST /api/v1/action
Authorization: Bearer your-token
Content-Type: application/json

{
  "digitalHumanId": "dh123",
  "action": "wave",
  "duration": 2000
}
```

## WebSocket接口

### 1. 建立连接
```javascript
const ws = new WebSocket('wss://api.example.com/ws')

ws.onopen = () => {
  // 发送认证信息
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your-token'
  }))
}
```

### 2. 消息格式
```javascript
// 发送消息
{
  "type": "message",
  "digitalHumanId": "dh123",
  "content": "你好",
  "timestamp": 1638338400000
}

// 接收消息
{
  "type": "response",
  "digitalHumanId": "dh123",
  "content": "你好，我是AI助手",
  "emotion": "happy",
  "action": "wave",
  "timestamp": 1638338400100
}
```

### 3. 状态更新
```javascript
// 数字人状态更新
{
  "type": "status",
  "digitalHumanId": "dh123",
  "status": "speaking",
  "details": {
    "progress": 0.5,
    "remainingTime": 2000
  }
}

// 错误消息
{
  "type": "error",
  "code": "ERROR_CODE",
  "message": "错误描述"
}
```

## 回调接口

### 1. 配置回调
```http
POST /api/v1/webhook
Authorization: Bearer your-token
Content-Type: application/json

{
  "url": "https://your-domain.com/webhook",
  "events": ["message", "status", "error"],
  "secret": "your-webhook-secret"
}
```

### 2. 回调格式
```javascript
// 消息回调
{
  "event": "message",
  "timestamp": 1638338400000,
  "data": {
    "digitalHumanId": "dh123",
    "message": "用户消息",
    "response": "AI回复"
  }
}

// 状态回调
{
  "event": "status",
  "timestamp": 1638338400000,
  "data": {
    "digitalHumanId": "dh123",
    "status": "ready",
    "details": {}
  }
}
```

## 示例代码

### 1. Node.js
```javascript
const axios = require('axios')

class DigitalHumanAPI {
  constructor(config) {
    this.config = config
    this.token = null
    this.axios = axios.create({
      baseURL: config.apiUrl,
      timeout: 5000
    })
  }

  async authenticate() {
    const response = await this.axios.post('/auth/token', {
      apiKey: this.config.apiKey,
      secretKey: this.config.secretKey
    })
    this.token = response.data.token
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
  }

  async createDigitalHuman(data) {
    return await this.axios.post('/digital-human', data)
  }

  async chat(digitalHumanId, message) {
    return await this.axios.post('/chat', {
      digitalHumanId,
      message
    })
  }
}

// 使用示例
const api = new DigitalHumanAPI({
  apiUrl: 'https://api.example.com',
  apiKey: 'your-api-key',
  secretKey: 'your-secret-key'
})

async function main() {
  await api.authenticate()
  
  // 创建数字人
  const human = await api.createDigitalHuman({
    name: 'AI助手',
    avatar: 'avatar.jpg'
  })
  
  // 发送消息
  const response = await api.chat(human.id, '你好')
  console.log(response.data)
}
```

### 2. Python
```python
import requests

class DigitalHumanAPI:
    def __init__(self, config):
        self.config = config
        self.token = None
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json'
        })
    
    def authenticate(self):
        response = self.session.post(
            f"{self.config['api_url']}/auth/token",
            json={
                'apiKey': self.config['api_key'],
                'secretKey': self.config['secret_key']
            }
        )
        self.token = response.json()['token']
        self.session.headers.update({
            'Authorization': f"Bearer {self.token}"
        })
    
    def create_digital_human(self, data):
        return self.session.post(
            f"{self.config['api_url']}/digital-human",
            json=data
        ).json()
    
    def chat(self, digital_human_id, message):
        return self.session.post(
            f"{self.config['api_url']}/chat",
            json={
                'digitalHumanId': digital_human_id,
                'message': message
            }
        ).json()

# 使用示例
api = DigitalHumanAPI({
    'api_url': 'https://api.example.com',
    'api_key': 'your-api-key',
    'secret_key': 'your-secret-key'
})

def main():
    api.authenticate()
    
    # 创建数字人
    human = api.create_digital_human({
        'name': 'AI助手',
        'avatar': 'avatar.jpg'
    })
    
    # 发送消息
    response = api.chat(human['id'], '你好')
    print(response)
```

## 错误处理

### 1. 错误码
```javascript
const ERROR_CODES = {
  // 认证错误
  AUTH_FAILED: '认证失败',
  TOKEN_EXPIRED: '令牌过期',
  INVALID_TOKEN: '无效令牌',
  
  // 请求错误
  INVALID_PARAMS: '无效参数',
  RESOURCE_NOT_FOUND: '资源不存在',
  RATE_LIMIT: '请求频率限制',
  
  // 业务错误
  MODEL_LOADING: '模型加载中',
  PROCESSING: '正在处理中',
  QUOTA_EXCEEDED: '配额超限'
}
```

### 2. 错误响应
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "code": "INVALID_PARAMS",
  "message": "无效的参数",
  "details": {
    "field": "name",
    "error": "名称不能为空"
  }
}
```

## 最佳实践

### 1. 请求重试
```javascript
async function retryRequest(fn, retries = 3) {
  try {
    return await fn()
  } catch (error) {
    if (retries > 0 && isRetryableError(error)) {
      await delay(1000)
      return retryRequest(fn, retries - 1)
    }
    throw error
  }
}
```

### 2. 并发控制
```javascript
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit
    this.interval = interval
    this.requests = []
  }

  async acquire() {
    const now = Date.now()
    this.requests = this.requests.filter(time => now - time < this.interval)
    
    if (this.requests.length >= this.limit) {
      const oldestRequest = this.requests[0]
      const waitTime = this.interval - (now - oldestRequest)
      await delay(waitTime)
    }
    
    this.requests.push(now)
  }
}
```

### 3. 安全建议
- 使用HTTPS加密传输
- 实现请求签名验证
- 设置API访问白名单
- 监控异常请求
- 定期更新密钥
