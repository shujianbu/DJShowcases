'use strict';

const TOPICS = [
  { value: '0',  label: '所有话题',     ch: '所有话题' },
  { value: '1',  label: 'Politics',    ch: '政治' },
  { value: '2',  label: 'Economy',     ch: '经济' },
  { value: '3',  label: 'Business',    ch: '商业' },
  { value: '4',  label: 'Media',       ch: '媒体' },
  { value: '5',  label: 'Arts',        ch: '艺术' },
  { value: '6',  label: 'Sports',      ch: '体育' },
  { value: '7',  label: 'Security',    ch: '安全' },
  { value: '8',  label: 'Disaster',    ch: '灾害' },
  { value: '9',  label: 'Environment', ch: '环境' },
  { value: '10', label: 'Technology',  ch: '技术' },
  { value: '11', label: 'Science',     ch: '科学' },
  { value: '12', label: 'Culture',     ch: '文化' },
  { value: '13', label: 'Religion',    ch: '宗教' },
  { value: '14', label: 'Education',   ch: '教育' },
  { value: '15', label: 'Lifestyle',   ch: '生活' },
  { value: '16', label: 'Fashion',     ch: '时尚' },
  { value: '17', label: 'Travel',      ch: '旅行' },
  { value: '18', label: 'Opinion',     ch: '观点' },
  { value: '19', label: 'Health',      ch: '医疗' }
];

const ORGS = [
  { value: '0',  label: '所有媒体',                     ch: '所有媒体' },
  { value: '1',  label: 'The New York Times',          ch: '纽约时报' },
  { value: '2',  label: 'The Guardian',                ch: '英国卫报' },
  { value: '3',  label: 'NPR',                         ch: '国家公共电台' },
  { value: '4',  label: 'ProPublica',                  ch: '' },
  { value: '5',  label: 'The Wall Street Journal',     ch: '华尔街日报' },
  { value: '6',  label: 'The Washington Post',         ch: '华盛顿邮报' },
  { value: '7',  label: 'Bloomberg',                   ch: '彭博社' },
  { value: '8',  label: 'Five Thirty Eight',           ch: '538' },
  { value: '9',  label: 'Reuters',                     ch: '路透社' },
  { value: '10', label: 'National Geographic',         ch: '国家地理' },
  { value: '11', label: 'Chicago Tribune',             ch: '芝加哥论坛报' },
  { value: '12', label: 'The Huffington Post',         ch: '赫芬顿邮报' },
  { value: '13', label: 'WNYC',                        ch: '纽约公共广播电台' },
  { value: '14', label: 'Popular Science',             ch: '大众科学'},
  { value: '15', label: 'Scientific American',         ch: '科学美国人'},
  { value: '16', label: 'Caixin',                ch: '财新'},
  { value: '17', label: 'South China Morning Post',    ch: '南华早报'},
  { value: '18', label: 'Los Angeles Times Data Desk', ch: '洛杉矶时报'},
  { value: '19', label: 'BuzzFeed',                    ch: '' },
  { value: '20', label: 'Al Jazeera America',          ch: '半岛电台美国' },
  { value: '21', label: 'Vox Media',                   ch: '' }
];

const TYPES = [
  { value: '0',  label: '所有元素' },
  { value: '1',  label: 'map' },
  { value: '2',  label: 'bar' },
  { value: '3',  label: 'line' },
  { value: '4',  label: 'tree' },
  { value: '5',  label: 'bubble' },
  { value: '6',  label: '3D' },
  { value: '7',  label: 'pie' },
  { value: '8',  label: 'photo' },
  { value: '9',  label: 'real-time' },
  { value: '10', label: 'multi-media' },
  { value: '11', label: 'animation' },
  { value: '12', label: 'interactive' },
  { value: '13', label: 'timeline' },
  { value: '14', label: 'hierarchy' },
  { value: '15', label: 'satellite imagery' },
  { value: '16', label: 'database' },
  { value: '17', label: 'game' }

];

export {TOPICS, ORGS, TYPES};