import{_ as s,c as a,o as p,ag as e}from"./chunks/framework.BHAHxt1l.js";const u=JSON.parse('{"title":"通用部署②/③ 开发人员使用​","description":"","frontmatter":{},"headers":[],"relativePath":"human/deployment/general.md","filePath":"human/deployment/general.md","lastUpdated":1737637816000}'),l={name:"human/deployment/general.md"};function i(r,n,c,t,b,o){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="通用部署2-3-开发人员使用​" tabindex="-1">通用部署②/③ 开发人员使用<a href="https://doc.chatmoney.cn/dm/deployment/general.html#%E9%80%9A%E7%94%A8%E9%83%A8%E7%BD%B22-3" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#通用部署2-3-开发人员使用​" aria-label="Permalink to &quot;通用部署②/③ 开发人员使用[​](https://doc.chatmoney.cn/dm/deployment/general.html#%E9%80%9A%E7%94%A8%E9%83%A8%E7%BD%B22-3)&quot;">​</a></h1><h2 id="项目入口" tabindex="-1">项目入口 <a class="header-anchor" href="#项目入口" aria-label="Permalink to &quot;项目入口&quot;">​</a></h2><p>项目静态资源入口目录：<code>server/public</code> 　<br> 项目PHP入口文件：<code>server/public/index.php</code></p><h2 id="php扩展" tabindex="-1">PHP扩展 <a class="header-anchor" href="#php扩展" aria-label="Permalink to &quot;PHP扩展&quot;">​</a></h2><p><code>fileinfo</code>、<code>PDO_MYSQL</code>、<code>allow_url_fopen</code>、<code>GD2</code>、<code>DOM</code>、<code>redis</code></p><h2 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h2><h3 id="nginx全配置" tabindex="-1">nginx全配置 <a class="header-anchor" href="#nginx全配置" aria-label="Permalink to &quot;nginx全配置&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">⚠️ 警告</p><p>使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的nginx配置。</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        listen 443 ssl;</span></span>
<span class="line"><span>        server_name  *.likeadmin.localhost;</span></span>
<span class="line"><span>        ssl_certificate /ssl/likeadmin.localhost.crt;</span></span>
<span class="line"><span>        ssl_certificate_key /ssl/likeadmin.localhost.key;</span></span>
<span class="line"><span>        access_log /logs/likeadmin.localhost_t_access_nginx.log;</span></span>
<span class="line"><span>        error_log /logs/likeadmin.localhost_error_nginx.log;</span></span>
<span class="line"><span>        client_max_body_size 5M;</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root  chat/server/public;#入口文件目录</span></span>
<span class="line"><span>            index  index.html index.htm index.php;</span></span>
<span class="line"><span>            if (!-e $request_filename)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                rewrite ^/(.*)$ /index.php?s=$1 last;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location ~ /.*\\.php/ {</span></span>
<span class="line"><span>            rewrite ^(.*?/?)(.*\\.php)(.*)$ /$2?s=$3 last;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   /var/www/html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        location ~ \\.php$ {</span></span>
<span class="line"><span>            fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>            fastcgi_index  index.php;</span></span>
<span class="line"><span>            fastcgi_param  SCRIPT_FILENAME  likeadmin/server/public$fastcgi_script_name; #入口文件目录</span></span>
<span class="line"><span>            include        fastcgi_params;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        location = /favicon.ico {</span></span>
<span class="line"><span>                log_not_found off;</span></span>
<span class="line"><span>                access_log off;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="nginx伪静态部分" tabindex="-1">nginx伪静态部分 <a class="header-anchor" href="#nginx伪静态部分" aria-label="Permalink to &quot;nginx伪静态部分&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    if (!-e $request_filename)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                rewrite ^/(.*)$ /index.php?s=$1 last;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="apache配置" tabindex="-1">apache配置 <a class="header-anchor" href="#apache配置" aria-label="Permalink to &quot;apache配置&quot;">​</a></h2><h3 id="apache权配置" tabindex="-1">apache权配置 <a class="header-anchor" href="#apache权配置" aria-label="Permalink to &quot;apache权配置&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">⚠️ 警告</p><p>使用过泛域名和泛域名证书，租户如果使用自定义域名，请使用自抑域名添加相当的apache配置。</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>        ServerName *.likeadmin.localhost</span></span>
<span class="line"><span>        DocumentRoot /path/to/likeadmin/server/public</span></span>
<span class="line"><span>        ErrorLog \${APACHE_LOG_DIR}/demo.likeadmin.cn_error_apache.log</span></span>
<span class="line"><span>        CustomLog \${APACHE_LOG_DIR}/demo.likeadmin.cnt_access_apache.log combined</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        &lt;Directory /path/to/likeadmin/server/public&gt;</span></span>
<span class="line"><span>            Options Indexes FollowSymLinks</span></span>
<span class="line"><span>            AllowOverride All</span></span>
<span class="line"><span>            Require all granted</span></span>
<span class="line"><span>        &lt;/Directory&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Rewrite settings</span></span>
<span class="line"><span>        RewriteEngine On</span></span>
<span class="line"><span>        RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span>        RewriteRule ^(.*)$ /index.php?s=$1 [L]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # PHP settings</span></span>
<span class="line"><span>        &lt;FilesMatch &quot;\\.php$&quot;&gt;</span></span>
<span class="line"><span>            SetHandler &quot;proxy:fcgi://127.0.0.1:9000&quot;</span></span>
<span class="line"><span>        &lt;/FilesMatch&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Error page handling</span></span>
<span class="line"><span>        ErrorDocument 500 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 502 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 503 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 504 /50x.html</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Disable favicon logging</span></span>
<span class="line"><span>        &lt;Files favicon.ico&gt;</span></span>
<span class="line"><span>            LogLevel emerg</span></span>
<span class="line"><span>            CustomLog /dev/null common</span></span>
<span class="line"><span>        &lt;/Files&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;/VirtualHost&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;VirtualHost *:443&gt;</span></span>
<span class="line"><span>        ServerName *.likeadmin.localhost</span></span>
<span class="line"><span>        DocumentRoot /path/to/likeadmin/server/public</span></span>
<span class="line"><span>        ErrorLog \${APACHE_LOG_DIR}/demo.likeadmin.cn_error_apache.log</span></span>
<span class="line"><span>        CustomLog \${APACHE_LOG_DIR}/demo.likeadmin.cnt_access_apache.log combined</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        SSLEngine on</span></span>
<span class="line"><span>        SSLCertificateFile /ssl/*.likeadmin.localhost.crt</span></span>
<span class="line"><span>        SSLCertificateKeyFile /ssl/www.localhost.key</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        &lt;Directory /path/to/likeadmin/server/public&gt;</span></span>
<span class="line"><span>            Options Indexes FollowSymLinks</span></span>
<span class="line"><span>            AllowOverride All</span></span>
<span class="line"><span>            Require all granted</span></span>
<span class="line"><span>        &lt;/Directory&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Rewrite settings</span></span>
<span class="line"><span>        RewriteEngine On</span></span>
<span class="line"><span>        RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span>        RewriteRule ^(.*)$ /index.php?s=$1 [L]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # PHP settings</span></span>
<span class="line"><span>        &lt;FilesMatch &quot;\\.php$&quot;&gt;</span></span>
<span class="line"><span>            SetHandler &quot;proxy:fcgi://127.0.0.1:9000&quot;</span></span>
<span class="line"><span>        &lt;/FilesMatch&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Error page handling</span></span>
<span class="line"><span>        ErrorDocument 500 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 502 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 503 /50x.html</span></span>
<span class="line"><span>        ErrorDocument 504 /50x.html</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        # Disable favicon logging</span></span>
<span class="line"><span>        &lt;Files favicon.ico&gt;</span></span>
<span class="line"><span>            LogLevel emerg</span></span>
<span class="line"><span>            CustomLog /dev/null common</span></span>
<span class="line"><span>        &lt;/Files&gt;</span></span>
<span class="line"><span>    &lt;/VirtualHost&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h3 id="apache伪静态" tabindex="-1">apache伪静态 <a class="header-anchor" href="#apache伪静态" aria-label="Permalink to &quot;apache伪静态&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    &lt;IfModule mod_rewrite.c&gt;</span></span>
<span class="line"><span>      Options +FollowSymlinks -Multiviews</span></span>
<span class="line"><span>      RewriteEngine On</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    RewriteCond %{REQUEST_FILENAME} !-d</span></span>
<span class="line"><span>    RewriteCond %{REQUEST_FILENAME} !-f</span></span>
<span class="line"><span>    RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]</span></span>
<span class="line"><span>    &lt;/IfModule&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>部署成功后，访问域名即可安装<code>likeadmin</code>，安装后生成配置文件<code>server/.env</code>。<code>server/.env</code>包含<code>Mysql</code>、<code>Redis</code>等配置信息。</p><p>访问地址</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>首次安装的域名就是平台域名，租户域名在平台</p></div><ul><li>平台后台访问地址：<a href="http://xn--kproc07moyi/platform" target="_blank" rel="noreferrer">http://平台域名/platform</a></li><li>租户后台访问地址：<a href="http://xn--eqrt2g72lduy/admin" target="_blank" rel="noreferrer">http://租户域名/admin</a></li><li>租户PC端前台访问地址：<a href="http://xn--eqrt2g72lduy/pc" target="_blank" rel="noreferrer">http://租户域名/pc</a></li><li>租户移动端前台访问地址：<a href="http://xn--eqrt2g/mobile" target="_blank" rel="noreferrer">http://域名/mobile</a></li></ul><h3 id="添加租户自定义域名" tabindex="-1">添加租户自定义域名 <a class="header-anchor" href="#添加租户自定义域名" aria-label="Permalink to &quot;添加租户自定义域名&quot;">​</a></h3><p>将自定义租户域名做<code>CNAME</code>解析到系统生成的租户默认域名，在SaaS平台后台设置租户自定义域名，然后<code>Nginx</code>或<code>Apache</code>添加配置，配置出了域名以外，其它与上述的配置一致。</p>`,24)]))}const d=s(l,[["render",i]]);export{u as __pageData,d as default};
