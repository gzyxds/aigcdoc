---
layout: home
hero:
  name: ChatMoney AI
  text: 企业级智能知识库系统
  tagline: 为企业提供一站式AI智能解决方案，助力企业数字化转型
  actions:
    - theme: brand
      text: 立即体验
      link: https://ai.chatmoney.cn
      class: 'primary-button'
    
    - theme: alt 
      text: 产品文档
      link: /docs
      class: 'secondary-button'
    
    - theme: alt
      text: 联系我们
      link: /contact
      class: 'secondary-button'

  image:
    src: /images/logo.png
    alt: ChatMoney Logo

features:
  - icon: 🎯
    title: 智能对话
    details: 基于大语言模型的自然语言交互,支持多轮对话、上下文理解,让企业服务更智能
    
  - icon: 🚀
    title: 知识训练
    details: 支持文档、网页、数据库等多源数据导入,通过向量化训练构建企业专属知识库
    
  - icon: 💡
    title: 多场景应用
    details: 智能客服、企业文档、专家系统等场景一键部署,快速实现业务智能化
    
  - icon: 🔐
    title: 安全可控
    details: 数据私有化部署,多重安全防护,保障企业数据安全
    
  - icon: 🌐
    title: 开放集成
    details: 提供标准API接口,支持与企业现有系统无缝对接,灵活扩展
    
  - icon: 🛠️
    title: 专业服务
    details: 专业技术团队提供定制开发、运维支持等全方位服务保障

---

<div class="solutions">
  <h2>行业解决方案</h2>
  <div class="solution-grid">
    <div class="solution-card">
      <div class="card-icon">💼</div>
      <h3>企业智能客服</h3>
      <p>7x24小时在线智能客服,提升服务效率,降低人力成本</p>
      <a href="/solutions/customer-service" class="learn-more">了解更多 ></a>
    </div>
    
    <div class="solution-card">
      <div class="card-icon">
        <img src="/images/openai.svg" alt="知识库图标" width="32" height="32">
      </div>
      <h3>企业知识库</h3>
      <p>构建企业专属知识图谱，实现高效精准的信息检索与知识管理，提升企业知识资产价值</p>
      <a href="/solutions/knowledge-base" class="learn-more">了解更多 <i class="icon-arrow-right"></i></a>
    </div>
    
    <div class="solution-card">
      <div class="card-icon">
        <img src="/images/paper.svg" alt="专家系统图标" width="32" height="32">
      </div>
      <h3>专家咨询系统</h3>
      <p>基于行业专家知识沉淀，打造智能化专业咨询服务平台，为用户提供7*24小时专业解答</p>
      <a href="/solutions/expert-system" class="learn-more">了解更多 <i class="icon-arrow-right"></i></a>
    </div>
  </div>
</div>

<div class="advantages">
  <h2>产品优势</h2>
  <div class="advantage-grid">
    <div class="advantage-item">
      <h3>高性能架构</h3>
      <p>分布式部署,支持百万级并发访问</p>
    </div>
    <div class="advantage-item">
      <h3>快速部署</h3>
      <p>开箱即用,最快2小时完成系统搭建</p>
    </div>
    <div class="advantage-item">
      <h3>弹性扩展</h3>
      <p>支持水平扩展,按需配置计算资源</p>
    </div>
    <div class="advantage-item">
      <h3>成本可控</h3>
      <p>按量计费,助力企业降本增效</p>
    </div>
  </div>
</div>

<style>
:root {
  --primary-color: #0052d9;
  --text-color: #1d2129;
  --border-radius: 8px;
}

.solutions,
.advantages {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.solutions h2,
.advantages h2 {
  text-align: center;
  font-size: 36px;
  color: var(--text-color);
  margin-bottom: 48px;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.solution-card {
  background: #fff;
  padding: 32px;
  border-radius: var(--border-radius);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.solution-card h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-color);
}

.solution-card p {
  color: #4e5969;
  line-height: 1.6;
  margin-bottom: 16px;
}

.learn-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.advantage-item {
  text-align: center;
  padding: 32px;
  background: #f5f6f7;
  border-radius: var(--border-radius);
}

.advantage-item h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--text-color);
}

.advantage-item p {
  color: #4e5969;
}

@media (max-width: 768px) {
  .solutions h2,
  .advantages h2 {
    font-size: 28px;
    margin-bottom: 32px;
  }
  
  .solution-grid,
  .advantage-grid {
    grid-template-columns: 1fr;
  }
}
</style>