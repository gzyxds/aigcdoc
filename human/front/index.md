# AI数字人前端集成指南

## 快速开始

### 1. 安装SDK
```bash
# NPM
npm install @ai-human/sdk

# Yarn
yarn add @ai-human/sdk

# PNPM
pnpm add @ai-human/sdk
```

### 2. 初始化配置
```typescript
import { DigitalHuman } from '@ai-human/sdk'

const digitalHuman = new DigitalHuman({
  apiKey: 'your-api-key',
  modelId: 'default-model',
  server: 'https://api.example.com'
})
```

### 3. 基础使用
```typescript
// 创建数字人实例
const human = await digitalHuman.create({
  name: 'AI助手',
  avatar: 'avatar.jpg',
  personality: '专业、友好'
})

// 发送消息
const response = await human.chat('你好，请问有什么可以帮助你？')
```

## 组件集成

### 1. Vue组件
```vue
<!-- DigitalHuman.vue -->
<template>
  <div class="digital-human-container">
    <div class="video-container">
      <video ref="videoRef" :src="modelUrl" autoplay></video>
    </div>
    <div class="chat-container">
      <div class="messages" ref="messagesRef">
        <div v-for="msg in messages" :key="msg.id" class="message">
          {{ msg.content }}
        </div>
      </div>
      <div class="input-container">
        <input v-model="input" @keyup.enter="sendMessage" />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DigitalHuman } from '@ai-human/sdk'

const props = defineProps<{
  apiKey: string
  modelId: string
}>()

const digitalHuman = new DigitalHuman({
  apiKey: props.apiKey,
  modelId: props.modelId
})

const videoRef = ref<HTMLVideoElement>()
const messagesRef = ref<HTMLDivElement>()
const input = ref('')
const messages = ref<Array<{id: string, content: string}>>([])

const sendMessage = async () => {
  if (!input.value) return
  
  const message = input.value
  input.value = ''
  
  messages.value.push({
    id: Date.now().toString(),
    content: message
  })
  
  const response = await digitalHuman.chat(message)
  messages.value.push({
    id: Date.now().toString(),
    content: response
  })
}

onMounted(() => {
  // 初始化数字人
  digitalHuman.init(videoRef.value!)
})
</script>

<style scoped>
.digital-human-container {
  display: flex;
  gap: 20px;
}

.video-container {
  width: 400px;
  height: 600px;
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin: 10px 0;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}

.input-container {
  display: flex;
  gap: 10px;
  padding: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

### 2. React组件
```tsx
// DigitalHuman.tsx
import React, { useRef, useState, useEffect } from 'react'
import { DigitalHuman } from '@ai-human/sdk'

interface Props {
  apiKey: string
  modelId: string
}

interface Message {
  id: string
  content: string
}

export const DigitalHumanComponent: React.FC<Props> = ({ apiKey, modelId }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [digitalHuman, setDigitalHuman] = useState<DigitalHuman>()

  useEffect(() => {
    const dh = new DigitalHuman({
      apiKey,
      modelId
    })
    setDigitalHuman(dh)

    if (videoRef.current) {
      dh.init(videoRef.current)
    }
  }, [apiKey, modelId])

  const sendMessage = async () => {
    if (!input || !digitalHuman) return

    const message = input
    setInput('')

    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: message
    }])

    const response = await digitalHuman.chat(message)
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: response
    }])
  }

  return (
    <div className="digital-human-container">
      <div className="video-container">
        <video ref={videoRef} autoPlay />
      </div>
      <div className="chat-container">
        <div className="messages">
          {messages.map(msg => (
            <div key={msg.id} className="message">
              {msg.content}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>发送</button>
        </div>
      </div>
    </div>
  )
}
```

## API参考

### 1. 配置选项
```typescript
interface DigitalHumanConfig {
  apiKey: string          // API密钥
  modelId?: string        // 模型ID
  server?: string         // 服务器地址
  language?: string       // 语言设置
  emotion?: boolean       // 是否启用情感
  action?: boolean        // 是否启用动作
}
```

### 2. 核心方法
```typescript
class DigitalHuman {
  // 初始化数字人
  init(element: HTMLVideoElement): Promise<void>
  
  // 创建数字人实例
  create(options: CreateOptions): Promise<DigitalHuman>
  
  // 发送消息
  chat(message: string): Promise<string>
  
  // 更新表情
  setEmotion(emotion: string): Promise<void>
  
  // 执行动作
  performAction(action: string): Promise<void>
  
  // 切换模型
  switchModel(modelId: string): Promise<void>
  
  // 销毁实例
  destroy(): void
}
```

### 3. 事件监听
```typescript
// 监听事件
digitalHuman.on('ready', () => {
  console.log('数字人准备就绪')
})

digitalHuman.on('speaking', (text) => {
  console.log('数字人正在说话:', text)
})

digitalHuman.on('error', (error) => {
  console.error('发生错误:', error)
})
```

## 高级功能

### 1. 自定义表情
```typescript
// 注册自定义表情
digitalHuman.registerEmotion('happy', {
  intensity: 0.8,
  duration: 1000,
  transitions: [
    { time: 0, value: 0 },
    { time: 500, value: 1 },
    { time: 1000, value: 0 }
  ]
})

// 使用自定义表情
await digitalHuman.setEmotion('happy')
```

### 2. 动作序列
```typescript
// 定义动作序列
const sequence = [
  { action: 'wave', duration: 1000 },
  { action: 'nod', duration: 500 },
  { action: 'smile', duration: 800 }
]

// 执行动作序列
await digitalHuman.performSequence(sequence)
```

### 3. 语音合成
```typescript
// 配置语音参数
digitalHuman.setVoice({
  pitch: 1.0,
  rate: 1.0,
  volume: 1.0
})

// 开始语音合成
await digitalHuman.speak('你好，我是AI助手')
```

## 性能优化

### 1. 资源预加载
```typescript
// 预加载模型资源
await digitalHuman.preload(['model1', 'model2'])

// 预加载表情动作
await digitalHuman.preloadAssets(['wave', 'smile'])
```

### 2. 缓存管理
```typescript
// 配置缓存
digitalHuman.setCache({
  maxSize: 100,  // 最大缓存数量
  ttl: 3600      // 缓存时间（秒）
})

// 清理缓存
digitalHuman.clearCache()
```

### 3. 性能监控
```typescript
// 启用性能监控
digitalHuman.enableMonitoring({
  fps: true,     // 帧率监控
  memory: true,  // 内存监控
  network: true  // 网络监控
})

// 获取性能数据
const metrics = digitalHuman.getMetrics()
```

## 最佳实践

### 1. 错误处理
```typescript
try {
  await digitalHuman.chat('你好')
} catch (error) {
  if (error.code === 'NETWORK_ERROR') {
    // 处理网络错误
  } else if (error.code === 'API_ERROR') {
    // 处理API错误
  }
}
```

### 2. 响应式适配
```typescript
// 监听窗口大小变化
window.addEventListener('resize', () => {
  digitalHuman.resize({
    width: window.innerWidth,
    height: window.innerHeight
  })
})
```

### 3. 内存管理
```typescript
// 组件卸载时清理资源
onUnmounted(() => {
  digitalHuman.destroy()
})
```
