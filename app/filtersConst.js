'use strict';

const TOPICS = [
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
	{ value: '18', label: 'Opinion',     ch: '观点' }
];

const ORGS = [
	{ value: '1',  label: 'The New York Times',      ch: '纽约时报' },
	{ value: '2',  label: 'The Guardian',            ch: '英国卫报' },
	{ value: '3',  label: 'NPR',                     ch: '' },
	{ value: '4',  label: 'ProPublica',              ch: '' },
	{ value: '5',  label: 'The Wall Street Journal', ch: '华尔街日报' },
	{ value: '6',  label: 'Washington Post',         ch: '华盛顿邮报' },
	{ value: '7',  label: 'Bloomberg',               ch: '彭博社' },
	{ value: '8',  label: 'Five Thirty Eight',       ch: '538' },
	{ value: '9',  label: 'Reuters',                 ch: '路透社' },
	{ value: '10', label: 'National Geography',      ch: '国家地理' },
	{ value: '11', label: 'Chicago Tribune',         ch: '' },
	{ value: '12', label: 'The Huffington Post',     ch: '' },
	{ value: '13', label: 'WNYC',                    ch: '' }
];

const TYPES = [
	{ value: '1', label: 'map' },
	{ value: '2', label: 'bar' },
	{ value: '3', label: 'line' },
	{ value: '4', label: 'tree' },
	{ value: '5', label: 'bubble' },
	{ value: '6', label: '3D' }
];

const YEARS = [
	{ value: '1', label: '2008' },
	{ value: '2', label: '2009' },
	{ value: '3', label: '2010' },
	{ value: '4', label: '2011' },
	{ value: '5', label: '2012' },
	{ value: '6', label: '2013' },
	{ value: '7', label: '2014' },
	{ value: '8', label: '2015' }
];

export {TOPICS, ORGS, TYPES, YEARS};