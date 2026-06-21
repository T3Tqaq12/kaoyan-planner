/* ============================================================
   考研学习规划 — 科目页架构
   Target: 西安工业大学 | 数学二·819·英语二·政治
   四科各自独立页面，底部导航切换
   ============================================================ */

// ─── 科目定义 ─────────────────────────────────────────────
const SUBJECT_DEFS = {
  math2: {
    id: 'math2',
    name: '数学二',
    icon: '📐',
    topIcon: '📐',
    color: '#E8876B',
    meta: {
      book: '张宇《基础30讲》2027版',
      target: '目标100分+',
      sections: [
        { label: '高数分册', period: '6/17 → 8/7 · 51天', pages: '408页 · 第1–15讲', icon: '📐' },
        { label: '线代分册', period: '8/10 → 9/13 · 35天', pages: '213页 · 第0–6讲', icon: '🧮' }
      ],
      methods: [
        { title: '例题三遍法', desc: '看懂 → 合书默写 → 睡前回忆关键步骤' },
        { title: '错题折角', desc: '书上折角+红笔圈题号，周末统一重做，连续两次做对翻回去' },
        { title: 'A4公式地图', desc: '每学完一个模块默写全部核心公式' },
        { title: '周日三不', desc: '不新课、不刷视频、不对答案就放过。4h全做本周折角错题' },
        { title: '100分定位', desc: '计算不错+概念不混+常规大题思路清晰=稳过100' }
      ]
    },
    phases: [
      { name: '高数① 极限地基', period: '6/17–6/25 · 9天', section: '高数分册',
        chapters: [
          { name: '第1讲 函数极限与连续', pages: 75 },
          { name: '第2讲 数列极限', pages: 23 }
        ]},
      { name: '高数② 一元微分学', period: '6/26–7/13 · 18天', section: '高数分册',
        warning: '⚠️ 第6讲中值定理证明题——先把核心起手式记住',
        chapters: [
          { name: '第3讲 微分学概念', pages: 20 },
          { name: '第4讲 微分学计算', pages: 20 },
          { name: '第5讲 几何应用', pages: 25 },
          { name: '第6讲 中值定理', pages: 22, difficulty: 'hard' },
          { name: '第7讲 物理/经济应用', pages: 9 }
        ]},
      { name: '高数③ 一元积分学', period: '7/14–7/31 · 18天', section: '高数分册',
        warning: '📌 第9讲积分计算是整个高数最吃练习量的地方',
        chapters: [
          { name: '第8讲 积分概念与性质', pages: 35 },
          { name: '第9讲 积分计算', pages: 33, difficulty: 'core' },
          { name: '第10讲 积分几何应用', pages: 19 },
          { name: '第11讲 积分等式不等式', pages: 12 },
          { name: '第12讲 积分物理/经济应用', pages: 10 }
        ]},
      { name: '高数④ 多元+微分方程', period: '8/1–8/7 · 7天', section: '高数分册',
        chapters: [
          { name: '第13讲 多元函数微分学', pages: 34 },
          { name: '第14讲 二重积分', pages: 39 },
          { name: '第15讲 微分方程', pages: 32 }
        ]},
      { name: '线代① 入口', period: '8/10–8/24 · 15天', section: '线代分册',
        chapters: [
          { name: '第0讲 零基础入门', pages: 10 },
          { name: '第1讲 行列式', pages: 34 },
          { name: '第2讲 矩阵', pages: 37, difficulty: 'core' }
        ]},
      { name: '线代② 核心', period: '8/25–9/3 · 10天', section: '线代分册',
        warning: '⚠️ 第3讲向量组是线代"开窍"关键——多画图、多类比',
        chapters: [
          { name: '第3讲 向量组', pages: 32, difficulty: 'hard' },
          { name: '第4讲 线性方程组', pages: 25 }
        ]},
      { name: '线代③ 应用', period: '9/4–9/12 · 9天', section: '线代分册',
        chapters: [
          { name: '第5讲 特征值与特征向量', pages: 39 },
          { name: '第6讲 二次型', pages: 36 }
        ]},
      { name: '强化阶段', period: '9月中旬起',
        chapters: [
          { name: '高数强化：1000题/18讲' },
          { name: '线代强化：1000题线代部分' },
          { name: '真题套卷精练' },
          { name: '模拟卷与查漏补缺' }
        ]}
    ],
    hasCounter: false
  },

  cs819: {
    id: 'cs819',
    name: '819 数据结构与程序设计',
    icon: '💻',
    topIcon: '💻',
    color: '#7BAA8B',
    meta: {
      book: '王道《数据结构》考研复习指导',
      target: '目标120分+ · 西安工业大学自主命题',
      sections: [
        { label: '王道基础', period: '6/28 → 8/31 · 65天', pages: '共8章 · 约400页 · B站王道视频课', icon: '📘' },
        { label: '真题冲刺', period: '9/1 → 考前', pages: '2013-2026共14年真题三刷 · 题型：简答+计算+算法分析+编程', icon: '🎯' }
      ],
      methods: [
        { title: '听一节做一节', desc: '每天看B站王道视频1-2节 → 立刻做对应课后习题 → 绝不堆积到第二天' },
        { title: '大章错题二刷', desc: '每完成一个大章节，停一天专门回头重做本章所有错题，二刷仍错的红笔标记' },
        { title: '代码手写不偷懒', desc: '看懂≠会写，必须合上书完整写出代码' },
        { title: '真题按题型三刷', desc: '一刷限时模拟→二刷按简答/计算/算法分析/编程四类逐个击破→三刷闭卷全文背诵' },
        { title: '9月起每日背代码', desc: '每天手写1-2段核心代码（链表/树遍历/排序/最短路径/查找），考场上一字不差写出' }
      ]
    },
    phases: [
      // ===== Ch1: 绪论 =====
      { name: '第1章 绪论', period: '6/28–6/29 · 2天', section: '王道基础',
        chapters: [
          { name: '6/28 视频P1-2：数据结构基本概念 → 逻辑结构/存储结构/数据运算三要素 → 课后习题1.1' },
          { name: '6/29 视频P3-4：算法与算法评价 → 时间复杂度/空间复杂度计算 → 课后习题1.2' }
        ]},
      // ===== Ch2: 线性表 =====
      { name: '第2章 线性表', period: '6/30–7/8 · 9天', section: '王道基础',
        warning: '📌 819每年必考线性表代码题——顺序表和单链表的基本操作必须能手写到一字不差',
        chapters: [
          { name: '6/30 视频P5-6：线性表定义+顺序表插入/删除/查找 → 课后习题2.1' },
          { name: '7/1 视频P7-8：顺序表代码实现（初始化/插入/删除/按值查找）→ 课后习题2.2', difficulty: 'core' },
          { name: '7/2 视频P9-10：单链表定义+头插法/尾插法建表 → 课后习题2.3（上）' },
          { name: '7/3 视频P11-12：单链表按位查找/按值查找/删除节点 → 课后习题2.3（下）', difficulty: 'core' },
          { name: '7/4 视频P13-14：单链表逆置/合并有序链表 → 课后代码题专项' },
          { name: '7/5 视频P15-16：双链表+循环链表+静态链表 → 课后习题2.4' },
          { name: '7/6 📝 习题消化日：重做第2章全部课后大题，不看书独立完成' },
          { name: '7/7 🔄 错题二刷：合上书重做本周所有错题，仍错的红笔标记', difficulty: 'review' },
          { name: '7/8 ✍️ 核心代码默写：顺序表+单链表全部基本操作手写一遍' }
        ]},
      // ===== Ch3: 栈、队列和数组 =====
      { name: '第3章 栈、队列和数组', period: '7/9–7/16 · 8天', section: '王道基础',
        warning: '📌 栈和队列的应用（括号匹配/表达式求值/层次遍历）是代码题高频来源——不仅要会写，还要理解"什么时候用栈、什么时候用队列"',
        chapters: [
          { name: '7/9 视频P17-18：栈的定义+顺序栈/链式栈的实现 → 课后习题3.1' },
          { name: '7/10 视频P19-20：队列的定义+循环队列/链队/双端队列 → 课后习题3.2' },
          { name: '7/11 视频P21-22：栈的应用（括号匹配/表达式求值/递归栈模拟）→ 课后习题3.3（上）', difficulty: 'core' },
          { name: '7/12 视频P23-24：队列应用（层次遍历/缓冲区）→ 课后习题3.3（下）' },
          { name: '7/13 视频P25-26：数组的存储结构+特殊矩阵压缩存储（对称/三角/稀疏矩阵）→ 课后习题3.4' },
          { name: '7/14 📝 第3章习题消化日：重做栈/队列/数组全部课后大题' },
          { name: '7/15 🔄 错题二刷：第3章所有错题合书重做，向自己讲清楚"为什么用栈/队列"' },
          { name: '7/16 ✍️ 代码默写：顺序栈+循环队列+链队的基本操作手写' }
        ]},
      // ===== Ch4: 串 =====
      { name: '第4章 串', period: '7/17–7/20 · 4天', section: '王道基础',
        warning: '⚠️ KMP是本章唯一难点——不用死磕优化版，把next数组的递推逻辑理解透就够了。实在绕不过去就多画图模拟',
        chapters: [
          { name: '7/17 视频P27-28：串的定义+基本操作+朴素模式匹配 → 课后习题4.1' },
          { name: '7/18 视频P29-30：KMP算法 → next数组手工计算 → nextval优化（了解即可）→ 课后习题4.2', difficulty: 'hard' },
          { name: '7/19 视频P31-32：KMP习题精讲+模式匹配综合练习 → 课后代码题', difficulty: 'hard' },
          { name: '7/20 🔄 第4章消化+错题二刷：重点攻克next数组手工推导' }
        ]},
      // ===== Ch5: 树与二叉树 =====
      { name: '第5章 树与二叉树', period: '7/21–8/4 · 15天', section: '王道基础',
        warning: '📌 819代码题第一大来源——三种遍历的递归+非递归必须滚瓜烂熟。线索二叉树每年必出一道选择题或简答题',
        chapters: [
          { name: '7/21 视频P33-35：树的基本概念+性质（度/深度/节点数关系）→ 课后习题5.1' },
          { name: '7/22 视频P36-38：二叉树的定义+顺序存储/链式存储 → 课后习题5.2' },
          { name: '7/23 视频P39-41：二叉树的遍历——先序/中序/后序的递归实现 → 课后习题5.3（上）', difficulty: 'core' },
          { name: '7/24 视频P42-44：三种遍历的非递归实现（栈模拟）+ 层次遍历 → 课后习题5.3（中）', difficulty: 'core' },
          { name: '7/25 视频P45-47：由遍历序列构造二叉树（先序+中序 / 后序+中序）→ 课后习题5.3（下）' },
          { name: '7/26 视频P48-50：线索二叉树（先序线索/中序线索/后序线索）→ 课后习题5.3（末）', difficulty: 'hard' },
          { name: '7/27 📝 5.1-5.3消化日：重做树的所有遍历相关习题，重点非递归' },
          { name: '7/28 视频P51-53：树与森林的存储+树/森林/二叉树互转 → 课后习题5.4' },
          { name: '7/29 视频P54-56：哈夫曼树+哈夫曼编码（手动构造+代码实现）→ 课后习题5.5（上）', difficulty: 'core' },
          { name: '7/30 视频P57-58：并查集（初始化/查找/合并+路径压缩）→ 课后习题5.5（下）' },
          { name: '7/31 📝 5.4-5.5消化日：哈夫曼树手工构造+并查集代码手写' },
          { name: '8/1 🔄 错题二刷（上）：第5章选择+填空错题重做' },
          { name: '8/2 🔄 错题二刷（下）：第5章代码题错题合书重写' },
          { name: '8/3 ✍️ 核心代码默写：三种遍历递归+非递归+层次遍历+线索化+哈夫曼建树' },
          { name: '8/4 🧹 第5章收尾：补充薄弱点+翻看全书树的代码片段' }
        ]},
      // ===== Ch6: 图 =====
      { name: '第6章 图', period: '8/5–8/14 · 10天', section: '王道基础',
        warning: '📌 最短路径(Dijkstra/Floyd)和最小生成树年年考——手动模拟每一步能加深理解，dist[]和path[]的更新过程要能自己画表',
        chapters: [
          { name: '8/5 视频P59-61：图的基本概念+邻接矩阵/邻接表存储 → 课后习题6.1-6.2', difficulty: 'core' },
          { name: '8/6 视频P62-64：图的BFS与DFS遍历（代码+手动模拟）→ 课后习题6.3', difficulty: 'core' },
          { name: '8/7 视频P65-67：最小生成树——Prim算法+Kruskal算法 → 课后习题6.4（上）', difficulty: 'core' },
          { name: '8/8 视频P68-70：最短路径——Dijkstra算法+Floyd算法 → 课后习题6.4（中）', difficulty: 'core' },
          { name: '8/9 视频P71-73：拓扑排序（AOV网）+关键路径（AOE网）→ 课后习题6.4（下）', difficulty: 'hard' },
          { name: '8/10 📝 第6章习题消化日：图的遍历/最小生成树/最短路径大题重做' },
          { name: '8/11 🔄 错题二刷（上）：选择填空错题+手动模拟题重做' },
          { name: '8/12 🔄 错题二刷（下）：代码题——BFS/DFS/拓扑排序手写' },
          { name: '8/13 ✍️ 代码默写：邻接表+DFS/BFS+Prim+Dijkstra核心代码' },
          { name: '8/14 🧹 第6章收尾：图的全章知识框架图——所有算法串一遍' }
        ]},
      // ===== Ch7: 查找 =====
      { name: '第7章 查找', period: '8/15–8/23 · 9天', section: '王道基础',
        warning: '📌 B树/B+树概念辨析、散列表冲突处理——选择题陷阱高发区。每种数据结构的"增删改查"复杂度要能脱口而出',
        chapters: [
          { name: '8/15 视频P74-76：顺序查找+折半查找+分块查找 → 课后习题7.1-7.2' },
          { name: '8/16 视频P77-79：二叉排序树(BST)的插入/删除/查找 → 课后习题7.3（上）', difficulty: 'core' },
          { name: '8/17 视频P80-82：平衡二叉树(AVL)的4种旋转 → 课后习题7.3（中）', difficulty: 'core' },
          { name: '8/18 视频P83-84：红黑树的性质与判定（概念为主，代码不要求）→ 课后习题7.3（下）', difficulty: 'hard' },
          { name: '8/19 视频P85-87：B树与B+树（插入/删除/分裂/合并）→ 课后习题7.4', difficulty: 'core' },
          { name: '8/20 视频P88-90：散列表——构造方法+冲突处理（开放定址/拉链）→ 课后习题7.5', difficulty: 'core' },
          { name: '8/21 📝 7.1-7.3消化：BST+AVL+红黑树题目重做' },
          { name: '8/22 📝 7.4-7.5消化：B树/散列表题目重做+全章错题二刷' },
          { name: '8/23 ✍️ 代码默写：折半查找+BST插入删除+散列表拉链法代码' }
        ]},
      // ===== Ch8: 排序 =====
      { name: '第8章 排序', period: '8/24–8/30 · 7天', section: '王道基础',
        warning: '📌 快排/堆排/归并必须能手写代码。8大排序的时空复杂度+稳定性对比表格要做到闭眼能画出来',
        chapters: [
          { name: '8/24 视频P91-93：插入排序（直接插入/折半插入/希尔排序）→ 课后习题8.1-8.2' },
          { name: '8/25 视频P94-96：交换排序——冒泡排序+快速排序（代码+Partition过程）→ 课后习题8.3', difficulty: 'core' },
          { name: '8/26 视频P97-99：选择排序——简单选择+堆排序（建堆/插入/删除）→ 课后习题8.4', difficulty: 'core' },
          { name: '8/27 视频P100-102：归并排序+基数排序+计数排序 → 课后习题8.5', difficulty: 'core' },
          { name: '8/28 视频P103-104：8大排序横向对比（时间/空间/稳定性）+外部排序（败者树/置换选择）→ 课后习题8.6-8.7' },
          { name: '8/29 🔄 第8章错题二刷+核心代码默写（快排/堆排/归并手写）' },
          { name: '8/30 ✍️ 8大排序算法全部手写一遍+横向对比表默写' }
        ]},
      // ===== 全局回顾 =====
      { name: '全局回顾与缓冲', period: '8/31 · 1天', section: '王道基础',
        chapters: [
          { name: '8/31 🎯 第1-8章全局错题大回顾+所有核心代码最后一遍默写+准备进入真题阶段' }
        ]},
      // ===== 真题冲刺 =====
      { name: '真题一刷：限时模拟', period: '9/1–9/28 · 28天', section: '真题冲刺',
        warning: '🎯 2013-2026共14年真题，每套2天（D1限时3h模拟→D2批改+分析错因+重做错题）。每天另外抽30分钟背诵1段核心代码',
        chapters: [
          { name: '9/1-2 · 2013年：限时模拟→批改+错因分析' },
          { name: '9/3-4 · 2014年：限时模拟→批改+错因分析' },
          { name: '9/5-6 · 2015年：限时模拟→批改+错因分析' },
          { name: '9/7-8 · 2016年：限时模拟→批改+错因分析' },
          { name: '9/9-10 · 2017年：限时模拟→批改+错因分析' },
          { name: '9/11-12 · 2018年：限时模拟→批改+错因分析' },
          { name: '9/13-14 · 2019年：限时模拟→批改+错因分析' },
          { name: '9/15-16 · 2020年：限时模拟→批改+错因分析' },
          { name: '9/17-18 · 2021年：限时模拟→批改+错因分析' },
          { name: '9/19-20 · 2022年：限时模拟→批改+错因分析' },
          { name: '9/21-22 · 2023年：限时模拟→批改+错因分析' },
          { name: '9/23-24 · 2024年：限时模拟→批改+错因分析' },
          { name: '9/25-26 · 2025年：限时模拟→批改+错因分析' },
          { name: '9/27-28 · 2026年：限时模拟→批改+错因分析' },
          { name: '9/29-30 · 一刷总结：统计各题型得分分布+标记薄弱章节', difficulty: 'core' }
        ]},
      { name: '真题二刷：按题型分类精析', period: '10/1–10/31 · 31天', section: '真题冲刺',
        warning: '📌 819真实题型：简答题(≈20分)+计算题(≈10分)+算法分析题(≈60-80分)+编程题(≈50分)。二刷按这四类分开做，每类做完14年所有相同题型再归纳答题模板',
        chapters: [
          { name: '10/1-5 · 简答题专题：14年简答题逐道重做→总结高频考点（数据结构定义/存储结构对比/算法特性/散列表概念等）' },
          { name: '10/6-9 · 计算题专题：14年计算题逐道重做→归纳计算套路（哈夫曼WPL/排序过程/最小生成树/关键路径步骤）' },
          { name: '10/10-17 · 算法分析题专题(上)：图的算法分析——Dijkstra/Floyd/Prim/Kruskal/拓扑排序/关键路径', difficulty: 'core' },
          { name: '10/18-24 · 算法分析题专题(下)：二叉树遍历+哈夫曼+散列表查找+排序过程分析→归纳答题话术模板', difficulty: 'core' },
          { name: '10/25-31 · 编程题专题：14年编程题逐道手写→归纳代码模板（链表操作/树递归/图遍历/排序算法/查找算法）', difficulty: 'core' }
        ]},
      { name: '真题三刷：闭卷背诵', period: '11/1–11/20 · 20天', section: '真题冲刺',
        warning: '🎯 目标：14年每一道简答/计算/算法分析/编程题都能闭卷完整写出。算法分析题的答题话术形成肌肉记忆',
        chapters: [
          { name: '11/1-7 · 2013-2017年真题闭卷全写（5套）：重点简答题表述+算法分析逻辑链' },
          { name: '11/8-14 · 2018-2022年真题闭卷全写（5套）：重点编程题代码完整度+计算题步骤' },
          { name: '11/15-20 · 2023-2026年真题+三刷总结（4套）：查漏补缺→顽固错题最终攻克' },
          { name: '📋 每日必做：2段核心代码默写（线性表操作/树遍历/图算法/排序算法/查找各轮换）', difficulty: 'core' }
        ]},
      { name: '考前冲刺', period: '11/21–考前',
        chapters: [
          { name: '11/21-30 · 模拟卷训练（王道模拟卷+408真题数据结构部分）+查漏补缺' },
          { name: '12月 · 编程题每日2道保持手感+算法分析题答题模板最终版背诵' },
          { name: '📋 每日必做：核心代码持续默写直到考前，确保考场上能一字不差写出' }
        ]}
    ],
    hasCounter: false
  },

  english2: {
    id: 'english2',
    name: '英语二',
    icon: '📖',
    topIcon: '📖',
    color: '#7B8FC7',
    meta: {
      book: '考研英语二 · 历年真题',
      target: '目标75分+',
      sections: [
        { label: '词汇 + 阅读', period: '6/20 → 8/31 · 73天', pages: '每日背词不间断 · 2014-2024阅读44篇精翻', icon: 'Ⅰ' },
        { label: '小三门 + 冲刺', period: '9/1 → 考前', pages: '新题型·翻译·完型 · 作文模板 · 2025-2026模考', icon: 'Ⅱ' }
      ],
      methods: [
        { title: '每日背词不间断', desc: '从现在开始每天背单词直到考前——用扇贝滚动复习，雷打不动' },
        { title: '阅读逐句精翻', desc: '每篇阅读逐句翻译→标注所有生词→拆解长难句→搞懂每道题的出题逻辑和干扰项设计' },
        { title: '生词本积累', desc: '真题中遇到的每一个生词都记下来，按年份/篇章归档——这些是你专属的高频词库' },
        { title: '小三门轮换', desc: '9月起新题型+完型 / 翻译隔天轮换，保持手感同时不疲劳' },
        { title: '作文整理自用模板', desc: '不背现成范文——从真题阅读中积累句型，整理属于自己的大小作文模板' }
      ]
    },
    phases: [
      // ===== 词汇 + 方法论 =====
      { name: '词汇地基 + 阅读方法论', period: '6/20–6/30 · 11天', section: '词汇 + 阅读',
        chapters: [
          { name: '6/20-30 每日背词（扇贝）+ 复习前日旧词 → 贯穿全程，每天不间断' },
          { name: '6/20-24 颉彬彬阅读方法' },
          { name: '6/25-30 方法论配套练习：用2013年真题阅读练手，只练方法不追求正确率' }
        ]},
      // ===== 2014-2024 阅读一刷 =====
      { name: '2014-2017 阅读一刷', period: '7/1–7/16 · 16天', section: '词汇 + 阅读',
        warning: '📌 每天1篇，不贪多。重点：逐句翻译 + 标注每个生词 + 分析每个长难句结构。做对做错不重要——搞懂为什么对、为什么错才重要',
        chapters: [
          { name: '7/1-4 · 2014年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/5-8 · 2015年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/9-12 · 2016年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/13-16 · 2017年 Text 1-4：每天1篇精读+逐句翻译+生词标注' }
        ]},
      { name: '2018-2021 阅读一刷', period: '7/17–8/1 · 16天', section: '词汇 + 阅读',
        chapters: [
          { name: '7/17-20 · 2018年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/21-24 · 2019年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/25-28 · 2020年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '7/29-8/1 · 2021年 Text 1-4：每天1篇精读+逐句翻译+生词标注' }
        ]},
      { name: '2022-2024 阅读一刷', period: '8/2–8/13 · 12天', section: '词汇 + 阅读',
        chapters: [
          { name: '8/2-5 · 2022年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '8/6-9 · 2023年 Text 1-4：每天1篇精读+逐句翻译+生词标注' },
          { name: '8/10-13 · 2024年 Text 1-4：每天1篇精读+逐句翻译+生词标注' }
        ]},
      // ===== 复盘精翻 =====
      { name: '复盘精翻：2014-2019', period: '8/14–8/23 · 10天', section: '词汇 + 阅读',
        warning: '📌 一刷是"读懂"，复盘是"读透"——把44篇阅读的生词全部归档，长难句全部拆解完毕，错题逐道分析干扰项',
        chapters: [
          { name: '8/14-15 · 2014年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/16-17 · 2015年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/18-19 · 2016年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/20-21 · 2017年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/22-23 · 2018-2019年8篇快速回顾精翻：逐句口译→生词归档→错题归类' }
        ]},
      { name: '复盘精翻：2020-2024', period: '8/24–8/31 · 8天', section: '词汇 + 阅读',
        chapters: [
          { name: '8/24-25 · 2020年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/26-27 · 2021年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/28-29 · 2022年4篇回顾精翻：逐句口译→生词归档→错题归类' },
          { name: '8/30-31 · 2023-2024年8篇快速回顾精翻 + 44篇生词总复习' }
        ]},
      // ===== 小三门 =====
      { name: '小三门轮换训练', period: '9/1–9/22 · 22天', section: '小三门 + 冲刺',
        warning: '🎯 节奏：单号日 = 新题型+完型（同一年）→ 双号日 = 翻译（同一年）。2014-2024共11年，每类过一遍',
        chapters: [
          { name: '9/1 2014年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/2 2014年：翻译 → 逐句精翻+评分对照' },
          { name: '9/3 2015年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/4 2015年：翻译 → 逐句精翻+评分对照' },
          { name: '9/5 2016年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/6 2016年：翻译 → 逐句精翻+评分对照' },
          { name: '9/7 2017年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/8 2017年：翻译 → 逐句精翻+评分对照' },
          { name: '9/9 2018年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/10 2018年：翻译 → 逐句精翻+评分对照' },
          { name: '9/11 2019年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/12 2019年：翻译 → 逐句精翻+评分对照' },
          { name: '9/13 2020年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/14 2020年：翻译 → 逐句精翻+评分对照' },
          { name: '9/15 2021年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/16 2021年：翻译 → 逐句精翻+评分对照' },
          { name: '9/17 2022年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/18 2022年：翻译 → 逐句精翻+评分对照' },
          { name: '9/19 2023年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/20 2023年：翻译 → 逐句精翻+评分对照' },
          { name: '9/21 2024年：新题型+完型 → 逐题分析+生词标注' },
          { name: '9/22 2024年：翻译 → 逐句精翻+评分对照' }
        ]},
      { name: '小三门二刷 + 阅读二刷', period: '9/23–9/30 · 8天', section: '小三门 + 冲刺',
        chapters: [
          { name: '9/23-26 · 小三门错题归类二刷：新题型/翻译/完型错题重做→归纳常考套路' },
          { name: '9/27-30 · 阅读二刷起步：2014-2017阅读重新做→重点看之前标记的错题是否还会错' }
        ]},
      // ===== 强化综合 =====
      { name: '阅读二刷 + 作文起步', period: '10/1–10/31 · 31天', section: '小三门 + 冲刺',
        chapters: [
          { name: '10/1-7 · 2014-2017阅读二刷：每天2篇→重点关注二刷仍错的题→归纳自己的易错题型' },
          { name: '10/8-14 · 2018-2021阅读二刷：每天2篇→归纳干扰项常见套路→形成自己的排除法' },
          { name: '10/15-21 · 2022-2024阅读二刷+阅读错题总复习' },
          { name: '10/22-25 · 小作文模板整理：书信/通知/备忘录→从真题阅读中积累句型→整理自己的万能模板' },
          { name: '10/26-31 · 大作文模板整理：图表描述+原因分析+趋势预测→整理自己的开头/正文/结尾模板' }
        ]},
      // ===== 冲刺 =====
      { name: '综合训练', period: '11/1–11/30 · 30天', section: '小三门 + 冲刺',
        chapters: [
          { name: '11/1-7 · 小三门二刷收尾：新题型/翻译/完型薄弱点最后攻克' },
          { name: '11/8-15 · 阅读三刷：只看错题+长难句+高频生词→不再逐篇做' },
          { name: '11/16-22 · 作文模板背诵+默写：大小作文各默写5遍以上→达到闭眼能写' },
          { name: '11/23-30 · 2014-2021真题套卷模拟（不含作文）：每周2-3套→练时间控制' }
        ]},
      { name: '最终冲刺：2025+2026模考', period: '12/1–考前', section: '小三门 + 冲刺',
        warning: '🎯 2025和2026年真题是最后两套全新试卷——严格3小时全真模拟，包括作文。做完后逐题精析，每个生词都是考前最后一遍',
        chapters: [
          { name: '12/1-7 · 2025年整套模拟（含作文）→逐题精析→生词最后归档' },
          { name: '12/8-14 · 2026年整套模拟（含作文）→逐题精析→生词最后归档' },
          { name: '12/15-考前 · 作文模板最后默写+生词本最后过一遍+阅读错题最后扫尾' },
          { name: '📋 每日必做直到考前：背单词（不间断）+ 作文模板默写+ 长难句快速过' }
        ]}
    ],
    hasCounter: false
  },

  politics: {
    id: 'politics',
    name: '政治',
    icon: '📰',
    topIcon: '📰',
    color: '#C77B84',
    meta: {
      book: '徐涛《核心考案》+ 肖秀荣1000题 + 肖4肖8',
      target: '目标70+',
      sections: [
        { label: '基础强化', period: '8/1 → 10/31 · 92天', pages: '徐涛强化课(马原+史纲) · 肖1000重点题 · 背诵手册 · 徐涛模拟卷', icon: 'Ⅰ' },
        { label: '冲刺', period: '11/1 → 考前', pages: '肖8 · 肖4 · 大牙讲解 · 抄材料技巧', icon: 'Ⅱ' }
      ],
      methods: [
        { title: '听课只抓马原+史纲', desc: '徐涛强化课只听马原和史纲——马原重理解(政治经济学计算)、史纲重时间线梳理。毛中特和思修直接刷题，不听课' },
        { title: '1000题只做重点', desc: '肖1000题不全刷——每章挑重点题做(徐涛/B站勾题版)，做错的回看核心考案对应知识点，不在偏题上浪费时间' },
        { title: '模拟卷滚动推进', desc: '10月背诵手册到手→徐涛核心模拟卷集(自行对答案纠错)→肖8出版后立即切换(跟大牙讲解)→肖4出版后全力冲刺(跟大牙讲解)' },
        { title: 'B站大牙跟肖8+肖4', desc: '肖8和肖4的选择题讲解都跟大牙——逐题精讲帮你吃透每个选项的陷阱设计，比自己做一遍效率高得多。徐涛模拟卷自行对答案纠错即可' },
        { title: '12月抄材料技巧', desc: '大牙的抄材料技巧是分析题的核心武器——学会从题干材料中提取关键词+嫁接背诵语料，考场上一字不落地写出高分答案' }
      ]
    },
    phases: [
      // ===== 徐涛马原 =====
      { name: '徐涛强化课 · 马原', period: '8/1–8/20 · 20天', section: '基础强化',
        warning: '📌 马原是政治唯一需要"理解"而非"背诵"的板块——政治经济学计算题+哲学概念辨析必须听课，靠自己看书效率太低',
        chapters: [
          { name: '8/1-3 导论+唯物论：哲学基本问题→物质/意识/运动/时空→肖1000重点题对应章节' },
          { name: '8/4-7 辩证法：两大特征+三大规律(对立统一/量变质变/否定之否定)+五对范畴→肖1000重点题', difficulty: 'core' },
          { name: '8/8-10 认识论：实践与认识/真理与价值/认识路线→肖1000重点题' },
          { name: '8/11-13 唯物史观：社会存在/社会意识/生产力/生产关系/人民群众→肖1000重点题' },
          { name: '8/14-17 政治经济学：商品二因素/劳动二重性/剩余价值/资本有机构成/资本主义矛盾', difficulty: 'core' },
          { name: '8/18-20 科学社会主义+马原总复习：社会主义发展/共产主义特征→马原错题二刷', difficulty: 'review' }
        ]},
      // ===== 徐涛史纲 =====
      { name: '徐涛强化课 · 史纲', period: '8/21–9/10 · 21天', section: '基础强化',
        warning: '📌 史纲核心是"时间线"——把1840-1949-2022的重大事件/会议/文件/人物串成一条线。不要死记年份，要理解"为什么这个时间点发生了这件事"',
        chapters: [
          { name: '8/21-23 近代史开端：鸦片战争→太平天国→洋务运动→甲午战争→维新变法→肖1000重点题' },
          { name: '8/24-27 辛亥革命与民初：同盟会/三民主义/辛亥革命/北洋军阀/新文化运动/五四运动→肖1000重点题' },
          { name: '8/28-31 党的创建与大革命：马克思主义传播/中共一大至五大/国共第一次合作/北伐战争→肖1000重点题', difficulty: 'core' },
          { name: '9/1-3 土地革命时期：南昌起义/八七会议/井冈山道路/红军长征/遵义会议→肖1000重点题', difficulty: 'core' },
          { name: '9/4-6 抗日战争时期：九一八/全面抗战/国共第二次合作/论持久战/中共七大→肖1000重点题' },
          { name: '9/7-9 解放战争+建国初期：重庆谈判/三大战役/七届二中全会/新中国成立/过渡时期→肖1000重点题' },
          { name: '9/10 史纲总复习：1840-2022全时间线默写→史纲错题二刷', difficulty: 'review' }
        ]},
      // ===== 肖1000毛中特+思修 =====
      { name: '肖1000重点题 · 毛中特+思修', period: '9/11–9/30 · 20天', section: '基础强化',
        warning: '📌 毛中特和思修不听课——直接刷肖1000重点题(勾题版)，对照答案和核心考案理解考点。毛中特时政性强，现在学的内容到12月可能过时——把时间留给做题',
        chapters: [
          { name: '9/11-15 毛中特(上)：毛泽东思想+新民主主义革命→肖1000重点题逐题做+对照答案理解', difficulty: 'core' },
          { name: '9/16-20 毛中特(下)：邓小平理论/三个代表/科学发展观→肖1000重点题逐题做' },
          { name: '9/21-23 习近平新时代中国特色社会主义思想：五位一体/四个全面/新发展理念/党的建设→肖1000重点题' },
          { name: '9/24-27 思修：思想篇+道德篇+法律篇→肖1000重点题逐题做+对照答案理解' },
          { name: '9/28-30 马原+史纲+毛中特+思修错题汇总回顾→顽固错题红笔标记', difficulty: 'review' }
        ]},
      // ===== 背诵手册 + 徐涛模拟卷 =====
      { name: '背诵手册 + 徐涛核心模拟卷', period: '10/1–10/31 · 31天', section: '基础强化',
        warning: '🎯 10月是政治转折点——拿到背诵手册后每天翻30分钟，徐涛模拟卷选择题限时做(30min/套)→自行对答案+回看背诵手册纠错（大牙不讲徐涛卷）。这个月选择题正确率会明显提升',
        chapters: [
          { name: '10/1-5 背诵手册到手：马原原理+史纲时间线+毛中特核心提法快速过第一遍→每天翻30分钟' },
          { name: '10/6-10 徐涛模拟卷1-3套：限时做选择题→自行对答案→回看背诵手册纠错→错题笔记整理' },
          { name: '10/11-15 徐涛模拟卷4-6套：限时做选择题→自行对答案→回看背诵手册纠错→错题笔记整理' },
          { name: '10/16-20 背诵手册第二遍：重点记忆帽子题+会议/文件/时间节点→每天翻30分钟' },
          { name: '10/21-25 徐涛模拟卷7-8套 + 前6套错题二刷：限时做选择题→自行对答案→背诵手册查漏补缺' },
          { name: '10/26-31 等待肖8出版→背诵手册第三遍+徐涛卷所有错题最终回顾→整理选择题易错陷阱清单', difficulty: 'review' }
        ]},
      // ===== 肖8 =====
      { name: '肖8核心阶段', period: '11/1–11/30 · 30天', section: '冲刺',
        warning: '🎯 肖8是政治选择题的分水岭——每套限时40min→对答案→B站大牙逐题精讲→把所有选项为什么对/为什么错搞明白。肖8分析题不用背全文，看懂答题框架即可',
        chapters: [
          { name: '11/1-7 肖8第1-2套：限时做选择题→对答案→B站大牙精讲→错题逐条笔记', difficulty: 'core' },
          { name: '11/8-14 肖8第3-4套：限时做选择题→对答案→大牙精讲→分析题看答题框架', difficulty: 'core' },
          { name: '11/15-21 肖8第5-6套：限时做选择题→对答案→大牙精讲→背诵手册查漏补缺', difficulty: 'core' },
          { name: '11/22-25 肖8第7-8套：限时做选择题→对答案→大牙精讲→8套错题汇总分类' },
          { name: '11/26-30 肖8选择题错题二刷(全部8套)+背诵手册第四遍→等待肖4出版', difficulty: 'review' }
        ]},
      // ===== 肖4 =====
      { name: '肖4最终冲刺', period: '12/1–12/15 · 15天', section: '冲刺',
        warning: '🎯 肖4到手后——政治进入最关键的15天。选择题每一道吃透，分析题全文背诵。B站大牙的抄材料技巧必须学会——这是分析题拿到高分的核心武器',
        chapters: [
          { name: '12/1-4 肖4第1套：限时做选择题→大牙精讲→分析题全文背诵→开始学大牙抄材料技巧', difficulty: 'core' },
          { name: '12/5-8 肖4第2套：限时做选择题→大牙精讲→分析题全文背诵→抄材料技巧练习', difficulty: 'core' },
          { name: '12/9-12 肖4第3套：限时做选择题→大牙精讲→分析题全文背诵→抄材料技巧实战演练', difficulty: 'core' },
          { name: '12/13-15 肖4第4套：限时做选择题→大牙精讲→4套分析题全部背诵完毕', difficulty: 'core' }
        ]},
      { name: '考前最后冲刺', period: '12/16–考前 · 约7天', section: '冲刺',
        warning: '🎯 最后一周——选择题只看错题不再刷新题，分析题背诵达到"闭眼能默写"，大牙抄材料技巧形成肌肉记忆。时政热点跟随大牙最后补充',
        chapters: [
          { name: '12/16-18 肖4+肖8全部选择题错题最终三刷→顽固错题最后攻克' },
          { name: '12/19-21 肖4分析题最终背诵冲刺→闭眼全文默写→大牙抄材料技巧模拟练习' },
          { name: '12/22-考前 时政热点大牙最后补充→选择题技巧巩固→分析题模板+抄材料技巧最后复习', difficulty: 'core' },
          { name: '📋 每日必做直到考前：背诵手册翻30分钟+分析题背诵+抄材料技巧练习' }
        ]}
    ],
    hasCounter: false
  }
};

// ─── Storage Manager ───────────────────────────────────────
const STORAGE_KEY = 'kaoyan_study_planner';

class StorageManager {
  static getDefaultData() {
    return {
      version: 3,
      dailyLogs: {},
      streak: { current: 0, longest: 0, lastDate: null },
      completedChapters: {}
    };
  }

  static load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return StorageManager.getDefaultData();
      const data = JSON.parse(raw);
      const defaults = StorageManager.getDefaultData();
      for (const key of Object.keys(defaults)) {
        if (!(key in data)) data[key] = defaults[key];
      }
      return data;
    } catch {
      return StorageManager.getDefaultData();
    }
  }

  static save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      alert('存储空间不足，请导出数据后清理浏览器缓存。');
    }
  }

  static exportData() {
    const data = StorageManager.load();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `考研学习数据_${App.todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  static importData(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      if (!data.dailyLogs) throw new Error('数据格式不正确');
      StorageManager.save(data);
      return true;
    } catch {
      return false;
    }
  }
}

// ─── Push Service ──────────────────────────────────────────
class PushService {
  static CONFIG_KEY = 'kaoyan_push_config';

  static getConfig() {
    try {
      return JSON.parse(localStorage.getItem(PushService.CONFIG_KEY)) || {
        sendKey: '',
        titleTpl: '{subject} 打卡 · {duration}h'
      };
    } catch {
      return { sendKey: '', titleTpl: '{subject} 打卡 · {duration}h' };
    }
  }

  static saveConfig(config) {
    localStorage.setItem(PushService.CONFIG_KEY, JSON.stringify(config));
  }

  static isConfigured() {
    return !!PushService.getConfig().sendKey;
  }

  static async send(entry, subName, chapterName) {
    const config = PushService.getConfig();
    if (!config.sendKey) return { ok: false, error: '未配置 SendKey' };

    const subjectMap = { math2: '数学二', cs819: '819 数据结构', english2: '英语二', politics: '政治' };
    const moodMap = { easy: '😊 轻松', normal: '😐 一般', hard: '😣 吃力' };
    const subject = subjectMap[entry.subject] || entry.subject;

    const title = config.titleTpl
      .replace('{subject}', subject)
      .replace('{duration}', entry.duration)
      .replace('{mood}', moodMap[entry.mood] || '');

    const despLines = [
      `**科目**: ${subject}`,
      `**时长**: ${entry.duration}h`,
      chapterName ? `**章节**: ${chapterName}` : '',
      `**感受**: ${moodMap[entry.mood] || ''}`,
      entry.content ? `**内容**: ${entry.content}` : '',
      `**日期**: ${App.todayStr()} 星期${App.dayOfWeek(App.todayStr())}`,
    ].filter(Boolean);

    // Add streak info
    try {
      const data = StorageManager.load();
      if (data.streak.current > 0) {
        despLines.push(`**连续**: ${data.streak.current}天 🔥`);
      }
    } catch {}

    const desp = despLines.join('\n\n');

    try {
      const resp = await fetch(`https://sctapi.ftqq.com/${config.sendKey}.send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, desp })
      });
      const data = await resp.json();
      return { ok: data.code === 0, error: data.code !== 0 ? (data.message || data.info || '未知错误') : null };
    } catch (e) {
      return { ok: false, error: '网络请求失败，请检查网络连接' };
    }
  }
}

