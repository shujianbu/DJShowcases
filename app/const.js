'use strict';

const TOPICS = {
  '0': {
    en: 'All',
    ch: '所有类别'
   },
  '1': {
    en: 'Politics',
    ch: '政治'
   },
  '2': {
    en: 'Economy',
    ch: '经济'
   },
  '3': {
    en: 'Business',
    ch: '商业'
   },
  '4': {
    en: 'Media',
    ch: '媒体'
   },
  '5': {
    en: 'Arts',
    ch: '艺术'
   },
  '6': {
    en: 'Sports',
    ch: '体育'
   },
  '7': {
    en: 'Security',
    ch: '安全'
   },
  '8': {
    en: 'Disaster',
    ch: '灾害'
   },
  '9': {
    en: 'Environment',
    ch: '环境'
   },
  '10': {
    en: 'Technology',
    ch: '技术'
   },
  '11': {
    en: 'Science',
    ch: '科学'
   },
  '12': {
    en: 'Culture',
    ch: '文化'
   },
  '13': {
    en: 'Religion',
    ch: '宗教'
   },
  '14': {
    en: 'Education',
    ch: '教育'
   },
  '15': {
    en: 'Lifestyle',
    ch: '生活'
   },
  '16': {
    en: 'Fashion',
    ch: '时尚'
   },
  '17': {
    en: 'Travel',
    ch: '旅行'
   },
  '18': {
    en: 'Opinion',
    ch: '观点'
   },
  '19': {
    en: 'Health',
    ch: '医疗'
  }
};

const ORGS = {
  '0': {
    'en': 'All',
    'ch': '所有媒体'
  },
  '1': {
    'en': 'The New York Times',
    'ch': '纽约时报'
  },
  '2': {
    'en': 'The Guardian',
    'ch': '英国卫报'
  },
  '3': {
    'en': 'NPR',
    'ch': '国家公共电台'
  },
  '4': {
    'en': 'ProPublica',
    'ch': ''
  },
  '5': {
    'en': 'The Wall Street Journal',
    'ch': '华尔街日报'
  },
  '6': {
    'en': 'The Washington Post',
    'ch': '华盛顿邮报'
  },
  '7': {
    'en': 'Bloomberg',
    'ch': '彭博社'
  },
  '8': {
    'en': 'Five Thirty Eight',
    'ch': '538'
  },
  '9': {
    'en': 'Reuters',
    'ch': '路透社'
  },
  '10': {
    'en': 'National Geographic',
    'ch': '国家地理'
  },
  '11': {
    'en': 'Chicago Tribune',
    'ch': '芝加哥论坛报'
  },
  '12': {
    'en': 'The Huffington Post',
    'ch': '赫芬顿邮报'
  },
  '13': {
    'en': 'WNYC',
    'ch': '纽约公共广播电台'
  },
  '14': {
    'en': 'Popular Science',
    'ch': '大众科学'
  },
  '15': {
    'en': 'Scientific American',
    'ch': '科学美国人'
  },
  '16': {
    'en': 'Caixin',
    'ch': '财新'
  },
  '17': {
    'en': 'South China Morning Post',
    'ch': '南华早报'
  },
  '18': {
    'en': 'Los Angeles Times',
    'ch': '洛杉矶时报'
  },
  '19': {
    'en': 'BuzzFeed',
    'ch': ''
  },
  '20': {
    'en': 'Al Jazeera',
    'ch': '半岛电台'
  },
  '21': {
    'en': 'Vox Media',
    'ch': ''
  },
  '22': {
    'en': 'Associated Press',
    'ch': '美联社'
  }
};

const TYPES = {
  '0': {
    en: 'All',
    ch: '可视类型'},
  '1': {
    en: 'map',
    ch: '地图'
  },
  '2': {
    en: 'bar',
    ch: '柱状图'
  },
  '3': {
    en: 'line',
    ch: '线图'
  },
  '4': {
    en: 'tree',
    ch: '树图'
  },
  '5': {
    en: 'bubble',
    ch: '气泡图'
  },
  '6': {
    en: '3D',
    ch: '3D'
  },
  '7': {
    en: 'pie',
    ch: '饼图'
  },
  '8': {
    en: 'photo',
    ch: '照片'
  },
  '9': {
    en: 'real-time',
    ch: '实时'
  },
  '10': {
    en: 'multi-media',
    ch: '多媒体'
  },
  '11': {
    en: 'animation',
    ch: '动画'
  },
  '12': {
    en: 'interactive',
    ch: '交互'
  },
  '13': {
    en: 'timeline',
    ch: '时间轴'
  },
  '14': {
    en: 'hierarchy',
    ch: '层次'
  },
  '15': {
    en: 'satellite imagery',
    ch: '卫星'
  },
  '16': {
    en: 'database',
    ch: '数据库'
  },
  '17': {
    en: 'game',
    ch: '游戏'
  }
};

export {TOPICS, ORGS, TYPES};