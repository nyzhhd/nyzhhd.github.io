;(function($) {

//这是万恶的全局变量
var Global = {
    section_name : [],
    section_num : 1,
    lang: 'zh',
    translations: {
        zh: {
            'nav_home': '首页',
            'nav_about': '关于',
            'nav_works': '项目',
            'nav_internships': '实习',
            'nav_skill': '能力',
            'nav_papers': '成果',
            'nav_contact': '联系',
            'home_hi': 'Hi，我是 王超泽',
            'home_title': '控制科学与工程 · 2026届硕士毕业生',
            'home_focus': '专注于 AI 感知、大模型应用 (RAG/Agent) 与机器人多模态操控',
            'home_future': '<i data-lucide="briefcase" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> 2026年毕业后将加入华为工作，继续从事 AI 和软件开发。',
            'about_title': '关于本人',
            'about_papers': '论文成果',
            'about_awards': '获奖经历',
            'works_title': '近期工作',
            'skill_title': '技能水平',
            'skill_ai': 'AI 感知与视觉',
            'skill_ai_1': '<strong>视觉感知</strong>：改进型 Deformable DETR、YOLO 系列、Segment Anything (SAM) 等。',
            'skill_ai_2': '<strong>多模态大模型</strong>：RAG (Retrieval-Augmented Generation)、Prompt Engineering、Agno/LangChain Agent 开发。',
            'skill_ai_3': '<strong>3D 视觉</strong>：2D/3D 点云配准、位姿估计 (6D Pose)、深度图补全 (Depth Completion)。',
            'skill_robot': '机器人规划与控制',
            'skill_robot_1': '<strong>运动规划</strong>：扩散模型 (Diffusion Policy)、端到端多模态操控模型 (VLA)、遗传算法路径优化。',
            'skill_robot_2': '<strong>控制算法</strong>：PID、MPC 控制、精密机械臂抓取与装配任务规划。',
            'skill_robot_3': '<strong>分布式框架</strong>：Ray 分布式计算框架、ROS/ROS2 机器人操作系统。',
            'skill_fullstack': '全栈开发与工程',
            'skill_fullstack_1': '<strong>后端开发</strong>：Python (Flask/FastAPI/asyncio)、Redis、Nginx 部署、Linux 嵌入式开发 (RK3588)。',
            'skill_fullstack_2': '<strong>前端与移动端</strong>：微信/QQ 小程序原生开发、Vue.js、响应式网页设计。',
            'skill_fullstack_3': '<strong>嵌入式系统</strong>：RT-Thread 实时操作系统、UWB 定位、LoRa 无线通信、NPU 算力部署。',
            'papers_title': '论文成果',
            'awards_title': '获奖经历',
            'awards_competition': '竞赛奖项',
            'awards_scholarship': '奖学金及其他荣誉',
            'awards_time': '时间',
            'awards_name': '奖项名称',
            'awards_level': '获奖等级',
            'awards_remark': '备注',
            'contact_title': '联系本人',
            'sponsor_btn': '赞赏作者',
            'sponsor_text': '如果您觉得我的工作对您有所帮助，或者想要支持我的开源项目，欢迎通过赞赏来鼓励我继续创作。每一份支持都是我前进的动力。',
            'more_csdn': '更多动态见 CSDN 博客',
            'loading_text': '正在努力加载中...',
            'contact_social': '社交网络',
            'contact_party': '中共党员',
            'contact_summary': '项目发展',
            'contact_robotics': '致力于智能机器人领域的全栈式深度学习应用：',
            'contact_project_1': '目标识别、分割与 6D 位姿估计',
            'contact_project_2': '单/双机械臂智能抓取与精密装配',
            'contact_project_3': '扩散模型轨迹规划与生成',
            'contact_project_4': '基于 2D/3D 视觉的多模态缺陷检测',
            'contact_project_5': '端到端机器人操控模型 (VLA)',
            'contact_hobbies': '评价与爱好',
            'contact_friends_list': '好朋友：<a href="https://suink.cn/" target="_blank">@Suink</a> <a href="https://www.jiajie.me/" target="_blank">@Jiajie</a>',
            'contact_footer': '欢迎交流合作。设计致敬 Jiangshui 开源项目。',
            'contact_eval_1': '<strong>综合素质</strong>：中共党员，英语六级 (503)，具备良好的团队协作与抗压能力。',
            'contact_eval_2': '<strong>技术热情</strong>：对 AI 算法与机器人前沿技术有浓厚兴趣，乐于探索端到端操控与多模态模型。',
            'contact_eval_3': '<strong>个人爱好</strong>：热爱骑行（单日 200km+）、摄影与旅行，已点亮百余城市，追求极致的探索精神。',
            'contact_robotics': '致力于智能机器人领域的全栈式深度学习应用：',
            'about_timeline_1': '考入<strong>中南大学</strong>交通运输工程学院，自动化专业（本科）。在<a href="https://stte.csu.edu.cn/kp/jdjs/zndxgslcyjzxjs.htm" target="_blank">高速列车研究中心</a>教育部重点实验室学习。成绩 <strong>90.26/100</strong>，排名 <strong>2/59</strong>，曾获<strong>国家奖学金</strong>、特等奖学金等，优秀毕业生。',
            'about_timeline_2': '保送至<strong>华中科技大学</strong>人工智能与自动化学院，控制科学与工程专业（硕士）。在图像信息处理与智能控制教育部重点实验室、<strong>智能机器人实验室</strong>深造。成绩 <strong>3.63/4</strong>，获研究生学业一等奖学金、华科三好学生、比亚迪奖学金。',
            'about_blog': '<i data-lucide="rss" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> 博客 <a href="https://blog.csdn.net/m0_51738372" target="_blank">石去皿</a> 15.9k+ 粉丝，520k+ 阅读量。',
            'about_reviewer': '<i data-lucide="check-circle" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> MEAAC2025、NCAA、<a href=".\\ccdc2025\\ccdcreview.pdf" target="_blank">CCDC2026 审稿人</a>。',
            'about_focus': '目前专注于算法能力巩固，为 2026 年硕士毕业深造或工作做准备。',
            'work_jts_title': 'AI帮写检讨书',
            'work_jts_desc': '微信小程序/QQ小程序。基于 Flask + asyncio + Redis 构建，采用 Hypercorn + Nginx 部署。累计用户 25W+。',
            'work_jts_web_title': 'AI帮写检讨书官网',
            'work_jts_web_desc': '为小程序提供 brand 展示与宣传的官方站点，展示产品功能与核心优势。',
            'work_robot_title': '高铁动车智能巡检机器人',
            'work_robot_desc': '基于改进型 Deformable DETR 与 2D/3D 点云配准算法，实现对转向架部件的精密缺陷检测，并采用 Ray 分布式框架优化检测流程。',
            'work_fence_title': '智能编组围栏系统',
            'work_fence_desc': '基于 RT-Thread 实时系统、UWB 定位与 LoRa 通信，结合 XGBoost 模型预测人流，实现围栏系统的智能排列与编组。',
            'work_arm_title': '机械臂感知与规划',
            'work_arm_desc': '涉及元器件分拣（DiffDDet）、污迹清洗（YOLOv7+遗传算法）及双臂协作（Qwen2.5-VL+Diffusion Policy）等任务。',
            'internships_title': '实习经历',
            'intern_haina_title': '临沂海纳电子 · 软件开发工程师',
            'intern_haina_desc': '负责 RK3588 Linux 嵌入式开发，通过 C++ 实现了 4D 毫米波雷达与相机的前融合算法。利用 Rockchip NPU 部署并加速了 YOLOv8 与 DeepSeek 等大模型，实现了端侧 AI 的高效推理。',
            'intern_mobile_title': '中国移动 · 算法开发',
            'intern_mobile_desc': '深度参与 NL2SQL 转换优化项目，通过构建多级 RAG 检索增强与精心设计的 Prompt Engineering，将自然语言精准转换为 SQL 语句。基于 LangChain 框架开发了具备自我纠错能力的 ReAct Agent，显著提升了复杂查询的准确率。',
            'intern_fsdi_title': '中铁四院 · 人工智能组',
            'intern_fsdi_desc': '主导开发了 rag4chat 企业级知识库系统，集成 OCR 技术与 LLaVA 多模态模型处理海量非结构化工程数据。基于 Agno 框架研发了多款轻量化智能 Agent，大幅提升了办公自动化水平。凭借优异表现，获得了科研所唯二的提前转正 Offer。',
            'sponsor_title': '赞赏作者',
            'sponsor_subtitle': '感谢您的支持与认可',
            'sponsor_wechat': '微信赞赏',
            'sponsor_alipay': '支付宝收款',
            'back_home': '返回首页'
        },
        en: {
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_works': 'Works',
            'nav_internships': 'Internships',
            'nav_skill': 'Skills',
            'nav_papers': 'Papers',
            'nav_contact': 'Contact',
            'home_hi': "Hi, I'm Chaoze Wang",
            'home_title': 'Control Science & Engineering · Class of 2026 M.S.',
            'home_focus': 'Focus on AI Perception, LLM Applications (RAG/Agent) & Multimodal Robot Manipulation',
            'home_future': '<i data-lucide="briefcase" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> After graduation in 2026, I will join Huawei to continue my career in AI and software development.',
            'about_title': 'About Me',
            'about_papers': 'Papers',
            'about_awards': 'Awards',
            'works_title': 'Recent Works',
            'skill_title': 'Skills',
            'skill_ai': 'AI Perception & Vision',
            'skill_ai_1': '<strong>Visual Perception</strong>: Improved Deformable DETR, YOLO series, Segment Anything (SAM), etc.',
            'skill_ai_2': '<strong>LLM Applications</strong>: RAG (Retrieval-Augmented Generation), Prompt Engineering, Agno/LangChain Agent development.',
            'skill_ai_3': '<strong>3D Vision</strong>: 2D/3D point cloud registration, 6D Pose estimation, Depth Completion.',
            'skill_robot': 'Robot Planning & Control',
            'skill_robot_1': '<strong>Motion Planning</strong>: Diffusion Policy, VLA (Vision-Language-Action) models, Genetic algorithm optimization.',
            'skill_robot_2': '<strong>Control Algorithms</strong>: PID, MPC, precision robot arm grasping and assembly task planning.',
            'skill_robot_3': '<strong>Distributed Systems</strong>: Ray distributed framework, ROS/ROS2 (Robot Operating System).',
            'skill_fullstack': 'Full-stack & Engineering',
            'skill_fullstack_1': '<strong>Backend Development</strong>: Python (Flask/FastAPI/asyncio), Redis, Nginx, Linux embedded (RK3588).',
            'skill_fullstack_2': '<strong>Front-end & Mobile</strong>: Native WeChat/QQ Mini-program development, Vue.js, responsive web design.',
            'skill_fullstack_3': '<strong>Embedded Systems</strong>: RT-Thread, UWB positioning, LoRa communication, NPU deployment.',
            'papers_title': 'Publications',
            'awards_title': 'Awards & Honors',
            'awards_competition': 'Competitions',
            'awards_scholarship': 'Scholarships & Honors',
            'awards_time': 'Time',
            'awards_name': 'Award Name',
            'awards_level': 'Level',
            'awards_remark': 'Remark',
            'contact_title': 'Contact Me',
            'sponsor_btn': 'Sponsor Me',
            'sponsor_text': 'If you find my work helpful or would like to support my open-source projects, feel free to encourage me through sponsorship. Every bit of support is my motivation.',
            'more_csdn': 'More updates on CSDN Blog',
            'loading_text': 'Loading...',
            'contact_social': 'Social Media',
            'contact_party': 'CCP Member',
            'contact_summary': 'Project Evolution',
            'contact_robotics': 'Dedicated to full-stack deep learning applications in intelligent robotics:',
            'contact_project_1': 'Object detection, segmentation, and 6D pose estimation',
            'contact_project_2': 'Single/dual-arm intelligent grasping and precision assembly',
            'contact_project_3': 'Diffusion models for trajectory planning and generation',
            'contact_project_4': 'Multi-modal defect detection based on 2D/3D vision',
            'contact_project_5': 'End-to-end vision-language-action (VLA) models',
            'contact_hobbies': 'Evaluation & Hobbies',
            'contact_friends_list': 'Friends: <a href="https://suink.cn/" target="_blank">@Suink</a> <a href="https://www.jiajie.me/" target="_blank">@Jiajie</a>',
            'contact_footer': 'Welcome to collaborate. Design inspired by Jiangshui.',
            'contact_eval_1': '<strong>Comprehensive Quality</strong>: CCP Member, CET-6 (503), good team collaboration and pressure resistance.',
            'contact_eval_2': '<strong>Technical Passion</strong>: Keen interest in AI algorithms and robotics, eager to explore VLA and multimodal models.',
            'contact_eval_3': '<strong>Hobbies</strong>: Passionate about cycling (200km+ single day), photography, and travel. Explored 100+ cities with an adventurous spirit.',
            'contact_robotics': 'Dedicated to full-stack deep learning applications in intelligent robotics:',
            'about_timeline_1': 'Admitted to the School of Traffic and Transportation Engineering, <strong>Central South University</strong>, Automation (B.S.). Studied at the High-speed Train Research Center, Ministry of Education. GPA <strong>90.26/100</strong>, Rank <strong>2/59</strong>, recipient of the <strong>National Scholarship</strong>, etc.',
            'about_timeline_2': 'Recommended for admission to <strong>Huazhong University of Science and Technology</strong>, Control Science and Engineering (M.S.). Deepening studies at the Key Lab of Image Processing & Intelligent Control, and the <strong>Intelligent Robot Lab</strong>. GPA <strong>3.63/4</strong>, Academic First-class Scholarship, HUST Merit Student.',
            'about_blog': '<i data-lucide="rss" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> Blog <a href="https://blog.csdn.net/m0_51738372" target="_blank">Shiqumin</a> with 15.9k+ followers and 520k+ reads.',
            'about_reviewer': '<i data-lucide="check-circle" style="vertical-align: -4px; width: 20px; margin-right: 4px;"></i> Reviewer for MEAAC2025, NCAA, <a href=".\\ccdc2025\\ccdcreview.pdf" target="_blank">CCDC2026</a>. CCP Member, CET-6 (503).',
            'about_focus': 'Currently focusing on algorithm consolidation, preparing for further studies or work after graduation in 2026.',
            'work_jts_title': 'AI Review Assistant',
            'work_jts_desc': 'WeChat/QQ Mini-programs. Built with Flask + asyncio + Redis, deployed using Hypercorn + Nginx. 25W+ users.',
            'work_jts_web_title': 'AI Review Assistant Official Site',
            'work_jts_web_desc': 'Official website for product display and promotion, showcasing core features and advantages.',
            'work_robot_title': 'Intelligent HSR Inspection Robot',
            'work_robot_desc': 'Precision defect detection based on improved Deformable DETR and 2D/3D point cloud registration, optimized with Ray distributed framework.',
            'work_fence_title': 'Intelligent Grouping Fence System',
            'work_fence_desc': 'Based on RT-Thread, UWB, and LoRa, combining XGBoost for passenger flow prediction to achieve intelligent fence grouping.',
            'work_arm_title': 'Robot Arm Perception & Planning',
            'work_arm_desc': 'Involving component sorting (DiffDDet), cleaning (YOLOv7+Genetic), and dual-arm collaboration (Qwen2.5-VL+Diffusion Policy).',
            'internships_title': 'Internships',
            'intern_haina_title': 'Haina Electronics · Software Engineer',
            'intern_haina_desc': 'Responsible for RK3588 Linux embedded development, implementing 4D radar-camera fusion via C++. Deployed and accelerated YOLOv8 and DeepSeek models using Rockchip NPU for efficient edge AI inference.',
            'intern_mobile_title': 'China Mobile · Algorithm Intern',
            'intern_mobile_desc': 'Contributed to NL2SQL optimization by building multi-stage RAG and designing complex Prompt Engineering. Developed self-correcting ReAct Agents using LangChain, significantly improving SQL generation accuracy.',
            'intern_fsdi_title': 'CRFSDI · AI Group',
            'intern_fsdi_desc': 'Led the development of rag4chat enterprise RAG system, integrating OCR and LLaVA for unstructured data processing. Built light weight Agents with Agno framework, resulting in a return offer (one of only two in the institute).',
            'sponsor_title': 'Support Me',
            'sponsor_subtitle': 'Thank you for your support and recognition',
            'sponsor_wechat': 'WeChat Pay',
            'sponsor_alipay': 'Alipay',
            'back_home': 'Back to Home'
        }
    }
};

Global.updateLanguage = function(lang) {
    Global.lang = lang || Global.lang;
    $('[data-i18n]').each(function() {
        var key = $(this).data('i18n');
        var translation = Global.translations[Global.lang][key];
        if (translation) {
            $(this).html(translation);
        }
    });
    $('.lang-toggle').text(Global.lang === 'zh' ? 'EN' : '中文');
    localStorage.setItem('lang', Global.lang);
};
//缓出现函数
Global.fadeInByOrder = function(selector,interval,callback){
    var i = 1,
        $el = $(selector+' .fade'),
        length = $el.length + 1,
        intervala = interval || 100,
        callbacka = callback || function(){ return; };

    if ($el.length === 0) { callbacka(); return; }

    (function fadeInIt(){
        if ( i < length ) {
            $(selector+' .fade'+i).addClass('fade-in');
            i++;
            setTimeout( fadeInIt , intervala );
            if ( i === length) {
                callbacka();
            }
        }
    })();
};
//函数节流
Global.throttle = function(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
};
//重新计算元素位置
Global.reCal = function(){
    // 基础初始化工作，现在主要由 CSS 处理
    $('.section-wrap').each(function(index, el) {
        var className = $(this).attr('class');
        var parts = className.split(' ');
        Global.section_name[index] = parts[parts.length - 1];
    });
};

//头部交互
Global.shrinkHeader = function(doShrink){
    $('.section-header').toggleClass('shrink', doShrink);
};

//高亮菜单
Global.fire_nav = function(sectionIdx){
    $('.nav-menu li, .back-home').removeClass('hover');
    var curSection = Global.section_name[sectionIdx];
    if (!curSection) return;

    if (curSection.indexOf('about') !== -1) $('.nav-about').addClass('hover');
    else if (curSection.indexOf('works') !== -1) $('.nav-works').addClass('hover');
    else if (curSection.indexOf('skill') !== -1) $('.nav-skill').addClass('hover');
    else if (curSection.indexOf('papers') !== -1 || curSection.indexOf('awards') !== -1) $('.nav-papers').addClass('hover');
    else if (curSection.indexOf('contact') !== -1) $('.nav-contact').addClass('hover');
    else if (curSection.indexOf('fristpage') !== -1) $('.back-home').addClass('hover');
};

$(document).ready(function() {
    $('a[href="#"]').click( function(e) { e.preventDefault(); return false; } );

    // 初始化主题
    (function initTheme(){
        var saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            $('body').addClass('theme-dark');
        }
        
        $('.theme-toggle').on('click', function(){
            $('body').toggleClass('theme-dark');
            var isDark = $('body').hasClass('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    })();

    // 初始化语言
    (function initLang(){
        var saved = localStorage.getItem('lang') || 'zh';
        Global.updateLanguage(saved);
        
        $('.lang-toggle').on('click', function(){
            var nextLang = Global.lang === 'zh' ? 'en' : 'zh';
            Global.updateLanguage(nextLang);
        });
    })();

    Global.reCal();

    // 导航点击平滑滚动
    $('.nav a, a[href^="#"]').on('click', function(e){
        var href = $(this).attr('href');
        var $target = (href === '#top' || href === '#') ? $('#top') : $(href);
        
        if ($target.length) {
            var offset = (href === '#top' || href === '#') ? 0 : $target.offset().top - 71;
            $('body,html').stop().animate({scrollTop: offset}, 800, 'swing');
            e.preventDefault();
        }
    });
});

window.onresize = Global.throttle(function(){
    Global.reCal();
}, 100);

$(window).load(function() {
    Global.reCal();
    
    $("body").addClass('finish-loading');
    setTimeout(function(){
        $('.loading').fadeOut(400, function(){ $(this).remove(); });
        $('body').removeClass('loading-process');
        Global.fadeInByOrder('.nav', 100, function(){
            Global.fadeInByOrder('.section-fristpage', 200);
        });
    }, 500);
});

window.onscroll = Global.throttle(function(){
    var scrollTop = $(window).scrollTop();
    var winH = $(window).height();
    var $sections = $('.section-wrap');
    var currentIdx = 0;

    $sections.each(function(index){
        var top = $(this).offset().top;
        if (scrollTop >= top - 150) {
            currentIdx = index;
        }
    });

    Global.fire_nav(currentIdx);
    Global.shrinkHeader(scrollTop > 50);

    // 触发当前及上方所有 section 的进入动画
    $sections.each(function(index){
        if (index <= currentIdx || $(this).offset().top < scrollTop + winH * 0.8) {
            var $this = $(this);
            if (!$this.data('faded')) {
                var contentSelector = '.' + Global.section_name[index] + ' .section-content';
                Global.fadeInByOrder(contentSelector, 150);
                $this.data('faded', true);
            }
        }
    });
}, 50);



})(jQuery);

