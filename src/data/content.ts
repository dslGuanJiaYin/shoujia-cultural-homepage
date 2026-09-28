export type WorkCategory = '文旅 IP' | '品牌联名' | '空间活动'

export type Work = {
  slug: string
  title: string
  subtitle: string
  category: WorkCategory
  image: string
  intro: string
  detail: string
  tall?: boolean
}

export type Service = {
  slug: string
  number: string
  title: string
  body: string
  detail: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'culture-insight',
    number: '01',
    title: '文化洞察',
    body: '从地方历史、生活方式与品牌精神里，找到真正能打动人的文化母题。',
    detail: '我们从地方志、品牌资料、用户访谈和现场观察开始，梳理文化符号背后的情绪与使用场景，为后续创意建立一份可以执行的文化地图。',
    image: '/assets/project-copper-relief.jpg',
  },
  {
    slug: 'ip-strategy',
    number: '02',
    title: 'IP 策划',
    body: '把一个故事、一种气质或一个角色，整理成可持续生长的 IP 资产。',
    detail: '从角色设定、世界观、视觉性格到产品触点，我们把一个好想法整理成可以被传播、被授权、被持续开发的完整 IP 系统。',
    image: '/assets/hero-mascot.jpg',
  },
  {
    slug: 'creative-design',
    number: '03',
    title: '创意设计',
    body: '用当代视觉与产品语言，让文化不止被看见，更愿意被使用和分享。',
    detail: '平面、包装、产品、空间和活动视觉由同一套创意逻辑贯穿，让文化表达在不同媒介里保持一致，同时拥有足够年轻的审美辨识度。',
    image: '/assets/project-cpox-products.jpg',
  },
  {
    slug: 'production-delivery',
    number: '04',
    title: '生产落地',
    body: '打样、选材、工艺、包装与交付全程跟进，让好创意经得起量产。',
    detail: '从材料建议、工艺验证、样品确认到批量生产和包装交付，我们把设计方案转换成稳定、可控、能按期落地的供应链计划。',
    image: '/assets/project-copper-process.jpg',
  },
]

export const works: Work[] = [
  {
    slug: 'cpox-champion',
    title: 'CPOX 冠军真牛',
    subtitle: 'IP 联名 · 周边产品全案',
    category: '品牌联名',
    image: '/assets/project-cpox-products.jpg',
    intro: '把品牌性格做成一组愿意被年轻人带走的日常物件。',
    detail: '首佳围绕 CPOX 的角色性格与“冠军，真牛”的品牌表达，完成周边产品、包装系统与线下陈列的联名设计，让 IP 从画面走进真实生活。',
  },
  {
    slug: 'shenzhen-city-relief',
    title: '铜塑深中 · 城市礼',
    subtitle: '城市文化 · 手工铜浮雕',
    category: '文旅 IP',
    image: '/assets/project-copper-relief.jpg',
    intro: '一座城市，可以被握在手里。',
    detail: '从深中通道、城市地标和湾区精神出发，以纯铜手工浮雕呈现城市的连接与开放，把城市记忆转译为兼具收藏与礼赠价值的文化作品。',
    tall: true,
  },
  {
    slug: 'ocean-palace-gift',
    title: '远洋天著 · 家园共创',
    subtitle: '地产礼赠 · 艺术礼盒',
    category: '品牌联名',
    image: '/assets/project-green-gift.jpg',
    intro: '把一幅山水，变成回到家时的温度。',
    detail: '以东方山水、家园共创和自然意象为视觉线索，完成艺术礼盒与延展物料设计，在地产品牌的生活方式叙事中加入可触摸的文化细节。',
  },
  {
    slug: 'cpox-coffee-festival',
    title: 'CPOX 乡村咖啡节',
    subtitle: '空间活动 · 现场视觉',
    category: '空间活动',
    image: '/assets/project-cpox-booth.jpg',
    intro: '让一个 IP，在真实的人群里热闹起来。',
    detail: '从摊位、旗帜、展陈到周边商品陈列，首佳把 CPOX 的色彩和角色语言延展到咖啡节现场，让品牌在一次真实的线下相遇里被记住。',
  },
  {
    slug: 'zhongshan-ip-display',
    title: '中山城市 IP 展陈',
    subtitle: '文旅策划 · 场景落地',
    category: '空间活动',
    image: '/assets/project-cpox-signage.jpg',
    intro: '城市文化，也可以有一张年轻的脸。',
    detail: '围绕城市 IP 的角色、口号和产品组合，完成从展陈主画面到现场导视的整体视觉设计，让文化内容拥有清晰、可参与的线下入口。',
  },
  {
    slug: 'copper-craft',
    title: '从工艺到作品',
    subtitle: '工艺研发 · 过程记录',
    category: '文旅 IP',
    image: '/assets/project-copper-process.jpg',
    intro: '让手工的温度，成为作品的一部分。',
    detail: '从铜材甄选、锻打、錾刻到封蜡和装裱，首佳把工艺过程纳入产品叙事，让每一道手工痕迹都成为文化价值的证明。',
  },
]

export function findService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function findWork(slug: string) {
  return works.find((work) => work.slug === slug)
}
