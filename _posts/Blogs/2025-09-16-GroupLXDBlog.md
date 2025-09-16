---
layout: post
toc: True
breadcrumb: True
title: LXD Group Blog
description: My first blog in CSP 2025-26
permalink: /blogs/blog1
author: Tanay Paranjpe 
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mastering Jekyll Theme Switching: An Interactive Guide</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.7;
            color: #2c3e50;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .hero {
            text-align: center;
            padding: 60px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            margin-bottom: 40px;
            color: white;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .content-card {
            background: white;
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .content-card:hover {
            transform: translateY(-5px);
        }
        
        .section-title {
            font-size: 2.2rem;
            color: #2c3e50;
            margin-bottom: 25px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .icon {
            font-size: 2rem;
        }
        
        .code-block {
            background: #1a1a1a;
            color: #e6e6e6;
            padding: 25px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: 'Monaco', 'Menlo', monospace;
            overflow-x: auto;
            border-left: 4px solid #667eea;
        }
        
        .code-block pre {
            margin: 0;
            white-space: pre-wrap;
        }
        
        .interactive-demo {
            background: linear-gradient(45deg, #f8f9fa, #e9ecef);
            border: 2px dashed #667eea;
            border-radius: 15px;
            padding: 30px;
            margin: 25px 0;
            text-align: center;
        }
        
        .theme-selector {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .theme-option {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .theme-option:hover {
            border-color: #667eea;
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }
        
        .theme-option.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            border-left: 5px solid #fdcb6e;
        }
        
        .error-box {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            border-left: 5px solid #e74c3c;
        }
        
        .success-box {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            border-left: 5px solid #00b894;
        }
        
        .step {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 25px;
            margin: 20px 0;
            border-left: 5px solid #667eea;
        }
        
        .step-number {
            background: #667eea;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
        }
        
        .terminal {
            background: #1a1a1a;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Monaco', monospace;
            margin: 15px 0;
        }
        
        .file-tree {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            font-family: 'Monaco', monospace;
            font-size: 0.9rem;
        }
        
        .collapsible {
            background: #667eea;
            color: white;
            cursor: pointer;
            padding: 18px;
            border: none;
            text-align: left;
            outline: none;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 10px;
            margin: 10px 0;
            width: 100%;
            transition: all 0.3s ease;
        }
        
        .collapsible:hover {
            background: #5a67d8;
        }
        
        .collapsible-content {
            display: none;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 0 0 10px 10px;
        }
        
        .collapsible-content.active {
            display: block;
        }
        
        .quiz-container {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
        }
        
        .quiz-question {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        
        .quiz-options {
            display: grid;
            gap: 10px;
        }
        
        .quiz-option {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .quiz-option:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .quiz-option.correct {
            background: #00b894;
            border-color: #00b894;
        }
        
        .quiz-option.incorrect {
            background: #e74c3c;
            border-color: #e74c3c;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .content-card {
                padding: 25px;
            }
            
            .theme-selector {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎨 Mastering Jekyll Theme Switching</h1>
            <p>An interactive guide to implementing flexible theme systems with real-world troubleshooting</p>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🎯</span>
                Learning Objectives
            </h2>
            <ul>
                <li>Understand the architecture of Jekyll theme switching systems</li>
                <li>Implement a Makefile-based theme switching mechanism</li>
                <li>Troubleshoot common issues and edge cases</li>
                <li>Design flexible override systems for customization</li>
            </ul>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🏗️</span>
                Understanding the Architecture
            </h2>
            
            <p>Before diving into implementation, let's understand how Jekyll theme switching works at a fundamental level.</p>
            
            <div class="interactive-demo">
                <h3>📁 Directory Structure Visualization</h3>
                <div class="file-tree" id="file-tree">
                    <div>📂 your-project/</div>
                    <div style="margin-left: 20px;">📂 _themes/</div>
                    <div style="margin-left: 40px;">📂 minima/</div>
                    <div style="margin-left: 60px;">📄 _config.yml</div>
                    <div style="margin-left: 60px;">📄 Gemfile</div>
                    <div style="margin-left: 60px;">📄 opencs.html</div>
                    <div style="margin-left: 60px;">📂 _layouts/</div>
                    <div style="margin-left: 80px;">📄 post.html</div>
                    <div style="margin-left: 80px;">📄 page.html</div>
                    <div style="margin-left: 40px;">📂 text/</div>
                    <div style="margin-left: 60px;">📄 _config.yml</div>
                    <div style="margin-left: 60px;">📄 Gemfile</div>
                    <div style="margin-left: 60px;">📂 _layouts/</div>
                    <div style="margin-left: 80px;">📄 post.html</div>
                    <div style="margin-left: 80px;">📄 page.html</div>
                    <div style="margin-left: 20px;">📂 _layouts/ (active)</div>
                    <div style="margin-left: 40px;">📄 post.html</div>
                    <div style="margin-left: 40px;">📄 page.html</div>
                    <div style="margin-left: 40px;">📄 opencs.html</div>
                    <div style="margin-left: 20px;">📄 _config.yml</div>
                    <div style="margin-left: 20px;">📄 Gemfile</div>
                    <div style="margin-left: 20px;">📄 Makefile</div>
                </div>
            </div>

            <div class="success-box">
                <strong>💡 Key Insight:</strong> The <code>_themes/</code> directory stores all theme configurations, while the root level contains the currently active theme files. Jekyll ignores the <code>_themes/</code> directory during builds.
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🔧</span>
                Step-by-Step Implementation
            </h2>

            <div class="step">
                <span class="step-number">1</span>
                <strong>Create the Theme Directory Structure</strong>
                
                <div class="code-block">
                    <pre># Create the themes directory
mkdir -p _themes/{minima,text,cayman,so-simple}

# Create layout directories for each theme
mkdir -p _themes/minima/_layouts
mkdir -p _themes/text/_layouts
mkdir -p _themes/cayman/_layouts
mkdir -p _themes/so-simple/_layouts</pre>
                </div>
                
                <div class="warning-box">
                    <strong>⚠️ Common Issue:</strong> Users often forget to create the nested <code>_layouts</code> directories, causing copy operations to fail later.
                </div>
            </div>

            <div class="step">
                <span class="step-number">2</span>
                <strong>Set Up Theme-Specific Configurations</strong>
                
                <p>Each theme needs its own configuration files. Here's an example for the Minima theme:</p>
                
                <div class="code-block">
                    <pre># _themes/minima/_config.yml
theme: minima
title: "Your Site Title"
description: "Site description"

# Theme-specific settings
minima:
  skin: dark
  social_links:
    - { platform: github, user_url: "https://github.com/yourusername" }

# Custom settings for your override system
use_opencs_layout: true
theme_name: "minima"</pre>
                </div>
                
                <div class="code-block">
                    <pre># _themes/minima/Gemfile
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end</pre>
                </div>
            </div>

            <div class="step">
                <span class="step-number">3</span>
                <strong>Create Custom Layout Overrides</strong>
                
                <p>The magic happens in the layout files. Here's how to set up the override system:</p>
                
                <div class="code-block">
                    <pre># _themes/minima/_layouts/post.html
---
layout: opencs
---

&lt;article class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting"&gt;
  &lt;header class="post-header"&gt;
    &lt;h1 class="post-title p-name" itemprop="name headline"&gt;{{ page.title | escape }}&lt;/h1&gt;
    &lt;p class="post-meta"&gt;
      &lt;time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished"&gt;
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        {{ page.date | date: date_format }}
      &lt;/time&gt;
    &lt;/p&gt;
  &lt;/header&gt;

  &lt;div class="post-content e-content" itemprop="articleBody"&gt;
    {{ content }}
  &lt;/div&gt;

  {%- if page.comments != false and jekyll.environment == "production" -%}
    {%- include comments.html -%}
  {%- endif -%}
&lt;/article&gt;</pre>
                </div>
                
                <div class="error-box">
                    <strong>🚨 Critical Point:</strong> Notice the <code>layout: opencs</code> in the front matter. This is what allows your custom overrides to work. Many users miss this and wonder why their customizations aren't applied.
                </div>
            </div>

            <div class="step">
                <span class="step-number">4</span>
                <strong>Build the Makefile Magic</strong>
                
                <div class="code-block">
                    <pre># Makefile
.PHONY: use-minima use-text use-cayman use-so-simple clean-theme

# Default theme
use-minima:
	@echo "🎨 Switching to Minima theme..."
	@cp _themes/minima/_config.yml _config.yml
	@cp _themes/minima/Gemfile Gemfile
	@cp _themes/minima/opencs.html _layouts/opencs.html
	@cp _themes/minima/_layouts/*.html _layouts/
	@echo "✅ Minima theme activated!"
	@echo "📝 Run 'bundle install' to update dependencies"

use-text:
	@echo "🎨 Switching to TeXt theme..."
	@cp _themes/text/_config.yml _config.yml
	@cp _themes/text/Gemfile Gemfile
	@cp _themes/text/_layouts/*.html _layouts/
	@echo "✅ TeXt theme activated!"
	@echo "📝 Run 'bundle install' to update dependencies"

# Add error handling
clean-theme:
	@echo "🧹 Cleaning current theme files..."
	@rm -f _config.yml Gemfile
	@rm -f _layouts/*.html
	@echo "✅ Theme files cleaned!"

# Check if theme directory exists before switching
check-theme-exists:
	@test -d _themes/$(THEME) || (echo "❌ Theme '$(THEME)' not found in _themes/" && exit 1)</pre>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🎮</span>
                Interactive Theme Switcher Demo
            </h2>
            
            <div class="interactive-demo">
                <h3>Try It Out: Theme Selection</h3>
                <p>Click on different themes to see how the configuration would change:</p>
                
                <div class="theme-selector">
                    <div class="theme-option active" onclick="switchTheme('minima', this)">
                        <h4>🎨 Minima</h4>
                        <p>Clean & Simple</p>
                    </div>
                    <div class="theme-option" onclick="switchTheme('text', this)">
                        <h4>📝 TeXt</h4>
                        <p>Feature Rich</p>
                    </div>
                    <div class="theme-option" onclick="switchTheme('cayman', this)">
                        <h4>🏔️ Cayman</h4>
                        <p>GitHub Pages</p>
                    </div>
                    <div class="theme-option" onclick="switchTheme('so-simple', this)">
                        <h4>✨ So Simple</h4>
                        <p>Minimalist</p>
                    </div>
                </div>
                
                <div class="terminal" id="terminal-output">
$ make use-minima<br>
🎨 Switching to Minima theme...<br>
✅ Minima theme activated!<br>
📝 Run 'bundle install' to update dependencies
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🚨</span>
                Common Issues & Troubleshooting
            </h2>

            <button class="collapsible">🔍 "Bundle install fails after theme switch"</button>
            <div class="collapsible-content">
                <div class="error-box">
                    <strong>Problem:</strong> After switching themes, <code>bundle install</code> throws dependency conflicts.
                </div>
                
                <div class="success-box">
                    <strong>Solution:</strong>
                    <div class="code-block">
                        <pre># Clear the bundle cache and reinstall
bundle clean --force
rm Gemfile.lock
bundle install</pre>
                    </div>
                    
                    <p><strong>Why this happens:</strong> Different themes have different gem dependencies. The old <code>Gemfile.lock</code> can cause conflicts.</p>
                </div>
            </div>

            <button class="collapsible">🔍 "Custom CSS not loading after theme switch"</button>
            <div class="collapsible-content">
                <div class="error-box">
                    <strong>Problem:</strong> Your custom styles disappear when switching themes.
                </div>
                
                <div class="success-box">
                    <strong>Solution:</strong> Ensure your <code>opencs.html</code> layout includes custom CSS:
                    
                    <div class="code-block">
                        <pre># In your opencs.html
&lt;head&gt;
  {%- include head.html -%}
  &lt;link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"&gt;
&lt;/head&gt;</pre>
                    </div>
                    
                    <p><strong>Pro Tip:</strong> Create theme-specific custom CSS files for better organization.</p>
                </div>
            </div>

            <button class="collapsible">🔍 "Layouts not found" error</button>
            <div class="collapsible-content">
                <div class="error-box">
                    <strong>Problem:</strong> Jekyll can't find layout files after switching themes.
                </div>
                
                <div class="success-box">
                    <strong>Solution:</strong> Check the layout resolution order:
                    
                    <ol>
                        <li>Jekyll looks in <code>_layouts/</code> first</li>
                        <li>Then in the gem theme's layouts</li>
                        <li>Make sure your Makefile copies all necessary layouts</li>
                    </ol>
                    
                    <div class="code-block">
                        <pre># Debug layout resolution
bundle exec jekyll build --verbose</pre>
                    </div>
                </div>
            </div>

            <button class="collapsible">🔍 "Site looks broken in development vs production"</button>
            <div class="collapsible-content">
                <div class="error-box">
                    <strong>Problem:</strong> Site works locally but breaks when deployed.
                </div>
                
                <div class="success-box">
                    <strong>Solution:</strong> Environment-specific configurations:
                    
                    <div class="code-block">
                        <pre># _config.yml - use environment variables
url: {% raw %}"{% if jekyll.environment == 'production' %}https://yourdomain.com{% else %}http://localhost:4000{% endif %}"{% endraw %}

# In your layouts
{% raw %}&lt;link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}"&gt;{% endraw %}</pre>
                    </div>
                    
                    <p><strong>Always use <code>relative_url</code> filter for asset paths!</strong></p>
                </div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">💡</span>
                Advanced Techniques
            </h2>
            
            <h3>🔄 Dynamic Theme Detection</h3>
            <p>Add theme detection to your layouts:</p>
            
            <div class="code-block">
                <pre># In opencs.html
{% raw %}{%- assign current_theme = site.theme_name | default: "minima" -%}
&lt;body class="theme-{{ current_theme }}"&gt;
  &lt;div class="theme-indicator"&gt;Current theme: {{ current_theme | capitalize }}&lt;/div&gt;
  {{ content }}
&lt;/body&gt;{% endraw %}</pre>
            </div>
            
            <h3>📱 Responsive Theme Switching</h3>
            <div class="code-block">
                <pre># Add to your custom CSS
.theme-minima {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
}

.theme-text {
  --primary-color: #1a202c;
  --accent-color: #4299e1;
}

/* Use CSS custom properties throughout */
.main-header {
  background-color: var(--primary-color);
  border-bottom: 2px solid var(--accent-color);
}</pre>
            </div>
        </div>

        <div class="content-card">
            <div class="quiz-container">
                <h2>🧠 Quick Knowledge Check</h2>
                
                <div class="quiz-question">
                    What's the correct order of Jekyll's layout resolution?
                </div>
                
                <div class="quiz-options">
                    <div class="quiz-option" onclick="checkAnswer(this, false)">
                        1. Remote theme → Local _layouts → Gem theme
                    </div>
                    <div class="quiz-option" onclick="checkAnswer(this, true)">
                        1. Local _layouts → Gem theme → Remote theme
                    </div>
                    <div class="quiz-option" onclick="checkAnswer(this, false)">
                        1. Gem theme → Local _layouts → Remote theme
                    </div>
                </div>
                
                <div id="quiz-feedback" style="margin-top: 20px; display: none;"></div>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🎯</span>
                Best Practices & Recommendations
            </h2>
            
            <div class="success-box">
                <strong>✅ Do's:</strong>
                <ul>
                    <li>Always version control your <code>_themes/</code> directory</li>
                    <li>Test theme switches in a separate branch first</li>
                    <li>Use consistent naming conventions for layouts</li>
                    <li>Document theme-specific customizations</li>
                    <li>Keep a backup of working configurations</li>
                </ul>
            </div>
            
            <div class="error-box">
                <strong>❌ Don'ts:</strong>
                <ul>
                    <li>Don't modify gem theme files directly</li>
                    <li>Don't forget to update dependencies after switching</li>
                    <li>Don't hardcode theme-specific paths in content</li>
                    <li>Don't skip testing after theme changes</li>
                </ul>
            </div>
        </div>

        <div class="content-card">
            <h2 class="section-title">
                <span class="icon">🚀</span>
                Next Steps
            </h2>
            
            <p>Now that you understand theme switching, try these advanced challenges:</p>
            
            <ol>
                <li><strong>Automated Testing:</strong> Set up CI/CD to test all themes automatically</li>
                <li><strong>Theme Gallery:</strong> Create a preview system for comparing themes</li>
                <li><strong>Plugin Integration:</strong> Make your theme system work with Jekyll plugins</li>
                <li><strong>Performance Optimization:</strong> Implement lazy loading for theme assets</li>
            </ol>
            
            <div class="success-box">
                <strong>🎉 Congratulations!</strong> You now have the knowledge to implement robust Jekyll theme switching systems. Remember, the key is understanding the layout resolution order and maintaining clean separation between themes and customizations.
            </div>
        </div>
    </div>

    <script>
        // Interactive theme switcher
        function switchTheme(themeName, element) {
            // Update active state
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');
            
            // Update terminal output
            const terminal = document.getElementById('terminal-output');
            const commands = {
                'minima': `$ make use-minima<br>🎨 Switching to Minima theme...<br>✅ Minima theme activated!<br>📝 Run 'bundle install' to update dependencies`,
                'text': `$ make use-text<br>🎨 Switching to TeXt theme...<br>✅ TeXt theme activated!<br>📝 Run 'bundle install' to update dependencies`,
                'cayman': `$ make use-cayman<br>🎨 Switching to Cayman theme...<br>✅ Cayman theme activated!<br>📝 Run 'bundle install' to update dependencies`,
                'so-simple': `$ make use-so-simple<br>🎨 Switching to So Simple theme...<br>✅ So Simple theme activated!<br>📝 Run 'bundle install' to update dependencies`
            };
            
            terminal.innerHTML = commands[themeName];
        }
        
        // Collapsible sections
        document.querySelectorAll('.collapsible').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                content.classList.toggle('active');
            });
        });
        
        // Quiz functionality
        function checkAnswer(element, isCorrect) {
            const options = document.querySelectorAll('.quiz-option');
            const feedback = document.getElementById('quiz-feedback');
            
            // Remove previous states
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
            
            if (isCorrect) {
                element.classList.add('correct');
                feedback.innerHTML = '<div class="success-box">🎉 Correct! Jekyll looks in local _layouts first, then gem theme layouts, then remote theme layouts.</div>';
            } else {
                element.classList.add('incorrect');
                // Show the correct answer
                options.forEach(opt => {
                    if (opt.onclick.toString().includes('true')) {
                        opt.classList.add('correct');
                    }
                });
                feedback.innerHTML = '<div class="error-box">❌ Not quite. Jekyll prioritizes local files over remote ones for security and customization purposes.</div>';
            }
            
            feedback.style.display = 'block';
        }
        
        // Add some interactive animations