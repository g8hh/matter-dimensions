/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Toggle all': '切换全部',
    'Hard Reset': '硬复位',
    'Helium': '氦',
    'Matter': '物质',
    'Photosynthesis': '光合作用',
    'Periodic table': '元素周期表',
    'Photonic': '光子',
    'Population': '人口',
    'Population changes': '人口变化',
    'Hotkeys': '快捷键',
    'Scientific': '科学',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Synthesis': '合成',
    'Current': '当前',
    'Courier New': '等宽字体',
    'Dimensional': '尺寸',
    'Default': '默认',
    'DIMENSIONAL SHIFT': '空间移位',
    'Dimensions': '维度',
    'Electrons': '电子',
    'Enabled': '启用',
    'energy': '能源',
    'Evolutions': '进化',
    'EXTINCTION': '灭绝',
    'Export/Import': '导出/导入',
    'Fertility': '生育能力',
    'free levels': '免费等级',
    'Lithium': '锂',
    'Metabolism': '新陈代谢',
    'Notation': '符号',
    'Next': '下一个',
    'You need': '你需要',
    'You completed': '你完成了',
    'You have': '你有',
    'You have played for': '你玩了',
    'You spent': '你花费了',
    'Your matter filled': '你的物质填满了',
    'Your maximum Gravitons is': '你的最大引力是',
    'Your resource potential is infinite': '您的资源潜力是无限的',
    'Your species has a total population of': '你的物种的总数',
    'Vacuumic': '真空重置',
    'challenges': '挑战',
    'Challenges': '挑战',
    'dimensions': '维度',
    'Dimensions': '维度',
    'Automation Shop': '自动化商店',
    'Binary': '二进制',
    'Biological': '生物',
    'Infinity': '无限',
    'Information': '信息',
    'Infrared Waves': '红外波',
    'Infrared': '红外线',
    'Logarithm': '对数',
    'Mitochondria': '线粒体',
    'Mortality': '死亡率',
    'You can have': '你可以拥有',
    'Yellow': '黄色',
    'Vacuumic dimensions': '真空维度',
    'You gain': '你获得',
    'You started playing': '你开始玩',
    'You performed': '你的表现',
    'You need to get': '你需要去获得',
    'Electron Power': '电子功率',
    'Carbon': '碳',
    'Challenge': '挑战',
    'Changelog': '更新日志',
    'BREAK INFINITY': '打破无限',
    'Buy Nitrogen': '买氮',
    'Buy Oxygen': '买氧',
    'Collision Knowledge.': '碰撞知识。',
    'Decay Neutrons into an Electron': '将中子衰减成电子',
    'Decay Neutrons into a W-Boson': '将中子衰减成W玻色子',
    'Decay Neutrons into a Proton': '将中子衰减成质子',
    'Neutronic': '中子',
    'Neutronic particles': '中子粒子',
    'Neutronic particles are': '中子粒子',
    'Neutronic dimensions': '中子维度',
    'Close': '关闭',
    'Hex': '十六进制',
    'Gravitons.': '引力。',
    'Green': '绿色',
    'Gravitons': '引力子',
    'Gravitonic': '引力',
    'Gravitonic Challenges are': '引力挑战是',
    'Gravitonic upgrades': '引力升级',
    'in this reset': '在本次重置',
    'Inertia': '惯性',
    'antimatter': '反物质',
    'Cost': '成本',
    'Collect energy': '收集能源',
    'CNO cycle': 'CNO循环',
    'Total': '总计',
    'translated to': '翻译成',
    'There is': '有 ',
    'There can be at most': '最多可以有',
    'Tickspeed': '周期速度',
    'Tickspeed Upgrades': '周期速度升级',
    'Kelvins': '开尔文',
    'Lucida Console': '光泽控制台',
    'Level': '等级',
    'Membranes': '膜片',
    'Matter.': ' 物质。',
    'matter per': '物质每',
    'matter': '物质',
    'Red Waves': '红色波',
    'Red': '红色',
    'Neutrons': '中子',
    'Neutrons.': '中子。',
    'Theme': '主题',
    'Alpha process': '阿尔法过程',
    'An Automation Shop is now open for everyone who performed a Neutronic reset at least once! It will contain upgrades to automate all layers above Photonic.': '一个自动化商店现在为每个至少执行过一次中子重置的人开放!它将包含升级，以自动化光子之上的所有层。',
    'Also, ×': '此外, ×',
    'All production is divided by': '所有产量除以',
    'All production above': '上面所有的生产',
    'Time is': '时间速率',
    'Three is a Crowd': '三是一群人',
    'This caps at': '上限在',
    'They give ×': '他们给予 ×',
    'There are only': '只有',
    'There are Four Lights': '这里有四个灯',
    'real-life second': '现实秒',
    'Reaction': '反应',
    'Reach specified temperature goals to receive boosts!': '达到指定的温度目标即可获得提升！',
    'Time speed formulas are rebalanced a bit: base time speed nerf is reduced from x1000 to x256, but upgrades reducing it are weaker.': '时间速度公式重新平衡了一点:基本时间速度的削弱从x1000减少到x256，但降低它的升级更弱。',
    'Tickspeed Upgrades are more powerful': '周期速度升级更强大',
    'Tickspeed Upgrades also affect Photonic Dimensions, but at reduced rate': '周期速度升级也会影响光子维度，但速率会降低',
    'Tickspeed Upgrade effect is additive.': '周期速度升级效果是可加的。',
    'Tickspeed affects Neutronic dimensions with reduced effect.': '周期速度会影响中子维度，从而降低效果。',
    'to all': '对所有',
    'to time speed': '以时间速度',
    'Cost of Tickspeed Upgrades scales slower': '周期速度升级的成本变慢',
    'Cost of Photonic Dimensions scales slower': '光子维度的成本变慢',
    'Dimensional dimensions': '尺寸维度',
    'Dimension autobuyers': '维度自动购买者',
    'degrees Fahrenheit': '华氏度',
    'degrees Celsius': '摄氏度',
    'Check Inertia in Mechanics tab.': '在力学选项卡中检查惯性。',
    'Annihilation produces': '湮灭生产',
    'Annihilation produced': '湮灭产生了',
    'Hold Ctrl while pressing a button to re-distribute max.': '按住Ctrl键的同时按一个按钮即可重新分配最大',
    'Hydrogen': '氢',
    'Hotkeys now don\'t work on exporting/importing screen.': '热键现在不能在导出/导入屏幕上工作。',
    'Green Waves': '绿光波',
    'Get a Collision Point': '得到一个碰撞点',
    'Genetic Reshuffle': '基因改组',
    'Genetic Recombination': '基因重组',
    'Genetic Hardening': '基因强化',
    'Genetic Diversity': '遗传多样性',
    'Genes.': '基因。',
    'Evolutions with larger Advantage (shown in top-right corner) are implemented quicker.': '具有更大优势的进化(显示在右上角)实现得更快。',
    'Fertility rate is increased': '生育率上升',
    'Evolutions are implemented': '进化实现',
    'Eukaryotes': '真核生物',
    'Emit Infrared Waves': '发射红外波',
    'Emit Green Waves': '发射绿光波',
    'Emit X-Ray Waves': '发射X射线',
    'Emit Ultraviolet Waves': '发射紫外线',
    'Emit Red Waves': '发射红光波',
    'Emit Blue Waves': '发射蓝光波',
    'Challenges are now checked for completion before autobuyer actions.': '现在，在自动购买者操作之前，将检查挑战是否完成。',
    'Dimensions are working as if there are x^': '维度起作用当有 x^',
    'dimensions of each kind': '各种类型维度',
    'You need to break Infinity in order to complete Vacuumic challenges.': '你需要打破无限才能完成真空挑战。',
    'You need to get a certain amount of matter to complete Photonic challenges.': '你需要获得一定数量的物质来完成光子挑战。',
    'You need to get a certain amount of matter to complete Neutronic challenges.': '你需要获得一定数量的物质来完成中子挑战。',
    'While Infinity is broken, the resource limit is disabled': '当无限被打破时，资源限制被禁用',
    'Black Holes also increase resource limit (up to': '黑洞也增加了资源限制 (直到',
    'Unlock Tickspeed Upgrades': '解锁周期速度升级',
    'Now you no longer start the game in 1970.': '现在你不再从1970年开始游戏。',
    'Gain a percentage of Inertia income while online': '在线时获得一定百分比的惯性收入',
    'Display': '显示',
    'Display temperature in': '显示温度',
    'don\'t display': '不显示',
    'Shuffled tabs around a bit.': '杂乱无章的标签周围。',
    'Show upgrade IDs': '显示升级id',
    'Show full changelog (might include spoilers': '显示完整的更新日志(可能包括剧透',
    'Shift+V - switch to Vacuumic tab': 'Shift+V -切换到真空选项卡',
    'Shift+P - switch to Photonic tab': 'Shift+P -切换到光子选项卡',
    'Shift+N - switch to Neutronic tab': 'Shift+N -切换到中子选项卡',
    'Shift+G - switch to Gravitonic tab': 'Shift+G -切换到重力标签',
    'Shift+D - switch to Dimensional tab': 'Shift+D -切换到维度选项卡',
    'Shift+B - switch to Biological tab': 'Shift+B -切换到生物选项卡',
    'Shift+A - switch to Atomic tab': 'Shift+A -切换到原子选项卡',
    'Shift - hold to see upgrade IDs': '按住Shift键查看升级id',
    'Improve Photon gain formula': '改进光子增益公式',
    'Higher level Dimensions give more Shards': '更高层次的维度提供更多的碎片',
    'Green Waves are boosted a bit.': '绿波提升了一点。',
    'and': '和',
    'and Photon': '和光子',
    'Annihilation produces more energy based on current matter': '湮灭产生更多基于当前物质的能量',
    'Atom gain on Atomic resets is raised to a power': '原子重置的原子增益提高到',
    'Anti challenged': '反挑战',
    'atoms': '原子',
    'Atoms': '原子',
    'Atomic': '原子',
    'energy so far': ' 能量到目前为止',
    'disabled': '禁用',
    'Blue Waves': '蓝光波',
    'Blue': '蓝色',
    'Coil dimensions': '线圈维度',
    'Collapse space': '坍塌空间',
    'Collide matter': '碰撞物质',
    'Collider': '对撞机',
    'slower': '更慢',
    'achievements.': '成就.',
    'Aesthetics': '美学',
    'After Extinction: ×': '灭绝后：×',
    'Atoms.': '原子.',
    'Blind': '盲文',
    'Big Rip': '大撕裂',
    'next': '下一个',
    'Next at': '下一个在',
    'Nothing Matters': '没什么大不了的',
    'Nitrogen': '氮',
    'One of each': '每一个',
    'Explosive Breeding': '爆炸繁殖',
    'Fifth Element': '第五元素',
    'Faster than a potato': '比土豆还快',
    'Five Star Rating': '五星评价',
    'Font': '字体',
    'Solar Flare': '太阳耀斑',
    'Star Citizen': '星际公民',
    'Shards': '碎片',
    'Second Thoughts': '重新考虑',
    'Antimatter grows faster': '反物质增长更快',
    'Antimatter does not grow.': '反物质不会增长。',
    'Buy Lithium': '购买锂',
    'Buy Hydrogen': '购买氢',
    'Buy': '购买',
    'Buy Helium': '购买氦',
    'Buy Boron': '购买硼',
    'Buy Space Theorem with Neutrons': '购买空间定理与中子',
    'Buy Space Theorem with Vacuum Energy': '购买空间定理和真空能量',
    'Buy Beryllium': '购买铍',
    'Challenged': '已挑战',
    'Combinatorial Explosion': '组合爆炸',
    'Gain': '获得',
    'Gain a free level of Synthesis': '获得一个免费的合成等级',
    'G - perform a Gravitonic reset': 'G - 执行引力重置',
    'Future Space Theorem costs': '未来空间定理成本',
    'B - perform an Biological reset': 'B - 执行生物重置',
    'N - perform a Neutronic reset': 'N - 执行中子重置',
    'P - perform a Photonic reset': 'P - 执行光子重置',
    'reset autobuyer': '重置自动购买者',
    'all Tickspeed upgrades are': '所有的周期速度升级',
    'Zero Blinks': '零闪烁',
    'Background Radiation': '背景辐射',
    'All Neutronic challenges at once.': '所有中子挑战同时进行。',
    'Black Holes every second': '黑洞每一秒',
    'Black Holes also provide free Gravitons upon reset': '重置后，黑洞还会提供免费的引力子',
    'always keep Photonic upgrades on resets.': '始终在重置时保持光子升级。',
    'always keep Gravitonic upgrades on resets.': '重置时始终保留 重力 升级。',
    'All Photonic Dimensions gain a bonus based on Gravitonic and Neutronic Challenges completed': '所有光子维度都会根据完成的引力和中子挑战获得奖励',
    'Replication': '复制',
    'Quadratic Growth': '二次增长',
    'I\'m So Meta': '我太变态了',
    'If you perform a Vacuumic right now, the new temperature would be': '如果您现在执行真空操作，则新温度将',
    'Gravitonic dimensions': '引力维度',
    'Gravitons upon Gravitonic reset': '重力重设后的重力',
    'Gravitons upon reset': '重设重力',
    'Hey, it\'s not cold anymore!': '嘿，现在不冷了！',
    'Hey, that\'s illegal!': '嘿，那是非法的！',
    'Hellscape': '地狱景观',
    'High Five': '击掌',
    'Home Alone': '小鬼当家',
    'Display numbers above the resource limit normally': '正常显示超过资源限制的数字',
    '1024 bits is not enough': '1024字节不够',
    '1 year': '1 年',
    '1 Vacuum Energy': '1 真空能量',
    '1 Neutron': '1 中子',
    '1 Graviton': '1 引力子',
    '1 seconds': '1 秒',
    'All Photonic challenges at once.': '同时面对所有的光子挑战。',
    'Annihilation produces more energy.': '湮灭产生更多的能量。',
    '"Matter Mayhem" achievement now preserves your automation from Gravitonic layer upon any reset.': '“物质混乱”的成就现在保留了你在重设时的重力层的自动化。',
    '...breathe out': '…呼出',
    'based on space': '基于空间',
    'All types of dimensions count for Shard gain, twice more for each layer above Matter': '所有类型的维度都计算碎片增益，在物质之上的每一层多两倍',
    'All Vacuumic challenges at once.': '同时面对所有真空挑战。',
    'Antimatter growth is much slower now if it outpaces Matter significantly.': '如果反物质的增长速度远远超过物质，那么它的增长速度就会慢得多。',
    'Autobuyers for even-numbered dimensions are disabled.': '偶数维度的自动购买者是禁用的。',
    'Atoms and Collision Knowledge are not affected by the resource limit. This is permanent.': '原子和碰撞知识不受资源限制的影响。 这是永久的。',
    'Double Trouble': '双重麻烦',
    'Next layer unlocks at breaking Infinity': '下一层在打破无限时解锁',
    'Next layer unlocks at': '下一层解锁于',
    'NEW DIMENSIONS???': '新维度? ?',
    'Saves are now encoded using base64.': '存档现在使用base64编码。',
    'Boson Power persists through Photonic': '玻色子的能量通过光子持续存在',
    'Boost the 5th tier and higher Matter Dimensions.': '提升第五和更高的物质维度。',
    'Boost Shard production based on Dimensional': '提升基于尺寸的碎片生产',
    'Boost Photon production based on bought 1st': '提升光子生产基于购买的第一',
    'Boost all Matter Dimensions based on bought 1st': '提升所有基于购买的第一物质维度',
    'Boost all Photonic dimensions based on Photonic': '基于光子增强所有光子维度',
    'Alternate Default': '替换默认',
    'All costs are x^': '所有成本 x^',
    'ago (real-time': '前（现实时间',
    'Achievements with an additional effect have a different color.': '具有额外效果的成就具有不同的颜色。',
    'Achievement multiplier is increased based on current Temperature.': '根据当前温度增加成就倍数。',
    ' Each row has a layer on which all upgrades in this row are reset.': '每一行都有一个层，在该层上重置该行中的所有升级。',
    '% more effective.': '% 更有效率。',
    '% lower': '% 更低',
    '% faster': '% 更快',
    '% cheaper': '% 更便宜',
    '. Graviton gain is divided by': '。重子增益除以',
    '. Gain': '. 获得',
    '(next at': '下一个在',
    '(based on your best time speed': '(根据你的最佳时间速度',
    '(based on time since last reset': '(基于自上次重置以来的时间',
    '(based on current matter': '(基于当前物质',
    'Space Theorem cost scaling is ×': '空间定理成本比例为 ×',
    'Skipping Layers': '跳过层',
    'slower growth of the time-based production nerf': '较慢的增长，基于时间的生产削弱',
    'Settings tab added.': '设置选项卡已添加。',
    'Display matter gain': '显示物质收益',
    'Each dimension is': '每个维度以 ',
    'dimensions collapses each second': '维度每秒钟都会收缩',
    'Dimensional Dimensions boost all previous dimensions.': '尺寸维度会增加所有以前的维度。',
    'Contemplating the Infinite': '考虑无限',
    'Collision Points cost less.': '碰撞点成本更低。',
    'Collision Points are half as expensive, with the minimum cost of': '碰撞点的成本只有一半，以最低的成本',
    'Collision Knowledge if you perform an Atomic right now': '碰撞知识，如果你现在执行一个原子',
    'Distribute 50% of energy': '分配50％的能量',
    'Double the storage capacity of Inertia': '翻倍的惯性存储容量',
    'Each bought Gravitonic Dimension gives ×': '每个购买的引力维度都提供×',
    'Bonus to 1st Matter Dimension that decreases over time in this Photonic': '在此光子中随时间减少的第一物质维度的奖励',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Unlock autobuyer for ": "解锁自动购买者为",
    "Unlock Extinctions (on Population tab": "解锁灭绝 (在人口选项卡",
    "Highest unlocked element is": "最高解锁元素为",
    "Space Theorems": "空间定理",
    "Current: ": "当前: ",
    "Effect: ": "效果: ",
    "Version ": "版本 ",
    "Unlock Neutronic ": "解锁中子",
    "Unlock Photonic ": "解锁光子",
    "Total effect": "总效果",
    "Buy Space Theorem with 3rd": "购买空间定理通过第三",
    "Buy max": "购买最大",
    "Next: ": "下一个: ",
    "Formula Break": "公式突破",
    "Hydrogen (": "氢 (",
    "Carbon (": "碳 (",
    "All Neutronic Dimensions gain a bonus based on the amount of Vacuumic": "所有 中子维度 都会根据 真空 的数量获得奖励",
    "Always keep Neutronic upgrades and particles on": "始终保留中子升级和粒子当",
    "Bonus to all Matter Dimensions based on number of Photonic": "基于光子数量的所有物质维度的奖励",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    " Dimensional Dimension": " 尺寸维度",
    " Vacuumic Dimension": " 真空维度",
    " Photonic Dimension": " 光子维度",
    " Neutronic Dimension": " 中子维度",
    " Gravitonic Dimension": " 引力维度",
    " Matter Dimension": " 物质维度",
    " Matter Dimensions": " 物质维度",
    " resets": "重置",
    " Antimatter is a lot": "反物质是很多",
    " minutes of Inertia": "分钟的惯性",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^Fixed (.+)$/,
    /^Added (.+)$/,
    /^[Atomic] (.+)$/,
    /^[Dimensional] (.+)$/,
    /^(\d+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Beat Photonic Challenge (\d+) to unlock!$/, '击败光子挑战 $1 即可解锁！'],
    [/^Unlock (\d+)th dimension$/, '解锁第 $1 维度'],
    [/^(\d+) \- buy maximum amount of (\d+)th Dimensions on screen$/, '$1 \- 购买屏幕上第 $2 维度的最大数量'],
    [/^(\d+) Genes$/, '$1 基因'],
    [/^(\d+) Photon$/, '$1 光子'],
    [/^(\d+) Photons$/, '$1 光子'],
    [/^([\d\.]+) seconds$/, '$1 光子'],
    [/^to (\d+)th Dimension$/, '到第 $1 维度'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);