/* 每日电台 · 歌曲播放列表 */
/* 数据来源：Apple Music 播放列表「音乐回忆：历年总览」 */
/* 共 100 首 · 更新于 2026-06-21 */

const DAILY_RADIO_PLAYLIST = [
  { name: "BIRDS OF A FEATHER", artist: "Billie Eilish", url: "https://music.apple.com/cn/album/birds-of-a-feather/1739659134?i=1739659142" },
  { name: "We Don’t Talk Anymore (feat. Selena Gomez)", artist: "Charlie Puth", url: "https://music.apple.com/cn/album/we-dont-talk-anymore-feat-selena-gomez/1041127262?i=1041127302" },
  { name: "WILDFLOWER", artist: "Billie Eilish", url: "https://music.apple.com/cn/album/wildflower/1739659134?i=1739659144" },
  { name: "泡沫", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E6%B3%A1%E6%B2%AB/544934803?i=544934807" },
  { name: "爱殇 (电视剧《东宫》插曲)", artist: "小时姑娘", url: "https://music.apple.com/cn/album/%E7%88%B1%E6%AE%87-%E7%94%B5%E8%A7%86%E5%89%A7-%E4%B8%9C%E5%AE%AB-%E6%8F%92%E6%9B%B2/1693172389?i=1693172401" },
  { name: "Listening for the Weather", artist: "Bic Runga", url: "https://music.apple.com/cn/album/listening-for-the-weather/192974308?i=192974622" },
  { name: "搁浅", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E6%90%81%E6%B5%85/536114662?i=536115199" },
  { name: "落了白", artist: "蒋雪儿Snow.J", url: "https://music.apple.com/cn/album/%E8%90%BD%E4%BA%86%E7%99%BD/1617979814?i=1617979993" },
  { name: "Here With Me", artist: "d4vd", url: "https://music.apple.com/cn/album/here-with-me/1646547918?i=1646547919" },
  { name: "不要说话", artist: "陈奕迅", url: "https://music.apple.com/cn/album/%E4%B8%8D%E8%A6%81%E8%AF%B4%E8%AF%9D/1443493887?i=1443494467" },
  { name: "鲜花", artist: "回春丹", url: "https://music.apple.com/cn/album/%E9%B2%9C%E8%8A%B1/1718158528?i=1718158529" },
  { name: "Fortnight (feat. Post Malone)", artist: "Taylor Swift", url: "https://music.apple.com/cn/album/fortnight-feat-post-malone/1742057774?i=1742057775" },
  { name: "烟火里的尘埃", artist: "黄霄雲", url: "https://music.apple.com/cn/album/%E7%83%9F%E7%81%AB%E9%87%8C%E7%9A%84%E5%B0%98%E5%9F%83/1811121936?i=1811121938" },
  { name: "安和桥", artist: "宋冬野", url: "https://music.apple.com/cn/album/%E5%AE%89%E5%92%8C%E6%A1%A5/1808446482?i=1808446717" },
  { name: "唯一", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E5%94%AF%E4%B8%80/1717030435?i=1717030438" },
  { name: "牵丝戏", artist: "银临 & Aki阿杰", url: "https://music.apple.com/cn/album/%E7%89%B5%E4%B8%9D%E6%88%8F/1691672162?i=1691672163" },
  { name: "爱你没差", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E7%88%B1%E4%BD%A0%E6%B2%A1%E5%B7%AE/587743633?i=587743641" },
  { name: "Bloodstream", artist: "The Chainsmokers", url: "https://music.apple.com/cn/album/bloodstream/1207120422?i=1207120446" },
  { name: "III", artist: "Athletics", url: "https://music.apple.com/cn/album/iii/853411933?i=853411964" },
  { name: "你要如何, 我们就如何", artist: "康姆士COM'Z", url: "https://music.apple.com/cn/album/%E4%BD%A0%E8%A6%81%E5%A6%82%E4%BD%95-%E6%88%91%E4%BB%AC%E5%B0%B1%E5%A6%82%E4%BD%95/1510543412?i=1510543667" },
  { name: "离开我的依赖", artist: "王艳薇", url: "https://music.apple.com/cn/album/%E7%A6%BB%E5%BC%80%E6%88%91%E7%9A%84%E4%BE%9D%E8%B5%96/1497822968?i=1497822969" },
  { name: "浆果", artist: "TINY7", url: "https://music.apple.com/cn/album/%E6%B5%86%E6%9E%9C/1867485076?i=1867485079" },
  { name: "倒带", artist: "JOLIN蔡依林", url: "https://music.apple.com/cn/album/%E5%80%92%E5%B8%A6/339414521?i=339414579" },
  { name: "枫", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E6%9E%AB/536009641?i=536009647" },
  { name: "最后一页", artist: "江语晨", url: "https://music.apple.com/cn/album/%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5/815523929?i=815523938" },
  { name: "All Girls Are the Same", artist: "Juice Wrld", url: "https://music.apple.com/cn/album/all-girls-are-the-same/1407165109?i=1407165116" },
  { name: "男孩别哭", artist: "海龟先生", url: "https://music.apple.com/cn/album/%E7%94%B7%E5%AD%A9%E5%88%AB%E5%93%AD/1808446420?i=1808446671" },
  { name: "多远都要在一起", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E5%A4%9A%E8%BF%9C%E9%83%BD%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7/1053567923?i=1053567928" },
  { name: "Without knowing it all", artist: "LIM KIM", url: "https://music.apple.com/cn/album/without-knowing-it-all/1787430073?i=1787430078" },
  { name: "词不达意", artist: "林忆莲", url: "https://music.apple.com/cn/album/%E8%AF%8D%E4%B8%8D%E8%BE%BE%E6%84%8F/905221552?i=905221558" },
  { name: "Falling Down", artist: "newple AI BIGBANG", url: "https://music.apple.com/cn/album/falling-down/1783266197?i=1783266198" },
  { name: "像风一样", artist: "薛之谦", url: "https://music.apple.com/cn/album/%E5%83%8F%E9%A3%8E%E4%B8%80%E6%A0%B7/1787509715?i=1787509720" },
  { name: "来不及爱你", artist: "h3R3 刘清云", url: "https://music.apple.com/cn/album/%E6%9D%A5%E4%B8%8D%E5%8F%8A%E7%88%B1%E4%BD%A0/1706023743?i=1706023746" },
  { name: "安静", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E5%AE%89%E9%9D%99/535739206?i=535739359" },
  { name: "EVERYTHING", artist: "The Black Skirts", url: "https://music.apple.com/cn/album/everything/1591419140?i=1591419150" },
  { name: "Whataya Want from Me", artist: "Adam Lambert", url: "https://music.apple.com/cn/album/whataya-want-from-me/394058658?i=394058661" },
  { name: "龙卷风", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E9%BE%99%E5%8D%B7%E9%A3%8E/535790918?i=535791117" },
  { name: "50 Feet", artist: "SoMo", url: "https://music.apple.com/cn/album/50-feet/1442039666?i=1442040065" },
  { name: "That Girl", artist: "Olly Murs", url: "https://music.apple.com/cn/album/that-girl/1146530016?i=1146530489" },
  { name: "我好想你", artist: "苏打绿", url: "https://music.apple.com/cn/album/%E6%88%91%E5%A5%BD%E6%83%B3%E4%BD%A0/1480716925?i=1480717221" },
  { name: "起风了 (旧版)", artist: "冯沁苑LaJiao", url: "https://music.apple.com/cn/album/%E8%B5%B7%E9%A3%8E%E4%BA%86-%E6%97%A7%E7%89%88/1729547619?i=1729547620" },
  { name: "寂寞烟火", artist: "朱婧汐", url: "https://music.apple.com/cn/album/%E5%AF%82%E5%AF%9E%E7%83%9F%E7%81%AB/1223510631?i=1223511052" },
  { name: "Love Me Like You Do", artist: "Ellie Goulding", url: "https://music.apple.com/cn/album/love-me-like-you-do/1440845197?i=1440845808" },
  { name: "Something Just Like This", artist: "The Chainsmokers & Coldplay", url: "https://music.apple.com/cn/album/something-just-like-this/1207120422?i=1207120448" },
  { name: "如果爱忘了 (Live)", artist: "汪苏泷 & 单依纯", url: "https://music.apple.com/cn/album/%E5%A6%82%E6%9E%9C%E7%88%B1%E5%BF%98%E4%BA%86-live/1800782964?i=1800783897" },
  { name: "泡沫 (Swang Remix)", artist: "多雷 & 颜丙沂", url: "https://music.apple.com/cn/album/%E6%B3%A1%E6%B2%AB-swang-remix/1637582613?i=1637582614" },
  { name: "I Love You So", artist: "The Walters", url: "https://music.apple.com/cn/album/i-love-you-so/1591338974?i=1591338975" },
  { name: "Sacred Play Secret Place", artist: "matryoshka", url: "https://music.apple.com/cn/album/sacred-play-secret-place/583731510?i=583731514" },
  { name: "轨迹", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E8%BD%A8%E8%BF%B9/536108118?i=536108122" },
  { name: "明明就", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E6%98%8E%E6%98%8E%E5%B0%B1/587743633?i=587743637" },
  { name: "飘洋过海来看你", artist: "梁静茹 & 艾怡良", url: "https://music.apple.com/cn/album/%E9%A3%98%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0/1509896964?i=1509896967" },
  { name: "我怀念的", artist: "孙燕姿", url: "https://music.apple.com/cn/album/%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84/905226289?i=905226305" },
  { name: "爱错", artist: "王力宏", url: "https://music.apple.com/cn/album/%E7%88%B1%E9%94%99/1134344345?i=1134344911" },
  { name: "棕旨", artist: "Ice Paper & FOX胡天渝", url: "https://music.apple.com/cn/album/%E6%A3%95%E6%97%A8/1636264548?i=1636264554" },
  { name: "你瞒我瞒", artist: "陈柏宇", url: "https://music.apple.com/cn/album/%E4%BD%A0%E7%9E%92%E6%88%91%E7%9E%92/315862807?i=315863018" },
  { name: "IF YOU", artist: "BIGBANG", url: "https://music.apple.com/cn/album/if-you/1591549133?i=1591549134" },
  { name: "Outlaws of Love", artist: "Adam Lambert", url: "https://music.apple.com/cn/album/outlaws-of-love/517333358?i=517333818" },
  { name: "喜欢你", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E5%96%9C%E6%AC%A2%E4%BD%A0/908972117?i=908972123" },
  { name: "Where Did U Go", artist: "邓紫棋", url: "https://music.apple.com/cn/album/where-did-u-go/666994246?i=666994860" },
  { name: "Lover", artist: "Taylor Swift", url: "https://music.apple.com/cn/album/lover/1468058165?i=1468058173" },
  { name: "倒数", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E5%80%92%E6%95%B0/1422581993?i=1422581998" },
  { name: "春娇与志明", artist: "街道办GDC & 欧阳耀莹", url: "https://music.apple.com/cn/album/%E6%98%A5%E5%A8%87%E4%B8%8E%E5%BF%97%E6%98%8E/1768435667?i=1768435708" },
  { name: "沉溺(你让我的心不再结冰)", artist: "邹沛沛 & Pank", url: "https://music.apple.com/cn/album/%E6%B2%89%E6%BA%BA-%E4%BD%A0%E8%AE%A9%E6%88%91%E7%9A%84%E5%BF%83%E4%B8%8D%E5%86%8D%E7%BB%93%E5%86%B0/1679509338?i=1679509673" },
  { name: "Still Life", artist: "BIGBANG", url: "https://music.apple.com/cn/album/still-life/1695537579?i=1695537580" },
  { name: "LoveDrug", artist: "Lady Gaga", url: "https://music.apple.com/cn/album/lovedrug/1792666546?i=1792667018" },
  { name: "Cruel Summer", artist: "Taylor Swift", url: "https://music.apple.com/cn/album/cruel-summer/1468058165?i=1468058171" },
  { name: "出现又离开(Live)", artist: "梁博", url: "https://music.apple.com/cn/album/%E5%87%BA%E7%8E%B0%E5%8F%88%E7%A6%BB%E5%BC%80-live/1632691091?i=1632691216" },
  { name: "爱人错过", artist: "告五人", url: "https://music.apple.com/cn/album/%E7%88%B1%E4%BA%BA%E9%94%99%E8%BF%87/1546062804?i=1546062805" },
  { name: "我的美丽", artist: "小霞", url: "https://music.apple.com/cn/album/%E6%88%91%E7%9A%84%E7%BE%8E%E4%B8%BD/1598308142?i=1598308359" },
  { name: "爱情讯息", artist: "郭静", url: "https://music.apple.com/cn/album/%E7%88%B1%E6%83%85%E8%AE%AF%E6%81%AF/535391943?i=535391947" },
  { name: "Until You", artist: "Shayne Ward", url: "https://music.apple.com/cn/album/until-you/268283243?i=268283583" },
  { name: "晴天", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E6%99%B4%E5%A4%A9/535824731?i=535824738" },
  { name: "Love Story", artist: "Taylor Swift", url: "https://music.apple.com/cn/album/love-story/1452879607?i=1452879748" },
  { name: "再见", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E5%86%8D%E8%A7%81/1053567923?i=1053567929" },
  { name: "燕无歇", artist: "蒋雪儿Snow.J", url: "https://music.apple.com/cn/album/%E7%87%95%E6%97%A0%E6%AD%87/1613451078?i=1613451088" },
  { name: "千禧", artist: "徐秉龙", url: "https://music.apple.com/cn/album/%E5%8D%83%E7%A6%A7/1838385586?i=1838385587" },
  { name: "碎碎念", artist: "队长", url: "https://music.apple.com/cn/album/%E7%A2%8E%E7%A2%8E%E5%BF%B5/1715406560?i=1715406576" },
  { name: "恋人", artist: "李荣浩", url: "https://music.apple.com/cn/album/%E6%81%8B%E4%BA%BA/1752810525?i=1752810526" },
  { name: "你就不要想起我", artist: "田馥甄", url: "https://music.apple.com/cn/album/%E4%BD%A0%E5%B0%B1%E4%B8%8D%E8%A6%81%E6%83%B3%E8%B5%B7%E6%88%91/744962939?i=744963040" },
  { name: "陪你去流浪", artist: "薛之谦", url: "https://music.apple.com/cn/album/%E9%99%AA%E4%BD%A0%E5%8E%BB%E6%B5%81%E6%B5%AA/1787447756?i=1787447868" },
  { name: "爱情转移", artist: "陈奕迅", url: "https://music.apple.com/cn/album/%E7%88%B1%E6%83%85%E8%BD%AC%E7%A7%BB/1443352354?i=1443352465" },
  { name: "富士山下", artist: "陈奕迅", url: "https://music.apple.com/cn/album/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B/1443345687?i=1443346107" },
  { name: "煎熬", artist: "李佳薇", url: "https://music.apple.com/cn/album/%E7%85%8E%E7%86%AC/540280343?i=540280667" },
  { name: "Young and Beautiful", artist: "Lana Del Rey", url: "https://music.apple.com/cn/album/young-and-beautiful/1440856860?i=1440857081" },
  { name: "于是", artist: "邓紫棋", url: "https://music.apple.com/cn/album/%E4%BA%8E%E6%98%AF/1053567923?i=1053568849" },
  { name: "Lot to Learn", artist: "Luke Christopher", url: "https://music.apple.com/cn/album/lot-to-learn/1037214739?i=1037215205" },
  { name: "Starboy (feat. Daft Punk)", artist: "Abel Tesfaye", url: "https://music.apple.com/cn/album/starboy-feat-daft-punk/1440871397?i=1440871420" },
  { name: "Star Crossing Night (feat. GALI)", artist: "徐明浩", url: "https://music.apple.com/cn/album/star-crossing-night-feat-gali/1836082491?i=1836082492" },
  { name: "特别的人", artist: "方大同", url: "https://music.apple.com/cn/album/%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA/1579903639?i=1579903651" },
  { name: "Mayonaka No Door ~Stay with Me (2008 Remastered)", artist: "Miki Matsubara", url: "https://music.apple.com/cn/album/mayonaka-no-door-stay-with-me-2008-remastered/1858846505?i=1858846510" },
  { name: "淘汰", artist: "陈奕迅", url: "https://music.apple.com/cn/album/%E6%B7%98%E6%B1%B0/1443352354?i=1443352455" },
  { name: "Jellyfish (feat. Michael Seyer)", artist: "落日飞车", url: "https://music.apple.com/cn/album/jellyfish-feat-michael-seyer/1829622910?i=1829622911" },
  { name: "Can't Take My Eyes Off You", artist: "王若琳", url: "https://music.apple.com/cn/album/cant-take-my-eyes-off-you/323951906?i=323952300" },
  { name: "夏天", artist: "李玖哲", url: "https://music.apple.com/cn/album/%E5%A4%8F%E5%A4%A9/1646769329?i=1646769334" },
  { name: "不该 (with 张惠妹)", artist: "周杰伦", url: "https://music.apple.com/cn/album/%E4%B8%8D%E8%AF%A5-with-%E5%BC%A0%E6%83%A0%E5%A6%B9/1118757859?i=1118757873" },
  { name: "深蓝", artist: "陈婧霏", url: "https://music.apple.com/cn/album/%E6%B7%B1%E8%93%9D/1548682065?i=1548682195" },
  { name: "Blue (Special Edition 'Still Alive')", artist: "BIGBANG", url: "https://music.apple.com/cn/album/blue-special-edition-still-alive/1590811024?i=1590811120" },
  { name: "LOSER", artist: "BIGBANG", url: "https://music.apple.com/cn/album/loser/1591551083?i=1591551084" },
  { name: "Letting Go", artist: "蔡健雅", url: "https://music.apple.com/cn/album/letting-go/672994651?i=672994663" },
  { name: "我说我正在拥有真爱你怎么反驳我吧?", artist: "小陳同学", url: "https://music.apple.com/cn/album/%E6%88%91%E8%AF%B4%E6%88%91%E6%AD%A3%E5%9C%A8%E6%8B%A5%E6%9C%89%E7%9C%9F%E7%88%B1%E4%BD%A0%E6%80%8E%E4%B9%88%E5%8F%8D%E9%A9%B3%E6%88%91%E5%90%A7/1842540771?i=1842540772" },
];

/* --- DailyRadio API --------------------------------------- */

(function() {
  function hashCode(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
      hash = hash | 0;
    }
    return hash;
  }

  function getSong(dateStr) {
    if (!DAILY_RADIO_PLAYLIST || DAILY_RADIO_PLAYLIST.length === 0) return null;
    var index = Math.abs(hashCode(dateStr)) % DAILY_RADIO_PLAYLIST.length;
    var d = new Date(dateStr);
    d.setDate(d.getDate() - 1);
    var ys = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
    var yesterdayIndex = Math.abs(hashCode(ys)) % DAILY_RADIO_PLAYLIST.length;
    if (index === yesterdayIndex) index = (index + 1) % DAILY_RADIO_PLAYLIST.length;
    return DAILY_RADIO_PLAYLIST[index];
  }

  function getTodaySong() {
    var d = new Date();
    var today = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
    return getSong(today);
  }

  function getEmbedUrl(appleMusicUrl) {
    return appleMusicUrl.replace("music.apple.com", "embed.music.apple.com");
  }

  window.DailyRadio = {
    PLAYLIST: DAILY_RADIO_PLAYLIST,
    getSong: getSong,
    getTodaySong: getTodaySong,
    getEmbedUrl: getEmbedUrl
  };
})();
