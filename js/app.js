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
        githubToken: '',
        titleTpl: '{subject} 打卡 · {duration}h'
      };
    } catch {
      return { sendKey: '', githubToken: '', titleTpl: '{subject} 打卡 · {duration}h' };
    }
  }

  static saveConfig(config) {
    localStorage.setItem(PushService.CONFIG_KEY, JSON.stringify(config));
  }

  static isConfigured() {
    return !!PushService.getConfig().sendKey;
  }

  static async send(entry, subName, chapterName, photoCount, photoUrls) {
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
      photoCount > 0 ? `**照片**: ${photoCount} 张 📷` : '',
      `**日期**: ${App.todayStr()} 星期${App.dayOfWeek(App.todayStr())}`,
    ].filter(Boolean);

    // Add streak info
    try {
      const data = StorageManager.load();
      if (data.streak.current > 0) {
        despLines.push(`**连续**: ${data.streak.current}天 🔥`);
      }
    } catch {}

    var desp = despLines.join('\n\n');

    // Append photo images if URLs provided
    if (photoUrls && photoUrls.length > 0) {
      desp += '\n\n' + photoUrls.map(function(u) {
        return '![](' + u + ')';
      }).join('\n');
    }

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

  static async uploadToGitHub(dataUrl, filename) {
    var config = PushService.getConfig();
    if (!config.githubToken) return { ok: false, error: '未配置 GitHub Token', code: 'no_token' };
    try {
      var base64 = dataUrl.split(',')[1];
      if (!base64) return { ok: false, error: '图片数据解析失败', code: 'bad_data' };
      var resp = await fetch('https://api.github.com/repos/T3Tqaq12/kaoyan-planner/contents/photos/' + filename, {
        method: 'PUT',
        headers: {
          Authorization: 'token ' + config.githubToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: '打卡照片 ' + filename.replace('.jpg', ''),
          content: base64,
          branch: 'master'
        })
      });
      if (!resp.ok) {
        var errMsg = 'GitHub 上传失败';
        if (resp.status === 401) errMsg = 'GitHub Token 无效或已过期，请在设置中更新';
        else if (resp.status === 403) errMsg = 'GitHub API 限额或权限不足';
        else if (resp.status === 422) errMsg = 'GitHub 文件已存在或格式不支持';
        else errMsg = 'GitHub 上传失败 (HTTP ' + resp.status + ')';
        console.warn(errMsg);
        return { ok: false, error: errMsg, code: 'http_' + resp.status };
      }
      // Use jsDelivr CDN — more stable in China than raw.githubusercontent.com
      return { ok: true, url: 'https://cdn.jsdelivr.net/gh/T3Tqaq12/kaoyan-planner@master/photos/' + filename };
    } catch (e) {
      console.warn('GitHub upload error:', e);
      return { ok: false, error: '网络请求失败，请检查网络连接', code: 'network' };
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
      const dayBefore = new Date(yesterday);
      dayBefore.setDate(dayBefore.getDate() - 1);
      const dbs = this.dateToStr(dayBefore);

      if (last === ys) {
        // Consecutive day — increment
        this.data.streak.current += 1;
      } else if (last === dbs) {
        // Missed exactly one day — gentle decay: halve the streak
        this.data.streak.current = Math.max(1, Math.floor(this.data.streak.current / 2));
      } else {
        // 2+ days missed — reset
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
    this._pendingPhotos = [];
    this.updateStreak();
    this.renderAll();
    this.bindGlobalEvents();
    this.initRadio();
    this.initPomodoro();
    this.renderDailyQuote();
    this.renderCountdown();
    this._startMidnightRefresh();
    this.initPhotoStore();
  }

  // ── Render All ───────────────────────────────────────────
  renderAll() {
    this.renderHeaderStrip();
    this.renderStreakBadge();
    this._renderWelcomeIfNew();
    this.renderSubjectPage('math2');
    if (this.currentPage !== 'math2') this.renderSubjectPage(this.currentPage);
    this.renderDailyQuote();
    this.renderCountdown();
  }

  renderStreakBadge() {
    const el = document.getElementById('streakBadge');
    if (!el) return;
    if (this.data.streak.current === 0 && Object.keys(this.data.dailyLogs).length === 0) {
      el.textContent = '从今天开始 ✨';
    } else {
      el.textContent = '🔥 ' + this.data.streak.current + '天';
    }
  }

  _renderWelcomeIfNew() {
    if (Object.keys(this.data.dailyLogs).length > 0) return;
    var existing = document.getElementById('welcomeCard');
    if (existing) return;
    var main = document.querySelector('.main-content');
    if (!main) return;
    var card = document.createElement('div');
    card.id = 'welcomeCard';
    card.className = 'card';
    card.style.cssText = 'text-align:center;padding:20px 18px;margin-bottom:12px;border:1px dashed var(--border-strong);background:var(--accent-wash);';
    card.innerHTML = '<p style="font-family:var(--font-serif);font-size:var(--text-md);font-weight:550;margin-bottom:8px">你好虾米 👋</p>' +
      '<p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.6">从底部选择一个科目<br>开始今天的打卡吧</p>';
    main.insertBefore(card, main.firstChild);
  }

  renderHeaderStrip() {
    const el = document.getElementById('headerStrip');
    if (!el) return;
    const today = App.todayStr();
    const todayLogs = this.data.dailyLogs[today] || [];
    const hasCheckedIn = todayLogs.length > 0;

    // Get pomodoro count for today
    var pomoStats = (typeof PomodoroStorage !== 'undefined')
      ? PomodoroStorage.getDayStats(today)
      : { totalPomodoros: 0, totalMinutes: 0 };

    el.innerHTML = `
      <div class="strip-inner">
        <div class="strip-item">
          <span class="strip-icon">📅</span>
          <span>${today} 星期${App.dayOfWeek(today)}</span>
        </div>
        <div class="strip-sep">|</div>
        <div class="strip-item">
          ${hasCheckedIn ? '已打卡' : '待打卡'}
        </div>
        <div class="strip-sep">|</div>
        <div class="strip-item">🔥 ${this.data.streak.current}天</div>
        <div class="strip-sep">|</div>
        <div class="strip-item">🍅 ${pomoStats.totalPomodoros}</div>
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

    // Wrap in collapsible container — plan is reference, not daily action
    var planTotal = 0;
    sub.phases.forEach(function(phase) { planTotal += phase.chapters.length; });
    var planDone = 0;
    completed.forEach(function(idx) { if (idx < planTotal) planDone++; });

    el.innerHTML =
      '<button class="plan-collapse-toggle" id="planToggle-' + subId + '" onclick="App.instance.togglePlan(\'' + subId + '\')">' +
        '<span>📋 ' + sub.name + '完整计划 · ' + planDone + '/' + planTotal + '章</span>' +
        '<span class="toggle-arrow">▾</span>' +
      '</button>' +
      '<div class="plan-collapse-body" id="planBody-' + subId + '">' +
        html +
      '</div>';
  }

  togglePlan(subId) {
    var body = document.getElementById('planBody-' + subId);
    var toggle = document.getElementById('planToggle-' + subId);
    if (!body || !toggle) return;
    var isOpen = body.classList.contains('open');
    if (isOpen) {
      body.classList.remove('open');
      toggle.classList.remove('open');
    } else {
      body.classList.add('open');
      toggle.classList.add('open');
    }
  }

  // ── Avatar Card (personal dashboard) ─────────────────────
  toggleAvatarCard() {
    var card = document.getElementById('avatarCard');
    var backdrop = document.getElementById('avatarCardBackdrop');
    if (!card || !backdrop) return;
    var isOpen = card.classList.contains('show');
    if (isOpen) {
      this.closeAvatarCard();
    } else {
      this.renderAvatarCard();
      card.classList.add('show');
      backdrop.classList.add('show');
    }
  }

  closeAvatarCard() {
    var card = document.getElementById('avatarCard');
    var backdrop = document.getElementById('avatarCardBackdrop');
    if (card) card.classList.remove('show');
    if (backdrop) backdrop.classList.remove('show');
  }

  renderAvatarCard() {
    var card = document.getElementById('avatarCard');
    if (!card) return;

    var streak = this.data.streak.current || 0;
    var longest = this.data.streak.longest || 0;
    var weekH = this.getWeekHours();
    var countdown = this._getCountdownDays();

    var subs = ['math2', 'cs819', 'english2', 'politics'];
    var subIcons = { math2: '📐', cs819: '💻', english2: '📖', politics: '📰' };
    var subNames = { math2: '数学', cs819: '819', english2: '英语', politics: '政治' };
    var subRows = '';
    var self = this;
    subs.forEach(function(sid) {
      var p = self.getSubjectProgress(sid);
      subRows +=
        '<div class="avatar-card-sub-row">' +
          '<span class="avatar-card-sub-icon">' + subIcons[sid] + '</span>' +
          '<span class="avatar-card-sub-name">' + subNames[sid] + '</span>' +
          '<span class="avatar-card-sub-bar"><span class="avatar-card-sub-fill" style="width:' + p.pct + '%"></span></span>' +
          '<span class="avatar-card-sub-pct">' + p.pct + '%</span>' +
        '</div>';
    });

    var quoteHTML = '';
    if (typeof DailyQuote !== 'undefined' && DailyQuote.QUOTES) {
      var q = DailyQuote.getTodayQuote();
      if (q) quoteHTML = '<div class="avatar-card-quote">&ldquo;' + q.text + '&rdquo;</div>';
    }

    card.innerHTML =
      '<div class="avatar-card-greeting">虾米 ♥</div>' +
      '<div class="avatar-card-stats">' +
        '<div class="avatar-card-stat"><div class="avatar-card-stat-val">🔥 ' + streak + '天</div><div class="avatar-card-stat-label">连续打卡 · 最长' + longest + '天</div></div>' +
        '<div class="avatar-card-stat"><div class="avatar-card-stat-val">⏱️ ' + weekH + 'h</div><div class="avatar-card-stat-label">本周学时 · 距考研' + countdown + '天</div></div>' +
      '</div>' +
      '<div class="avatar-card-subs">' + subRows + '</div>' +
      quoteHTML +
      '<div class="avatar-card-actions">' +
        '<button class="btn btn-ghost" onclick="App.instance.openHistory();App.instance.closeAvatarCard()">📊 学习记录</button>' +
        '<button class="btn btn-ghost" onclick="App.instance.openPhotoWall();App.instance.closeAvatarCard()">📷 照片墙</button>' +
      '</div>';
  }

  _getCountdownDays() {
    var target = new Date('2026-12-19');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  // ── Reuse Yesterday ──────────────────────────────────────
  reuseYesterday(subId) {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var ys = this.dateToStr(yesterday);
    var yesterdayEntries = (this.data.dailyLogs[ys] || []).filter(function(e) { return e.subject === subId; });
    if (yesterdayEntries.length === 0) return;

    var ye = yesterdayEntries[yesterdayEntries.length - 1];

    var durInput = document.getElementById('dur-' + subId);
    if (durInput) durInput.value = ye.duration || 2;

    var contentInput = document.getElementById('content-' + subId);
    if (contentInput) contentInput.value = ye.content || '';

    var moodEl = document.getElementById('mood-' + subId);
    if (moodEl) {
      moodEl.querySelectorAll('.mood-btn').forEach(function(b) {
        b.classList.toggle('selected', b.dataset.mood === (ye.mood || 'easy'));
      });
    }

    if (ye.chapterIdx != null) {
      var chSelect = document.getElementById('chapter-' + subId);
      if (chSelect) chSelect.value = ye.chapterIdx;
    }

    this.showToast('已填入昨日数据 📋');
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

    // Find first incomplete for smart default
    const firstIncomplete = chapterOptions.find(c => !c.done);
    const defaultIdx = firstIncomplete ? firstIncomplete.idx : '';

    // Build phase groups for optgroup rendering
    const phaseGroups = [];
    let offset = 0;
    sub.phases.forEach(phase => {
      const opts = phase.chapters.map((ch, ci) => {
        const gIdx = offset + ci;
        return {
          idx: gIdx,
          name: this.getChapterName(ch),
          done: completed.includes(gIdx)
        };
      });
      phaseGroups.push({ name: phase.name, opts });
      offset += phase.chapters.length;
    });

    // Build chapter select HTML with optgroups
    var chapterSelectHTML = '<select id="chapter-' + subId + '">';
    if (defaultIdx === '') {
      chapterSelectHTML += '<option value="" selected>— 选择章节（可选）—</option>';
    } else {
      chapterSelectHTML += '<option value="">— 选择章节（可选）—</option>';
    }
    phaseGroups.forEach(function(group) {
      chapterSelectHTML += '<optgroup label="' + group.name + '">';
      group.opts.forEach(function(c) {
        var sel = c.idx === defaultIdx ? ' selected' : '';
        var mark = c.done ? ' ✅' : '';
        chapterSelectHTML += '<option value="' + c.idx + '"' + sel + '>' + c.name + mark + '</option>';
      });
      chapterSelectHTML += '</optgroup>';
    });
    chapterSelectHTML += '</select>';

    // ── Reuse yesterday button ─────────────────────────────────
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var ys = this.dateToStr(yesterday);
    var yesterdayEntry = null;
    var yesterdayLogs = this.data.dailyLogs[ys] || [];
    for (var yi = yesterdayLogs.length - 1; yi >= 0; yi--) {
      if (yesterdayLogs[yi].subject === subId) { yesterdayEntry = yesterdayLogs[yi]; break; }
    }
    var reuseHTML = '';
    if (yesterdayEntry) {
      var moodMap = { easy: '😊', normal: '😐', hard: '😣' };
      var moodEmoji = moodMap[yesterdayEntry.mood] || '😊';
      reuseHTML = '<div class="checkin-reuse">' +
        '<button class="checkin-reuse-btn" type="button" onclick="App.instance.reuseYesterday(\'' + subId + '\')">' +
        '🔄 复用昨日 ' + (yesterdayEntry.duration || 0) + 'h ' + moodEmoji +
        '</button></div>';
    } else {
      // Always show the button — disabled state when no yesterday data
      var dateStr = (yesterday.getMonth() + 1) + '月' + yesterday.getDate() + '日';
      reuseHTML = '<div class="checkin-reuse">' +
        '<button class="checkin-reuse-btn is-empty" type="button" disabled>' +
        '🔄 ' + dateStr + ' 无记录' +
        '</button></div>';
    }

    el.innerHTML = `
      <h2 class="card-title">今日${sub.name}打卡</h2>
      <div class="checkin-date">📅 ${today} 星期${App.dayOfWeek(today)}</div>
      ${reuseHTML}
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
        ${chapterSelectHTML}
      </div>
      <div class="form-group">
        <label>😊 学习感受</label>
        <div class="mood-selector" id="mood-${subId}">
          <button class="mood-btn selected" data-mood="easy">😊 轻松</button>
          <button class="mood-btn" data-mood="normal">😐 一般</button>
          <button class="mood-btn" data-mood="hard">😣 吃力</button>
        </div>
      </div>
      <div class="checkin-photos">
        <div class="checkin-photo-actions">
          <label class="checkin-photo-btn">
            📷 拍照
            <input type="file" accept="image/*" capture="environment" multiple
                   onchange="App.instance.handlePhotoCapture(this,'${subId}')" hidden>
          </label>
          <label class="checkin-photo-btn">
            🖼️ 相册
            <input type="file" accept="image/*" multiple
                   onchange="App.instance.handlePhotoCapture(this,'${subId}')" hidden>
          </label>
        </div>
        <div class="checkin-photo-preview" id="photoPreview-${subId}"></div>
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
    const self = this;
    const today = App.todayStr();
    const duration = parseFloat(document.getElementById('dur-' + subId)?.value) || 0;
    const content = document.getElementById('content-' + subId)?.value?.trim() || '';
    const chapterIdx = document.getElementById('chapter-' + subId)?.value;

    if (duration <= 0 && !content) {
      this.showToast('请填写学习时长或内容');
      return;
    }

    // Double-submit guard — disable the CTA button immediately
    var checkinBtn = document.querySelector('#page-' + subId + ' .btn-glow');
    if (checkinBtn) { checkinBtn.disabled = true; checkinBtn.textContent = '保存中…'; }

    // Snapshot current data for undo path
    var prevData = JSON.parse(JSON.stringify(self.data));

    // Store pending photos first (async)
    var pendingPhotos = this._pendingPhotos.filter(function(p) { return p.subject === subId; });
    this._pendingPhotos = this._pendingPhotos.filter(function(p) { return p.subject !== subId; });

    var photoIds = [];

    async function saveCheckin() {
      var entry = {
        subject: subId,
        duration: duration,
        content: content,
        chapterIdx: chapterIdx !== '' ? parseInt(chapterIdx) : null,
        mood: self.getSelectedMood(subId),
        time: new Date().toISOString()
      };
      if (photoIds.length > 0) entry.photoIds = photoIds;

      if (!self.data.dailyLogs[today]) self.data.dailyLogs[today] = [];
      self.data.dailyLogs[today] = self.data.dailyLogs[today].filter(function(e) { return e.subject !== subId; });
      self.data.dailyLogs[today].push(entry);

      if (chapterIdx !== '' && chapterIdx !== null) {
        var idx = parseInt(chapterIdx);
        if (!self.data.completedChapters[subId]) self.data.completedChapters[subId] = [];
        if (!self.data.completedChapters[subId].includes(idx)) {
          self.data.completedChapters[subId].push(idx);
        }
      }

      self.data.streak.lastDate = today;
      self.updateStreak();
      StorageManager.save(self.data);

      var sub = SUBJECT_DEFS[subId];
      var chapterName = '';
      if (entry.chapterIdx != null) {
        var info = self.getChapterByGlobalIndex(subId, entry.chapterIdx);
        if (info) chapterName = info.phase + ' › ' + info.chapter;
      }

      // Upload photos to GitHub for push display
      var photoUrls = [];
      if (pendingPhotos.length > 0) {
        var githubToken = PushService.getConfig().githubToken;
        if (!githubToken) {
          self.showToast('📷 照片未上传 GitHub：未配置 Token，可在设置中添加');
        } else {
          var uploadOk = 0, uploadFail = 0;
          var firstUploadError = '';
          for (var pi = 0; pi < pendingPhotos.length; pi++) {
            var p = pendingPhotos[pi];
            var ts = Date.now();
            var filename = today + '_' + subId + '_' + ts + '_' + (pi + 1) + '.jpg';
            var uploadResult = await PushService.uploadToGitHub(p.dataUrl, filename);
            if (uploadResult.ok) {
              photoUrls.push(uploadResult.url);
              uploadOk++;
            } else {
              uploadFail++;
              if (!firstUploadError) firstUploadError = uploadResult.error || '未知错误';
            }
          }
          if (uploadFail > 0) {
            self.showToast('📷 ' + uploadFail + '/' + pendingPhotos.length + ' 张照片上传 GitHub 失败：' + firstUploadError);
          }
          // Wait 2s for jsDelivr CDN to pick up the new files before pushing
          if (photoUrls.length > 0) {
            await new Promise(function(r) { setTimeout(r, 2000); });
          }
        }
      }

      // Push to WeChat via Server酱 — always attempt if configured
      var pushConfigured = PushService.isConfigured();
      if (pushConfigured) {
        PushService.send(entry, sub.name, chapterName, photoIds.length, photoUrls).then(function(result) {
          if (!result.ok) {
            self.showToast('📤 推送失败：' + (result.error || '未知错误'));
          }
        }).catch(function(e) {
          self.showToast('📤 推送异常，请检查网络或设置');
          console.log('推送异常:', e);
        });
      }

      // Re-enable button after save completes
      if (checkinBtn) { checkinBtn.disabled = false; checkinBtn.textContent = '✨ ' + sub.name + '打卡'; }

      self.renderAll();

      // Undo toast — 5-second window to roll back the last checkin
      self._showUndoToast(function performUndo() {
        self.data = prevData;
        StorageManager.save(self.data);
        // Clean up just-uploaded photos from IndexedDB
        if (photoIds.length > 0) {
          photoIds.forEach(function(id) { PhotoStore.delete(id).catch(function() {}); });
        }
        self.renderAll();
        self.showToast('已撤销打卡 ↩');
      });

      // Only trigger breathing on first checkin of the day
      var breathingKey = 'kaoyan_breathing_last_date';
      var todayStr = App.todayStr();
      if (localStorage.getItem(breathingKey) !== todayStr) {
        self.showBreathing().then(function() {
          localStorage.setItem(breathingKey, todayStr);
          self.showCelebration();
        });
      } else {
        self.showCelebration();
      }
    }

    // Store photos then save
    if (pendingPhotos.length > 0) {
      var stored = 0;
      pendingPhotos.forEach(function(p) {
        PhotoStore.add({
          date: today,
          subject: subId,
          dataUrl: p.dataUrl,
          width: p.width,
          height: p.height,
          timestamp: new Date().toISOString()
        }).then(function(id) {
          photoIds.push(id);
          stored++;
          if (stored === pendingPhotos.length) saveCheckin();
        }).catch(function() {
          stored++;
          if (stored === pendingPhotos.length) saveCheckin();
        });
      });
    } else {
      saveCheckin();
    }
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

    document.querySelectorAll('.dock-item').forEach(b => b.classList.remove('active'));
    const navTarget = document.querySelector(`.dock-item[data-page="${pageName}"]`);
    if (navTarget) navTarget.classList.add('active');

    // Render the target page
    this.renderSubjectPage(pageName);

    // Sync pomodoro subject
    if (typeof PomodoroUI !== 'undefined') {
      PomodoroUI._currentSubject = pageName;
      if (PomodoroTimer.isRunning()) {
        PomodoroUI.renderPanel();
      }
    }

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

  // ── Pomodoro Init ────────────────────────────────────────
  initPomodoro() {
    if (typeof PomodoroTimer === 'undefined') return;
    PomodoroTimer.init();
    if (typeof PomodoroUI !== 'undefined') {
      PomodoroUI.init();
      // Sync current subject
      PomodoroUI._currentSubject = this.currentPage;
      // Restore glow if timer was running before page refresh
      PomodoroUI.updateIconGlow();
    }
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
    var dateHint = App.todayStr().split('-').slice(1).join('月') + '日';
    if (quote) {
      el.style.display = '';
      el.innerHTML = '&ldquo;' + quote.text + '&rdquo;<br><span style="font-style:normal;font-size:0.6rem;color:var(--text-muted)">今日 · ' + dateHint + ' &nbsp;|&nbsp; ' + quote.source + '</span>';
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
    // Urgency tonal shifts
    el.classList.remove('urgency-warm', 'urgency-near');
    if (days <= 7 && days > 0) {
      el.classList.add('urgency-near');
    } else if (days <= 30 && days > 0) {
      el.classList.add('urgency-warm');
    }
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
        // Trigger pomodoro data upload for yesterday
        if (typeof PomodoroUploader !== 'undefined') {
          PomodoroUploader.checkAndUpload();
        }
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
        overlay.classList.remove('show');
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
      overlay.classList.add('show');
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

  // ── Photo Store ──────────────────────────────────────────
  initPhotoStore() {
    if (!PhotoStore || !PhotoStore.isAvailable()) return;
    PhotoStore.init().then(function() {
      console.log('PhotoStore ready');
    }).catch(function() {});
  }

  // ── Photo Capture ────────────────────────────────────────
  handlePhotoCapture(input, subId) {
    var self = this;
    var files = input.files;
    if (!files || files.length === 0) return;

    Array.prototype.forEach.call(files, function(file) {
      PhotoStore.compress(file).then(function(result) {
        self._pendingPhotos.push({
          dataUrl: result.dataUrl,
          width: result.width,
          height: result.height,
          subject: subId
        });
        self.renderPhotoPreviews(subId);
      }).catch(function(err) {
        self.showToast(err.message || '图片处理失败');
      });
    });

    // Reset input so same file can be re-selected
    input.value = '';
  }

  removePendingPhoto(index, subId) {
    this._pendingPhotos.splice(index, 1);
    this.renderPhotoPreviews(subId);
  }

  renderPhotoPreviews(subId) {
    var el = document.getElementById('photoPreview-' + subId);
    if (!el) return;

    if (this._pendingPhotos.length === 0) {
      el.innerHTML = '';
      return;
    }

    el.innerHTML = this._pendingPhotos.map(function(p, i) {
      return '<span class="checkin-photo-thumb-wrap">' +
        '<button class="checkin-photo-remove" onclick="App.instance.removePendingPhoto(' + i + ',\'' + subId + '\')">×</button>' +
        '<img class="checkin-photo-thumb" src="' + p.dataUrl + '" alt="">' +
      '</span>';
    }).join('');
  }

  // ── Photo Wall ───────────────────────────────────────────
  openPhotoWall() {
    var self = this;
    var overlay = document.getElementById('photowallOverlay');
    if (!overlay) return;

    overlay.classList.add('show');
    this._pwCurrentFilter = 'all';
    this.renderPhotoSpread('all');
    document.body.style.overflow = 'hidden';
  }

  closePhotoWall() {
    var overlay = document.getElementById('photowallOverlay');
    if (overlay) overlay.classList.remove('show');
    this.closeLightbox();
    document.body.style.overflow = '';
  }

  // ── History Overlay ──────────────────────────────────────
  openHistory() {
    var self = this;
    var overlay = document.getElementById('historyOverlay');
    if (!overlay) return;
    overlay.classList.add('show');
    this._histCurrentMode = 'day';
    this._renderHistoryBody('day');
    document.body.style.overflow = 'hidden';
  }

  closeHistory() {
    var overlay = document.getElementById('historyOverlay');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  _renderHistoryBody(mode) {
    var self = this;
    this._histCurrentMode = mode;
    var navEl = document.getElementById('histNav');
    var bodyEl = document.getElementById('histBody');
    var summaryEl = document.getElementById('histSummary');

    // Toggle mode buttons
    var dayBtn = document.getElementById('histModeDay');
    var monthBtn = document.getElementById('histModeMonth');
    if (dayBtn) dayBtn.classList.toggle('active', mode === 'day');
    if (monthBtn) monthBtn.classList.toggle('active', mode === 'month');

    // Gather all logged dates
    var allDates = Object.keys(this.data.dailyLogs).sort().reverse();
    if (allDates.length === 0) {
      if (navEl) navEl.innerHTML = '';
      if (bodyEl) bodyEl.innerHTML = '<div class="hist-empty">还没有学习记录，从今天开始打卡吧 🌱</div>';
      if (summaryEl) summaryEl.innerHTML = '';
      return;
    }

    if (mode === 'day') {
      var idx = this._histDayIdx || 0;
      if (idx >= allDates.length) idx = 0;
      this._histDayIdx = idx;
      var date = allDates[idx];
      var dayLogs = this.data.dailyLogs[date] || [];

      // Navigation
      var dayLabel = date + ' 星期' + App.dayOfWeek(date);
      if (navEl) {
        navEl.innerHTML =
          '<button ' + (idx >= allDates.length - 1 ? 'disabled' : '') + ' onclick="App.instance._histNavDay(-1)">◀</button>' +
          '<span class="hist-date-label">' + dayLabel + '</span>' +
          '<button ' + (idx <= 0 ? 'disabled' : '') + ' onclick="App.instance._histNavDay(1)">▶</button>';
      }

      // Body: group by subject
      var subMap = { math2: { name: '数学二', icon: '📐' }, cs819: { name: '819', icon: '💻' }, english2: { name: '英语二', icon: '📖' }, politics: { name: '政治', icon: '📰' } };
      var moodMap = { easy: '😊', normal: '😐', hard: '😣' };
      var totalH = 0;
      var html = '';
      Object.keys(subMap).forEach(function(sid) {
        var entries = dayLogs.filter(function(e) { return e.subject === sid; });
        if (entries.length === 0) return;
        var subH = entries.reduce(function(s, e) { return s + (e.duration || 0); }, 0);
        totalH += subH;
        html += '<div class="hist-subject-group">' +
          '<div class="hist-subject-head">' +
            subMap[sid].icon + ' ' + subMap[sid].name +
            '<span class="hist-subject-stat">' + entries.length + '次 · ' + subH.toFixed(1) + 'h</span>' +
          '</div>';
        entries.forEach(function(e) {
          var chName = '';
          if (e.chapterIdx != null) {
            var info = self.getChapterByGlobalIndex(sid, e.chapterIdx);
            if (info) chName = info.chapter;
          }
          html += '<div class="hist-session-row">' +
            '<span class="hist-session-icon">' + (moodMap[e.mood] || '😊') + '</span>' +
            '<span class="hist-session-label">' + (chName || e.content || '无记录') + '</span>' +
            '<span class="hist-session-dur">' + e.duration + 'h</span>' +
          '</div>';
        });
        html += '</div>';
      });
      if (bodyEl) bodyEl.innerHTML = html || '<div class="hist-empty">当天无记录</div>';
      if (summaryEl) summaryEl.innerHTML = '共 <strong>' + dayLogs.length + '</strong> 条记录 · 累计 <strong>' + totalH.toFixed(1) + 'h</strong>';

    } else {
      // Monthly view — show last 6 months
      var today = new Date();
      var months = [];
      for (var m = 0; m < 6; m++) {
        var d = new Date(today.getFullYear(), today.getMonth() - m, 1);
        months.push({ year: d.getFullYear(), month: d.getMonth() + 1 });
      }
      var monthLabels = ['日', '一', '二', '三', '四', '五', '六'];
      var navIdx = this._histMonthIdx || 0;
      if (navIdx >= months.length) navIdx = 0;
      this._histMonthIdx = navIdx;
      var mm = months[navIdx];

      if (navEl) {
        navEl.innerHTML =
          '<button ' + (navIdx >= months.length - 1 ? 'disabled' : '') + ' onclick="App.instance._histNavMonth(-1)">◀</button>' +
          '<span class="hist-date-label">' + mm.year + '年' + mm.month + '月</span>' +
          '<button ' + (navIdx <= 0 ? 'disabled' : '') + ' onclick="App.instance._histNavMonth(1)">▶</button>';
      }

      // Build calendar grid
      var firstDay = new Date(mm.year, mm.month - 1, 1).getDay();
      var daysInMonth = new Date(mm.year, mm.month, 0).getDate();
      var html = '<div class="hist-month-grid">';
      monthLabels.forEach(function(l) { html += '<div class="hist-month-dayhead">' + l + '</div>'; });
      for (var i = 0; i < firstDay; i++) html += '<div class="hist-month-cell empty"></div>';
      for (var day = 1; day <= daysInMonth; day++) {
        var dateStr = mm.year + '-' + String(mm.month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        var dayLogs = self.data.dailyLogs[dateStr] || [];
        var dayH = dayLogs.reduce(function(s, e) { return s + (e.duration || 0); }, 0);
        var hasData = dayLogs.length > 0;
        var cellClass = 'hist-month-cell' + (hasData ? '' : ' no-data');
        var bg = hasData ? 'background: var(--accent-wash); cursor: pointer;' : '';
        html += '<div class="' + cellClass + '" style="' + bg + '"' +
          (hasData ? ' onclick="App.instance._histJumpDay(\'' + dateStr + '\')"' : '') + '>' +
          '<span class="hist-month-daynum">' + day + '</span>' +
          (dayH > 0 ? '<span class="hist-month-pomo">' + dayH.toFixed(1) + 'h</span>' : '') +
        '</div>';
      }
      html += '</div>';

      // Monthly breakdown
      var monthTotals = {};
      var monthTotalH = 0, monthEntries = 0;
      for (var dm = 1; dm <= daysInMonth; dm++) {
        var ds = mm.year + '-' + String(mm.month).padStart(2, '0') + '-' + String(dm).padStart(2, '0');
        (self.data.dailyLogs[ds] || []).forEach(function(e) {
          var sub = e.subject;
          if (!monthTotals[sub]) monthTotals[sub] = { h: 0, n: 0 };
          monthTotals[sub].h += e.duration || 0;
          monthTotals[sub].n += 1;
          monthTotalH += e.duration || 0;
          monthEntries += 1;
        });
      }
      var subMap = { math2: { name: '数学二', icon: '📐' }, cs819: { name: '819', icon: '💻' }, english2: { name: '英语二', icon: '📖' }, politics: { name: '政治', icon: '📰' } };
      html += '<div class="hist-month-breakdown">';
      Object.keys(subMap).forEach(function(sid) {
        var t = monthTotals[sid];
        html += '<div class="hist-month-sub">' +
          '<span>' + subMap[sid].icon + ' ' + subMap[sid].name + '</span>' +
          '<span>' + (t ? t.n + '次 · ' + t.h.toFixed(1) + 'h' : '--') + '</span>' +
        '</div>';
      });
      html += '</div>';

      if (bodyEl) bodyEl.innerHTML = html;
      if (summaryEl) summaryEl.innerHTML = '共 <strong>' + monthEntries + '</strong> 次打卡 · 累计 <strong>' + monthTotalH.toFixed(1) + 'h</strong>';
    }
  }

  _histNavDay(dir) {
    this._histDayIdx = (this._histDayIdx || 0) - dir;
    this._renderHistoryBody('day');
  }

  _histNavMonth(dir) {
    this._histMonthIdx = (this._histMonthIdx || 0) - dir;
    this._renderHistoryBody('month');
  }

  _histJumpDay(dateStr) {
    var allDates = Object.keys(this.data.dailyLogs).sort().reverse();
    var idx = allDates.indexOf(dateStr);
    if (idx >= 0) {
      this._histDayIdx = idx;
      this._renderHistoryBody('day');
    }
  }

  renderPhotoSpread(filterSub) {
    var self = this;
    this._pwCurrentFilter = filterSub;

    var spreadEl = document.getElementById('pwSpread');
    var emptyEl = document.getElementById('pwEmpty');
    if (!spreadEl) return;

    // Update filter buttons
    var filters = document.querySelectorAll('.pw-filter');
    filters.forEach(function(f) {
      f.classList.toggle('active', f.dataset.filter === filterSub);
    });

    var promise = (filterSub === 'all')
      ? PhotoStore.getAll()
      : PhotoStore.getBySubject(filterSub);

    promise.then(function(photos) {
      if (!photos || photos.length === 0) {
        spreadEl.innerHTML = '';
        if (emptyEl) emptyEl.classList.add('show');
        return;
      }
      if (emptyEl) emptyEl.classList.remove('show');

      var subjectMap = { math2: '数学二', cs819: '819', english2: '英语二', politics: '政治' };

      // Seeded pseudo-random for consistent layout
      var seededRandom = function(seed) {
        var x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };

      var count = photos.length;
      spreadEl.innerHTML = photos.map(function(p, i) {
        // Each photo gets random rotation (-12 to +12 deg), staggered delay
        var seed = p.id || i;
        var rotation = ((seededRandom(seed * 7.3) - 0.5) * 20).toFixed(1); // -10..+10
        var delay = (i * 0.08).toFixed(2); // stagger 80ms each
        var zIdx = 10 + i;
        // Slight margin offsets for scatter feel
        var mt = ((seededRandom(seed * 3.1) - 0.5) * 16).toFixed(0);
        var ml = ((seededRandom(seed * 5.7) - 0.5) * 24).toFixed(0);
        var dateStr = p.date || '';
        var subName = subjectMap[p.subject] || p.subject;

        return '<div class="pw-polaroid" ' +
          'onclick="App.instance.openLightbox(' + p.id + ')" ' +
          'style="' +
            '--pw-rotate:' + rotation + 'deg;' +
            'animation-delay:' + delay + 's;' +
            'z-index:' + zIdx + ';' +
            'margin-top:' + mt + 'px;' +
            'margin-left:' + ml + 'px;' +
          '">' +
          '<div class="pw-polaroid-frame">' +
            '<img class="pw-polaroid-img" src="' + p.dataUrl + '" alt="" loading="lazy">' +
            '<span class="pw-polaroid-date">' + dateStr + '</span>' +
            '<span class="pw-polaroid-badge">' + subName + '</span>' +
          '</div>' +
        '</div>';
      }).join('');

      // Trigger spring animation after DOM insertion
      requestAnimationFrame(function() {
        var cards = spreadEl.querySelectorAll('.pw-polaroid');
        cards.forEach(function(card) {
          card.classList.add('ready');
        });
      });
    }).catch(function() {
      spreadEl.innerHTML = '';
      if (emptyEl) emptyEl.classList.add('show');
    });
  }

  openLightbox(photoId) {
    var self = this;
    PhotoStore.getAll().then(function(photos) {
      var photo = photos.find(function(p) { return p.id === photoId; });
      if (!photo) return;

      self._pwLightboxId = photoId;

      document.getElementById('pwLbImage').src = photo.dataUrl;
      var subjectMap = { math2: '数学二', cs819: '819', english2: '英语二', politics: '政治' };
      var info = (photo.date || '') + ' · ' + (subjectMap[photo.subject] || photo.subject);
      if (photo.caption) info += '\n' + photo.caption;
      document.getElementById('pwLbInfo').textContent = info;
      document.getElementById('pwLightbox').classList.add('show');
    }).catch(function() {});
  }

  closeLightbox() {
    var lb = document.getElementById('pwLightbox');
    if (lb) lb.classList.remove('show');
    this._pwLightboxId = null;
  }

  deletePhoto(photoId) {
    var self = this;
    if (!confirm('确定删除这张照片吗？此操作不可撤销。')) return;

    PhotoStore.delete(photoId).then(function() {
      // Clean up reference in dailyLogs
      var data = StorageManager.load();
      var cleaned = false;
      Object.keys(data.dailyLogs).forEach(function(date) {
        data.dailyLogs[date].forEach(function(entry) {
          if (entry.photoIds && entry.photoIds.indexOf(photoId) !== -1) {
            entry.photoIds = entry.photoIds.filter(function(id) { return id !== photoId; });
            cleaned = true;
          }
        });
      });
      if (cleaned) StorageManager.save(data);

      self.closeLightbox();
      self.renderPhotoSpread(self._pwCurrentFilter || 'all');
      self.showToast('照片已删除');
    }).catch(function() {
      self.showToast('删除失败');
    });
  }

  // ── Celebration ──────────────────────────────────────────
  showCelebration() {
    const el = document.getElementById('celebration');
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
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
        font-size:0.85rem;z-index:700;font-family:var(--font-sans);font-weight:600;
        transition:opacity 0.3s ease;opacity:0;pointer-events:none;box-shadow:var(--shadow-lg);
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'none';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 2000);
  }

  _showUndoToast(onUndo) {
    var self = this;
    var toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = `
        position:fixed;top:20px;left:50%;transform:translateX(-50%);
        background:var(--text);color:#FFF;padding:10px 22px;border-radius:20px;
        font-size:0.85rem;z-index:700;font-family:var(--font-sans);font-weight:600;
        transition:opacity 0.3s ease;opacity:0;pointer-events:auto;box-shadow:var(--shadow-lg);
      `;
      document.body.appendChild(toast);
    }
    toast.style.pointerEvents = 'auto';
    toast.innerHTML = '<span>已打卡 ✅</span><button id="undoBtn" style="margin-left:12px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#FFF;font-weight:600;cursor:pointer;padding:2px 10px;border-radius:10px;font-size:0.8rem;font-family:var(--font-sans)">撤销</button>';
    toast.style.opacity = '1';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(function() { toast.style.opacity = '0'; toast.style.pointerEvents = 'none'; }, 5000);
    // Bind undo — remove old handler first
    var undoBtn = document.getElementById('undoBtn');
    if (undoBtn) {
      undoBtn.onclick = function(e) {
        e.stopPropagation();
        clearTimeout(self._toastTimer);
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
        onUndo();
      };
    }
  }

  _showImportConfirm(msg, onMerge, onOverwrite) {
    var self = this;
    var toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = `
        position:fixed;top:20px;left:50%;transform:translateX(-50%);
        background:var(--text);color:#FFF;padding:12px 22px;border-radius:16px;
        font-size:0.82rem;z-index:700;font-family:var(--font-sans);font-weight:500;
        transition:opacity 0.3s ease;opacity:0;pointer-events:auto;
        box-shadow:var(--shadow-lg);text-align:center;max-width:340px;
        line-height:1.5;
      `;
      document.body.appendChild(toast);
    }
    toast.style.pointerEvents = 'auto';
    toast.style.maxWidth = '340px';
    toast.style.textAlign = 'center';
    toast.style.lineHeight = '1.5';
    toast.innerHTML = '<div style="margin-bottom:8px;white-space:pre-line">' + msg + '</div>' +
      '<button id="importMergeBtn" style="margin:4px;background:var(--accent);border:none;color:#FFF;font-weight:600;cursor:pointer;padding:6px 14px;border-radius:10px;font-size:0.78rem;font-family:var(--font-sans)">合并</button>' +
      '<button id="importOverwriteBtn" style="margin:4px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#FFF;font-weight:500;cursor:pointer;padding:6px 14px;border-radius:10px;font-size:0.78rem;font-family:var(--font-sans)">覆盖</button>' +
      '<button id="importCancelBtn" style="margin:4px;background:transparent;border:none;color:rgba(255,255,255,0.6);font-weight:400;cursor:pointer;padding:6px 10px;border-radius:10px;font-size:0.78rem;font-family:var(--font-sans)">取消</button>';
    toast.style.opacity = '1';
    // Bind buttons
    var mergeBtn = document.getElementById('importMergeBtn');
    var overwriteBtn = document.getElementById('importOverwriteBtn');
    var cancelBtn = document.getElementById('importCancelBtn');
    function dismiss() {
      toast.style.opacity = '0';
      toast.style.pointerEvents = 'none';
      toast.style.maxWidth = '';
      toast.style.textAlign = '';
      toast.style.lineHeight = '';
      toast.textContent = '';
    }
    if (mergeBtn) mergeBtn.onclick = function() { dismiss(); onMerge(); };
    if (overwriteBtn) overwriteBtn.onclick = function() { dismiss(); onOverwrite(); };
    if (cancelBtn) cancelBtn.onclick = function() { dismiss(); };
    // Auto-dismiss after 15s
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(dismiss, 15000);
  }

  // ── Global Events ────────────────────────────────────────
  bindGlobalEvents() {
    var self = this;

    // Bottom nav
    document.querySelectorAll('.dock-item').forEach(btn => {
      btn.addEventListener('click', () => this.switchPage(btn.dataset.page));
    });

    // Header strip toggle
    var stripToggle = document.getElementById('stripToggleBtn');
    if (stripToggle) {
      stripToggle.addEventListener('click', function() {
        var strip = document.getElementById('headerStrip');
        var actions = document.querySelector('.data-actions');
        var isOpen = strip && strip.style.display !== 'none';
        if (isOpen) {
          if (strip) strip.style.display = 'none';
          if (actions) actions.classList.remove('show');
          stripToggle.classList.remove('open');
        } else {
          if (strip) strip.style.display = '';
          if (actions) actions.classList.add('show');
          stripToggle.classList.add('open');
        }
      });
    }

    // Avatar card — click avatar to open personal dashboard
    var avatarWrap = document.getElementById('avatarWrap');
    if (avatarWrap) {
      avatarWrap.addEventListener('click', function(e) {
        e.stopPropagation();
        self.toggleAvatarCard();
      });
    }
    var avatarBackdrop = document.getElementById('avatarCardBackdrop');
    if (avatarBackdrop) {
      avatarBackdrop.addEventListener('click', function(e) {
        e.stopPropagation();
        self.closeAvatarCard();
      });
    }
    var avatarCard = document.getElementById('avatarCard');
    if (avatarCard) {
      avatarCard.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }

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
        var raw = ev.target.result;
        var parsed;
        try { parsed = JSON.parse(raw); } catch (err) { this.showToast('数据格式不正确 ❌'); fileInput.value = ''; return; }
        if (!parsed.dailyLogs) { this.showToast('数据格式不正确 ❌'); fileInput.value = ''; return; }

        // Count days and entries for preview
        var dayCount = Object.keys(parsed.dailyLogs).length;
        var entryCount = 0;
        Object.values(parsed.dailyLogs).forEach(function(arr) { entryCount += arr.length; });
        var currentDays = Object.keys(self.data.dailyLogs).length;

        // Auto-backup current data before any import
        try {
          localStorage.setItem('kaoyan_study_planner_backup', JSON.stringify(self.data));
        } catch(e) {}

        // Show confirmation
        self._showImportConfirm(
          '检测到 ' + dayCount + ' 天 ' + entryCount + ' 条打卡记录。\n当前已有 ' + currentDays + ' 天记录。',
          function() {
            // Merge: keep existing entries, add new ones
            var merged = JSON.parse(JSON.stringify(self.data));
            Object.keys(parsed.dailyLogs).forEach(function(date) {
              if (!merged.dailyLogs[date]) merged.dailyLogs[date] = [];
              (parsed.dailyLogs[date] || []).forEach(function(entry) {
                var exists = merged.dailyLogs[date].some(function(e) {
                  return e.subject === entry.subject && e.time === entry.time;
                });
                if (!exists) merged.dailyLogs[date].push(entry);
              });
            });
            if (parsed.completedChapters) {
              Object.keys(parsed.completedChapters).forEach(function(subId) {
                if (!merged.completedChapters[subId]) merged.completedChapters[subId] = [];
                (parsed.completedChapters[subId] || []).forEach(function(idx) {
                  if (!merged.completedChapters[subId].includes(idx)) merged.completedChapters[subId].push(idx);
                });
              });
            }
            StorageManager.save(merged);
            self.data = StorageManager.load();
            self.updateStreak();
            self.renderAll();
            self.showToast('数据已合并 ✅');
          },
          function() {
            // Overwrite
            StorageManager.save(parsed);
            self.data = StorageManager.load();
            self.updateStreak();
            self.renderAll();
            self.showToast('数据已导入 ✅');
          }
        );
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

    var githubStatusEl2 = document.getElementById('githubStatus');
    function hideAllStatus() {
      hideStatus();
      if (githubStatusEl2) githubStatusEl2.className = 'push-status';
    }

    function openSettings() {
      const config = PushService.getConfig();
      const sendKeyInput = document.getElementById('pushSendKey');
      const titleInput = document.getElementById('pushTitle');
      const githubTokenInput = document.getElementById('pushGithubToken');
      if (sendKeyInput) sendKeyInput.value = config.sendKey || '';
      if (titleInput) titleInput.value = config.titleTpl || '{subject} 打卡 · {duration}h';
      if (githubTokenInput) githubTokenInput.value = config.githubToken || '';
      hideAllStatus();
      settingsModal?.classList.add('show');
    }

    function closeSettings() {
      settingsModal?.classList.remove('show');
      hideAllStatus();
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
      const githubToken = document.getElementById('pushGithubToken')?.value?.trim() || '';
      PushService.saveConfig({ sendKey, titleTpl, githubToken });
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
      const githubToken = document.getElementById('pushGithubToken')?.value?.trim() || '';
      PushService.saveConfig({ sendKey, titleTpl: document.getElementById('pushTitle')?.value?.trim() || currentConfig.titleTpl, githubToken });

      const testEntry = {
        subject: 'math2',
        duration: 0,
        content: '这是一条测试消息，配置正确即可收到 ✅',
        mood: 'easy',
        time: new Date().toISOString()
      };
      const result = await PushService.send(testEntry, '数学二', '', 0, []);
      if (result.ok) {
        showStatus('✅ 测试推送成功！请查看微信消息', 'success');
      } else {
        showStatus(`❌ 推送失败：${result.error || '未知错误'}`, 'error');
        // Restore key to input for correction
        document.getElementById('pushSendKey').value = sendKey;
      }
    });

    // Test GitHub token
    var githubStatusEl = document.getElementById('githubStatus');
    function showGithubStatus(msg, type) {
      if (!githubStatusEl) return;
      githubStatusEl.textContent = msg;
      githubStatusEl.className = 'push-status show ' + type;
    }
    function hideGithubStatus() {
      if (githubStatusEl) githubStatusEl.className = 'push-status';
    }
    document.getElementById('btnTestGithub')?.addEventListener('click', async () => {
      const githubToken = document.getElementById('pushGithubToken')?.value?.trim();
      if (!githubToken) {
        showGithubStatus('请先填写 GitHub Token', 'error');
        return;
      }
      showGithubStatus('正在验证 GitHub Token...', 'loading');
      try {
        // Test token by listing repo contents (read-only, no side effects)
        var resp = await fetch('https://api.github.com/repos/T3Tqaq12/kaoyan-planner/contents/photos', {
          headers: { Authorization: 'token ' + githubToken }
        });
        if (resp.ok) {
          showGithubStatus('✅ GitHub Token 有效！可以上传照片', 'success');
        } else if (resp.status === 401) {
          showGithubStatus('❌ Token 无效或已过期，请重新生成', 'error');
        } else if (resp.status === 403) {
          showGithubStatus('❌ API 限额或权限不足（需勾选 repo 权限）', 'error');
        } else {
          showGithubStatus('⚠️ 验证异常 (HTTP ' + resp.status + ')，请检查网络', 'error');
        }
      } catch (e) {
        showGithubStatus('❌ 网络请求失败，请检查网络连接', 'error');
      }
    });

    // ── Photo Wall ─────────────────────────────────────
    var photoWallOverlay = document.getElementById('photowallOverlay');
    document.getElementById('btnPhotoWall')?.addEventListener('click', function() {
      self.openPhotoWall();
    });
    photoWallOverlay?.addEventListener('click', function(e) {
      if (e.target === photoWallOverlay) self.closePhotoWall();
    });
    document.getElementById('pwClose')?.addEventListener('click', function() {
      self.closePhotoWall();
    });
    // Filter buttons (only photo wall, not history)
    photoWallOverlay?.querySelectorAll('.pw-filter').forEach(function(btn) {
      btn.addEventListener('click', function() {
        self.renderPhotoSpread(btn.dataset.filter);
      });
    });
    // Lightbox close
    var pwLightbox = document.getElementById('pwLightbox');
    document.getElementById('pwLbClose')?.addEventListener('click', function() {
      self.closeLightbox();
    });
    pwLightbox?.addEventListener('click', function(e) {
      if (e.target === pwLightbox) self.closeLightbox();
    });
    // Delete photo
    document.getElementById('pwLbDelete')?.addEventListener('click', function() {
      if (self._pwLightboxId != null) self.deletePhoto(self._pwLightboxId);
    });

    // ── History Overlay ─────────────────────────────────
    var historyOverlay = document.getElementById('historyOverlay');
    document.getElementById('histClose')?.addEventListener('click', function() {
      self.closeHistory();
    });
    historyOverlay?.addEventListener('click', function(e) {
      if (e.target === historyOverlay) self.closeHistory();
    });
    document.getElementById('histModeDay')?.addEventListener('click', function() {
      self._renderHistoryBody('day');
    });
    document.getElementById('histModeMonth')?.addEventListener('click', function() {
      self._renderHistoryBody('month');
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && settingsModal?.classList.contains('show')) {
        closeSettings();
      }
      if (e.key === 'Escape' && photoWallOverlay?.classList.contains('show')) {
        if (document.getElementById('pwLightbox')?.classList.contains('show')) {
          self.closeLightbox();
        } else {
          self.closePhotoWall();
        }
      }
      if (e.key === 'Escape' && historyOverlay?.classList.contains('show')) {
        self.closeHistory();
      }
      if (e.key === 'Escape' && document.getElementById('avatarCard')?.classList.contains('show')) {
        self.closeAvatarCard();
      }
    });
  }
}

// ─── Bootstrap ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  App.instance = new App();
});