// ─── App ───────────────────────────────────────────────────
class App {
  constructor() {
    this.data = StorageManager.load();
    this.currentPage = 'math2';
    this.init();
  }

  // ── Helpers ──────────────────────────────────────────────
  getChapterName(ch) { return typeof ch === 'string' ? ch : ch.name; }
  getChapterMeta(ch) { return typeof ch === 'string' ? {} : ch; }

  static todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  static formatDate(dateStr) {
    const p = dateStr.split('-');
    return `${parseInt(p[1])}月${parseInt(p[2])}日`;
  }

  static dayOfWeek(dateStr) {
    return ['日','一','二','三','四','五','六'][new Date(dateStr).getDay()];
  }

  dateToStr(date) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  }

  // ── Chapter indexing ─────────────────────────────────────
  getGlobalChapterIndex(subId, phaseName, chapterIdx) {
    const def = SUBJECT_DEFS[subId];
    let offset = 0;
    for (const phase of def.phases) {
      if (phase.name === phaseName) return offset + chapterIdx;
      offset += phase.chapters.length;
    }
    return offset + chapterIdx;
  }

  getChapterByGlobalIndex(subId, globalIdx) {
    const def = SUBJECT_DEFS[subId];
    let offset = 0;
    for (const phase of def.phases) {
      for (let i = 0; i < phase.chapters.length; i++) {
        if (offset + i === globalIdx) {
          return { phase: phase.name, chapter: this.getChapterName(phase.chapters[i]), idx: i };
        }
      }
      offset += phase.chapters.length;
    }
    return null;
  }

  getSubjectProgress(subId) {
    const def = SUBJECT_DEFS[subId];
    let total = 0, done = 0;
    const completed = this.data.completedChapters[subId] || [];
    def.phases.forEach((phase, pi) => {
      phase.chapters.forEach((_, ci) => {
        total++;
        if (completed.includes(this.getGlobalChapterIndex(subId, phase.name, ci))) done++;
      });
    });
    return { done, total, pct: total > 0 ? Math.round(done / total * 100) : 0 };
  }

  // ── Streak ───────────────────────────────────────────────
  updateStreak() {
    const today = App.todayStr();
    const logs = this.data.dailyLogs[today];
    const hasCheckedIn = logs && logs.length > 0;
    const last = this.data.streak.lastDate;

    if (hasCheckedIn && last !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const ys = this.dateToStr(yesterday);
      if (last === ys) {
        this.data.streak.current += 1;
      } else {
        this.data.streak.current = 1;
      }
      this.data.streak.lastDate = today;
      if (this.data.streak.current > this.data.streak.longest) {
        this.data.streak.longest = this.data.streak.current;
      }
      StorageManager.save(this.data);
    } else if (!hasCheckedIn && last === today) {
      // recalc
      this.data.streak.current = 0;
      this.data.streak.lastDate = null;
      StorageManager.save(this.data);
    }
  }

  getWeekHours() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    let total = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const logs = this.data.dailyLogs[this.dateToStr(d)] || [];
      total += logs.reduce((s, e) => s + (e.duration || 0), 0);
    }
    return total.toFixed(1);
  }

  getTodayHours(subId) {
    const logs = this.data.dailyLogs[App.todayStr()] || [];
    return logs.filter(e => e.subject === subId).reduce((s, e) => s + (e.duration || 0), 0);
  }

  // ── Init ─────────────────────────────────────────────────
  init() {
    this._lastRenderedDate = App.todayStr();
    this.updateStreak();
    this.renderAll();
    this.bindGlobalEvents();
    this.initRadio();
    this.renderDailyQuote();
    this.renderCountdown();
    this._startMidnightRefresh();
  }

  // ── Render All ───────────────────────────────────────────
  renderAll() {
    this.renderHeaderStrip();
    this.renderStreakBadge();
    this.renderSubjectPage('math2');
    if (this.currentPage !== 'math2') this.renderSubjectPage(this.currentPage);
    this.renderDailyQuote();
    this.renderCountdown();
  }

  renderStreakBadge() {
    const el = document.getElementById('streakBadge');
    if (el) el.textContent = `🔥 ${this.data.streak.current}天`;
  }

  renderHeaderStrip() {
    const el = document.getElementById('headerStrip');
    if (!el) return;
    const today = App.todayStr();
    const todayLogs = this.data.dailyLogs[today] || [];
    const hasCheckedIn = todayLogs.length > 0;

    el.innerHTML = `
      <div class="strip-inner">
        <div class="strip-item">
          <span class="strip-icon">📅</span>
          <span>${today} 星期${App.dayOfWeek(today)}</span>
        </div>
        <div class="strip-sep">|</div>
        <div class="strip-item">
          ${hasCheckedIn ? '已打卡' : '未打卡'}
        </div>
        <div class="strip-sep">|</div>
        <div class="strip-item">🔥 ${this.data.streak.current}天</div>
        <div class="strip-sep">|</div>
        <div class="strip-item">⏱️ 本周${this.getWeekHours()}h</div>
      </div>
    `;
  }

  // ── Subject Page Renderers ───────────────────────────────
  renderSubjectPage(subId) {
    const sub = SUBJECT_DEFS[subId];
    this.renderProgress(subId, sub);
    this.renderPlan(subId, sub);
    this.renderCheckin(subId, sub);
    this.renderTodayLog(subId, sub);
  }

  // ── Progress ─────────────────────────────────────────────
  renderProgress(subId, sub) {
    const el = document.getElementById(`${subId}-progress`);
    if (!el) return;

    const progress = this.getSubjectProgress(subId);
    const todayH = this.getTodayHours(subId);

    el.innerHTML = `
      <h2 class="card-title">${sub.icon} 学习进度</h2>
      <div class="progress-item">
        <div class="progress-header">
          <span class="progress-name">总进度</span>
          <span class="progress-pct">${progress.pct}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${subId}" style="width:${progress.pct}%"></div>
        </div>
        <div class="progress-detail">已完成 ${progress.done}/${progress.total} 个章节${todayH > 0 ? ` · 今日已学 ${todayH}h` : ''}</div>
      </div>
    `;
  }

  // ── Plan ─────────────────────────────────────────────────
  renderPlan(subId, sub) {
    const el = document.getElementById(`${subId}-plan`);
    if (!el) return;

    const completed = this.data.completedChapters[subId] || [];
    const isMath2 = subId === 'math2';
    let html = '';

    // Math2: special rendering with sections
    if (isMath2 && sub.meta.sections) {
      let currentSection = null;
      let globalOffset = 0;

      sub.phases.forEach(phase => {
        if (phase.section && phase.section !== currentSection) {
          currentSection = phase.section;
          const sec = sub.meta.sections.find(s => s.label === currentSection);
          if (sec) {
            html += `
              <div class="plan-section-divider">
                <span class="section-icon">${sec.icon}</span>
                <div class="section-info">
                  <span class="section-label">${sec.label}</span>
                  <span class="section-meta">${sec.pages} · ${sec.period}</span>
                </div>
              </div>
            `;
          }
        }

        const phaseDone = phase.chapters.filter((_, i) => completed.includes(globalOffset + i)).length;
        const phaseTotal = phase.chapters.length;
        const phasePct = phaseTotal > 0 ? Math.round(phaseDone / phaseTotal * 100) : 0;
        const allDone = phaseDone === phaseTotal;
        const allPending = phaseDone === 0;
        const statusIcon = allDone ? '✓' : (!allPending ? '●' : '◦');
        const phaseClass = allDone ? 'phase-done' : (!allPending ? 'phase-active' : '');

        html += `<div class="card subject-phase-card ${phaseClass}">`;
        html += `<div class="phase-header">
          <span class="phase-name">${statusIcon} ${phase.name}</span>
          <span class="phase-period">${phase.period || ''}</span>
        </div>`;

        html += `<div class="phase-progress-mini">
          <div class="progress-track"><div class="progress-fill math2" style="width:${phasePct}%"></div></div>
          <span class="phase-pct">${phaseDone}/${phaseTotal}</span>
        </div>`;

        if (phase.warning && !allDone) {
          html += `<div class="phase-warning">${phase.warning}</div>`;
        }

        html += `<div class="chapter-list-compact">`;
        phase.chapters.forEach((ch, i) => {
          const gIdx = globalOffset + i;
          const isDone = completed.includes(gIdx);
          const chName = this.getChapterName(ch);
          const chMeta = this.getChapterMeta(ch);

          let badges = '';
          if (chMeta.difficulty === 'hard') badges += '<span class="ch-badge ch-hard">难</span>';
          if (chMeta.difficulty === 'core') badges += '<span class="ch-badge ch-core">核心</span>';
          if (chMeta.pages) badges += `<span class="ch-badge ch-pages">${chMeta.pages}页</span>`;

          html += `
            <div class="chap-row ${isDone ? 'chap-done' : ''}">
              <span class="chap-dot ${isDone ? 'dot-done' : (i === phaseDone ? 'dot-active' : 'dot-pend')}"></span>
              <span class="chap-name">${chName}</span>
              <span class="chap-badges">${badges}</span>
            </div>
          `;
        });
        html += `</div></div>`;
        globalOffset += phase.chapters.length;
      });

      // Methods
      html += `<div class="plan-methods"><h3>学习方法</h3>`;
      sub.meta.methods.forEach(m => {
        html += `<div class="method-card"><span class="method-title">${m.title}</span><span class="method-desc">${m.desc}</span></div>`;
      });
      html += `</div>`;

    } else {
      // Default plan rendering
      let globalOffset = 0;
      sub.phases.forEach(phase => {
        const phaseDone = phase.chapters.filter((_, i) => completed.includes(globalOffset + i)).length;
        const phaseTotal = phase.chapters.length;
        const phasePct = phaseTotal > 0 ? Math.round(phaseDone / phaseTotal * 100) : 0;

        html += `<div class="card subject-phase-card">`;
        html += `<div class="phase-header">
          <span class="phase-name">📌 ${phase.name}</span>
          <span class="phase-pct">${phaseDone}/${phaseTotal} · ${phasePct}%</span>
        </div>`;
        html += `<div class="phase-progress-mini">
          <div class="progress-track"><div class="progress-fill ${subId}" style="width:${phasePct}%"></div></div>
          <span class="phase-pct">${phasePct}%</span>
        </div>`;
        html += `<div class="chapter-list-compact">`;
        phase.chapters.forEach((ch, i) => {
          const gIdx = globalOffset + i;
          const isDone = completed.includes(gIdx);
          html += `
            <div class="chap-row ${isDone ? 'chap-done' : ''}">
              <span class="chap-dot ${isDone ? 'dot-done' : (i === phaseDone ? 'dot-active' : 'dot-pend')}"></span>
              <span class="chap-name">${this.getChapterName(ch)}</span>
            </div>
          `;
        });
        html += `</div></div>`;
        globalOffset += phase.chapters.length;
      });

      // Methods
      if (sub.meta.methods) {
        html += `<div class="plan-methods"><h3>学习方法</h3>`;
        sub.meta.methods.forEach(m => {
          html += `<div class="method-card"><span class="method-title">${m.title}</span><span class="method-desc">${m.desc}</span></div>`;
        });
        html += `</div>`;
      }
    }

    el.innerHTML = html;
  }

  // ── Check-in (single subject) ────────────────────────────
  renderCheckin(subId, sub) {
    const el = document.getElementById(`${subId}-checkin`);
    if (!el) return;

    const today = App.todayStr();
    const todayEntries = (this.data.dailyLogs[today] || []).filter(e => e.subject === subId);
    const completed = this.data.completedChapters[subId] || [];

    // Build chapter options
    const chapterOptions = [];
    let globalOffset = 0;
    sub.phases.forEach(phase => {
      phase.chapters.forEach((ch, ci) => {
        const gIdx = globalOffset + ci;
        const isDone = completed.includes(gIdx);
        chapterOptions.push({
          idx: gIdx,
          name: this.getChapterName(ch),
          phase: phase.name,
          done: isDone
        });
      });
      globalOffset += phase.chapters.length;
    });

    const incompleteOpts = chapterOptions.filter(c => !c.done);
    const doneOpts = chapterOptions.filter(c => c.done);

    el.innerHTML = `
      <h2 class="card-title">今日${sub.name}打卡</h2>
      <div class="checkin-date">📅 ${today} 星期${App.dayOfWeek(today)}</div>
      <div class="form-group">
        <label>⏱️ 学习时长</label>
        <div class="duration-input">
          <button onclick="App.instance.changeDuration('${subId}', -0.5)">−</button>
          <input type="number" id="dur-${subId}" value="2" min="0" max="16" step="0.5"
                 onchange="App.instance.validateDuration(this)">
          <button onclick="App.instance.changeDuration('${subId}', 0.5)">+</button>
        </div>
      </div>
      <div class="form-group">
        <label>学习内容</label>
        <textarea id="content-${subId}" placeholder="今天学了什么？例：完成第1讲习题，整理错题..."></textarea>
      </div>
      <div class="form-group">
        <label>对应章节</label>
        <select id="chapter-${subId}">
          <option value="">— 选择章节（可选）—</option>
          ${incompleteOpts.map(c => `<option value="${c.idx}">${c.phase} › ${c.name}</option>`).join('')}
          ${doneOpts.map(c => `<option value="${c.idx}">✅ ${c.phase} › ${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label>😊 学习感受</label>
        <div class="mood-selector" id="mood-${subId}">
          <button class="mood-btn selected" data-mood="easy">😊 轻松</button>
          <button class="mood-btn" data-mood="normal">😐 一般</button>
          <button class="mood-btn" data-mood="hard">😣 吃力</button>
        </div>
      </div>
      <button class="btn btn-primary btn-lg btn-glow" onclick="App.instance.handleCheckin('${subId}')">
        ✨ ${sub.name}打卡
      </button>
    `;

    // Bind mood buttons
    setTimeout(() => {
      const moodEl = document.getElementById(`mood-${subId}`);
      if (moodEl) {
        moodEl.querySelectorAll('.mood-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            moodEl.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
          });
        });
      }
    }, 0);
  }

  changeDuration(subId, delta) {
    const input = document.getElementById(`dur-${subId}`);
    if (!input) return;
    let val = parseFloat(input.value) || 0;
    val = Math.max(0, Math.min(16, val + delta));
    input.value = Math.round(val * 10) / 10;
  }

  validateDuration(input) {
    let val = parseFloat(input.value);
    if (isNaN(val) || val < 0) input.value = 0;
    if (val > 16) input.value = 16;
  }

  getSelectedMood(subId) {
    const moodEl = document.getElementById(`mood-${subId}`);
    if (!moodEl) return 'easy';
    const btn = moodEl.querySelector('.mood-btn.selected');
    return btn ? btn.dataset.mood : 'easy';
  }

  handleCheckin(subId) {
    const today = App.todayStr();
    const duration = parseFloat(document.getElementById(`dur-${subId}`)?.value) || 0;
    const content = document.getElementById(`content-${subId}`)?.value?.trim() || '';
    const chapterIdx = document.getElementById(`chapter-${subId}`)?.value;

    if (duration <= 0 && !content) {
      this.showToast('请填写学习时长或内容');
      return;
    }

    // Build entry
    const entry = {
      subject: subId,
      duration,
      content,
      chapterIdx: chapterIdx !== '' ? parseInt(chapterIdx) : null,
      mood: this.getSelectedMood(subId),
      time: new Date().toISOString()
    };

    // Save (replace existing entries for this subject today)
    if (!this.data.dailyLogs[today]) this.data.dailyLogs[today] = [];
    this.data.dailyLogs[today] = this.data.dailyLogs[today].filter(e => e.subject !== subId);
    this.data.dailyLogs[today].push(entry);

    // Auto-complete chapter
    if (chapterIdx !== '' && chapterIdx !== null) {
      const idx = parseInt(chapterIdx);
      if (!this.data.completedChapters[subId]) this.data.completedChapters[subId] = [];
      if (!this.data.completedChapters[subId].includes(idx)) {
        this.data.completedChapters[subId].push(idx);
      }
    }

    this.data.streak.lastDate = today;
    this.updateStreak();
    StorageManager.save(this.data);

    // Push to WeChat (non-blocking, failure is silent)
    const sub = SUBJECT_DEFS[subId];
    let chapterName = '';
    if (entry.chapterIdx != null) {
      const info = this.getChapterByGlobalIndex(subId, entry.chapterIdx);
      if (info) chapterName = `${info.phase} › ${info.chapter}`;
    }
    PushService.send(entry, sub.name, chapterName).catch(e => console.log('推送异常:', e));

    // Re-render everything on this page
    this.renderAll();
    this.showBreathing().then(() => {
      this.showCelebration();
    });
  }

  // ── Today Log ────────────────────────────────────────────
  renderTodayLog(subId, sub) {
    const el = document.getElementById(`${subId}-today-log`);
    if (!el) return;

    const today = App.todayStr();
    const entries = (this.data.dailyLogs[today] || []).filter(e => e.subject === subId);

    if (entries.length === 0) {
      el.innerHTML = `
        <h2 class="card-title">今日记录</h2>
        <p class="empty-state">🌸 今天还没有${sub.name}的记录~</p>
      `;
      return;
    }

    const moodMap = { easy: '😊', normal: '😐', hard: '😣' };
    el.innerHTML = `
      <h2 class="card-title">今日${sub.name}记录</h2>
      ${entries.map(entry => {
        let chName = '';
        if (entry.chapterIdx != null) {
          const info = this.getChapterByGlobalIndex(subId, entry.chapterIdx);
          if (info) chName = info.chapter;
        }
        return `
          <div class="log-entry">
            <span class="log-entry-icon">${sub.icon}</span>
            <div class="log-entry-info">
              <div class="log-entry-subject">${sub.name} ${moodMap[entry.mood] || ''}</div>
              <div class="log-entry-detail">${entry.content || chName || '无详细记录'}</div>
            </div>
            <span class="log-entry-duration">${entry.duration}h</span>
          </div>
        `;
      }).join('')}
    `;
  }

  // ── Page Navigation ──────────────────────────────────────
  switchPage(pageName) {
    this.currentPage = pageName;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageName}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const navTarget = document.querySelector(`.nav-btn[data-page="${pageName}"]`);
    if (navTarget) navTarget.classList.add('active');

    // Render the target page
    this.renderSubjectPage(pageName);

    document.querySelector('.main-content').scrollTop = 0;
  }

  // ── Daily Radio ─────────────────────────────────────────
  initRadio() {
    if (typeof DailyRadio === 'undefined' || !DailyRadio.PLAYLIST || DailyRadio.PLAYLIST.length === 0) {
      const radio = document.getElementById('headerRadio');
      if (radio) radio.style.display = 'none';
      return;
    }

    const song = DailyRadio.getTodaySong();
    if (song) this.renderRadioPanel(song);

    // Toggle on icon click
    document.getElementById('radioIconBtn')?.addEventListener('click', () => {
      this.toggleRadio();
    });

    // Close on backdrop click
    document.getElementById('radioBackdrop')?.addEventListener('click', () => {
      this.closeRadio();
    });

    // Preview embed toggle
    document.getElementById('radioPreviewBtn')?.addEventListener('click', () => {
      this.toggleRadioPreview();
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeRadio();
    });
  }

  renderRadioPanel(song) {
    const songEl = document.getElementById('radioSongName');
    const artistEl = document.getElementById('radioSongArtist');
    const linkEl = document.getElementById('radioOpenLink');
    const dateEl = document.getElementById('radioDate');

    if (songEl) songEl.textContent = song.name;
    if (artistEl) artistEl.textContent = song.artist;
    if (linkEl) linkEl.href = song.url;

    if (dateEl) {
      const d = new Date();
      dateEl.textContent = (d.getMonth() + 1) + '月' + d.getDate() + '日';
    }
  }

  toggleRadio() {
    const panel = document.getElementById('radioDropdown');
    const backdrop = document.getElementById('radioBackdrop');
    const isOpen = panel?.classList.contains('open');

    if (isOpen) {
      this.closeRadio();
    } else {
      // Refresh song in case date changed since page load
      const song = DailyRadio.getTodaySong();
      if (song) this.renderRadioPanel(song);
      panel?.classList.add('open');
      backdrop?.classList.add('show');
    }
  }

  closeRadio() {
    document.getElementById('radioDropdown')?.classList.remove('open');
    document.getElementById('radioBackdrop')?.classList.remove('show');
  }

  toggleRadioPreview() {
    const embedEl = document.getElementById('radioEmbed');
    const btn = document.getElementById('radioPreviewBtn');
    if (!embedEl) return;

    const isShown = embedEl.classList.contains('show');
    if (isShown) {
      embedEl.classList.remove('show');
      if (btn) btn.textContent = '▶ 试听';
    } else {
      embedEl.classList.add('show');
      if (btn) btn.textContent = '▼ 收起';
      this.ensureRadioEmbed();
    }
  }

  ensureRadioEmbed() {
    const embedEl = document.getElementById('radioEmbed');
    if (!embedEl || embedEl.querySelector('iframe')) return;

    const song = DailyRadio.getTodaySong();
    if (!song) return;
    const embedUrl = DailyRadio.getEmbedUrl(song.url);

    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay *; encrypted-media *; fullscreen *');
    iframe.setAttribute('sandbox', 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation');
    iframe.setAttribute('loading', 'lazy');
    iframe.src = embedUrl;
    embedEl.appendChild(iframe);
  }

  // ── Daily Quote ─────────────────────────────────────────
  renderDailyQuote() {
    const el = document.getElementById('dailyQuote');
    if (!el) return;
    if (typeof DailyQuote === 'undefined' || !DailyQuote.QUOTES) {
      el.style.display = 'none';
      return;
    }
    const quote = DailyQuote.getTodayQuote();
    if (quote) {
      el.style.display = '';
      el.innerHTML = '&ldquo;' + quote.text + '&rdquo;<br><span style="font-style:normal;font-size:0.65rem;color:var(--text-lighter)">——' + quote.source + '</span>';
    }
  }

  // ── Countdown ─────────────────────────────────────────────
  renderCountdown() {
    const el = document.getElementById('countdownBadge');
    if (!el) return;
    const target = new Date('2026-12-19');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = target.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days > 0) {
      el.textContent = '距考研 ' + days + ' 天';
    } else if (days === 0) {
      el.textContent = '🎉 考研日！';
    } else {
      el.textContent = '考研已结束';
    }
  }

  // ── Midnight Refresh ─────────────────────────────────────
  _startMidnightRefresh() {
    var self = this;
    this._midnightTimer = setInterval(function() {
      var today = App.todayStr();
      if (today !== self._lastRenderedDate) {
        self._lastRenderedDate = today;
        self.renderDailyQuote();
        self.renderCountdown();
        self.renderHeaderStrip();
        self.renderStreakBadge();
        // Refresh radio song too
        var song = DailyRadio ? DailyRadio.getTodaySong() : null;
        if (song) self.renderRadioPanel(song);
      }
    }, 60000); // check every minute
  }

  // ── Breathing Animation ───────────────────────────────────
  showBreathing() {
    return new Promise((resolve) => {
      const overlay = document.getElementById('breathingOverlay');
      const circle = document.getElementById('breathingCircle');
      const label = document.getElementById('breathingLabel');
      const skipBtn = document.getElementById('breathingSkip');

      if (!overlay || !circle || !label) { resolve(); return; }

      var resolved = false;
      var timers = [];

      function done() {
        if (resolved) return;
        resolved = true;
        timers.forEach(clearTimeout);
        overlay.classList.remove('active');
        circle.classList.remove('inhale', 'hold', 'exhale');
        resolve();
      }

      if (skipBtn) {
        skipBtn.onclick = function(e) {
          e.stopPropagation();
          done();
        };
      }

      // Phase 1: inhale 4s
      overlay.classList.add('active');
      circle.classList.add('inhale');
      label.textContent = '吸气…';
      timers.push(setTimeout(function() {
        // Phase 2: hold 4s
        circle.classList.remove('inhale');
        circle.classList.add('hold');
        label.textContent = '屏息…';
        timers.push(setTimeout(function() {
          // Phase 3: exhale 6s
          circle.classList.remove('hold');
          circle.classList.add('exhale');
          label.textContent = '呼气…';
          timers.push(setTimeout(function() {
            done();
          }, 6000));
        }, 4000));
      }, 4000));
    });
  }

  // ── Celebration ──────────────────────────────────────────
  showCelebration() {
    const el = document.getElementById('celebration');
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2000);
  }

  // ── Toast ────────────────────────────────────────────────
  showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = `
        position:fixed;top:20px;left:50%;transform:translateX(-50%);
        background:var(--text);color:#FFF;padding:10px 22px;border-radius:20px;
        font-size:0.85rem;z-index:1000;font-family:var(--font);font-weight:600;
        transition:opacity 0.3s ease;opacity:0;pointer-events:none;box-shadow:var(--shadow-lg);
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 2000);
  }

  // ── Global Events ────────────────────────────────────────
  bindGlobalEvents() {
    // Bottom nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => this.switchPage(btn.dataset.page));
    });

    // Export / Import
    document.getElementById('btnExport')?.addEventListener('click', () => {
      StorageManager.exportData();
      this.showToast('数据已导出 ✅');
    });
    const fileInput = document.getElementById('importFileInput');
    document.getElementById('btnImport')?.addEventListener('click', () => fileInput.click());
    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const ok = StorageManager.importData(ev.target.result);
        if (ok) {
          this.data = StorageManager.load();
          this.updateStreak();
          this.renderAll();
          this.showToast('数据导入成功 ✅');
        } else {
          this.showToast('数据格式不正确 ❌');
        }
      };
      reader.readAsText(file);
      fileInput.value = '';
    });

    // Celebration dismiss
    document.getElementById('celebration')?.addEventListener('click', function() {
      this.classList.remove('show');
    });

    // ── Settings Modal ──────────────────────────────────
    const settingsModal = document.getElementById('settingsModal');
    const statusEl = document.getElementById('pushStatus');

    function showStatus(msg, type) {
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.className = `push-status show ${type}`;
    }

    function hideStatus() {
      if (statusEl) statusEl.className = 'push-status';
    }

    function openSettings() {
      const config = PushService.getConfig();
      const sendKeyInput = document.getElementById('pushSendKey');
      const titleInput = document.getElementById('pushTitle');
      if (sendKeyInput) sendKeyInput.value = config.sendKey || '';
      if (titleInput) titleInput.value = config.titleTpl || '{subject} 打卡 · {duration}h';
      hideStatus();
      settingsModal?.classList.add('show');
    }

    function closeSettings() {
      settingsModal?.classList.remove('show');
      hideStatus();
    }

    // Open
    document.getElementById('btnSettings')?.addEventListener('click', openSettings);

    // Close
    document.getElementById('btnSettingsClose')?.addEventListener('click', closeSettings);
    settingsModal?.addEventListener('click', function(e) {
      if (e.target === settingsModal) closeSettings();
    });

    // Save
    document.getElementById('btnSaveSettings')?.addEventListener('click', () => {
      const sendKey = document.getElementById('pushSendKey')?.value?.trim() || '';
      const titleTpl = document.getElementById('pushTitle')?.value?.trim() || '{subject} 打卡 · {duration}h';
      PushService.saveConfig({ sendKey, titleTpl });
      closeSettings();
      this.showToast(sendKey ? '推送设置已保存 ✅' : '推送设置已清除');
    });

    // Test push
    document.getElementById('btnTestPush')?.addEventListener('click', async () => {
      const sendKey = document.getElementById('pushSendKey')?.value?.trim();
      if (!sendKey) {
        showStatus('请先填写 SendKey', 'error');
        return;
      }
      showStatus('正在发送测试推送...', 'loading');
      // Save key temporarily for the test
      const currentConfig = PushService.getConfig();
      PushService.saveConfig({ sendKey, titleTpl: document.getElementById('pushTitle')?.value?.trim() || currentConfig.titleTpl });

      const testEntry = {
        subject: 'math2',
        duration: 0,
        content: '这是一条测试消息，配置正确即可收到 ✅',
        mood: 'easy',
        time: new Date().toISOString()
      };
      const result = await PushService.send(testEntry, '数学二');
      if (result.ok) {
        showStatus('✅ 测试推送成功！请查看微信消息', 'success');
      } else {
        showStatus(`❌ 推送失败：${result.error || '未知错误'}`, 'error');
        // Restore key to input for correction
        document.getElementById('pushSendKey').value = sendKey;
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && settingsModal?.classList.contains('show')) {
        closeSettings();
      }
    });
  }
}

// ─── Bootstrap ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  App.instance = new App();
});
