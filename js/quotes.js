/* 每日一句 · 语录库 */
/* 来源：电影/书籍/歌词/考研前辈/哲学 */
/* 共 80 条 · 确定性日更 */

const DAILY_QUOTES = [
  // ── 电影台词 ──────────────────────────────
  { text: "爱你所爱，行你所行，听从你心，无问西东。", source: "《无问西东》" },
  { text: "希望是美好的，也许是人间至善，而美好的事物永不消逝。", source: "《肖申克的救赎》" },
  { text: "人生就像一盒巧克力，你永远不知道下一颗是什么味道。", source: "《阿甘正传》" },
  { text: "不管前方的路有多苦，只要走的方向正确，都比站在原地更接近幸福。", source: "《千与千寻》" },
  { text: "有些事情现在不做，一辈子都不会做了。", source: "《练习曲》" },
  { text: "生活总会有点不顺，但每个明天都值得期待。", source: "《海街日记》" },
  { text: "不要温顺地走进那个良夜，老年应当在日暮时燃烧咆哮。", source: "《星际穿越》" },
  { text: "念念不忘，必有回响。", source: "《一代宗师》" },
  { text: "我命由我不由天。", source: "《哪吒之魔童降世》" },
  { text: "让人类保持理智，确实是种奢求。", source: "《流浪地球》" },
  { text: "你得决定自己要成为什么样的人，别让别人给你做主。", source: "《绿皮书》" },
  { text: "如果你有梦想，就要去捍卫它。", source: "《当幸福来敲门》" },
  { text: "星星在哪里都很亮，就看你有没有抬头去看它们。", source: "《岁月神偷》" },
  { text: "说的是一辈子，差一年一个月一天一个时辰都不算一辈子。", source: "《霸王别姬》" },
  { text: "我甚至连他的一张照片都没有，他只活在我的记忆里。", source: "《泰坦尼克号》" },

  // ── 书籍 ──────────────────────────────────
  { text: "人是为了活着本身而活着，而不是为了活着之外的任何事物而活着。", source: "余华《活着》" },
  { text: "生活不能等待别人来安排，要自己去争取和奋斗。", source: "路遥《平凡的世界》" },
  { text: "围在城里的人想逃出来，城外的人想冲进去。", source: "钱锺书《围城》" },
  { text: "只有用心去看，才能看到真实。真正重要的东西，眼睛是看不见的。", source: "《小王子》" },
  { text: "不要因为走得太远，忘了我们为什么出发。", source: "纪伯伦" },
  { text: "幸福的家庭都是相似的，不幸的家庭各有各的不幸。", source: "托尔斯泰《安娜·卡列尼娜》" },
  { text: "一个人可以被毁灭，但不能被打败。", source: "海明威《老人与海》" },
  { text: "世界上只有一种真正的英雄主义，那就是认清生活真相后依然热爱生活。", source: "罗曼·罗兰" },
  { text: "你的问题在于读书太少而想得太多。", source: "杨绛" },
  { text: "所谓无底深渊，下去，也是前程万里。", source: "木心" },
  { text: "人最大的敌人是自己。战胜自己，就战胜了一切。", source: "《沉思录》" },
  { text: "今天不想跑，所以才去跑。这才是长距离跑者的思维方式。", source: "村上春树" },
  { text: "人生最大的遗憾，不是我不行，而是我本可以。", source: "佚名" },
  { text: "每一个优秀的人，都有一段沉默的时光。", source: "佚名" },
  { text: "知人者智，自知者明。胜人者有力，自胜者强。", source: "《道德经》" },

  // ── 考研前辈金句 ──────────────────────────
  { text: "考研这件事，一旦动了念头，除非考上了，不然永远放不下。", source: "考研前辈" },
  { text: "按部就班就是伟大。", source: "考研前辈" },
  { text: "你背不下来的书，总有人能背下来；你做不出的题，总有人能做出来。", source: "考研前辈" },
  { text: "考研不是在和任何人比，是在和自己的懒惰比。", source: "考研前辈" },
  { text: "焦虑是因为你有考上的潜力。躺平的人才不焦虑。", source: "考研前辈" },
  { text: "慢慢来，比较快。", source: "唐迟" },
  { text: "没有到不了的明天。", source: "刘晓艳" },
  { text: "少一点功利主义的追求，多一点不为什么的坚持。", source: "考研前辈" },
  { text: "考研路上最大的敌人不是别人，是那个想放弃的自己。", source: "考研前辈" },
  { text: "三四月做的事，八九月自有答案。", source: "考研前辈" },
  { text: "别人都在假装偷懒，只有你在真的偷懒。", source: "考研前辈" },
  { text: "你现在所做的一切，都在为十二月的自己铺路。", source: "考研前辈" },
  { text: "考完那天走出考场，你会发现一切值得。", source: "考研前辈" },
  { text: "坚持到最后的，都考上了。", source: "考研前辈" },
  { text: "过程是枯燥的，但结果是值得的。", source: "考研前辈" },
  { text: "不是因为有希望才坚持，是因为坚持了才有希望。", source: "考研前辈" },
  { text: "政治大题背到想哭？哭完接着背。哭不代表放弃。", source: "考研前辈" },
  { text: "每天叫醒你的不是闹钟，是你心里那个想去的地方。", source: "考研前辈" },
  { text: "这一年你会怀疑自己无数次，但请你相信那个决定考研的自己。", source: "考研前辈" },
  { text: "坐在考场上，你会感谢每一个不曾放弃的昨天。", source: "考研前辈" },

  // ── 歌词（周杰伦/陈奕迅）─────────────────
  { text: "最美的不是下雨天，是曾与你躲过雨的屋檐。", source: "周杰伦《不能说的秘密》" },
  { text: "我要一步一步往上爬，在最高点乘着叶片往前飞。", source: "周杰伦《蜗牛》" },
  { text: "对这个世界如果你有太多的抱怨，跌倒了就不敢继续往前走。", source: "周杰伦《稻香》" },
  { text: "听妈妈的话，别让她受伤。想快快长大，才能保护她。", source: "周杰伦《听妈妈的话》" },
  { text: "转身离开，有话说不出来。", source: "周杰伦《珊瑚海》" },
  { text: "我已经变了，但也来不及了。", source: "陈奕迅《爱情转移》" },
  { text: "陪你走过漫长的黑夜，只为看到黎明的微光。", source: "陈奕迅《陪你度过漫长岁月》" },
  { text: "难离难舍想抱紧些，茫茫人生好像荒野。", source: "陈奕迅《单车》" },
  { text: "得不到的永远在骚动，被偏爱的都有恃无恐。", source: "陈奕迅《红玫瑰》" },
  { text: "你想看到的，其实我已经看到了。", source: "陈奕迅《不要说话》" },
  { text: "从前从前，有个人爱你很久。", source: "周杰伦《晴天》" },
  { text: "等不到天黑，烟火不会太完美。", source: "林俊杰《她说》" },
  { text: "再给我两分钟，让我把记忆结成冰。", source: "周杰伦《最长的电影》" },
  { text: "我在等，等一个不可能。", source: "邓紫棋《泡沫》" },

  // ── 哲理/斯多葛 ──────────────────────────
  { text: "我们听到的一切都是一个观点，不是事实。我们看到的一切都是一个视角，不是真相。", source: "马可·奥勒留" },
  { text: "困扰人的不是事情本身，而是人对事情的看法。", source: "爱比克泰德" },
  { text: "未经审视的人生不值得过。", source: "苏格拉底" },
  { text: "人生而自由，却无往不在枷锁之中。", source: "卢梭" },
  { text: "万物皆有裂痕，那是光照进来的地方。", source: "莱昂纳德·科恩" },
  { text: "当我在黑暗中，我比任何时候都更清楚地看到光亮。", source: "佚名" },
  { text: "山不过来，我就过去。", source: "《古兰经》典故" },
  { text: "种一棵树最好的时间是十年前，其次是现在。", source: "非洲谚语" },
  { text: "一个人知道自己为什么而活，就可以忍受任何一种生活。", source: "尼采" },
  { text: "怕什么真理无穷，进一寸有一寸的欢喜。", source: "胡适" },
  { text: "你在三四月做的事，八九月自有答案。", source: "佚名" },
  { text: "日拱一卒，功不唐捐。", source: "《法华经》" },
  { text: "流水不争先，争的是滔滔不绝。", source: "老子" },
  { text: "备考像在黑屋子里洗衣服，你不知道洗干净了没有，只能一遍遍用力搓。等到灯亮的那一刻，你会发现衣服光洁如新。", source: "考研前辈" },
  { text: "此刻打盹，你将做梦；此刻学习，你将圆梦。", source: "哈佛校训" },
  { text: "大鹏一日同风起，扶摇直上九万里。", source: "李白" },
  { text: "博观而约取，厚积而薄发。", source: "苏轼" }
];

/* ─── DailyQuote API ─────────────────────────────────────── */

(function() {
  function hashCode(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
      hash = hash | 0;
    }
    return hash;
  }

  function getQuote(dateStr) {
    if (!DAILY_QUOTES || DAILY_QUOTES.length === 0) return null;
    var index = Math.abs(hashCode(dateStr)) % DAILY_QUOTES.length;
    // Avoid consecutive-day repeat
    var d = new Date(dateStr);
    d.setDate(d.getDate() - 1);
    var ys = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
    var yesterdayIndex = Math.abs(hashCode(ys)) % DAILY_QUOTES.length;
    if (index === yesterdayIndex) index = (index + 1) % DAILY_QUOTES.length;
    return DAILY_QUOTES[index];
  }

  function getTodayQuote() {
    var d = new Date();
    var today = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
    return getQuote(today);
  }

  window.DailyQuote = {
    QUOTES: DAILY_QUOTES,
    getQuote: getQuote,
    getTodayQuote: getTodayQuote
  };
})();
