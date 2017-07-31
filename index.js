'use strict';

const pkg = require('./package.json');
const Output = require('eazydict-standard-output');

function example() {
  let output = new Output();

  // 组件名
  output.pluginName = 'Example';

  // 包名
  output.packageName = pkg.name;

  // 查询的单词 & 短语
  output.words = 'hello';

  // 页面地址
  output.url = 'http://cn.bing.com/dict/search?q=hello'

  // 音标
  output.phonetics = [
    {
      type: '美',
      value: '[heˈləʊ]'
    },
    {
      type: '英',
      value: '[hə\'ləʊ]'
    }
  ];

  // 翻译
  output.translates = [
    {
      type: 'int',
      trans: '你好；喂；您好；哈喽'
    },
    {
      type: '网络',
      trans: '哈罗；哈啰；大家好'
    }
  ];

  // 例句
  output.examples = [
    {
      from: 'The thing that annoys me about him is the way he never says "Hello! ".',
      to: '他使我讨厌的是，从来不跟别人打呼。'
    },
    {
      from: 'When she greeted me with her hello, I replied "Guess what I need from you today? "',
      to: '她向我打招呼，我说：你说我想弄点什么呢？'
    }
  ];

  /**
   * 错误信息
   * 详见： Output.CODES
   */
  output.error = {
    code: Output.CODES.SUCCESS,
    type: Output.CODES[Output.CODES.SUCCESS],
    message: ""
  };

  /**
   * 重要：必须返回 Promise
   */
  return Promise.resolve(output);
}

module.exports = example;
