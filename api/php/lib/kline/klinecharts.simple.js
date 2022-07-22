/**
 * @license
 * KLineChart v8.3.6
 * Copyright (c) 2019 lihu.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.klinecharts = {}));
})(this, (function (exports) { 'use strict';

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var extension = {
  technicalIndicatorExtensions: {},
  shapeExtensions: {},
  addTechnicalIndicatorTemplate: function addTechnicalIndicatorTemplate(template) {
    var _this = this;

    if (template) {
      [].concat(template).forEach(function (tmp) {
        if (tmp.name) {
          _this.technicalIndicatorExtensions[tmp.name] = tmp;
        }
      });
    }
  },
  addShapeTemplate: function addShapeTemplate(template) {
    var _this2 = this;

    if (template) {
      [].concat(template).forEach(function (tmp) {
        if (tmp.name) {
          _this2.shapeExtensions[tmp.name] = tmp;
        }
      });
    }
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 合并
 * @param target
 * @param source
 */
function merge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return;
  }

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key) && key in target) {
      var targetProp = target[key];
      var sourceProp = source[key];

      if (isObject(sourceProp) && isObject(targetProp) && !isArray(sourceProp) && !isArray(targetProp)) {
        merge(targetProp, sourceProp);
      } else {
        if (isValid(source[key])) {
          target[key] = source[key];
        }
      }
    }
  }
}
/**
 * 克隆
 * @param target
 * @return {{}|*}
 */

function clone(target) {
  if (!isObject(target)) {
    return target;
  }

  var copy;

  if (isArray(target)) {
    copy = [];
  } else {
    copy = {};
  }

  for (var key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      var v = target[key];

      if (isObject(v)) {
        copy[key] = clone(v);
      } else {
        copy[key] = v;
      }
    }
  }

  return copy;
}
/**
 * 是否是数组
 * @param value
 * @return {boolean}
 */

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
/**
 * 是否是方法
 * @param {*} value
 * @return {boolean}
 */

function isFunction(value) {
  return value && typeof value === 'function';
}
/**
 * 是否是对象
 * @param {*} value
 * @return {boolean}
 */

function isObject(value) {
  return !!value && _typeof$1(value) === 'object';
}
/**
 * 判断是否是数字
 * @param value
 * @returns {boolean}
 */

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
/**
 * 判断是否有效
 * @param value
 * @returns {boolean}
 */

function isValid(value) {
  return value !== null && value !== undefined;
}
/**
 * 判断是否是boolean
 * @param value
 * @returns {boolean}
 */

function isBoolean(value) {
  return typeof value === 'boolean';
}
/**
 * 是否是字符串
 * @param value
 * @return {boolean}
 */

function isString(value) {
  return typeof value === 'string';
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 填充空心样式类型
 */
var StrokeFillStyle = {
  STROKE: 'stroke',
  FILL: 'fill'
};
/**
 * 线的样式
 * @type {{DASH: string, SOLID: string}}
 */

var LineStyle = {
  DASH: 'dash',
  SOLID: 'solid'
};
/**
 * y轴位置
 * @type {{LEFT: string, RIGHT: string}}
 */

var YAxisPosition = {
  LEFT: 'left',
  RIGHT: 'right'
};
/**
 * y轴类型
 * @type {{PERCENTAGE: string, NORMAL: string}}
 */

var YAxisType = {
  NORMAL: 'normal',
  PERCENTAGE: 'percentage',
  LOG: 'log'
};
/**
 * 蜡烛图样式
 * @type {{AREA: string, OHLC: string, CANDLE_STROKE: string, CANDLE_SOLID: string, CANDLE_DOWN_STROKE: string, CANDLE_UP_STROKE: string}}
 */

var CandleType = {
  CANDLE_SOLID: 'candle_solid',
  CANDLE_STROKE: 'candle_stroke',
  CANDLE_UP_STROKE: 'candle_up_stroke',
  CANDLE_DOWN_STROKE: 'candle_down_stroke',
  OHLC: 'ohlc',
  AREA: 'area'
};
/**
 * 说明显示规则
 * @type {{FOLLOW_CROSS: string, NONE: string, ALWAYS: string}}
 */

var TooltipShowRule = {
  ALWAYS: 'always',
  FOLLOW_CROSS: 'follow_cross',
  NONE: 'none'
};
/**
 * 数据提示显示类型
 * @type {{RECT: string, STANDARD: string}}
 */

var TooltipShowType = {
  RECT: 'rect',
  STANDARD: 'standard'
};
/**
 * 注解标识类似
 * @type {{RECT: string, TRIANGLE: string, DIAMOND: string, CUSTOM: string, NONE: string, CIRCLE: string}}
 */

var AnnotationSymbolType = {
  CIRCLE: 'circle',
  RECT: 'rect',
  TRIANGLE: 'triangle',
  DIAMOND: 'diamond',
  CUSTOM: 'custom',
  NONE: 'none'
};
/**
 * 覆盖物位置
 * @type {{TOP: string, BOTTOM: string, POINT: string}}
 */

var OverlayPosition = {
  POINT: 'point',
  TOP: 'top',
  BOTTOM: 'bottom'
};
/**
 * 默认网格配置
 * @type {{horizontal: {size: number, color: string, dashValue: number[], show: boolean, style: string}, show: boolean, vertical: {size: number, color: string, dashValue: number[], show: boolean, style: string}}}
 */

var defaultGrid = {
  show: true,
  horizontal: {
    show: true,
    size: 1,
    color: '#EDEDED',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  },
  vertical: {
    show: true,
    size: 1,
    color: '#EDEDED',
    style: LineStyle.DASH,
    dashValue: [2, 2]
  }
};
/**
 * 默认蜡烛柱图样式配置
 * @type {{area: {backgroundColor: [{offset: number, color: string}, {offset: number, color: string}], lineColor: string, lineSize: number, value: string}, bar: {noChangeColor: string, upColor: string, downColor: string}, tooltip: {rect: {offsetTop: number, fillColor: string, borderColor: string, paddingBottom: number, borderRadius: number, paddingRight: number, borderSize: number, offsetLeft: number, paddingTop: number, paddingLeft: number, offsetRight: number}, showRule: string, values: null, showType: string, text: {marginRight: number, size: number, color: string, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}, labels: string[]}, type: string, priceMark: {high: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, last: {noChangeColor: string, upColor: string, line: {dashValue: number[], size: number, show: boolean, style: string}, show: boolean, text: {paddingBottom: number, size: number, color: string, paddingRight: number, show: boolean, weight: string, paddingTop: number, family: string, paddingLeft: number}, downColor: string}, low: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, show: boolean}}}
 */

var defaultCandle = {
  margin: {
    top: 0.2,
    bottom: 0.1
  },
  type: CandleType.CANDLE_SOLID,
  bar: {
    /**
     * 上涨颜色
     */
    upColor: '#26A69A',

    /**
     * 下跌颜色
     */
    downColor: '#EF5350',

    /**
     * 无变化时颜色
     */
    noChangeColor: '#999999'
  },
  area: {
    lineSize: 2,
    lineColor: '#2196F3',
    value: 'close',
    backgroundColor: [{
      offset: 0,
      color: 'rgba(33, 150, 243, 0.01)'
    }, {
      offset: 1,
      color: 'rgba(33, 150, 243, 0.2)'
    }]
  },
  priceMark: {
    show: true,
    high: {
      show: true,
      color: '#76808F',
      textMargin: 5,
      textSize: 10,
      textFamily: 'Lato',
      textWeight: 'normal'
    },
    low: {
      show: true,
      color: '#76808F',
      textMargin: 5,
      textSize: 10,
      textFamily: 'Lato',
      textWeight: 'normal'
    },
    last: {
      show: true,
      upColor: '#26A69A',
      downColor: '#EF5350',
      noChangeColor: '#888888',
      line: {
        show: true,
        style: LineStyle.DASH,
        dashValue: [4, 4],
        size: 1
      },
      text: {
        show: true,
        size: 12,
        paddingLeft: 2,
        paddingTop: 2,
        paddingRight: 2,
        paddingBottom: 2,
        color: '#FFFFFF',
        family: 'Lato',
        weight: 'normal',
        borderRadius: 2
      }
    }
  },
  tooltip: {
    showRule: TooltipShowRule.ALWAYS,
    showType: TooltipShowType.STANDARD,
    labels: ['Time: ', 'Open: ', 'Close: ', 'High: ', 'Low: ', 'Volume: '],
    values: null,
    defaultValue: 'n/a',
    rect: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 6,
      offsetLeft: 8,
      offsetTop: 8,
      offsetRight: 8,
      borderRadius: 4,
      borderSize: 1,
      borderColor: '#F2F3F5',
      backgroundColor: '#FEFEFE'
    },
    text: {
      size: 12,
      family: 'Lato',
      weight: 'normal',
      color: '#76808F',
      marginLeft: 8,
      marginTop: 6,
      marginRight: 8,
      marginBottom: 0
    }
  }
};
/**
 * 默认的技术指标样式配置
 * @type {{bar: {noChangeColor: string, upColor: string, downColor: string}, line: {size: number, colors: [string, string, string, string, string]}, tooltip: {showParams: boolean, showName: boolean, showRule: string, text: {marginRight: number, size: number, color: string, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}}, circle: {noChangeColor: string, upColor: string, downColor: string}, lastValueMark: {show: boolean, text: {paddingBottom: number, color: string, size: number, paddingRight: number, show: boolean, weight: string, paddingTop: number, family: string, paddingLeft: number}}}}
 */

var defaultTechnicalIndicator = {
  margin: {
    top: 0.2,
    bottom: 0.1
  },
  bar: {
    upColor: 'rgba(38, 166, 154, .65)',
    downColor: 'rgba(239, 83, 80, .65)',
    noChangeColor: '#888888'
  },
  line: {
    size: 1,
    colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']
  },
  circle: {
    upColor: 'rgba(38, 166, 154, .65)',
    downColor: 'rgba(239, 83, 80, .65)',
    noChangeColor: '#888888'
  },
  lastValueMark: {
    show: false,
    text: {
      show: false,
      color: '#FFFFFF',
      size: 12,
      family: 'Lato',
      weight: 'normal',
      paddingLeft: 3,
      paddingTop: 2,
      paddingRight: 3,
      paddingBottom: 2,
      borderRadius: 2
    }
  },
  tooltip: {
    showRule: TooltipShowRule.ALWAYS,
    showType: TooltipShowType.STANDARD,
    showName: true,
    showParams: true,
    defaultValue: 'n/a',
    text: {
      size: 12,
      family: 'Lato',
      weight: 'normal',
      color: '#76808F',
      marginTop: 6,
      marginRight: 8,
      marginBottom: 0,
      marginLeft: 8
    }
  }
};
/**
 * 默认x轴配置
 * @type {{axisLine: {color: string, size: number, show: boolean}, show: boolean, tickText: {paddingBottom: number, color: string, size: number, show: boolean, weight: string, paddingTop: number, family: string}, height: null, tickLine: {size: number, color: string, show: boolean, length: number}}}
 */

var defaultXAxis = {
  /**
   * 是否显示整个轴
   */
  show: true,

  /**
   * 高度
   */
  height: null,

  /**
   * 轴线配置
   */
  axisLine: {
    show: true,
    color: '#DDDDDD',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    show: true,
    color: '#76808F',
    size: 12,
    family: 'Lato',
    weight: 'normal',
    paddingTop: 3,
    paddingBottom: 6
  },
  // tick线
  tickLine: {
    show: true,
    size: 1,
    length: 3,
    color: '#DDDDDD'
  }
};
/**
 * 默认y轴配置
 * @type {{axisLine: {color: string, size: number, show: boolean}, show: boolean, width: null, position: string, tickText: {color: string, size: number, paddingRight: number, show: boolean, weight: string, family: string, paddingLeft: number}, type: string, inside: boolean, tickLine: {size: number, color: string, show: boolean, length: number}}}
 */

var defaultYAxis = {
  /**
   * 是否显示整个轴
   */
  show: true,

  /**
   * 宽度
   */
  width: null,

  /**
   * y轴类型
   */
  type: YAxisType.NORMAL,

  /**
   * 轴位置
   */
  position: YAxisPosition.RIGHT,

  /**
   * 轴是否在内部
   */
  inside: false,

  /**
   * 轴线配置
   */
  axisLine: {
    show: true,
    color: '#DDDDDD',
    size: 1
  },

  /**
   * tick文字
   */
  tickText: {
    show: true,
    color: '#76808F',
    size: 12,
    family: 'Lato',
    weight: 'normal',
    paddingLeft: 3,
    paddingRight: 6
  },
  // tick线
  tickLine: {
    show: true,
    size: 1,
    length: 3,
    color: '#DDDDDD'
  }
};
var defaultCrosshair = {
  show: true,
  horizontal: {
    show: true,
    line: {
      show: true,
      style: LineStyle.DASH,
      dashValue: [4, 2],
      size: 1,
      color: '#76808F'
    },
    text: {
      show: true,
      color: '#FFFFFF',
      size: 12,
      family: 'Lato',
      weight: 'normal',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2,
      paddingBottom: 2,
      borderSize: 1,
      borderColor: '#686D76',
      borderRadius: 2,
      backgroundColor: '#686D76'
    }
  },
  vertical: {
    show: true,
    line: {
      show: true,
      style: LineStyle.DASH,
      dashValue: [4, 2],
      size: 1,
      color: '#76808F'
    },
    text: {
      show: true,
      color: '#FFFFFF',
      size: 12,
      family: 'Lato',
      weight: 'normal',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2,
      paddingBottom: 2,
      borderSize: 1,
      borderRadius: 2,
      borderColor: '#686D76',
      backgroundColor: '#686D76'
    }
  }
};
/**
 * 默认图形配置
 * @type {{arc: {style: string, color: string, size: number}, polygon: {style: string, color: string, size: number}, line: {style: string, color: string, size: number, dashValue: number[]}, text: {style: string, marginRight: number, color: string, size: number, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}, point: {backgroundColor: string, borderColor: string, activeBorderSize: number, activeRadius: number, activeBorderColor: string, activeBackgroundColor: string, borderSize: number, radius: number}}}
 */

var defaultShape = {
  point: {
    backgroundColor: '#2196F3',
    borderColor: 'rgba(33, 150, 243, 0.35)',
    borderSize: 1,
    radius: 5,
    activeBackgroundColor: '#2196F3',
    activeBorderColor: 'rgba(33, 150, 243, 0.35)',
    activeBorderSize: 3,
    activeRadius: 5
  },
  line: {
    style: LineStyle.SOLID,
    color: '#2196F3',
    size: 1,
    dashValue: [2, 2]
  },
  polygon: {
    style: StrokeFillStyle.STROKE,
    stroke: {
      style: LineStyle.SOLID,
      size: 1,
      color: '#2196F3',
      dashValue: [2, 2]
    },
    fill: {
      color: '#2196F3'
    }
  },
  arc: {
    style: StrokeFillStyle.STROKE,
    stroke: {
      style: LineStyle.SOLID,
      size: 1,
      color: '#2196F3',
      dashValue: [2, 2]
    },
    fill: {
      color: '#2196F3'
    }
  },
  text: {
    style: StrokeFillStyle.FILL,
    color: '#2196F3',
    size: 12,
    family: 'Lato',
    weight: 'normal',
    offset: [0, 0]
  }
};
/**
 * 默认注解信息配置
 * @type {{}}
 */

var defaultAnnotation = {
  position: OverlayPosition.TOP,
  offset: [20, 0],
  symbol: {
    type: AnnotationSymbolType.DIAMOND,
    size: 8,
    color: '#2196F3',
    activeSize: 10,
    activeColor: '#FF9600'
  }
};
var defaultTag = {
  position: OverlayPosition.POINT,
  offset: 0,
  line: {
    show: true,
    style: LineStyle.DASH,
    dashValue: [4, 2],
    size: 1,
    color: '#2196F3'
  },
  text: {
    color: '#FFFFFF',
    backgroundColor: '#2196F3',
    size: 12,
    family: 'Lato',
    weight: 'normal',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 2,
    borderSize: 1,
    borderColor: '#2196F3'
  },
  mark: {
    offset: 0,
    color: '#FFFFFF',
    backgroundColor: '#2196F3',
    size: 12,
    family: 'Lato',
    weight: 'normal',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 2,
    borderSize: 1,
    borderColor: '#2196F3'
  }
};
/**
 * 图表之间默认分割配置
 * @type {{size: number, color: string}}
 */

var defaultSeparator = {
  size: 1,
  color: '#DDDDDD',
  fill: true,
  activeBackgroundColor: 'rgba(33, 150, 243, 0.08)'
};
var defaultStyleOptions = {
  grid: defaultGrid,
  candle: defaultCandle,
  technicalIndicator: defaultTechnicalIndicator,
  xAxis: defaultXAxis,
  yAxis: defaultYAxis,
  separator: defaultSeparator,
  crosshair: defaultCrosshair,
  shape: defaultShape,
  annotation: defaultAnnotation,
  tag: defaultTag
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 格式化值
 * @param data
 * @param key
 * @param defaultValue
 * @returns {string|*}
 */

function formatValue(data, key) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '--';

  if (isObject(data)) {
    var value = data[key];

    if (isValid(value)) {
      return value;
    }
  }

  return defaultValue;
}
/**
 * 格式化时间
 * @param dateTimeFormat
 * @param timestamp
 * @param format
 * @returns {string}
 */

function formatDate(dateTimeFormat, timestamp) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'MM-DD hh:mm';

  if (isNumber(timestamp)) {
    var dateTimeString = dateTimeFormat.format(new Date(timestamp));
    var dateTimeStringArray = dateTimeString.split(', ');
    var dateStringArray = dateTimeStringArray[0].split('/');
    var date = {
      YYYY: dateStringArray[2],
      MM: dateStringArray[0],
      DD: dateStringArray[1],
      'hh:mm': dateTimeStringArray[1].match(/^[\d]{2}/)[0] === '24' ? dateTimeStringArray[1].replace(/^[\d]{2}/, '00') : dateTimeStringArray[1]
    };
    return format.replace(/YYYY|MM|DD|(hh:mm)/g, function (key) {
      return date[key];
    });
  }

  return '--';
}
/**
 * 格式化精度
 */

function formatPrecision(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var v = +value;

  if ((v || v === 0) && isNumber(v)) {
    return v.toFixed(precision);
  }

  return "".concat(v);
}
/**
 * 格式化大数据
 * @param value
 */

function formatBigNumber(value) {
  if (isNumber(+value)) {
    if (value > 1000000000) {
      return "".concat(+(value / 1000000000).toFixed(3), "B");
    }

    if (value > 1000000) {
      return "".concat(+(value / 1000000).toFixed(3), "M");
    }

    if (value > 1000) {
      return "".concat(+(value / 1000).toFixed(3), "K");
    }

    return value;
  }

  return '--';
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 打印警告日志
 * @param api
 * @param invalidParam
 * @param append
 */

function logWarn(api, invalidParam) {
  var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  {
    console.log('%c😑 klinecharts warning: \n%s%s%s', 'color:#fcaf17;font-weight:bold', api ? "Call api ".concat(api).concat(invalidParam || append ? ', ' : '.') : '', invalidParam ? "invalid parameter ".concat(invalidParam).concat(append ? ', ' : '.') : '', append ? "".concat(append) : '');
  }
}
/**
 * 打印错误日志
 * @param api
 * @param invalidParam
 * @param append
 */

function logError(api, invalidParam) {
  var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  {
    console.log('%c😟 klinecharts error: \n%s%s%s', 'color:#ed1941;font-weight:bold', api ? "Call api ".concat(api).concat(invalidParam || append ? ', ' : '.', ",") : '', invalidParam ? "invalid parameter ".concat(invalidParam).concat(append ? ', ' : '.') : '', append ? "".concat(append) : '');
  }
}
/**
 * 打印标识
 */

function logTag() {
  {
    console.log('%c❤️ Welcome to klinecharts. Version is 8.3.6', 'border-radius:2px;border:dashed 1px #2196F3;padding:26px 20px;font-size:14px;color:#2196F3');
  }
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 二分查找最接近的数
 * @param dataList
 * @param valueKey
 * @param targetNumber
 * @return {number}
 */
function binarySearchNearest(dataList, valueKey, targetNumber) {
  var left = 0;
  var right = 0;

  for (right = dataList.length - 1; left !== right;) {
    var midIndex = Math.floor((right + left) / 2);
    var mid = right - left;
    var midValue = dataList[midIndex][valueKey];

    if (targetNumber === dataList[left][valueKey]) {
      return left;
    }

    if (targetNumber === dataList[right][valueKey]) {
      return right;
    }

    if (targetNumber === midValue) {
      return midIndex;
    }

    if (targetNumber > midValue) {
      left = midIndex;
    } else {
      right = midIndex;
    }

    if (mid <= 2) {
      break;
    }
  }

  return left;
}
/**
 * 优化数字
 * @param value
 * @return {number|number}
 */

function nice(value) {
  var exponent = Math.floor(log10(value));
  var exp10 = index10(exponent);
  var f = value / exp10; // 1 <= f < 10

  var nf = 0;

  if (f < 1.5) {
    nf = 1;
  } else if (f < 2.5) {
    nf = 2;
  } else if (f < 3.5) {
    nf = 3;
  } else if (f < 4.5) {
    nf = 4;
  } else if (f < 5.5) {
    nf = 5;
  } else if (f < 6.5) {
    nf = 6;
  } else {
    nf = 8;
  }

  value = nf * exp10;
  return exponent >= -20 ? +value.toFixed(exponent < 0 ? -exponent : 0) : value;
}
/**
 * 四和五入
 * @param value
 * @param precision
 * @return {number}
 */

function round(value, precision) {
  if (precision == null) {
    precision = 10;
  }

  precision = Math.min(Math.max(0, precision), 20);
  value = (+value).toFixed(precision);
  return +value;
}
/**
 * 获取小数位数
 * @param value
 * @return {number|number}
 */

function getPrecision(value) {
  var str = value.toString();
  var eIndex = str.indexOf('e');

  if (eIndex > 0) {
    var precision = +str.slice(eIndex + 1);
    return precision < 0 ? -precision : 0;
  } else {
    var dotIndex = str.indexOf('.');
    return dotIndex < 0 ? 0 : str.length - 1 - dotIndex;
  }
}
/**
 * 10为低的对数函数
 * @param value
 * @return {number}
 */

function log10(value) {
  return Math.log(value) / Math.log(10);
}
/**
 * 10的指数函数
 * @param value
 * @return {number}
 */

function index10(value) {
  return Math.pow(10, value);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 图表动作
 */
var ActionType = {
  ZOOM: 'zoom',
  SCROLL: 'scroll',
  CROSSHAIR: 'crosshair',
  TOOLTIP: 'tooltip',
  PANE_DRAG: 'pane_drag'
};
function hasAction(type) {
  return Object.values(ActionType).indexOf(type) > -1;
}

var MIN_DATA_SPACE = 1; // 最大单条数据宽度

var MAX_DATA_SPACE = 50;

var TimeScaleStore = /*#__PURE__*/function () {
  function TimeScaleStore(chartStore) {
    _classCallCheck(this, TimeScaleStore);

    this._chartStore = chartStore;
    this._dateTimeFormat = new Intl.DateTimeFormat('en', {
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }); // 是否可以缩放

    this._zoomEnabled = true; // 是否可以拖拽滑动

    this._scrollEnabled = true; // 是否在加载中

    this._loading = true; // 加载更多回调

    this._loadMoreCallback = null; // 还有更多

    this._more = true; // 可见区域数据占用的空间

    this._totalDataSpace = 0; // 每一条数据的空间

    this._dataSpace = 6; // bar的空间

    this._barSpace = this._calcBarSpace(); // 向右偏移的空间

    this._offsetRightSpace = 50; // 向右偏移的数量

    this._offsetRightBarCount = this._offsetRightSpace / this._dataSpace; // 左边最小可见bar的个数

    this._leftMinVisibleBarCount = 2; // 右边最小可见bar的个数

    this._rightMinVisibleBarCount = 2; // 开始绘制的索引

    this._from = 0; // 结束的索引

    this._to = 0; // 用来记录开始拖拽时向右偏移的数量

    this._preOffsetRightBarCount = 0;
  }
  /**
   * 计算一条柱子的空间
   * @returns {number}
   * @private
   */


  _createClass(TimeScaleStore, [{
    key: "_calcBarSpace",
    value: function _calcBarSpace() {
      var rateBarSpace = Math.floor(this._dataSpace * 0.82);
      var floorBarSpace = Math.floor(this._dataSpace);
      var optimalBarSpace = Math.min(rateBarSpace, floorBarSpace - 1);
      return Math.max(1, optimalBarSpace);
    }
    /**
     * 调整绘制起点终点位置
     * @private
     */

  }, {
    key: "adjustFromTo",
    value: function adjustFromTo() {
      var dataSize = this._chartStore.dataList().length;

      var barLength = this._totalDataSpace / this._dataSpace;
      var maxRightOffsetBarCount = barLength - Math.min(this._leftMinVisibleBarCount, dataSize);

      if (this._offsetRightBarCount > maxRightOffsetBarCount) {
        this._offsetRightBarCount = maxRightOffsetBarCount;
      }

      var minRightOffsetBarCount = -dataSize + Math.min(this._rightMinVisibleBarCount, dataSize);

      if (this._offsetRightBarCount < minRightOffsetBarCount) {
        this._offsetRightBarCount = minRightOffsetBarCount;
      }

      this._to = Math.round(this._offsetRightBarCount + dataSize + 0.5);
      this._from = Math.round(this._to - barLength) - 1;

      if (this._to > dataSize) {
        this._to = dataSize;
      }

      if (this._from < 0) {
        this._from = 0;
      }

      this._chartStore.adjustVisibleDataList(); // 处理加载更多，有更多并且没有在加载则去加载更多


      if (this._from === 0 && this._more && !this._loading && isFunction(this._loadMoreCallback)) {
        this._loading = true;

        this._loadMoreCallback(formatValue(this._chartStore.dataList()[0], 'timestamp'));
      }
    }
    /**
     * 设置是否有更多
     * @param more
     */

  }, {
    key: "setMore",
    value: function setMore(more) {
      this._more = more;
    }
    /**
     * 设置是否在加载
     */

  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this._loading = loading;
    }
    /**
     * 获取时间格式化
     * @returns {Intl.DateTimeFormat | Intl.DateTimeFormat}
     */

  }, {
    key: "dateTimeFormat",
    value: function dateTimeFormat() {
      return this._dateTimeFormat;
    }
    /**
     * 设置时区
     * @param timezone
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      var dateTimeFormat;

      try {
        dateTimeFormat = new Intl.DateTimeFormat('en', {
          hour12: false,
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (e) {
        logWarn('', '', 'Timezone is error!!!');
      }

      if (dateTimeFormat) {
        this._dateTimeFormat = dateTimeFormat;
      }
    }
    /**
     * 获取时区
     * @returns {null}
     */

  }, {
    key: "timezone",
    value: function timezone() {
      return this._dateTimeFormat.resolvedOptions().timeZone;
    }
    /**
     * 获取一条数据的空间
     * @returns {number}
     */

  }, {
    key: "dataSpace",
    value: function dataSpace() {
      return this._dataSpace;
    }
    /**
     * 获取绘制一条数据的空间（不包括bar之间的间隙）
     * @returns {*}
     */

  }, {
    key: "barSpace",
    value: function barSpace() {
      return this._barSpace;
    }
    /**
     * 获取绘制一条数据一半的空间（不包括bar之间的间隙）
     * @returns
     */

  }, {
    key: "halfBarSpace",
    value: function halfBarSpace() {
      return this._barSpace / 2;
    }
    /**
     * 设置一条数据的空间
     * @param dataSpace
     * @param adjustBeforeFuc
     */

  }, {
    key: "setDataSpace",
    value: function setDataSpace(dataSpace, adjustBeforeFuc) {
      if (dataSpace < MIN_DATA_SPACE || dataSpace > MAX_DATA_SPACE || this._dataSpace === dataSpace) {
        return;
      }

      this._dataSpace = dataSpace;
      this._barSpace = this._calcBarSpace();
      adjustBeforeFuc && adjustBeforeFuc();
      this.adjustFromTo();

      this._chartStore.crosshairStore().recalculate(true);

      this._chartStore.invalidate();
    }
    /**
     * 设置可见区域数据占用的总空间
     * @param totalSpace
     */

  }, {
    key: "setTotalDataSpace",
    value: function setTotalDataSpace(totalSpace) {
      if (this._totalDataSpace === totalSpace) {
        return;
      }

      this._totalDataSpace = totalSpace;
      this.adjustFromTo();

      this._chartStore.crosshairStore().recalculate(true);
    }
    /**
     * 设置右边可以偏移的空间
     * @param space
     * @param invalidate
     */

  }, {
    key: "setOffsetRightSpace",
    value: function setOffsetRightSpace(space, invalidate) {
      this._offsetRightSpace = space;
      this._offsetRightBarCount = space / this._dataSpace;

      if (invalidate) {
        this.adjustFromTo();

        this._chartStore.crosshairStore().recalculate(true);

        this._chartStore.invalidate();
      }
    }
    /**
     * 重置右边可以偏移的空间
     */

  }, {
    key: "resetOffsetRightSpace",
    value: function resetOffsetRightSpace() {
      this.setOffsetRightSpace(this._offsetRightSpace);
    }
    /**
     * 右偏移距离
     * @return {number}
     */

  }, {
    key: "offsetRightSpace",
    value: function offsetRightSpace() {
      return this._offsetRightSpace;
    }
    /**
     * 右偏移bar数量
     * @return {*|number}
     */

  }, {
    key: "offsetRightBarCount",
    value: function offsetRightBarCount() {
      return this._offsetRightBarCount;
    }
    /**
     * 设置右偏移bar数量
     * @param barCount
     */

  }, {
    key: "setOffsetRightBarCount",
    value: function setOffsetRightBarCount(barCount) {
      this._offsetRightBarCount = barCount;
    }
    /**
     * 设置左边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setLeftMinVisibleBarCount",
    value: function setLeftMinVisibleBarCount(barCount) {
      this._leftMinVisibleBarCount = barCount;
    }
    /**
     * 设置右边可见的最小bar数量
     * @param barCount
     */

  }, {
    key: "setRightMinVisibleBarCount",
    value: function setRightMinVisibleBarCount(barCount) {
      this._rightMinVisibleBarCount = barCount;
    }
    /**
     * 获取数据绘制起点
     * @returns {number}
     */

  }, {
    key: "from",
    value: function from() {
      return this._from;
    }
    /**
     * 获取数据绘制终点
     * @returns {number}
     */

  }, {
    key: "to",
    value: function to() {
      return this._to;
    }
    /**
     * 开始滚动
     */

  }, {
    key: "startScroll",
    value: function startScroll() {
      this._preOffsetRightBarCount = this._offsetRightBarCount;
    }
    /**
     * 滚动
     * @param distance
     * @param crosshair
     */

  }, {
    key: "scroll",
    value: function scroll(distance, crosshair) {
      if (!this._scrollEnabled) {
        return;
      }

      var distanceBarCount = distance / this._dataSpace;

      this._chartStore.actionStore().execute(ActionType.SCROLL, {
        barCount: distanceBarCount,
        distance: distance
      });

      this._offsetRightBarCount = this._preOffsetRightBarCount - distanceBarCount;
      this.adjustFromTo();

      var cross = crosshair || this._chartStore.crosshairStore().get();

      this._chartStore.crosshairStore().set(cross, true);

      this._chartStore.invalidate();
    }
    /**
     * 根据索引获取数据
     * @param dataIndex
     */

  }, {
    key: "getDataByDataIndex",
    value: function getDataByDataIndex(dataIndex) {
      return this._chartStore.dataList()[dataIndex];
    }
    /**
     * x转换成浮点数的位置
     * @param x
     * @returns {number}
     */

  }, {
    key: "coordinateToFloatIndex",
    value: function coordinateToFloatIndex(x) {
      var dataSize = this._chartStore.dataList().length;

      var deltaFromRight = (this._totalDataSpace - x) / this._dataSpace;
      var index = dataSize + this._offsetRightBarCount - deltaFromRight;
      return Math.round(index * 1000000) / 1000000;
    }
    /**
     * 数据索引转换成时间戳
     * @param dataIndex
     * @return {*}
     */

  }, {
    key: "dataIndexToTimestamp",
    value: function dataIndexToTimestamp(dataIndex) {
      var data = this.getDataByDataIndex(dataIndex);

      if (data) {
        return data.timestamp;
      }
    }
    /**
     * 将时间戳转换成数据索引位置
     * @param timestamp
     * @return {number}
     */

  }, {
    key: "timestampToDataIndex",
    value: function timestampToDataIndex(timestamp) {
      if (this._chartStore.dataList().length === 0) {
        return 0;
      }

      return binarySearchNearest(this._chartStore.dataList(), 'timestamp', timestamp);
    }
    /**
     * 数据索引转换成坐标
     * @param dataIndex
     */

  }, {
    key: "dataIndexToCoordinate",
    value: function dataIndexToCoordinate(dataIndex) {
      var dataSize = this._chartStore.dataList().length;

      var deltaFromRight = dataSize + this._offsetRightBarCount - dataIndex;
      return this._totalDataSpace - (deltaFromRight - 0.5) * this._dataSpace;
    }
    /**
     * 坐标换成数据索引转
     * @param pixel
     */

  }, {
    key: "coordinateToDataIndex",
    value: function coordinateToDataIndex(pixel) {
      return Math.ceil(this.coordinateToFloatIndex(pixel)) - 1;
    }
    /**
     * 缩放
     * @param scale
     * @param coordinate
     */

  }, {
    key: "zoom",
    value: function zoom(scale, coordinate) {
      var _this = this;

      if (!this._zoomEnabled) {
        return;
      }

      if (!coordinate || !isValid(coordinate.x)) {
        var crosshair = this._chartStore.crosshairStore().get();

        coordinate = {
          x: isValid(crosshair.x) ? crosshair.x : this._totalDataSpace / 2
        };
      }

      this._chartStore.actionStore().execute(ActionType.ZOOM, {
        coordinate: coordinate,
        scale: scale
      });

      var floatIndex = this.coordinateToFloatIndex(coordinate.x);
      var dataSpace = this._dataSpace + scale * (this._dataSpace / 10);
      this.setDataSpace(dataSpace, function () {
        _this._offsetRightBarCount += floatIndex - _this.coordinateToFloatIndex(coordinate.x);
      });
    }
    /**
     * 设置是否可以缩放
     * @param enabled
     */

  }, {
    key: "setZoomEnabled",
    value: function setZoomEnabled(enabled) {
      this._zoomEnabled = enabled;
    }
    /**
     * 获取是否可以缩放
     * @return {boolean}
     */

  }, {
    key: "zoomEnabled",
    value: function zoomEnabled() {
      return this._zoomEnabled;
    }
    /**
     * 设置是否可以拖拽滚动
     * @param enabled
     */

  }, {
    key: "setScrollEnabled",
    value: function setScrollEnabled(enabled) {
      this._scrollEnabled = enabled;
    }
    /**
     * 获取是否可以拖拽滚动
     * @return {boolean}
     */

  }, {
    key: "scrollEnabled",
    value: function scrollEnabled() {
      return this._scrollEnabled;
    }
    /**
     * 设置加载更多
     * @param callback
     */

  }, {
    key: "setLoadMoreCallback",
    value: function setLoadMoreCallback(callback) {
      this._loadMoreCallback = callback;
    }
    /**
     * 清除数据
     */

  }, {
    key: "clear",
    value: function clear() {
      this._more = true;
      this._loading = true;
      this._from = 0;
      this._to = 0;
    }
  }]);

  return TimeScaleStore;
}();

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(_typeof));

(function (module) {
var _typeof$1 = _typeof.exports["default"];

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/**
 * 绘制类型
 * @type {{BAR: string, LINE: string, CIRCLE: string}}
 */

var TechnicalIndicatorPlotType = {
  LINE: 'line',
  BAR: 'bar',
  CIRCLE: 'circle'
};
/**
 * 系列
 */

var TechnicalIndicatorSeries = {
  PRICE: 'price',
  VOLUME: 'volume',
  NORMAL: 'normal'
};
/**
 * 获取指标配置项样式
 * @param kLineDataList
 * @param techDataList
 * @param dataIndex
 * @param plot
 * @param techStyles
 * @param defaultStyle
 * @returns
 */

function getTechnicalIndicatorPlotStyle(kLineDataList, techDataList, dataIndex, plot, techStyles, defaultStyle) {
  var color = defaultStyle.color;
  var isStroke = defaultStyle.isStroke;
  var cbData = {
    prev: {
      kLineData: kLineDataList[dataIndex - 1],
      technicalIndicatorData: techDataList[dataIndex - 1]
    },
    current: {
      kLineData: kLineDataList[dataIndex],
      technicalIndicatorData: techDataList[dataIndex]
    },
    next: {
      kLineData: kLineDataList[dataIndex + 1],
      technicalIndicatorData: techDataList[dataIndex + 1]
    }
  };

  if (isValid(plot.color)) {
    if (isFunction(plot.color)) {
      color = plot.color(cbData, techStyles) || defaultStyle.color;
    } else {
      color = plot.color || defaultStyle.color;
    }
  }

  if (isValid(plot.isStroke)) {
    if (isFunction(plot.isStroke)) {
      isStroke = plot.isStroke(cbData);
    } else {
      isStroke = plot.isStroke;
    }
  }

  return {
    color: color,
    isStroke: isStroke
  };
}

var TechnicalIndicator = /*#__PURE__*/function () {
  function TechnicalIndicator(_ref) {
    var name = _ref.name,
        shortName = _ref.shortName,
        series = _ref.series,
        calcParams = _ref.calcParams,
        plots = _ref.plots,
        precision = _ref.precision,
        shouldCheckParamCount = _ref.shouldCheckParamCount,
        shouldOhlc = _ref.shouldOhlc,
        shouldFormatBigNumber = _ref.shouldFormatBigNumber,
        minValue = _ref.minValue,
        maxValue = _ref.maxValue,
        styles = _ref.styles;

    _classCallCheck(this, TechnicalIndicator);

    // 指标名
    this.name = name || ''; // 指标简短名称，用于显示

    this.shortName = isValid(shortName) ? shortName : name; // 系列

    this.series = Object.values(TechnicalIndicatorSeries).indexOf(series) !== -1 ? series : TechnicalIndicatorSeries.NORMAL; // 精度

    this.precision = isNumber(precision) && precision >= 0 ? precision : 4; // 精度设置标识

    this._precisionFlag = false; // 计算参数

    this.calcParams = isArray(calcParams) ? calcParams : []; // 数据信息

    this.plots = isArray(plots) ? plots : []; // 是否需要检查参数

    this.shouldCheckParamCount = isBoolean(shouldCheckParamCount) ? shouldCheckParamCount : true; // 是否需要ohlc

    this.shouldOhlc = isBoolean(shouldOhlc) ? shouldOhlc : false; // 是否需要格式化大数据值，从1000开始格式化，比如100000是否需要格式化100K

    this.shouldFormatBigNumber = isBoolean(shouldFormatBigNumber) ? shouldFormatBigNumber : false; // 指定的最小值

    this.minValue = minValue; // 指定的最大值

    this.maxValue = maxValue; // 样式

    this.styles = styles; // 结果

    this.result = [];
  }

  _createClass(TechnicalIndicator, [{
    key: "_createParams",
    value: function _createParams(calcParams) {
      return calcParams.map(function (param) {
        if (isObject(param)) {
          return param.value;
        }

        return param;
      });
    }
    /**
     * 设置简短名称
     * @param shortName
     * @returns
     */

  }, {
    key: "setShortName",
    value: function setShortName(shortName) {
      if (isValid(shortName) && this.shortName !== shortName) {
        this.shortName = shortName;
        return true;
      }

      return false;
    }
    /**
     * 设置精度
     * @param precision
     * @param flag
     * @returns
     */

  }, {
    key: "setPrecision",
    value: function setPrecision(precision, flag) {
      if (isNumber(precision) && precision >= 0 && (!flag || flag && !this._precisionFlag)) {
        this.precision = parseInt(precision, 10);

        if (!flag) {
          this._precisionFlag = true;
        }

        return true;
      }

      return false;
    }
    /**
     * 设置计算参数
     * @param params
     * @returns
     */

  }, {
    key: "setCalcParams",
    value: function setCalcParams(params) {
      if (!isArray(params)) {
        return false;
      }

      if (this.shouldCheckParamCount && params.length !== this.calcParams.length) {
        return false;
      }

      var calcParams = [];

      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        var v = void 0;
        var allowDecimal = void 0;

        if (isObject(param)) {
          v = param.value;
          allowDecimal = param.allowDecimal;
        } else {
          v = param;
          allowDecimal = false;
        }

        var oldParam = this.calcParams[i];

        if (isObject(oldParam) && isBoolean(oldParam.allowDecimal)) {
          allowDecimal = oldParam.allowDecimal;
        }

        if (!isNumber(v) || !allowDecimal && parseInt(v, 10) !== v) {
          return false;
        }

        calcParams.push({
          allowDecimal: allowDecimal,
          value: v
        });
      }

      this.calcParams = calcParams;
      var plots = this.regeneratePlots(this._createParams(calcParams));

      if (plots && isArray(plots)) {
        this.plots = plots;
      }

      return true;
    }
  }, {
    key: "setShouldOhlc",
    value: function setShouldOhlc(shouldOhlc) {
      if (isBoolean(shouldOhlc) && this.shouldOhlc !== shouldOhlc) {
        this.shouldOhlc = shouldOhlc;
        return true;
      }

      return false;
    }
  }, {
    key: "setShouldFormatBigNumber",
    value: function setShouldFormatBigNumber(shouldFormatBigNumber) {
      if (isBoolean(shouldFormatBigNumber) && this.shouldFormatBigNumber !== shouldFormatBigNumber) {
        this.shouldFormatBigNumber = shouldFormatBigNumber;
        return true;
      }

      return false;
    }
  }, {
    key: "setStyles",
    value: function setStyles(styles, defaultStyles) {
      if (!isObject(styles)) {
        return false;
      }

      if (!this.styles) {
        this.styles = {
          margin: clone(defaultStyles.margin),
          bar: clone(defaultStyles.bar),
          line: clone(defaultStyles.line),
          circle: clone(defaultStyles.circle)
        };
      }

      merge(this.styles, styles);
      return true;
    }
    /**
     * 计算
     * @param dataList
     * @return {*}
     */

  }, {
    key: "calc",
    value: function () {
      var _calc = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(dataList) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.calcTechnicalIndicator(dataList, {
                  params: this._createParams(this.calcParams),
                  plots: this.plots
                });

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = [];

              case 5:
                this.result = _context.t0;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function calc(_x) {
        return _calc.apply(this, arguments);
      }

      return calc;
    }()
    /**
     * 计算技术指标
     */

  }, {
    key: "calcTechnicalIndicator",
    value: function calcTechnicalIndicator(dataList, options) {}
    /**
     * 重新生成各项数据
     * @param params
     */

  }, {
    key: "regeneratePlots",
    value: function regeneratePlots(params) {}
  }]);

  return TechnicalIndicator;
}();

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TechnicalIndicatorStore = /*#__PURE__*/function () {
  function TechnicalIndicatorStore(chartStore) {
    _classCallCheck(this, TechnicalIndicatorStore);

    this._chartStore = chartStore; // 指标模板

    this._templates = this._createTemplates();
    this._instances = new Map();
  }
  /**
   * 获取指标信息
   * @param tech
   * @return {{ calcParams, series, precision, name, shortName, shouldCheckParamCount, shouldOhlc, shouldFormatBigNumber, styles }}
   */


  _createClass(TechnicalIndicatorStore, [{
    key: "_createTechInfo",
    value: function _createTechInfo(tech) {
      return {
        name: tech.name,
        shortName: tech.shortName,
        series: tech.series,
        calcParams: tech.calcParams,
        shouldCheckParamCount: tech.shouldCheckParamCount,
        shouldOhlc: tech.shouldOhlc,
        shouldFormatBigNumber: tech.shouldFormatBigNumber,
        precision: tech.precision,
        styles: tech.styles,
        plots: tech.plots,
        result: tech.result || []
      };
    }
    /**
     * 创建技术指标模板
     * @return {{}}
     */

  }, {
    key: "_createTemplates",
    value: function _createTemplates() {
      var mapping = {};
      var extensions = extension.technicalIndicatorExtensions;

      for (var name in extensions) {
        var templateInstance = this._createTemplateInstance(extensions[name]);

        if (templateInstance) {
          mapping[name] = templateInstance;
        }
      }

      return mapping;
    }
    /**
     * 创建一个新的技术指标
     * @param name
     * @param shortName
     * @param series
     * @param calcParams
     * @param plots
     * @param precision
     * @param shouldCheckParamCount
     * @param shouldOhlc
     * @param shouldFormatBigNumber
     * @param minValue
     * @param maxValue
     * @param styles
     * @param calcTechnicalIndicator
     * @param regeneratePlots
     * @param render
     * @returns {templateInstance|null}
     */

  }, {
    key: "_createTemplateInstance",
    value: function _createTemplateInstance(_ref) {
      var name = _ref.name,
          shortName = _ref.shortName,
          series = _ref.series,
          calcParams = _ref.calcParams,
          plots = _ref.plots,
          precision = _ref.precision,
          shouldCheckParamCount = _ref.shouldCheckParamCount,
          shouldOhlc = _ref.shouldOhlc,
          shouldFormatBigNumber = _ref.shouldFormatBigNumber,
          minValue = _ref.minValue,
          maxValue = _ref.maxValue,
          styles = _ref.styles,
          calcTechnicalIndicator = _ref.calcTechnicalIndicator,
          regeneratePlots = _ref.regeneratePlots,
          createToolTipDataSource = _ref.createToolTipDataSource,
          render = _ref.render;

      if (!name || !isFunction(calcTechnicalIndicator)) {
        logWarn('', '', 'The required attribute "name" and method "calcTechnicalIndicator" are missing, and new technical indicator cannot be generated!!!');
        return null;
      }

      var Template = /*#__PURE__*/function (_TechnicalIndicator) {
        _inherits(Template, _TechnicalIndicator);

        var _super = _createSuper$o(Template);

        function Template() {
          _classCallCheck(this, Template);

          return _super.call(this, {
            name: name,
            shortName: shortName,
            series: series,
            calcParams: calcParams,
            plots: plots,
            precision: precision,
            shouldCheckParamCount: shouldCheckParamCount,
            shouldOhlc: shouldOhlc,
            shouldFormatBigNumber: shouldFormatBigNumber,
            minValue: minValue,
            maxValue: maxValue,
            styles: styles
          });
        }

        return _createClass(Template);
      }(TechnicalIndicator);

      Template.prototype.calcTechnicalIndicator = calcTechnicalIndicator;

      if (isFunction(regeneratePlots)) {
        Template.prototype.regeneratePlots = regeneratePlots;
      }

      if (isFunction(createToolTipDataSource)) {
        Template.prototype.createToolTipDataSource = createToolTipDataSource;
      }

      if (isFunction(render)) {
        Template.prototype.render = render;
      }

      return new Template();
    }
    /**
     * 添加指标模板
     * @param templates
     */

  }, {
    key: "addTemplate",
    value: function addTemplate(templates) {
      var _this = this;

      templates.forEach(function (tmp) {
        var instance = _this._createTemplateInstance(tmp || {});

        if (instance) {
          // 将生成的新的指标类放入集合
          _this._templates[instance.name] = instance;
        }
      });
    }
    /**
     * 模板是否存在
     * @param {*} name
     * @returns
     */

  }, {
    key: "hasTemplate",
    value: function hasTemplate(name) {
      return !!this._templates[name];
    }
    /**
     * 获取技术指标模板信息
     * @param name
     * @return {{}|{calcParams: *, precision: *, name: *}}
     */

  }, {
    key: "getTemplateInfo",
    value: function getTemplateInfo(name) {
      if (isValid(name)) {
        var template = this._templates[name];

        if (template) {
          return this._createTechInfo(template);
        }
      } else {
        var templateInfos = {};

        for (var _name in this._templates) {
          var _template = this._templates[_name];
          templateInfos[_name] = this._createTechInfo(_template);
        }

        return templateInfos;
      }

      return {};
    }
    /**
     * 添加技术指标实例
     * @param paneId
     * @param tech
     * @param isStack
     * @returns
     */

  }, {
    key: "addInstance",
    value: function addInstance(paneId, tech, isStack) {
      var name = tech.name,
          calcParams = tech.calcParams,
          precision = tech.precision,
          shouldOhlc = tech.shouldOhlc,
          shouldFormatBigNumber = tech.shouldFormatBigNumber,
          styles = tech.styles;

      var paneInstances = this._instances.get(paneId);

      if (paneInstances && paneInstances.has(name)) {
        return;
      }

      if (!paneInstances) {
        paneInstances = new Map();

        this._instances.set(paneId, paneInstances);
      }

      var template = this._templates[name];
      var instance = Object.create(Object.getPrototypeOf(template));

      for (var key in template) {
        if (Object.prototype.hasOwnProperty.call(template, key)) {
          instance[key] = template[key];
        }
      }

      instance.setCalcParams(calcParams);
      instance.setPrecision(precision);
      instance.setShouldOhlc(shouldOhlc);
      instance.setShouldFormatBigNumber(shouldFormatBigNumber);
      instance.setStyles(styles, this._chartStore.styleOptions().technicalIndicator);

      if (!isStack) {
        paneInstances.clear();
      }

      paneInstances.set(name, instance);
      return instance.calc(this._chartStore.dataList());
    }
    /**
     * 获取实例
     * @param {*} paneId
     * @returns
     */

  }, {
    key: "instances",
    value: function instances(paneId) {
      return this._instances.get(paneId) || new Map();
    }
    /**
     * 移除技术指标
     * @param paneId
     * @param name
     * @return {boolean}
     */

  }, {
    key: "removeInstance",
    value: function removeInstance(paneId, name) {
      var removed = false;

      if (this._instances.has(paneId)) {
        var paneInstances = this._instances.get(paneId);

        if (isValid(name)) {
          if (paneInstances.has(name)) {
            paneInstances.delete(name);
            removed = true;
          }
        } else {
          paneInstances.clear();
          removed = true;
        }

        if (paneInstances.size === 0) {
          this._instances.delete(paneId);
        }
      }

      return removed;
    }
    /**
     * 是否有实例
     * @param paneId
     * @returns
     */

  }, {
    key: "hasInstance",
    value: function hasInstance(paneId) {
      return this._instances.has(paneId);
    }
    /**
     * 实例计算
     * @param paneId
     * @param name
     */

  }, {
    key: "calcInstance",
    value: function calcInstance(name, paneId) {
      var _this2 = this;

      var tasks = [];

      if (isValid(name)) {
        if (isValid(paneId)) {
          var paneInstances = this._instances.get(paneId);

          if (paneInstances && paneInstances.has(name)) {
            tasks.push(paneInstances.get(name).calc(this._chartStore.dataList()));
          }
        } else {
          this._instances.forEach(function (paneInstances) {
            if (paneInstances.has(name)) {
              tasks.push(paneInstances.get(name).calc(_this2._chartStore.dataList()));
            }
          });
        }
      } else {
        this._instances.forEach(function (paneInstances) {
          paneInstances.forEach(function (instance) {
            tasks.push(instance.calc(_this2._chartStore.dataList()));
          });
        });
      }

      return Promise.all(tasks);
    }
    /**
     * 获取实例信息
     * @param paneId
     * @param name
     * @returns
     */

  }, {
    key: "getInstanceInfo",
    value: function getInstanceInfo(paneId, name) {
      var _this3 = this;

      var info = function info(paneInstances) {
        var instanceInfos = [];

        var _iterator = _createForOfIteratorHelper$5(paneInstances),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            var instance = entry[1];

            if (instance) {
              var instanceInfo = _this3._createTechInfo(instance);

              if (instance.name === name) {
                return instanceInfo;
              }

              instanceInfos.push(instanceInfo);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return instanceInfos;
      };

      if (isValid(paneId)) {
        if (this._instances.has(paneId)) {
          return info(this._instances.get(paneId));
        }
      } else {
        var infos = {};

        this._instances.forEach(function (paneInstance, paneId) {
          infos[paneId] = info(paneInstance);
        });

        return infos;
      }

      return {};
    }
    /**
     * 设置系列精度
     * @param pricePrecision
     * @param volumePrecision
     */

  }, {
    key: "setSeriesPrecision",
    value: function setSeriesPrecision(pricePrecision, volumePrecision) {
      var setPrecision = function setPrecision(tech) {
        if (tech.series === TechnicalIndicatorSeries.PRICE) {
          tech.setPrecision(pricePrecision, true);
        }

        if (tech.series === TechnicalIndicatorSeries.VOLUME) {
          tech.setPrecision(volumePrecision, true);
        }
      };

      for (var key in this._templates) {
        setPrecision(this._templates[key]);
      }

      this._instances.forEach(function (paneInstances) {
        paneInstances.forEach(function (instance) {
          setPrecision(instance);
        });
      });
    }
    /**
     * 覆盖
     * @param techOverride
     * @param paneId
     * @returns
     */

  }, {
    key: "override",
    value: function override(techOverride, paneId) {
      var _this4 = this;

      var name = techOverride.name,
          shortName = techOverride.shortName,
          calcParams = techOverride.calcParams,
          precision = techOverride.precision,
          shouldOhlc = techOverride.shouldOhlc,
          shouldFormatBigNumber = techOverride.shouldFormatBigNumber,
          styles = techOverride.styles;

      var defaultTechStyleOptions = this._chartStore.styleOptions().technicalIndicator;

      var instances = new Map();

      if (isValid(paneId)) {
        if (this._instances.has(paneId)) {
          instances.set(paneId, this._instances.get(paneId));
        }
      } else {
        instances = this._instances;
        var template = this._templates[name];

        if (template) {
          template.setCalcParams(calcParams);
          template.setShortName(shortName);
          template.setPrecision(precision);
          template.setShouldOhlc(shouldOhlc);
          template.setShouldFormatBigNumber(shouldFormatBigNumber);
          template.setStyles(styles, defaultTechStyleOptions);
        }
      }

      var overiderSuccss = false;
      var tasks = [];
      instances.forEach(function (paneInstances) {
        if (paneInstances.has(name)) {
          var tech = paneInstances.get(name);
          var shortNameSuccess = tech.setShortName(shortName);
          var calcParamsSuccess = tech.setCalcParams(calcParams);
          var precisionSuccess = tech.setPrecision(precision);
          var shouldOhlcSuccess = tech.setShouldOhlc(shouldOhlc);
          var shouldFormatBigNumberSuccess = tech.setShouldFormatBigNumber(shouldFormatBigNumber);
          var styleSuccess = tech.setStyles(styles, defaultTechStyleOptions);

          if (shortNameSuccess || calcParamsSuccess || precisionSuccess || shouldOhlcSuccess || shouldFormatBigNumberSuccess || styleSuccess) {
            overiderSuccss = true;
          }

          if (calcParamsSuccess) {
            tasks.push(tech.calc(_this4._chartStore.dataList()));
          }
        }
      });

      if (overiderSuccss) {
        return Promise.all(tasks);
      }
    }
  }]);

  return TechnicalIndicatorStore;
}();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * 完善覆盖物实例
 * @param overlay 覆盖物实例
 * @param options 参数
 */

function perfectOverlayFunc(overlay, funcs) {
  funcs.forEach(function (_ref) {
    var key = _ref.key,
        fn = _ref.fn;

    if (isFunction(fn)) {
      overlay[key] = fn;
    }
  });
}
/**
 * 覆盖物
 */

var Overlay = /*#__PURE__*/function () {
  function Overlay(_ref2) {
    var id = _ref2.id,
        chartStore = _ref2.chartStore,
        xAxis = _ref2.xAxis,
        yAxis = _ref2.yAxis;

    _classCallCheck(this, Overlay);

    this._id = id;
    this._chartStore = chartStore;
    this._xAxis = xAxis;
    this._yAxis = yAxis;
    this._styles = null;
  }
  /**
   * 绘制
   * @param ctx
   */


  _createClass(Overlay, [{
    key: "draw",
    value: function draw(ctx) {}
    /**
     * 设置样式
     * @param styles
     * @param defaultStyles
     */

  }, {
    key: "setStyles",
    value: function setStyles(styles, defaultStyles) {
      if (!isObject(styles)) {
        return false;
      }

      if (!this._styles) {
        this._styles = clone(defaultStyles);
      }

      merge(this._styles, styles);
      return true;
    }
    /**
     * 获取id
     * @return {*}
     */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
    /**
     * 获取样式
     * @return {null}
     */

  }, {
    key: "styles",
    value: function styles() {
      return this._styles;
    }
    /**
     * 设置y轴
     * @param yAxis
     */

  }, {
    key: "setYAxis",
    value: function setYAxis(yAxis) {
      if (yAxis) {
        this._yAxis = yAxis;
      }
    }
    /**
     * 检查鼠标点是否在图形上
     * @param coordinate
     */

  }, {
    key: "checkEventCoordinateOn",
    value: function checkEventCoordinateOn(coordinate) {} // -------------------- 事件开始 -------------------

    /**
     * 点击事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onClick",
    value: function onClick(_ref3) {
      _ref3.id;
          _ref3.points;
          _ref3.event;
    }
    /**
     * 右击事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onRightClick",
    value: function onRightClick(_ref4) {
      _ref4.id;
          _ref4.points;
          _ref4.event;
    }
    /**
     * 鼠标进入事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(_ref5) {
      _ref5.id;
          _ref5.points;
          _ref5.event;
    }
    /**
     * 鼠标离开事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(_ref6) {
      _ref6.id;
          _ref6.points;
          _ref6.event;
    } // -------------------- 事件结束 -------------------

  }]);

  return Overlay;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 绘制实心圆
 * @param ctx
 * @param fillColor
 * @param circleCoordinate
 * @param radius
 */

function renderFillCircle(ctx, fillColor, circleCoordinate, radius) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(circleCoordinate.x, circleCoordinate.y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEVIATION = 2;
/**
 * 根据三角形三个点获取三角形面积
 * @param coordinate1
 * @param coordinate2
 * @param coordinate3
 * @return {number}
 */

function getTriangleSquare(coordinate1, coordinate2, coordinate3) {
  var x1 = Math.abs(coordinate2.x - coordinate1.x);
  var y1 = Math.abs(coordinate2.y - coordinate1.y);
  var x2 = Math.abs(coordinate3.x - coordinate1.x);
  var y2 = Math.abs(coordinate3.y - coordinate1.y);
  return Math.abs(x1 * y2 - x2 * y1) / 2;
}
/**
 * 点是否在圆内
 * @param circleCenterCoordinate
 * @param radius
 * @param targetCoordinate
 * @returns {boolean}
 */

function checkCoordinateInCircle(circleCenterCoordinate, radius, targetCoordinate) {
  if (!targetCoordinate) {
    return false;
  }

  var difX = targetCoordinate.x - circleCenterCoordinate.x;
  var difY = targetCoordinate.y - circleCenterCoordinate.y;
  return !(difX * difX + difY * difY > radius * radius);
}
/**
 * 检查点是否在三角形内部
 * @param triangleCoordinates
 * @param targetCoordinate
 * @return {boolean}
 */

function checkCoordinateInTriangle(triangleCoordinates, targetCoordinate) {
  var square = getTriangleSquare(triangleCoordinates[0], triangleCoordinates[1], triangleCoordinates[2]);
  var compareSquare = getTriangleSquare(triangleCoordinates[0], triangleCoordinates[1], targetCoordinate) + getTriangleSquare(triangleCoordinates[0], triangleCoordinates[2], targetCoordinate) + getTriangleSquare(triangleCoordinates[1], triangleCoordinates[2], targetCoordinate);
  return Math.abs(square - compareSquare) < DEVIATION;
}
/**
 * 检查点是否在三角形菱形内部
 * @param centerCoordinate
 * @param width
 * @param height
 * @param targetCoordinate
 * @return {boolean}
 */

function checkCoordinateInDiamond(centerCoordinate, width, height, targetCoordinate) {
  var xDis = Math.abs(centerCoordinate.x - targetCoordinate.x);
  var yDis = Math.abs(centerCoordinate.y - targetCoordinate.y);
  return xDis * height + yDis * width < width * height / 2 + DEVIATION;
}
/**
 * 检查点是否在矩形内部
 * @param coordinate1
 * @param coordinate2
 * @param targetCoordinate
 * @return {boolean}
 */

function checkCoordinateInRect(coordinate1, coordinate2, targetCoordinate) {
  return targetCoordinate.x >= coordinate1.x && targetCoordinate.x <= coordinate2.x && targetCoordinate.y >= coordinate1.y && targetCoordinate.y <= coordinate2.y;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制路径
 * @param ctx
 * @param coordinates
 * @param strokeFill
 */
function renderPath(ctx, coordinates, strokeFill) {
  ctx.save();

  if (ctx.lineWidth % 2) {
    ctx.translate(0.5, 0.5);
  }

  ctx.beginPath();
  var move = true;
  coordinates.forEach(function (coordinate) {
    if (coordinate) {
      if (move) {
        ctx.moveTo(coordinate.x, coordinate.y);
        move = false;
      } else {
        ctx.lineTo(coordinate.x, coordinate.y);
      }
    }
  });
  strokeFill();
  ctx.restore();
}
function renderCloseStrokePath(ctx, coordinates) {
  renderPath(ctx, coordinates, function () {
    ctx.closePath();
    ctx.stroke();
  });
}
/**
 * 渲染填充路径
 * @param ctx
 * @param coordinates
 */

function renderCloseFillPath(ctx, coordinates) {
  renderPath(ctx, coordinates, function () {
    ctx.closePath();
    ctx.fill();
  });
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 绘制水平直线
 * @param ctx
 * @param y
 * @param left
 * @param right
 */

function renderHorizontalLine(ctx, y, left, right) {
  ctx.beginPath();
  var correction = ctx.lineWidth % 2 ? 0.5 : 0;
  ctx.moveTo(left, y + correction);
  ctx.lineTo(right, y + correction);
  ctx.stroke();
  ctx.closePath();
}
/**
 * 绘制垂直直线
 * @param ctx
 * @param x
 * @param top
 * @param bottom
 */

function renderVerticalLine(ctx, x, top, bottom) {
  ctx.beginPath();
  var correction = ctx.lineWidth % 2 ? 0.5 : 0;
  ctx.moveTo(x + correction, top);
  ctx.lineTo(x + correction, bottom);
  ctx.stroke();
  ctx.closePath();
}
/**
 * 绘制线
 * @param ctx
 * @param coordinates
 */

function renderLine(ctx, coordinates) {
  renderPath(ctx, coordinates, function () {
    ctx.stroke();
    ctx.closePath();
  });
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 获取屏幕比
 * @param canvas
 * @returns {number}
 */
function getPixelRatio(canvas) {
  return canvas.ownerDocument && canvas.ownerDocument.defaultView && canvas.ownerDocument.defaultView.devicePixelRatio || 2;
}
/**
 * 测量文字的宽度
 * @param ctx
 * @param text
 * @returns {number}
 */

function calcTextWidth(ctx, text) {
  return Math.round(ctx.measureText(text).width);
}
/**
 * 创建字体
 * @param fontSize
 * @param fontFamily
 * @param fontWeight
 * @returns {string}
 */

function createFont() {
  var fontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var fontWeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
  var fontFamily = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Lato';
  return "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
}
/**
 * 获取文字框宽度
 * @param ctx
 * @param text
 * @param options
 * @returns {number}
 */

function getTextRectWidth(ctx, text, options) {
  ctx.font = createFont(options.size, options.weight, options.family);
  var textWidth = calcTextWidth(ctx, text);
  return options.paddingLeft + options.paddingRight + textWidth + (options.borderSize || 0) * 2;
}
/**
 * 获取文字框高度
 * @param options
 * @returns {number}
 */

function getTextRectHeight(options) {
  return options.paddingTop + options.paddingBottom + options.size + (options.borderSize || 0) * 2;
}

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SHAPE_DRAW_STEP_START = 1; // 标记图形绘制步骤结束

var SHAPE_DRAW_STEP_FINISHED = -1;
/**
 * 事件操作元素类型
 * @type {{OTHER: string, POINT: string, NONE: string}}
 */

var ShapeEventOperateElement = {
  OTHER: 'other',
  POINT: 'point',
  NONE: 'none'
};
/**
 * 绘制类型
 * @type {{ARC: string, POLYGON: string, LINE: string, CONTINUOUS_LINE: string, TEXT: string}}
 */

var ShapeElementType = {
  LINE: 'line',
  TEXT: 'text',
  CONTINUOUS_LINE: 'continuous_line',
  POLYGON: 'polygon',
  ARC: 'arc'
};
/**
 * 线类型
 * @type {{VERTICAL: number, COMMON: number, HORIZONTAL: number}}
 */

var LineType = {
  COMMON: 0,
  HORIZONTAL: 1,
  VERTICAL: 2
};
/**
 * 图形模式
 */

var ShapeMode = {
  NORMAL: 'normal',
  WEAK_MAGNET: 'weak_magnet',
  STRONG_MAGNET: 'strong_magnet'
};
/**
 * 获取绘制线类型
 * @param coordinate1
 * @param coordinate2
 * @private
 */

function getLineType(coordinate1, coordinate2) {
  if (coordinate1.x === coordinate2.x) {
    return LineType.VERTICAL;
  }

  if (coordinate1.y === coordinate2.y) {
    return LineType.HORIZONTAL;
  }

  return LineType.COMMON;
}
/**
 * 标记图形
 */


var Shape = /*#__PURE__*/function (_Overlay) {
  _inherits(Shape, _Overlay);

  var _super = _createSuper$n(Shape);

  function Shape(_ref) {
    var _this;

    var id = _ref.id,
        name = _ref.name,
        totalStep = _ref.totalStep,
        chartStore = _ref.chartStore,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        points = _ref.points,
        styles = _ref.styles,
        lock = _ref.lock,
        mode = _ref.mode,
        data = _ref.data;

    _classCallCheck(this, Shape);

    _this = _super.call(this, {
      id: id,
      chartStore: chartStore,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._name = name;
    _this._totalStep = totalStep;
    _this._lock = lock;
    _this._mode = ShapeMode.NORMAL;

    _this.setMode(mode);

    _this._data = data;
    _this._drawStep = SHAPE_DRAW_STEP_START;
    _this._points = [];

    _this.setPoints(points);

    _this.setStyles(styles, chartStore.styleOptions().shape);

    _this._prevPressPoint = null;
    _this._prevPoints = null;
    _this._coordinates = [];
    return _this;
  }
  /**
   * 加载点
   * @param points
   */


  _createClass(Shape, [{
    key: "setPoints",
    value: function setPoints(points) {
      if (isArray(points) && points.length > 0) {
        var repeatTotalStep;

        if (points.length >= this._totalStep - 1) {
          this._drawStep = SHAPE_DRAW_STEP_FINISHED;
          this._points = points.slice(0, this._totalStep - 1);
          repeatTotalStep = this._totalStep - 1;
        } else {
          this._drawStep = points.length + 1;
          this._points = clone(points);
          repeatTotalStep = points.length;
        } // 重新演练绘制一遍，防止因为点不对而绘制出错误的图形


        for (var i = 0; i < repeatTotalStep; i++) {
          this.performEventMoveForDrawing({
            step: i + 2,
            mode: this._mode,
            points: this._points,
            movePoint: this._points[i],
            xAxis: this._xAxis,
            yAxis: this._yAxis
          });
        }

        if (this._drawStep === SHAPE_DRAW_STEP_FINISHED) {
          this.performEventPressedMove({
            mode: this._mode,
            points: this._points,
            pressPointIndex: this._points.length - 1,
            pressPoint: this._points[this._points.length - 1],
            xAxis: this._xAxis,
            yAxis: this._yAxis
          });
        }
      }
    }
    /**
     * 时间戳转换成x轴上点的位置
     * @param point
     * @return {*|number}
     * @private
     */

  }, {
    key: "_timestampOrDataIndexToCoordinateX",
    value: function _timestampOrDataIndexToCoordinateX(_ref2) {
      var timestamp = _ref2.timestamp,
          dataIndex = _ref2.dataIndex;

      if (timestamp) {
        dataIndex = this._chartStore.timeScaleStore().timestampToDataIndex(timestamp);
      }

      return this._xAxis.convertToPixel(dataIndex);
    }
    /**
     * 绘制线
     * @param ctx
     * @param lines
     * @param styles
     * @param defaultStyles
     * @private
     */

  }, {
    key: "_drawLines",
    value: function _drawLines(ctx, lines, styles, defaultStyles) {
      ctx.save();
      ctx.strokeStyle = styles.color || defaultStyles.color;
      ctx.lineWidth = styles.size || defaultStyles.size;

      if (styles.style === LineStyle.DASH) {
        ctx.setLineDash(styles.dashValue || defaultStyles.dashValue);
      }

      lines.forEach(function (coordinates) {
        if (coordinates.length > 1) {
          var lineType = getLineType(coordinates[0], coordinates[1]);

          switch (lineType) {
            case LineType.COMMON:
              {
                renderLine(ctx, coordinates);
                break;
              }

            case LineType.HORIZONTAL:
              {
                renderHorizontalLine(ctx, coordinates[0].y, coordinates[0].x, coordinates[1].x);
                break;
              }

            case LineType.VERTICAL:
              {
                renderVerticalLine(ctx, coordinates[0].x, coordinates[0].y, coordinates[1].y);
                break;
              }
          }
        }
      });
      ctx.restore();
    }
    /**
     * 绘制连续线
     * @param ctx
     * @param continuousLines
     * @param styles
     * @param styles
     * @private
     */

  }, {
    key: "_drawContinuousLines",
    value: function _drawContinuousLines(ctx, continuousLines, styles, defaultStyles) {
      ctx.save();
      ctx.strokeStyle = styles.color || defaultStyles.color;
      ctx.lineWidth = styles.size || defaultStyles.size;

      if (styles.style === LineStyle.DASH) {
        ctx.setLineDash(styles.dashValue || defaultStyles.dashValue);
      }

      continuousLines.forEach(function (coordinates) {
        if (coordinates.length > 0) {
          renderLine(ctx, coordinates);
        }
      });
      ctx.restore();
    }
    /**
     * 绘制多边形
     * @param ctx
     * @param polygons
     * @param styles
     * @param defaultStyles
     * @private
     */

  }, {
    key: "_drawPolygons",
    value: function _drawPolygons(ctx, polygons, styles, defaultStyles) {
      ctx.save();
      var strokeFill;

      if (styles.style === StrokeFillStyle.FILL) {
        ctx.fillStyle = (styles.fill || defaultStyles.fill).color;
        strokeFill = renderCloseFillPath;
      } else {
        var strokeStyles = styles.stroke || defaultStyles.stroke;

        if (strokeStyles.style === LineStyle.DASH) {
          ctx.setLineDash(strokeStyles.dashValue);
        }

        ctx.lineWidth = strokeStyles.size;
        ctx.strokeStyle = strokeStyles.color;
        strokeFill = renderCloseStrokePath;
      }

      polygons.forEach(function (coordinates) {
        if (coordinates.length > 0) {
          strokeFill(ctx, coordinates);
        }
      });
      ctx.restore();
    }
    /**
     * 画圆弧
     * @param ctx
     * @param arcs
     * @param styles
     * @param defaultStyles
     * @private
     */

  }, {
    key: "_drawArcs",
    value: function _drawArcs(ctx, arcs, styles, defaultStyles) {
      ctx.save();

      if (styles.style === StrokeFillStyle.FILL) {
        ctx.fillStyle = (styles.fill || defaultStyles.fill).color;
      } else {
        var strokeStyles = styles.stroke || defaultStyles.stroke;

        if (strokeStyles.style === LineStyle.DASH) {
          ctx.setLineDash(strokeStyles.dashValue);
        }

        ctx.lineWidth = strokeStyles.size;
        ctx.strokeStyle = strokeStyles.color;
      }

      arcs.forEach(function (_ref3) {
        var x = _ref3.x,
            y = _ref3.y,
            radius = _ref3.radius,
            startAngle = _ref3.startAngle,
            endAngle = _ref3.endAngle;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);

        if (styles.style === StrokeFillStyle.FILL) {
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.stroke();
          ctx.closePath();
        }
      });
      ctx.restore();
    }
    /**
     * 绘制文字
     * @param ctx
     * @param texts
     * @param styles
     * @param defaultStyles
     * @private
     */

  }, {
    key: "_drawText",
    value: function _drawText(ctx, texts, styles, defaultStyles) {
      ctx.save();
      var fillStroke;

      if (styles.style === StrokeFillStyle.STROKE) {
        ctx.strokeStyle = styles.color || defaultStyles.color;
        fillStroke = ctx.strokeText;
      } else {
        ctx.fillStyle = styles.color || defaultStyles.color;
        fillStroke = ctx.fillText;
      }

      ctx.font = createFont(styles.size || defaultStyles.size, styles.family || defaultStyles.family, styles.weight || defaultStyles.weight);
      var offset = styles.offset || defaultStyles.offset || [0, 0];
      texts.forEach(function (_ref4) {
        var x = _ref4.x,
            y = _ref4.y,
            text = _ref4.text;
        fillStroke.call(ctx, text, x + offset[1], y + offset[0]);
      });
      ctx.restore();
    }
    /**
     * 绘制
     * @param ctx
     */

  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this2 = this;

      this._coordinates = this._points.map(function (_ref5) {
        var timestamp = _ref5.timestamp,
            value = _ref5.value,
            dataIndex = _ref5.dataIndex;
        return {
          x: _this2._timestampOrDataIndexToCoordinateX({
            timestamp: timestamp,
            dataIndex: dataIndex
          }),
          y: _this2._yAxis.convertToPixel(value)
        };
      });

      var shapeOptions = this._styles || this._chartStore.styleOptions().shape;

      if (this._drawStep !== SHAPE_DRAW_STEP_START && this._coordinates.length > 0) {
        var viewport = {
          width: this._xAxis.width(),
          height: this._yAxis.height()
        };
        var precision = {
          price: this._chartStore.pricePrecision(),
          volume: this._chartStore.volumePrecision()
        };
        this._shapeDataSources = this.createShapeDataSource({
          step: this._drawStep,
          mode: this._mode,
          points: this._points,
          coordinates: this._coordinates,
          viewport: {
            width: this._xAxis.width(),
            height: this._yAxis.height()
          },
          precision: {
            price: this._chartStore.pricePrecision(),
            volume: this._chartStore.volumePrecision()
          },
          styles: shapeOptions,
          xAxis: this._xAxis,
          yAxis: this._yAxis,
          data: this._data
        }) || [];

        this._shapeDataSources.forEach(function (_ref6) {
          var type = _ref6.type,
              isDraw = _ref6.isDraw,
              styles = _ref6.styles,
              _ref6$dataSource = _ref6.dataSource,
              dataSource = _ref6$dataSource === void 0 ? [] : _ref6$dataSource;

          if (isDraw) {
            switch (type) {
              case ShapeElementType.LINE:
                {
                  _this2._drawLines(ctx, dataSource, styles || shapeOptions.line, shapeOptions.line);

                  break;
                }

              case ShapeElementType.CONTINUOUS_LINE:
                {
                  _this2._drawContinuousLines(ctx, dataSource, styles || shapeOptions.line, shapeOptions.line);

                  break;
                }

              case ShapeElementType.POLYGON:
                {
                  _this2._drawPolygons(ctx, dataSource, styles || shapeOptions.polygon, shapeOptions.polygon);

                  break;
                }

              case ShapeElementType.ARC:
                {
                  _this2._drawArcs(ctx, dataSource, styles || shapeOptions.arc, shapeOptions.arc);

                  break;
                }

              case ShapeElementType.TEXT:
                {
                  _this2._drawText(ctx, dataSource, styles || shapeOptions.text, shapeOptions.text);

                  break;
                }
            }
          }
        });

        if (this.drawExtend) {
          ctx.save();
          this.drawExtend({
            ctx: ctx,
            dataSource: this._shapeDataSources,
            styles: shapeOptions,
            viewport: viewport,
            precision: precision,
            mode: this._mode,
            xAxis: this._xAxis,
            yAxis: this._yAxis,
            data: this._data
          });
          ctx.restore();
        }
      }

      var shapeEventOperate = this._chartStore.shapeStore().eventOperate();

      if (shapeEventOperate.hover.id === this._id && shapeEventOperate.hover.element !== ShapeEventOperateElement.NONE || shapeEventOperate.click.id === this._id && shapeEventOperate.click.element !== ShapeEventOperateElement.NONE || this.isDrawing()) {
        this._coordinates.forEach(function (_ref7, index) {
          var x = _ref7.x,
              y = _ref7.y;
          var radius = shapeOptions.point.radius;
          var color = shapeOptions.point.backgroundColor;
          var borderColor = shapeOptions.point.borderColor;
          var borderSize = shapeOptions.point.borderSize;

          if (shapeEventOperate.hover.id === _this2._id && shapeEventOperate.hover.element === ShapeEventOperateElement.POINT && index === shapeEventOperate.hover.elementIndex) {
            radius = shapeOptions.point.activeRadius;
            color = shapeOptions.point.activeBackgroundColor;
            borderColor = shapeOptions.point.activeBorderColor;
            borderSize = shapeOptions.point.activeBorderSize;
          }

          renderFillCircle(ctx, borderColor, {
            x: x,
            y: y
          }, radius + borderSize);
          renderFillCircle(ctx, color, {
            x: x,
            y: y
          }, radius);
        });
      }
    }
    /**
     * 设置是否锁定
     * @param lock
     */

  }, {
    key: "setLock",
    value: function setLock(lock) {
      this._lock = lock;
    }
    /**
     * 获取名字
     * @return {*}
     */

  }, {
    key: "name",
    value: function name() {
      return this._name;
    }
    /**
     * 是否锁定
     * @return {*}
     */

  }, {
    key: "lock",
    value: function lock() {
      return this._lock;
    }
    /**
     * 总步骤数
     * @return {*}
     */

  }, {
    key: "totalStep",
    value: function totalStep() {
      return this._totalStep;
    }
    /**
     * 获取模式类型
     * @returns
     */

  }, {
    key: "mode",
    value: function mode() {
      return this._mode;
    }
    /**
     * 设置模式
     * @param mode
     */

  }, {
    key: "setMode",
    value: function setMode(mode) {
      if (Object.values(ShapeMode).indexOf(mode) > -1) {
        this._mode = mode;
      }
    }
    /**
     * 设置数据
     * @param data
     */

  }, {
    key: "setData",
    value: function setData(data) {
      if (data !== this._data) {
        this._data = data;
        return true;
      }

      return false;
    }
    /**
     * 获取数据
     * @returns
     */

  }, {
    key: "data",
    value: function data() {
      return this._data;
    }
    /**
     * 获取点
     * @return {[]}
     */

  }, {
    key: "points",
    value: function points() {
      return this._points;
    }
    /**
     * 是否在绘制中
     * @return {boolean}
     */

  }, {
    key: "isDrawing",
    value: function isDrawing() {
      return this._drawStep !== SHAPE_DRAW_STEP_FINISHED;
    }
    /**
     * 是否开始
     * @returns
     */

  }, {
    key: "isStart",
    value: function isStart() {
      return this._drawStep === SHAPE_DRAW_STEP_START;
    }
    /**
     * 检查事件点是否在图形上
     * @param eventCoordinate
     * @return {{id: *, elementIndex: number, element: string}}
     */

  }, {
    key: "checkEventCoordinateOn",
    value: function checkEventCoordinateOn(eventCoordinate) {
      var shapeOptions = this._styles || this._chartStore.styleOptions().shape; // 检查鼠标点是否在图形的点上


      var start = this._coordinates.length - 1;

      for (var i = start; i > -1; i--) {
        if (checkCoordinateInCircle(this._coordinates[i], shapeOptions.point.radius, eventCoordinate)) {
          return {
            id: this._id,
            element: ShapeEventOperateElement.POINT,
            elementIndex: i,
            instance: this
          };
        }
      } // 检查鼠标点是否在点构成的其它图形上


      if (this._shapeDataSources) {
        var _iterator = _createForOfIteratorHelper$4(this._shapeDataSources),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                key = _step$value.key,
                type = _step$value.type,
                isCheck = _step$value.isCheck,
                _step$value$dataSourc = _step$value.dataSource,
                dataSource = _step$value$dataSourc === void 0 ? [] : _step$value$dataSourc;

            if (isCheck) {
              for (var _i = 0; _i < dataSource.length; _i++) {
                var sources = dataSource[_i];

                if (this.checkEventCoordinateOnShape({
                  key: key,
                  type: type,
                  dataSource: sources,
                  eventCoordinate: eventCoordinate
                })) {
                  return {
                    id: this._id,
                    element: ShapeEventOperateElement.OTHER,
                    elementIndex: _i,
                    instance: this
                  };
                }
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * 不同的模式下处理值
     * @param value
     * @param dataIndex
     * @param paneId
     */

  }, {
    key: "_performValue",
    value: function _performValue(y, dataIndex, paneId) {
      var value = this._yAxis.convertFromPixel(y);

      if (this._mode === ShapeMode.NORMAL || paneId !== 'candle_pane') {
        return value;
      }

      var kLineData = this._chartStore.timeScaleStore().getDataByDataIndex(dataIndex);

      if (!kLineData) {
        return value;
      }

      if (value > kLineData.high) {
        if (this._mode === ShapeMode.WEAK_MAGNET) {
          var highY = this._yAxis.convertToPixel(kLineData.high);

          var buffValue = this._yAxis.convertFromPixel(highY - 8);

          if (value < buffValue) {
            return kLineData.high;
          }

          return value;
        }

        return kLineData.high;
      }

      if (value < kLineData.low) {
        if (this._mode === ShapeMode.WEAK_MAGNET) {
          var lowY = this._yAxis.convertToPixel(kLineData.low);

          var _buffValue = this._yAxis.convertFromPixel(lowY - 8);

          if (value > _buffValue) {
            return kLineData.low;
          }

          return value;
        }

        return kLineData.low;
      }

      var max = Math.max(kLineData.open, kLineData.close);

      if (value > max) {
        if (value - max < kLineData.high - value) {
          return max;
        }

        return kLineData.high;
      }

      var min = Math.min(kLineData.open, kLineData.close);

      if (value < min) {
        if (value - kLineData.low < min - value) {
          return kLineData.low;
        }

        return min;
      }

      if (max - value < value - min) {
        return max;
      }

      return min;
    }
    /**
     * 绘制过程中鼠标移动事件
     * @param coordinate
     * @param event
     */

  }, {
    key: "mouseMoveForDrawing",
    value: function mouseMoveForDrawing(coordinate, event) {
      var dataIndex = this._xAxis.convertFromPixel(coordinate.x);

      var timestamp = this._chartStore.timeScaleStore().dataIndexToTimestamp(dataIndex);

      var value = this._performValue(coordinate.y, dataIndex, event.paneId);

      this._points[this._drawStep - 1] = {
        timestamp: timestamp,
        value: value,
        dataIndex: dataIndex
      };
      this.performEventMoveForDrawing({
        step: this._drawStep,
        mode: this._mode,
        points: this._points,
        movePoint: {
          timestamp: timestamp,
          value: value,
          dataIndex: dataIndex
        },
        xAxis: this._xAxis,
        yAxis: this._yAxis
      });
      this.onDrawing({
        id: this._id,
        step: this._drawStep,
        points: this._points
      });
    }
    /**
     * 鼠标左边按钮点击事件
     */

  }, {
    key: "mouseLeftButtonDownForDrawing",
    value: function mouseLeftButtonDownForDrawing() {
      if (this._drawStep === this._totalStep - 1) {
        this._drawStep = SHAPE_DRAW_STEP_FINISHED;

        this._chartStore.shapeStore().progressInstanceComplete();

        this.onDrawEnd({
          id: this._id,
          points: this._points
        });
      } else {
        this._drawStep++;
      }
    }
    /**
     * 鼠标按住移动方法
     * @param coordinate
     * @param event
     */

  }, {
    key: "mousePressedPointMove",
    value: function mousePressedPointMove(coordinate, event) {
      var shapeEventOperate = this._chartStore.shapeStore().eventOperate();

      var elementIndex = shapeEventOperate.click.elementIndex;

      if (!this._lock && shapeEventOperate.click.id === this._id && shapeEventOperate.click.element === ShapeEventOperateElement.POINT && elementIndex !== -1) {
        var dataIndex = this._xAxis.convertFromPixel(coordinate.x);

        var timestamp = this._chartStore.timeScaleStore().dataIndexToTimestamp(dataIndex);

        var value = this._performValue(coordinate.y, dataIndex, event.paneId);

        this._points[elementIndex].timestamp = timestamp;
        this._points[elementIndex].dataIndex = dataIndex;
        this._points[elementIndex].value = value;
        this.performEventPressedMove({
          points: this._points,
          mode: this._mode,
          pressPointIndex: elementIndex,
          pressPoint: {
            dataIndex: dataIndex,
            timestamp: timestamp,
            value: value
          },
          xAxis: this._xAxis,
          yAxis: this._yAxis
        });
        this.onPressedMove({
          id: this._id,
          element: ShapeEventOperateElement.POINT,
          points: this._points,
          event: event
        });
      }
    }
    /**
     * 按住非点拖动开始事件
     * @param coordinate
     */

  }, {
    key: "startPressedOtherMove",
    value: function startPressedOtherMove(coordinate) {
      var dataIndex = this._xAxis.convertFromPixel(coordinate.x);

      var value = this._yAxis.convertFromPixel(coordinate.y);

      this._prevPressPoint = {
        dataIndex: dataIndex,
        value: value
      };
      this._prevPoints = clone(this._points);
    }
    /**
     * 按住非点拖动时事件
     * @param coordinate
     */

  }, {
    key: "mousePressedOtherMove",
    value: function mousePressedOtherMove(coordinate, event) {
      var _this3 = this;

      if (!this._lock && this._prevPressPoint) {
        var dataIndex = this._xAxis.convertFromPixel(coordinate.x);

        var value = this._yAxis.convertFromPixel(coordinate.y);

        var difDataIndex = dataIndex - this._prevPressPoint.dataIndex;
        var difValue = value - this._prevPressPoint.value;
        this._points = this._prevPoints.map(function (point) {
          // 防止因为创建时传入进来的point没有dataIndex，导致无法计算时间戳问题
          if (!isValid(point.dataIndex)) {
            point.dataIndex = _this3._chartStore.timeScaleStore().timestampToDataIndex(point.timestamp);
          }

          var dataIndex = point.dataIndex + difDataIndex;
          var value = point.value + difValue;
          return {
            dataIndex: dataIndex,
            value: value,
            timestamp: _this3._chartStore.timeScaleStore().dataIndexToTimestamp(dataIndex)
          };
        });
        this.onPressedMove({
          id: this._id,
          element: ShapeEventOperateElement.OTHER,
          points: this._points,
          event: event
        });
      }
    } // -------------------- 事件开始 -------------------

    /**
     * 开始绘制事件回调
     * @param id
     */

  }, {
    key: "onDrawStart",
    value: function onDrawStart(_ref8) {
      _ref8.id;
    }
    /**
     * 绘制过程中事件回调
     * @param id
     * @param step
     * @param points
     */

  }, {
    key: "onDrawing",
    value: function onDrawing(_ref9) {
      _ref9.id;
          _ref9.step;
          _ref9.points;
    }
    /**
     * 绘制结束事件回调
     * @param id
     * @param points
     */

  }, {
    key: "onDrawEnd",
    value: function onDrawEnd(_ref10) {
      _ref10.id;
          _ref10.points;
    }
    /**
     * 按住移动事件
     * @param id
     * @param points
     * @param event
     */

  }, {
    key: "onPressedMove",
    value: function onPressedMove(_ref11) {
      _ref11.id;
          _ref11.points;
          _ref11.event;
    }
    /**
     * 移除事件回调
     * @param id
     */

  }, {
    key: "onRemove",
    value: function onRemove(_ref12) {
      _ref12.id;
    } // -------------------- 事件结束 -------------------
    // --------------------- 自定义时需要实现的一些方法开始 ----------------------

    /**
     * 检查事件坐标是否在图形上
     * @param key
     * @param type
     * @param points
     * @param mousePoint
     */

  }, {
    key: "checkEventCoordinateOnShape",
    value: function checkEventCoordinateOnShape(_ref13) {
      _ref13.key;
          _ref13.type;
          _ref13.dataSource;
          _ref13.eventCoordinate;
    }
    /**
     * 创建图形配置
     * @param step
     * @param points
     * @param coordinates
     * @param viewport
     * @param precision
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "createShapeDataSource",
    value: function createShapeDataSource(_ref14) {
      _ref14.step;
          _ref14.mode;
          _ref14.points;
          _ref14.coordinates;
          _ref14.viewport;
          _ref14.precision;
          _ref14.styles;
          _ref14.xAxis;
          _ref14.yAxis;
          _ref14.data;
    }
    /**
     * 处理绘制过程中鼠标移动
     * @param step
     * @param mode
     * @param points
     * @param point
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "performEventMoveForDrawing",
    value: function performEventMoveForDrawing(_ref15) {
      _ref15.step;
          _ref15.mode;
          _ref15.points;
          _ref15.movePoint;
          _ref15.xAxis;
          _ref15.yAxis;
    }
    /**
     * 处理鼠标按住移动
     * @param mode
     * @param points
     * @param pressPointIndex
     * @param point
     * @param xAxis
     * @param yAxis
     */

  }, {
    key: "performEventPressedMove",
    value: function performEventPressedMove(_ref16) {
      _ref16.mode;
          _ref16.points;
          _ref16.pressPointIndex;
          _ref16.pressPoint;
          _ref16.xAxis;
          _ref16.yAxis;
    } // --------------------- 自定义时需要实现的一些方法结束 ----------------------

  }]);

  return Shape;
}(Overlay);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 刷新层级
 * @type {{OVERLAY: number, MAIN: number, NONE: number, FULL: number}}
 */
var InvalidateLevel = {
  NONE: 0,
  OVERLAY: 1,
  MAIN: 2,
  FULL: 3
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ShapeStore = /*#__PURE__*/function () {
  function ShapeStore(chartStore) {
    _classCallCheck(this, ShapeStore);

    this._chartStore = chartStore; // 图形标记映射

    this._templates = this._createTemplates(); // 图形标记鼠标操作信息

    this._eventOperate = {
      click: {
        id: '',
        element: ShapeEventOperateElement.NONE,
        elementIndex: -1
      },
      hover: {
        id: '',
        element: ShapeEventOperateElement.NONE,
        elementIndex: -1
      }
    }; // 进行中的实例

    this._progressInstance = null; // 事件按住的示例

    this._pressedInstance = null; // 图形实例

    this._instances = new Map();
  }
  /**
   * 创建模板
   * @returns
   */


  _createClass(ShapeStore, [{
    key: "_createTemplates",
    value: function _createTemplates() {
      var templates = {};
      var extensions = extension.shapeExtensions;

      for (var name in extensions) {
        var TemplateClass = this._createTemplateClass(extensions[name]);

        if (TemplateClass) {
          templates[name] = TemplateClass;
        }
      }

      return templates;
    }
    /**
     * 创建模板类
     * @param name
     * @param totalStep
     * @param checkEventCoordinateOnShape
     * @param createShapeDataSource
     * @param performEventPressedMove
     * @param performEventMoveForDrawing
     * @param drawExtend
     * @return
     */

  }, {
    key: "_createTemplateClass",
    value: function _createTemplateClass(_ref) {
      var name = _ref.name,
          totalStep = _ref.totalStep,
          checkEventCoordinateOnShape = _ref.checkEventCoordinateOnShape,
          createShapeDataSource = _ref.createShapeDataSource,
          performEventPressedMove = _ref.performEventPressedMove,
          performEventMoveForDrawing = _ref.performEventMoveForDrawing,
          drawExtend = _ref.drawExtend;

      if (!name || !isNumber(totalStep) || !isFunction(checkEventCoordinateOnShape) || !isFunction(createShapeDataSource)) {
        logWarn('', '', 'Required attribute "name" and "totalStep", method "checkEventCoordinateOnShape" and "createShapeDataSource", new shape cannot be generated!!!');
        return null;
      }

      var Template = /*#__PURE__*/function (_Shape) {
        _inherits(Template, _Shape);

        var _super = _createSuper$m(Template);

        function Template(_ref2) {
          var id = _ref2.id,
              chartStore = _ref2.chartStore,
              xAxis = _ref2.xAxis,
              yAxis = _ref2.yAxis,
              points = _ref2.points,
              styles = _ref2.styles,
              lock = _ref2.lock,
              mode = _ref2.mode,
              data = _ref2.data;

          _classCallCheck(this, Template);

          return _super.call(this, {
            id: id,
            name: name,
            totalStep: totalStep,
            chartStore: chartStore,
            xAxis: xAxis,
            yAxis: yAxis,
            points: points,
            styles: styles,
            lock: lock,
            mode: mode,
            data: data
          });
        }

        return _createClass(Template);
      }(Shape);

      Template.prototype.checkEventCoordinateOnShape = checkEventCoordinateOnShape;
      Template.prototype.createShapeDataSource = createShapeDataSource;

      if (isFunction(performEventPressedMove)) {
        Template.prototype.performEventPressedMove = performEventPressedMove;
      }

      if (isFunction(performEventMoveForDrawing)) {
        Template.prototype.performEventMoveForDrawing = performEventMoveForDrawing;
      }

      if (isFunction(drawExtend)) {
        Template.prototype.drawExtend = drawExtend;
      }

      return Template;
    }
    /**
     * 添加自定义标记图形
     * @param templates
     */

  }, {
    key: "addTemplate",
    value: function addTemplate(templates) {
      var _this = this;

      templates.forEach(function (tmp) {
        var Template = _this._createTemplateClass(tmp);

        if (Template) {
          _this._templates[tmp.name] = Template;
        }
      });
    }
    /**
     * 获取图形标记模板类
     * @param name
     * @return {*}
     */

  }, {
    key: "getTemplate",
    value: function getTemplate(name) {
      return this._templates[name];
    }
    /**
     * 获取实例
     * @param shapeId
     * @returns
     */

  }, {
    key: "getInstance",
    value: function getInstance(shapeId) {
      var _iterator = _createForOfIteratorHelper$3(this._instances),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          var shape = (entry[1] || []).find(function (s) {
            return s.id() === shapeId;
          });

          if (shape) {
            return shape;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
    /**
     * 是否有实例
     * @param shapeId
     * @returns
     */

  }, {
    key: "hasInstance",
    value: function hasInstance(shapeId) {
      return !!this.getInstance(shapeId);
    }
    /**
     * 添加标记实例
     * @param instance
     * @param paneId
     */

  }, {
    key: "addInstance",
    value: function addInstance(instance, paneId) {
      if (instance.isDrawing()) {
        this._progressInstance = {
          paneId: paneId,
          instance: instance,
          fixed: isValid(paneId)
        };
      } else {
        if (!this._instances.has(paneId)) {
          this._instances.set(paneId, []);
        }

        this._instances.get(paneId).push(instance);
      }

      this._chartStore.invalidate(InvalidateLevel.OVERLAY);
    }
    /**
     * 获取进行中的实例
     * @returns
     */

  }, {
    key: "progressInstance",
    value: function progressInstance() {
      return this._progressInstance || {};
    }
    /**
     * 进行中的实例完成
     */

  }, {
    key: "progressInstanceComplete",
    value: function progressInstanceComplete() {
      var _this$progressInstanc = this.progressInstance(),
          instance = _this$progressInstanc.instance,
          paneId = _this$progressInstanc.paneId;

      if (instance && !instance.isDrawing()) {
        if (!this._instances.has(paneId)) {
          this._instances.set(paneId, []);
        }

        this._instances.get(paneId).push(instance);

        this._progressInstance = null;
      }
    }
    /**
     * 更新进行中的实例
     * @param yAxis
     * @param paneId
     */

  }, {
    key: "updateProgressInstance",
    value: function updateProgressInstance(yAxis, paneId) {
      var _this$progressInstanc2 = this.progressInstance(),
          instance = _this$progressInstanc2.instance,
          fixed = _this$progressInstanc2.fixed;

      if (instance && !fixed) {
        instance.setYAxis(yAxis);
        this._progressInstance.paneId = paneId;
      }
    }
    /**
     * 获取按住的实例
     * @returns
     */

  }, {
    key: "pressedInstance",
    value: function pressedInstance() {
      return this._pressedInstance || {};
    }
    /**
     * 更新事件按住的实例
     * @param instance
     * @param paneId
     * @param element
     */

  }, {
    key: "updatePressedInstance",
    value: function updatePressedInstance(instance, paneId, element) {
      if (instance) {
        this._pressedInstance = {
          instance: instance,
          paneId: paneId,
          element: element
        };
      } else {
        this._pressedInstance = null;
      }
    }
    /**
     * 获取图形标记的数据
     * @param paneId
     * @returns {{}}
     */

  }, {
    key: "instances",
    value: function instances(paneId) {
      return this._instances.get(paneId) || [];
    }
    /**
     * 设置图形标记实例配置
     * @param options
     */

  }, {
    key: "setInstanceOptions",
    value: function setInstanceOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var id = options.id,
          styles = options.styles,
          lock = options.lock,
          mode = options.mode,
          data = options.data;

      var defaultStyles = this._chartStore.styleOptions().shape;

      var shouldInvalidate = false;

      if (isValid(id)) {
        var instance = this.getInstance(id);

        if (instance) {
          instance.setLock(lock);
          instance.setMode(mode);

          if (instance.setStyles(styles, defaultStyles) || instance.setData(data)) {
            shouldInvalidate = true;
          }
        }
      } else {
        this._instances.forEach(function (shapes) {
          shapes.forEach(function (instance) {
            instance.setLock(lock);
            instance.setMode(mode);

            if (instance.setStyles(styles, defaultStyles) || instance.setData(data)) {
              shouldInvalidate = true;
            }
          });
        });
      }

      if (shouldInvalidate) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 获取图形标记信息
     * @param id
     * @return {{name, lock: *, styles, id, points: (*|*[])}[]|{name, lock: *, styles, id, points: (*|*[])}}
     */

  }, {
    key: "getInstanceInfo",
    value: function getInstanceInfo(shapeId) {
      var create = function create(instance) {
        return {
          name: instance.name(),
          id: instance.id(),
          totalStep: instance.totalStep(),
          lock: instance.lock(),
          mode: instance.mode(),
          points: instance.points(),
          styles: instance.styles(),
          data: instance.data()
        };
      };

      var progressInstance = this.progressInstance();

      if (isValid(shapeId)) {
        if (progressInstance.instance && progressInstance.instance.id() === shapeId) {
          return create(progressInstance.instance);
        }

        var shape = this.getInstance(shapeId);

        if (shape) {
          return create(shape);
        }
      } else {
        var infos = {};

        this._instances.forEach(function (shapes, paneId) {
          infos[paneId] = shapes.map(function (shape) {
            return create(shape);
          });

          if (progressInstance.paneId === paneId && progressInstance.instance) {
            infos[paneId].push(create(progressInstance.instance));
          }
        });

        return infos;
      }

      return null;
    }
    /**
     * 移除图形实例
     * @param shapeId 参数
     * @param isProgress
     */

  }, {
    key: "removeInstance",
    value: function removeInstance(shapeId) {
      var shouldInvalidate = false;
      var progressInstance = this.progressInstance().instance;

      if (progressInstance && (!isValid(shapeId) || progressInstance.id() === shapeId)) {
        progressInstance.onRemove({
          id: progressInstance.id()
        });
        this._progressInstance = null;
        shouldInvalidate = true;
      }

      if (isValid(shapeId)) {
        var _iterator2 = _createForOfIteratorHelper$3(this._instances),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var entry = _step2.value;
            var shapes = entry[1] || [];
            var removeIndex = shapes.findIndex(function (shape) {
              return shape.id() === shapeId;
            });

            if (removeIndex > -1) {
              shapes[removeIndex].onRemove({
                id: shapes[removeIndex].id()
              });
              shapes.splice(removeIndex, 1);

              if (shapes.length === 0) {
                this._instances.delete(entry[0]);
              }

              shouldInvalidate = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        this._instances.forEach(function (shapes) {
          if (shapes.length > 0) {
            shapes.forEach(function (shape) {
              shape.onRemove({
                id: shape.id()
              });
            });
          }
        });

        this._instances.clear();

        shouldInvalidate = true;
      }

      if (shouldInvalidate) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 获取图形标记操作信息
     * @return {{hover: {id: string, elementIndex: number, element: string}, click: {id: string, elementIndex: number, element: string}}}
     */

  }, {
    key: "eventOperate",
    value: function eventOperate() {
      return this._eventOperate;
    }
    /**
     * 设置事件操作信息
     * @param operate
     * @return
     */

  }, {
    key: "setEventOperate",
    value: function setEventOperate(operate) {
      var _this$_eventOperate = this._eventOperate,
          hover = _this$_eventOperate.hover,
          click = _this$_eventOperate.click;
      var hoverSuccess;

      if (operate.hover && (hover.id !== operate.hover.id || hover.element !== operate.hover.element || hover.elementIndex !== operate.hover.elementIndex)) {
        this._eventOperate.hover = _objectSpread$6({}, operate.hover);
        hoverSuccess = true;
      }

      var clickSuccess;

      if (operate.click && (click.id !== operate.click.id || click.element !== operate.click.element || click.elementIndex !== operate.click.elementIndex)) {
        this._eventOperate.click = _objectSpread$6({}, operate.click);
        clickSuccess = true;
      }

      return hoverSuccess || clickSuccess;
    }
    /**
     * 是否为空
     * @returns
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._instances.size === 0 && !this.progressInstance().instance;
    }
    /**
     * 是否正在绘制
     * @return
     */

  }, {
    key: "isDrawing",
    value: function isDrawing() {
      var instance = this.progressInstance().instance;
      return instance && instance.isDrawing();
    }
    /**
     * 是否按住
     * @returns
     */

  }, {
    key: "isPressed",
    value: function isPressed() {
      return !!this.pressedInstance().instance;
    }
  }]);

  return ShapeStore;
}();

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var AnnotationStore = /*#__PURE__*/function () {
  function AnnotationStore(chartStore) {
    _classCallCheck(this, AnnotationStore);

    this._chartStore = chartStore; // 注解标记

    this._annotations = new Map(); // 注解标记

    this._visibleAnnotations = new Map(); // 注解事件操作信息

    this._eventOperate = {
      id: ''
    };
  }
  /**
   * 获取注解事件操作信息
   * @return {null}
   */


  _createClass(AnnotationStore, [{
    key: "eventOperate",
    value: function eventOperate() {
      return this._eventOperate;
    }
    /**
     * 设置事件操作信息
     * @param operate
     */

  }, {
    key: "setEventOperate",
    value: function setEventOperate(operate) {
      var id = this._eventOperate.id;

      if (operate && id !== operate.id) {
        this._eventOperate = _objectSpread$5({}, operate);
      }
    }
    /**
     * 创建可见的注解数据
     */

  }, {
    key: "createVisibleAnnotations",
    value: function createVisibleAnnotations() {
      var _this = this;

      this._visibleAnnotations.clear();

      if (this._annotations.size > 0) {
        this._chartStore.visibleDataList().forEach(function (_ref) {
          var data = _ref.data,
              x = _ref.x;

          _this._annotations.forEach(function (annotations, paneId) {
            if (annotations.size > 0) {
              var annotation = annotations.get(data.timestamp) || [];

              if (annotation.length > 0) {
                var _iterator = _createForOfIteratorHelper$2(annotation),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var an = _step.value;
                    an.createSymbolCoordinate(x);

                    if (_this._visibleAnnotations.has(paneId)) {
                      _this._visibleAnnotations.get(paneId).push(an);
                    } else {
                      _this._visibleAnnotations.set(paneId, [an]);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }
          });
        });
      }
    }
    /**
     * 创建注解
     * @param annotations
     * @param paneId
     */

  }, {
    key: "add",
    value: function add(annotations, paneId) {
      var _this2 = this;

      if (!this._annotations.has(paneId)) {
        this._annotations.set(paneId, new Map());
      }

      annotations.forEach(function (annotation) {
        var idAnnotations = _this2._annotations.get(paneId);

        if (idAnnotations.has(annotation.id())) {
          idAnnotations.get(annotation.id()).push(annotation);
        } else {
          idAnnotations.set(annotation.id(), [annotation]);
        }
      });
      this.createVisibleAnnotations();

      this._chartStore.invalidate(InvalidateLevel.OVERLAY);
    }
    /**
     * 获取注解
     * @param paneId
     * @returns
     */

  }, {
    key: "get",
    value: function get(paneId) {
      return this._visibleAnnotations.get(paneId);
    }
    /**
     * 移除注解
     * @param paneId
     * @param point
     */

  }, {
    key: "remove",
    value: function remove(paneId, point) {
      var shouldAdjust = false;

      if (isValid(paneId)) {
        if (this._annotations.has(paneId)) {
          if (isValid(point)) {
            var paneAnnotations = this._annotations.get(paneId);

            var points = [].concat(point);
            points.forEach(function (_ref2) {
              var timestamp = _ref2.timestamp;

              if (paneAnnotations.has(timestamp)) {
                shouldAdjust = true;
                paneAnnotations.delete(timestamp);
              }
            });

            if (paneAnnotations.size === 0) {
              this._annotations.delete(paneId);
            }

            if (shouldAdjust) {
              this.createVisibleAnnotations();
            }
          } else {
            shouldAdjust = true;

            this._annotations.delete(paneId);

            this._visibleAnnotations.delete(paneId);
          }
        }
      } else {
        shouldAdjust = true;

        this._annotations.clear();

        this._visibleAnnotations.clear();
      }

      if (shouldAdjust) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 是否为空
     * @returns
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._visibleAnnotations.size === 0;
    }
  }]);

  return AnnotationStore;
}();

var TagStore = /*#__PURE__*/function () {
  function TagStore(chartStore) {
    _classCallCheck(this, TagStore);

    // 刷新回调
    this._chartStore = chartStore; // 标签

    this._tags = new Map();
  }
  /**
   * 根据id获取tag实例
   * @param id
   * @param paneId
   * @returns
   */


  _createClass(TagStore, [{
    key: "_getById",
    value: function _getById(id, paneId) {
      var tags = this.get(paneId);

      if (tags) {
        return tags.get(id);
      }

      return null;
    }
    /**
     * 是否包含某一个标签
     * @param id
     * @param paneId
     * @returns
     */

  }, {
    key: "has",
    value: function has(id, paneId) {
      return !!this._getById(id, paneId);
    }
    /**
     * 更新tag
     * @param id
     * @param paneId
     * @param options
     */

  }, {
    key: "update",
    value: function update(id, paneId, options) {
      var tag = this._getById(id, paneId);

      if (tag) {
        return tag.update(options);
      }

      return false;
    }
    /**
    * 根据id获取标签实例
    * @param tagId
    * @param paneId
    * @return
    */

  }, {
    key: "get",
    value: function get(paneId) {
      return this._tags.get(paneId);
    }
    /**
    * 添加标签
    * @param tags
    * @param paneId
    */

  }, {
    key: "add",
    value: function add(tags, paneId) {
      if (!this._tags.has(paneId)) {
        this._tags.set(paneId, new Map());
      }

      var idTags = this._tags.get(paneId);

      tags.forEach(function (tag) {
        idTags.set(tag.id(), tag);
      });

      this._chartStore.invalidate(InvalidateLevel.OVERLAY);
    }
    /**
    * 移除标签
    * @param paneId
    * @param tagId
    */

  }, {
    key: "remove",
    value: function remove(paneId, tagId) {
      var shouldInvalidate = false;

      if (isValid(paneId)) {
        if (this._tags.has(paneId)) {
          if (isValid(tagId)) {
            var paneTags = this._tags.get(paneId);

            var ids = [].concat(tagId);
            ids.forEach(function (id) {
              if (paneTags.has(id)) {
                shouldInvalidate = true;
                paneTags.delete(id);
              }
            });

            if (paneTags.size === 0) {
              this._tags.delete(paneId);
            }
          } else {
            shouldInvalidate = true;

            this._tags.delete(paneId);
          }
        }
      } else {
        shouldInvalidate = true;

        this._tags.clear();
      }

      if (shouldInvalidate) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
  }]);

  return TagStore;
}();

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CrosshairStore = /*#__PURE__*/function () {
  function CrosshairStore(chartStore) {
    _classCallCheck(this, CrosshairStore);

    this._chartStore = chartStore; // 十字光标信息

    this._crosshair = {};
  }
  /**
     * 设置十字光标点信息
     * @param crosshair
     * @param notInvalidate
     */


  _createClass(CrosshairStore, [{
    key: "set",
    value: function set(crosshair, notInvalidate) {
      var dataList = this._chartStore.dataList();

      var cr = crosshair || {};
      var realDataIndex;
      var dataIndex;

      if (isValid(cr.x)) {
        realDataIndex = this._chartStore.timeScaleStore().coordinateToDataIndex(cr.x);

        if (realDataIndex < 0) {
          dataIndex = 0;
        } else if (realDataIndex > dataList.length - 1) {
          dataIndex = dataList.length - 1;
        } else {
          dataIndex = realDataIndex;
        }
      } else {
        realDataIndex = dataList.length - 1;
        dataIndex = realDataIndex;
      }

      var kLineData = dataList[dataIndex];

      var realX = this._chartStore.timeScaleStore().dataIndexToCoordinate(realDataIndex);

      var prevCrosshair = {
        x: this._crosshair.x,
        y: this._crosshair.y,
        paneId: this._crosshair.paneId
      };
      this._crosshair = _objectSpread$4(_objectSpread$4({}, cr), {}, {
        realX: realX,
        kLineData: kLineData,
        realDataIndex: realDataIndex,
        dataIndex: dataIndex
      });

      if (kLineData) {
        this._chartStore.crosshairChange(this._crosshair);
      }

      if ((prevCrosshair.x !== cr.x || prevCrosshair.y !== cr.y || prevCrosshair.paneId !== cr.paneId) && !notInvalidate) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
    /**
     * 重新计算十字光标
     * @param notInvalidate
     */

  }, {
    key: "recalculate",
    value: function recalculate(notInvalidate) {
      this.set(this._crosshair, notInvalidate);
    }
    /**
     * 获取crosshair信息
     * @returns
     */

  }, {
    key: "get",
    value: function get() {
      return this._crosshair;
    }
  }]);

  return CrosshairStore;
}();

var Delegate = /*#__PURE__*/function () {
  function Delegate() {
    _classCallCheck(this, Delegate);

    this._observers = [];
  }

  _createClass(Delegate, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (this._observers.indexOf(observer) < 0) {
        this._observers.push(observer);
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(observer) {
      var index = this._observers.indexOf(observer);

      if (index > -1) {
        this._observers.splice(index, 1);
      } else {
        this._observers = [];
      }
    }
  }, {
    key: "execute",
    value: function execute(data) {
      this._observers.forEach(function (observer) {
        observer(data);
      });
    }
  }, {
    key: "hasObservers",
    value: function hasObservers() {
      return this._observers.length > 0;
    }
  }]);

  return Delegate;
}();

var ActionStore = /*#__PURE__*/function () {
  function ActionStore() {
    _classCallCheck(this, ActionStore);

    // 事件代理
    this._delegates = new Map();
  }
  /**
   * 事件执行
   * @param type
   * @param data
   */


  _createClass(ActionStore, [{
    key: "execute",
    value: function execute(type, data) {
      if (this.has(type)) {
        this._delegates.get(type).execute(data);
      }
    }
    /**
     * 是否有事件监听
     * @param type
     * @return {boolean}
     */

  }, {
    key: "has",
    value: function has(type) {
      return this._delegates.has(type) && this._delegates.get(type).hasObservers();
    }
    /**
     * 订阅事件
     * @param type
     * @param callback
     * @return {boolean}
     */

  }, {
    key: "subscribe",
    value: function subscribe(type, callback) {
      if (hasAction(type)) {
        if (!this._delegates.has(type)) {
          this._delegates.set(type, new Delegate());
        }

        this._delegates.get(type).subscribe(callback);

        return true;
      }

      return false;
    }
    /**
     * 取消事件订阅
     * @param type
     * @param callback
     * @return {boolean}
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(type, callback) {
      if (hasAction(type)) {
        var delegate = this._delegates.get(type);

        delegate.unsubscribe(callback);

        if (!delegate.hasObservers()) {
          this._delegates.delete(type);
        }

        return true;
      }

      return false;
    }
  }]);

  return ActionStore;
}();

var ChartStore = /*#__PURE__*/function () {
  function ChartStore(styleOptions, handler) {
    _classCallCheck(this, ChartStore);

    // 持有者
    this._handler = handler; // 样式配置

    this._styleOptions = clone(defaultStyleOptions);
    merge(this._styleOptions, styleOptions); // 价格精度

    this._pricePrecision = 2; // 数量精度

    this._volumePrecision = 0; // 数据源

    this._dataList = []; // 可见的数据(需要绘制的数据)

    this._visibleDataList = []; // 调整pane标记

    this._dragPaneFlag = false; // 时间轴缩放数据存储

    this._timeScaleStore = new TimeScaleStore(this); // 技术指标数据存储

    this._technicalIndicatorStore = new TechnicalIndicatorStore(this); // 图形数据存储

    this._shapeStore = new ShapeStore(this); // 注解数据存储

    this._annotationStore = new AnnotationStore(this); // 标签数据存储

    this._tagStore = new TagStore(this); // 十字光标数据存储

    this._crosshairStore = new CrosshairStore(this); // 事件存储

    this._actionStore = new ActionStore();
  }
  /**
   * 调整可见数据
   */


  _createClass(ChartStore, [{
    key: "adjustVisibleDataList",
    value: function adjustVisibleDataList() {
      // 处理需要绘制的数据
      this._visibleDataList = [];

      var from = this._timeScaleStore.from();

      var to = this._timeScaleStore.to();

      for (var i = from; i < to; i++) {
        var kLineData = this._dataList[i];

        var x = this._timeScaleStore.dataIndexToCoordinate(i);

        this._visibleDataList.push({
          index: i,
          x: x,
          data: kLineData
        });
      }

      this._annotationStore.createVisibleAnnotations();
    }
    /**
     * 获取样式配置
     * @return {{}}
     */

  }, {
    key: "styleOptions",
    value: function styleOptions() {
      return this._styleOptions;
    }
    /**
     * 设置样式配置
     * @param options
     */

  }, {
    key: "applyStyleOptions",
    value: function applyStyleOptions(options) {
      merge(this._styleOptions, options);
    }
    /**
     * 价格精度
     * @returns {number}
     */

  }, {
    key: "pricePrecision",
    value: function pricePrecision() {
      return this._pricePrecision;
    }
    /**
     * 数量精度
     * @returns {number}
     */

  }, {
    key: "volumePrecision",
    value: function volumePrecision() {
      return this._volumePrecision;
    }
    /**
     * 设置价格和数量精度
     * @param pricePrecision
     * @param volumePrecision
     */

  }, {
    key: "setPriceVolumePrecision",
    value: function setPriceVolumePrecision(pricePrecision, volumePrecision) {
      this._pricePrecision = pricePrecision;
      this._volumePrecision = volumePrecision;

      this._technicalIndicatorStore.setSeriesPrecision(pricePrecision, volumePrecision);
    }
    /**
     * 获取数据源
     * @returns {[]|*[]}
     */

  }, {
    key: "dataList",
    value: function dataList() {
      return this._dataList;
    }
    /**
     * 获取可见数据源
     * @returns {[]|*[]}
     */

  }, {
    key: "visibleDataList",
    value: function visibleDataList() {
      return this._visibleDataList;
    }
    /**
     * 添加数据
     * @param data
     * @param pos
     * @param more
     */

  }, {
    key: "addData",
    value: function addData(data, pos, more) {
      if (isObject(data)) {
        if (isArray(data)) {
          this._timeScaleStore.setLoading(false);

          this._timeScaleStore.setMore(isBoolean(more) ? more : true);

          var isFirstAdd = this._dataList.length === 0;
          this._dataList = data.concat(this._dataList);

          if (isFirstAdd) {
            this._timeScaleStore.resetOffsetRightSpace();
          }

          this._timeScaleStore.adjustFromTo();
        } else {
          var dataSize = this._dataList.length;

          if (pos >= dataSize) {
            this._dataList.push(data);

            var offsetRightBarCount = this._timeScaleStore.offsetRightBarCount();

            if (offsetRightBarCount < 0) {
              this._timeScaleStore.setOffsetRightBarCount(--offsetRightBarCount);
            }

            this._timeScaleStore.adjustFromTo();
          } else {
            this._dataList[pos] = data;
            this.adjustVisibleDataList();
          }
        }

        this._crosshairStore.recalculate(true);
      }
    }
    /**
     * 清空数据源
     */

  }, {
    key: "clearDataList",
    value: function clearDataList() {
      this._dataList = [];
      this._visibleDataList = [];

      this._timeScaleStore.clear();
    }
    /**
     * 获取时间缩放存储
     * @returns
     */

  }, {
    key: "timeScaleStore",
    value: function timeScaleStore() {
      return this._timeScaleStore;
    }
    /**
     * 获取技术指标存储
     * @returns
     */

  }, {
    key: "technicalIndicatorStore",
    value: function technicalIndicatorStore() {
      return this._technicalIndicatorStore;
    }
    /**
     * 获取图形存储
     * @returns
     */

  }, {
    key: "shapeStore",
    value: function shapeStore() {
      return this._shapeStore;
    }
    /**
     * 获取注解存储
     * @returns
     */

  }, {
    key: "annotationStore",
    value: function annotationStore() {
      return this._annotationStore;
    }
    /**
     * 获取标签数据存储
     * @returns
     */

  }, {
    key: "tagStore",
    value: function tagStore() {
      return this._tagStore;
    }
    /**
     * 获取十字光标数据存储
     * @returns
     */

  }, {
    key: "crosshairStore",
    value: function crosshairStore() {
      return this._crosshairStore;
    }
    /**
     * 获取事件数据存储
     * @returns
     */

  }, {
    key: "actionStore",
    value: function actionStore() {
      return this._actionStore;
    }
    /**
     * 刷新
     * @param invalidateLevel
     */

  }, {
    key: "invalidate",
    value: function invalidate(invalidateLevel) {
      this._handler.invalidate(invalidateLevel);
    }
    /**
     * 十字光标变化
     * @param data
     */

  }, {
    key: "crosshairChange",
    value: function crosshairChange(data) {
      this._handler.crosshair(data);
    }
    /**
     * 获取拖拽Pane标记
     * @return {boolean}
     */

  }, {
    key: "dragPaneFlag",
    value: function dragPaneFlag() {
      return this._dragPaneFlag;
    }
    /**
     * 设置拖拽Pane标记
     * @param flag
     */

  }, {
    key: "setDragPaneFlag",
    value: function setDragPaneFlag(flag) {
      this._dragPaneFlag = flag;
    }
  }]);

  return ChartStore;
}();

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 创建一个元素
 * @param name
 * @param styles
 * @return {*}
 */
function createElement(name) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = document.createElement(name);

  for (var key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      element.style[key] = styles[key];
    }
  }

  return element;
}

var Pane = /*#__PURE__*/function () {
  function Pane(props) {
    _classCallCheck(this, Pane);

    this._height = -1;
    this._container = props.container;
    this._chartStore = props.chartStore;

    this._initBefore(props);

    this._initElement();

    this._mainWidget = this._createMainWidget(this._element, props);
    this._yAxisWidget = this._createYAxisWidget(this._element, props);
  }

  _createClass(Pane, [{
    key: "_initBefore",
    value: function _initBefore(props) {}
  }, {
    key: "_initElement",
    value: function _initElement() {
      this._element = createElement('div', {
        width: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
      });
      var lastElement = this._container.lastChild;

      if (lastElement) {
        this._container.insertBefore(this._element, lastElement);
      } else {
        this._container.appendChild(this._element);
      }
    }
    /**
     * 创建主组件
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {}
    /**
     * 创建y轴组件
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createYAxisWidget",
    value: function _createYAxisWidget(container, props) {}
    /**
     * 获取宽度
     * @returns {number}
     */

  }, {
    key: "width",
    value: function width() {
      return this._element.offsetWidth;
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      this._mainWidget.setWidth(mainWidgetWidth);

      this._yAxisWidget && this._yAxisWidget.setWidth(yAxisWidgetWidth);
    }
    /**
     * 获取高度
     */

  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
    /**
     * 设置临时高度
     * @param height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;

      this._mainWidget.setHeight(height);

      this._yAxisWidget && this._yAxisWidget.setHeight(height);
    }
  }, {
    key: "setOffsetLeft",
    value: function setOffsetLeft(mainWidgetOffsetLeft, yAxisWidgetOffsetLeft) {
      this._mainWidget.setOffsetLeft(mainWidgetOffsetLeft);

      this._yAxisWidget && this._yAxisWidget.setOffsetLeft(yAxisWidgetOffsetLeft);
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this._element.offsetHeight !== this._height) {
        this._element.style.height = "".concat(this._height, "px");
      }

      this._mainWidget.layout();

      this._yAxisWidget && this._yAxisWidget.layout();
    }
    /**
     * 刷新
     * @param level
     */

  }, {
    key: "invalidate",
    value: function invalidate(level) {
      this._yAxisWidget && this._yAxisWidget.invalidate(level);

      this._mainWidget.invalidate(level);
    }
    /**
     * 创建html元素
     */

  }, {
    key: "createHtml",
    value: function createHtml(_ref) {
      var id = _ref.id,
          content = _ref.content,
          style = _ref.style,
          position = _ref.position;
      var htmlId;

      if (position === 'yAxis') {
        htmlId = this._yAxisWidget && this._yAxisWidget.createHtml({
          id: id,
          content: content,
          style: style
        });
      } else {
        htmlId = this._mainWidget.createHtml({
          id: id,
          content: content,
          style: style
        });
      }

      return htmlId;
    }
    /**
     * 移除html元素
     * @param id
     */

  }, {
    key: "removeHtml",
    value: function removeHtml(id) {
      this._yAxisWidget && this._yAxisWidget.removeHtml(id);

      this._mainWidget.removeHtml(id);
    }
    /**
     * 将canvas转换成图片
     * @param includeOverlay
     * @return {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage(includeOverlay) {
      var width = this._element.offsetWidth;
      var height = this._element.offsetHeight;
      var canvas = createElement('canvas', {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        boxSizing: 'border-box'
      });
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      var mainWidgetElement = this._mainWidget.getElement();

      var mainWidgetWidth = mainWidgetElement.offsetWidth;
      var mainWidgetHeight = mainWidgetElement.offsetHeight;
      var mainWidgetOffsetLeft = parseInt(mainWidgetElement.style.left, 10);
      ctx.drawImage(this._mainWidget.getImage(includeOverlay), mainWidgetOffsetLeft, 0, mainWidgetWidth, mainWidgetHeight);

      if (this._yAxisWidget) {
        var yAxisWidgetElement = this._yAxisWidget.getElement();

        var yAxisWidgetWidth = yAxisWidgetElement.offsetWidth;
        var yAxisWidgetHeight = yAxisWidgetElement.offsetHeight;
        var yAxisWidgetOffsetLeft = parseInt(yAxisWidgetElement.style.left, 10);
        ctx.drawImage(this._yAxisWidget.getImage(includeOverlay), yAxisWidgetOffsetLeft, 0, yAxisWidgetWidth, yAxisWidgetHeight);
      }

      return canvas;
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._container.removeChild(this._element);
    }
  }]);

  return Pane;
}();

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Widget = /*#__PURE__*/function () {
  function Widget(props) {
    _classCallCheck(this, Widget);

    this._width = 0;
    this._height = 0;

    this._initElement(props.container);

    this._mainView = this._createMainView(this._element, props);
    this._overlayView = this._createOverlayView(this._element, props);
    this._htmlBaseId = 0;
    this._htmls = new Map();
  }
  /**
   * 初始化element
   * @param container
   * @private
   */


  _createClass(Widget, [{
    key: "_initElement",
    value: function _initElement(container) {
      this._element = createElement('div', {
        margin: '0',
        padding: '0',
        position: 'absolute',
        top: '0',
        overflow: 'hidden',
        boxSizing: 'border-box'
      });
      container.appendChild(this._element);
    }
    /**
     * 创建主view
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createMainView",
    value: function _createMainView(container, props) {}
    /**
     * 创建浮层view
     * @param container
     * @param props
     * @private
     */

  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {}
    /**
     * 创建html元素
     * @param id 标识
     * @param content 内容
     * @param style 样式
     */

  }, {
    key: "createHtml",
    value: function createHtml(_ref) {
      var id = _ref.id,
          content = _ref.content,
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style;
      var html = createElement('div', _objectSpread$3({
        boxSizing: 'border-box',
        position: 'absolute',
        zIndex: 12
      }, style));

      if (isString(content)) {
        var str = content.replace(/(^\s*)|(\s*$)/g, '');
        html.innerHTML = str;
      } else {
        html.appendChild(content);
      }

      var htmlId = id || "html_".concat(++this._htmlBaseId);

      if (this._htmls.has(htmlId)) {
        this._element.replaceChild(html, this._htmls.get(htmlId));
      } else {
        this._element.appendChild(html);
      }

      this._htmls.set(htmlId, html);

      return htmlId;
    }
    /**
     * 移除html元素
     * @param id
     */

  }, {
    key: "removeHtml",
    value: function removeHtml(id) {
      var _this = this;

      if (id) {
        var ids = [].concat(id);
        ids.forEach(function (htmlId) {
          var html = _this._htmls.get(htmlId);

          if (html) {
            _this._element.removeChild(html);

            _this._htmls.delete(htmlId);
          }
        });
      } else {
        this._htmls.forEach(function (html) {
          _this._element.removeChild(html);
        });

        this._htmls.clear();
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;

      this._mainView.setWidth(width);

      this._overlayView.setWidth(width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;

      this._mainView.setHeight(height);

      this._overlayView.setHeight(height);
    }
  }, {
    key: "setOffsetLeft",
    value: function setOffsetLeft(offsetLeft) {
      this._element.style.left = "".concat(offsetLeft, "px");
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this._element.offsetWidth !== this._width) {
        this._element.style.width = "".concat(this._width, "px");
      }

      if (this._element.offsetHeight !== this._height) {
        this._element.style.height = "".concat(this._height, "px");
      }

      this._mainView.layout();

      this._overlayView.layout();
    }
    /**
     * 更新
     * @param level
     */

  }, {
    key: "invalidate",
    value: function invalidate(level) {
      switch (level) {
        case InvalidateLevel.OVERLAY:
          {
            this._overlayView.flush();

            break;
          }

        case InvalidateLevel.MAIN:
        case InvalidateLevel.FULL:
          {
            this._mainView.flush();

            this._overlayView.flush();

            break;
          }
      }
    }
    /**
     * 将widget转换成图片
     * @param includeOverlay
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage(includeOverlay) {
      var canvas = createElement('canvas', {
        width: "".concat(this._width, "px"),
        height: "".concat(this._height, "px"),
        boxSizing: 'border-box'
      });
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      canvas.width = this._width * pixelRatio;
      canvas.height = this._height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.drawImage(this._mainView.getImage(), 0, 0, this._width, this._height);

      if (includeOverlay && this._overlayView) {
        ctx.drawImage(this._overlayView.getImage(), 0, 0, this._width, this._height);
      }

      return canvas;
    }
  }]);

  return Widget;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * requestAnimationFrame兼容
 * @param fn
 */
function requestAnimationFrame(fn) {
  if (!window.requestAnimationFrame) {
    return window.setTimeout(fn, 20);
  }

  return window.requestAnimationFrame(fn);
}
/**
 * cancelAnimationFrame兼容
 * @param id
 */

function cancelAnimationFrame(id) {
  if (!window.cancelAnimationFrame) {
    clearTimeout(id);
  }

  window.cancelAnimationFrame(id);
}

var View = /*#__PURE__*/function () {
  function View(container, chartStore) {
    _classCallCheck(this, View);

    this._chartStore = chartStore;

    this._initCanvas(container);
  }
  /**
   * 初始化画布
   * @param container
   * @private
   */


  _createClass(View, [{
    key: "_initCanvas",
    value: function _initCanvas(container) {
      this._canvas = createElement('canvas', {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '2',
        boxSizing: 'border-box'
      });
      this._ctx = this._canvas.getContext('2d');
      container.appendChild(this._canvas);
    }
    /**
     * 重新绘制
     * @param extendFun
     * @private
     */

  }, {
    key: "_redraw",
    value: function _redraw(extendFun) {
      this._ctx.clearRect(0, 0, this._canvas.offsetWidth, this._canvas.offsetHeight);

      extendFun && extendFun();

      this._draw();
    }
    /**
     * 绘制
     */

  }, {
    key: "_draw",
    value: function _draw() {}
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this = this;

      if (this._height !== this._canvas.offsetHeight || this._width !== this._canvas.offsetWidth) {
        this._redraw(function () {
          var pixelRatio = getPixelRatio(_this._canvas);
          _this._canvas.style.width = "".concat(_this._width, "px");
          _this._canvas.style.height = "".concat(_this._height, "px");
          _this._canvas.width = Math.floor(_this._width * pixelRatio);
          _this._canvas.height = Math.floor(_this._height * pixelRatio);

          _this._ctx.scale(pixelRatio, pixelRatio);
        });
      } else {
        this.flush();
      }
    }
    /**
     * 刷新
     */

  }, {
    key: "flush",
    value: function flush() {
      var _this2 = this;

      if (this.requestAnimationId) {
        cancelAnimationFrame(this.requestAnimationId);
        this.requestAnimationId = null;
      }

      this.requestAnimationId = requestAnimationFrame(function () {
        _this2._redraw();
      });
    }
    /**
     * 获取图片
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage() {
      return this._canvas;
    }
  }]);

  return View;
}();

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TechnicalIndicatorView = /*#__PURE__*/function (_View) {
  _inherits(TechnicalIndicatorView, _View);

  var _super = _createSuper$l(TechnicalIndicatorView);

  function TechnicalIndicatorView(container, chartStore, xAxis, yAxis, paneId) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorView);

    _this = _super.call(this, container, chartStore);
    _this._xAxis = xAxis;
    _this._yAxis = yAxis;
    _this._paneId = paneId;
    return _this;
  }

  _createClass(TechnicalIndicatorView, [{
    key: "_draw",
    value: function _draw() {
      this._ctx.globalCompositeOperation = 'destination-over';

      this._drawContent();
    }
  }, {
    key: "_drawContent",
    value: function _drawContent() {
      this._drawTechs();

      this._drawGrid();
    }
    /**
     * 绘制网格
     */

  }, {
    key: "_drawGrid",
    value: function _drawGrid() {
      var _this2 = this;

      var gridOptions = this._chartStore.styleOptions().grid;

      if (!gridOptions.show) {
        return;
      }

      var gridHorizontalOptions = gridOptions.horizontal;

      this._ctx.save();

      if (gridHorizontalOptions.show) {
        this._ctx.strokeStyle = gridHorizontalOptions.color;
        this._ctx.lineWidth = gridHorizontalOptions.size;

        if (gridHorizontalOptions.style === LineStyle.DASH) {
          this._ctx.setLineDash(gridHorizontalOptions.dashValue);
        } else {
          this._ctx.setLineDash([]);
        }

        this._yAxis.ticks().forEach(function (tick) {
          renderHorizontalLine(_this2._ctx, tick.y, 0, _this2._width);
        });
      }

      var gridVerticalOptions = gridOptions.vertical;

      if (gridVerticalOptions.show) {
        this._ctx.strokeStyle = gridVerticalOptions.color;
        this._ctx.lineWidth = gridVerticalOptions.size;

        if (gridVerticalOptions.style === LineStyle.DASH) {
          this._ctx.setLineDash(gridVerticalOptions.dashValue);
        } else {
          this._ctx.setLineDash([]);
        }

        this._xAxis.ticks().forEach(function (tick) {
          renderVerticalLine(_this2._ctx, tick.x, 0, _this2._height);
        });
      }

      this._ctx.restore();
    }
    /**
     * 绘制指标
     */

  }, {
    key: "_drawTechs",
    value: function _drawTechs() {
      var _this3 = this;

      this._ctx.globalCompositeOperation = 'source-over';

      var techOptions = this._chartStore.styleOptions().technicalIndicator;

      var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

      techs.forEach(function (tech) {
        var plots = tech.plots;
        var lines = [];

        var dataList = _this3._chartStore.dataList();

        var techResult = tech.result;
        var styles = tech.styles || techOptions; // 技术指标自定义绘制

        if (tech.render) {
          _this3._ctx.save();

          tech.render({
            ctx: _this3._ctx,
            dataSource: {
              from: _this3._chartStore.timeScaleStore().from(),
              to: _this3._chartStore.timeScaleStore().to(),
              kLineDataList: _this3._chartStore.dataList(),
              technicalIndicatorDataList: techResult
            },
            viewport: {
              width: _this3._width,
              height: _this3._height,
              dataSpace: _this3._chartStore.timeScaleStore().dataSpace(),
              barSpace: _this3._chartStore.timeScaleStore().barSpace()
            },
            styles: styles,
            xAxis: _this3._xAxis,
            yAxis: _this3._yAxis
          });

          _this3._ctx.restore();
        }

        var lineColors = styles.line.colors || [];
        var lineColorSize = lineColors.length;

        var isCandleYAxis = _this3._yAxis.isCandleYAxis();

        _this3._ctx.lineWidth = 1;

        _this3._drawGraphics(function (x, i, kLineData, halfBarSpace, barSpace) {
          var techData = techResult[i] || {};
          var lineCount = 0;

          if (tech.shouldOhlc && !isCandleYAxis) {
            _this3._drawCandleBar(x, halfBarSpace, barSpace, i, kLineData, styles.bar, CandleType.OHLC);
          }

          plots.forEach(function (plot) {
            var value = techData[plot.key];

            var valueY = _this3._yAxis.convertToPixel(value);

            switch (plot.type) {
              case TechnicalIndicatorPlotType.CIRCLE:
                {
                  if (isValid(value)) {
                    var plotStyle = getTechnicalIndicatorPlotStyle(dataList, techResult, i, plot, styles, {
                      color: styles.circle.noChangeColor,
                      isStroke: true
                    });

                    _this3._drawCircle({
                      x: x,
                      y: valueY,
                      radius: halfBarSpace,
                      color: plotStyle.color,
                      isStroke: plotStyle.isStroke
                    });
                  }

                  break;
                }

              case TechnicalIndicatorPlotType.BAR:
                {
                  if (isValid(value)) {
                    var baseValue;

                    if (isValid(plot.baseValue)) {
                      baseValue = plot.baseValue;
                    } else {
                      baseValue = _this3._yAxis.min();
                    }

                    var baseValueY = _this3._yAxis.convertToPixel(baseValue);

                    var height = Math.abs(baseValueY - valueY);
                    var bar = {
                      x: x - halfBarSpace,
                      width: halfBarSpace * 2,
                      height: Math.max(1, height)
                    };

                    if (valueY > baseValueY) {
                      bar.y = baseValueY;
                    } else {
                      bar.y = height < 1 ? baseValueY - 1 : valueY;
                    }

                    var _plotStyle = getTechnicalIndicatorPlotStyle(dataList, techResult, i, plot, styles, {
                      color: styles.bar.noChangeColor
                    });

                    bar.color = _plotStyle.color;
                    bar.isStroke = _plotStyle.isStroke;

                    _this3._drawBar(bar);
                  }

                  break;
                }

              case TechnicalIndicatorPlotType.LINE:
                {
                  var coordinate = null;

                  if (isValid(value)) {
                    coordinate = {
                      x: x,
                      y: valueY
                    };
                  }

                  if (lines[lineCount]) {
                    lines[lineCount].coordinates.push(coordinate);
                  } else {
                    var _plotStyle2 = getTechnicalIndicatorPlotStyle(dataList, techResult, i, plot, styles, {
                      color: lineColors[lineCount % lineColorSize]
                    });

                    lines[lineCount] = {
                      color: _plotStyle2.color,
                      coordinates: [coordinate]
                    };
                  }

                  lineCount++;
                  break;
                }
            }
          });
        }, function () {
          _this3._drawLines(lines, styles);
        });
      });
      this._ctx.globalCompositeOperation = 'destination-over';
    }
    /**
     * 绘制图形
     * @param onDrawing
     * @param onDrawEnd
     */

  }, {
    key: "_drawGraphics",
    value: function _drawGraphics(onDrawing, onDrawEnd) {
      var visibleDataList = this._chartStore.visibleDataList();

      var barSpace = this._chartStore.timeScaleStore().barSpace();

      var halfBarSpace = this._chartStore.timeScaleStore().halfBarSpace();

      visibleDataList.forEach(function (_ref, n) {
        var x = _ref.x,
            index = _ref.index,
            data = _ref.data;
        onDrawing(x, index, data, halfBarSpace, barSpace, n);
      });
      onDrawEnd && onDrawEnd();
    }
    /**
     * 绘制线
     * @param lines
     * @param techOptions
     */

  }, {
    key: "_drawLines",
    value: function _drawLines(lines, techOptions) {
      var _this4 = this;

      this._ctx.lineWidth = techOptions.line.size;
      lines.forEach(function (line) {
        _this4._ctx.strokeStyle = line.color;
        renderLine(_this4._ctx, line.coordinates);
      });
    }
    /**
     * 绘制柱
     */

  }, {
    key: "_drawBar",
    value: function _drawBar(bar) {
      if (bar.isStroke) {
        this._ctx.strokeStyle = bar.color;

        this._ctx.strokeRect(bar.x + 0.5, bar.y, bar.width - 1, bar.height);
      } else {
        this._ctx.fillStyle = bar.color;

        this._ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
      }
    }
    /**
     * 绘制圆点
     * @param circle
     * @private
     */

  }, {
    key: "_drawCircle",
    value: function _drawCircle(circle) {
      this._ctx.strokeStyle = circle.color;
      this._ctx.fillStyle = circle.color;

      this._ctx.beginPath();

      this._ctx.arc(circle.x, circle.y, circle.radius, Math.PI * 2, 0, true);

      if (circle.isStroke) {
        this._ctx.stroke();
      } else {
        this._ctx.fill();
      }

      this._ctx.closePath();
    }
    /**
     * 绘制蜡烛柱
     * @param x
     * @param halfBarSpace
     * @param barSpace
     * @param dataIndex
     * @param kLineData
     * @param barOptions
     * @param barStyle
     */

  }, {
    key: "_drawCandleBar",
    value: function _drawCandleBar(x, halfBarSpace, barSpace, dataIndex, kLineData, barOptions, barStyle) {
      var open = kLineData.open,
          close = kLineData.close,
          high = kLineData.high,
          low = kLineData.low;

      if (close > open) {
        this._ctx.strokeStyle = barOptions.upColor;
        this._ctx.fillStyle = barOptions.upColor;
      } else if (close < open) {
        this._ctx.strokeStyle = barOptions.downColor;
        this._ctx.fillStyle = barOptions.downColor;
      } else {
        this._ctx.strokeStyle = barOptions.noChangeColor;
        this._ctx.fillStyle = barOptions.noChangeColor;
      }

      var openY = this._yAxis.convertToPixel(open);

      var closeY = this._yAxis.convertToPixel(close);

      var highY = this._yAxis.convertToPixel(high);

      var lowY = this._yAxis.convertToPixel(low);

      var highEndY = Math.min(openY, closeY);
      var lowStartY = Math.max(openY, closeY);

      this._ctx.fillRect(x - 0.5, highY, 1, highEndY - highY);

      this._ctx.fillRect(x - 0.5, lowStartY, 1, lowY - lowStartY);

      var barHeight = Math.max(1, lowStartY - highEndY);

      switch (barStyle) {
        case CandleType.CANDLE_SOLID:
          {
            this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);

            break;
          }

        case CandleType.CANDLE_STROKE:
          {
            this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);

            break;
          }

        case CandleType.CANDLE_UP_STROKE:
          {
            if (close > open) {
              this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);
            } else {
              this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);
            }

            break;
          }

        case CandleType.CANDLE_DOWN_STROKE:
          {
            if (close > open) {
              this._ctx.fillRect(x - halfBarSpace, highEndY, barSpace, barHeight);
            } else {
              this._ctx.strokeRect(x - halfBarSpace + 0.5, highEndY, barSpace - 1, barHeight);
            }

            break;
          }

        default:
          {
            this._ctx.fillRect(x - 0.5, highY, 1, lowY - highY);

            this._ctx.fillRect(x - halfBarSpace, openY - 0.5, halfBarSpace, 1);

            this._ctx.fillRect(x, closeY - 0.5, halfBarSpace, 1);

            break;
          }
      }
    }
  }]);

  return TechnicalIndicatorView;
}(View);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制文字
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param text
 */
function renderText(ctx, color, x, y, text) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TechnicalIndicatorOverlayView = /*#__PURE__*/function (_View) {
  _inherits(TechnicalIndicatorOverlayView, _View);

  var _super = _createSuper$k(TechnicalIndicatorOverlayView);

  function TechnicalIndicatorOverlayView(container, chartStore, xAxis, yAxis, paneId) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorOverlayView);

    _this = _super.call(this, container, chartStore);
    _this._xAxis = xAxis;
    _this._yAxis = yAxis;
    _this._paneId = paneId;
    return _this;
  }

  _createClass(TechnicalIndicatorOverlayView, [{
    key: "_draw",
    value: function _draw() {
      this._ctx.textBaseline = 'alphabetic';

      this._drawTag();

      this._drawShape();

      this._drawAnnotation();

      var crosshair = this._chartStore.crosshairStore().get();

      if (crosshair.kLineData) {
        var styleOptions = this._chartStore.styleOptions();

        var crosshairOptions = styleOptions.crosshair;

        if (crosshair.paneId === this._paneId) {
          // 绘制十字光标水平线
          this._drawCrosshairLine(crosshairOptions, 'horizontal', crosshair.y, 0, this._width, renderHorizontalLine);
        }

        if (crosshair.paneId) {
          // 绘制十字光标垂直线
          this._drawCrosshairLine(crosshairOptions, 'vertical', crosshair.realX, 0, this._height, renderVerticalLine);
        }

        this._drawTooltip(crosshair, this._chartStore.technicalIndicatorStore().instances(this._paneId));
      }
    }
    /**
     * 绘制注解
     */

  }, {
    key: "_drawAnnotation",
    value: function _drawAnnotation() {
      var _this2 = this;

      var annotations = this._chartStore.annotationStore().get(this._paneId);

      if (annotations) {
        annotations.forEach(function (annotation) {
          annotation.draw(_this2._ctx);
        });
      }
    }
    /**
     * 绘制标签
     */

  }, {
    key: "_drawTag",
    value: function _drawTag() {
      var _this3 = this;

      var tags = this._chartStore.tagStore().get(this._paneId);

      if (tags) {
        tags.forEach(function (tag) {
          tag.drawMarkLine(_this3._ctx);
        });
      }
    }
    /**
     * 绘制图形标记
     * @private
     */

  }, {
    key: "_drawShape",
    value: function _drawShape() {
      var _this4 = this;

      this._chartStore.shapeStore().instances(this._paneId).forEach(function (shape) {
        shape.draw(_this4._ctx);
      });

      var progressShape = this._chartStore.shapeStore().progressInstance();

      if (progressShape.paneId === this._paneId) {
        progressShape.instance.draw(this._ctx);
      }
    }
    /**
     * 绘制图例
     * @param crosshair
     * @param techs
     * @private
     */

  }, {
    key: "_drawTooltip",
    value: function _drawTooltip(crosshair, techs) {
      var techOptions = this._chartStore.styleOptions().technicalIndicator;

      this._drawBatchTechToolTip(crosshair, techs, techOptions, 0, this._shouldDrawTooltip(crosshair, techOptions.tooltip));
    }
    /**
     * 绘制十字光标线
     * @param crosshairOptions
     * @param optionsKey
     * @param fixed
     * @param start
     * @param end
     * @param drawLine
     * @private
     */

  }, {
    key: "_drawCrosshairLine",
    value: function _drawCrosshairLine(crosshairOptions, optionsKey, fixed, start, end, drawLine) {
      var crosshairDirectionOptions = crosshairOptions[optionsKey];
      var crosshairLineOptions = crosshairDirectionOptions.line;

      if (!crosshairOptions.show || !crosshairDirectionOptions.show || !crosshairLineOptions.show) {
        return;
      }

      this._ctx.save();

      this._ctx.lineWidth = crosshairLineOptions.size;
      this._ctx.strokeStyle = crosshairLineOptions.color;

      if (crosshairLineOptions.style === LineStyle.DASH) {
        this._ctx.setLineDash(crosshairLineOptions.dashValue);
      }

      drawLine(this._ctx, fixed, start, end);

      this._ctx.restore();
    }
    /**
     * 批量绘制技术指标提示
     * @param crosshair
     * @param techs
     * @param techOptions
     * @param offsetTop
     * @param isDrawTechTooltip
     */

  }, {
    key: "_drawBatchTechToolTip",
    value: function _drawBatchTechToolTip(crosshair, techs, techOptions) {
      var _this5 = this;

      var offsetTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isDrawTechTooltip = arguments.length > 4 ? arguments[4] : undefined;

      if (!isDrawTechTooltip) {
        return;
      }

      var techTooltipOptions = techOptions.tooltip;
      var top = offsetTop;
      techs.forEach(function (tech) {
        _this5._drawTechTooltip(crosshair, tech, techOptions, top);

        top += techTooltipOptions.text.marginTop + techTooltipOptions.text.size + techTooltipOptions.text.marginBottom;
      });
    }
    /**
     * 绘制指标图例
     * @param crosshair
     * @param tech
     * @param techOptions
     * @param offsetTop
     * @private
     */

  }, {
    key: "_drawTechTooltip",
    value: function _drawTechTooltip(crosshair, tech, techOptions) {
      var _this6 = this;

      var offsetTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var techTooltipOptions = techOptions.tooltip;
      var techTooltipTextOptions = techTooltipOptions.text;
      var textMarginLeft = techTooltipTextOptions.marginLeft;
      var textMarginRight = techTooltipTextOptions.marginRight;
      var textSize = techTooltipTextOptions.size;
      var textColor = techTooltipTextOptions.color;
      var labelX = 0;
      var labelY = techTooltipTextOptions.marginTop + offsetTop;

      var tooltipData = this._getTechTooltipData(crosshair, tech, techOptions);

      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(textSize, techTooltipTextOptions.weight, techTooltipTextOptions.family);

      if (techTooltipOptions.showName) {
        var nameText = tooltipData.name;
        var nameTextWidth = calcTextWidth(this._ctx, nameText);
        labelX += textMarginLeft;
        renderText(this._ctx, textColor, labelX, labelY, nameText);
        labelX += nameTextWidth;

        if (!techTooltipOptions.showParams) {
          labelX += textMarginRight;
        }
      }

      if (techTooltipOptions.showParams) {
        var calcParamText = tooltipData.calcParamText;
        var calcParamTextWidth = calcTextWidth(this._ctx, calcParamText);

        if (!techTooltipOptions.showName) {
          labelX += textMarginLeft;
        }

        renderText(this._ctx, textColor, labelX, labelY, calcParamText);
        labelX += calcParamTextWidth + textMarginRight;
      }

      tooltipData.values.forEach(function (v) {
        labelX += textMarginLeft;
        var text = "".concat(v.title).concat(v.value);
        var textWidth = calcTextWidth(_this6._ctx, text);
        renderText(_this6._ctx, v.color || techTooltipTextOptions.color, labelX, labelY, text);
        labelX += textWidth + textMarginRight;
      });
    }
    /**
     * 是否需要绘制图例
     * @param crosshair
     * @param tooltipOptions
     * @return {boolean|boolean|*}
     */

  }, {
    key: "_shouldDrawTooltip",
    value: function _shouldDrawTooltip(crosshair, tooltipOptions) {
      var showRule = tooltipOptions.showRule;
      return showRule === TooltipShowRule.ALWAYS || showRule === TooltipShowRule.FOLLOW_CROSS && !!crosshair.paneId;
    }
    /**
     * 获取技术指标提示数据
     * @param techData
     * @param tech
     * @returns
     */

  }, {
    key: "_getTechTooltipData",
    value: function _getTechTooltipData(crosshair, tech, techOptions) {
      var dataList = this._chartStore.dataList();

      var techResult = tech.result;
      var calcParamText = '';
      var calcParams = tech.calcParams;

      if (calcParams.length > 0) {
        var params = calcParams.map(function (param) {
          if (isObject(param)) {
            return param.value;
          }

          return param;
        });
        calcParamText = "(".concat(params.join(','), ")");
      }

      var values = [];

      if (isFunction(tech.createToolTipDataSource)) {
        values = tech.createToolTipDataSource({
          dataSource: {
            from: this._chartStore.timeScaleStore().from(),
            to: this._chartStore.timeScaleStore().to(),
            kLineDataList: this._chartStore.dataList(),
            technicalIndicatorDataList: techResult
          },
          viewport: {
            width: this._width,
            height: this._height,
            dataSpace: this._chartStore.timeScaleStore().dataSpace(),
            barSpace: this._chartStore.timeScaleStore().barSpace()
          },
          crosshair: crosshair,
          technicalIndicator: tech,
          xAxis: this._xAxis,
          yAxis: this._yAxis,
          defaultStyles: techOptions
        }) || [];
      } else {
        var dataIndex = crosshair.dataIndex;
        var styles = tech.styles || techOptions;
        var techData = techResult[dataIndex];
        var plots = tech.plots;
        var precision = tech.precision;
        var shouldFormatBigNumber = tech.shouldFormatBigNumber;
        var lineColors = styles.line.colors || [];
        var colorSize = lineColors.length;
        var lineCount = 0;
        plots.forEach(function (plot) {
          var defaultStyle = {};

          switch (plot.type) {
            case TechnicalIndicatorPlotType.CIRCLE:
              {
                defaultStyle = {
                  color: styles.circle.noChangeColor
                };
                break;
              }

            case TechnicalIndicatorPlotType.BAR:
              {
                defaultStyle = {
                  color: styles.bar.noChangeColor
                };
                break;
              }

            case TechnicalIndicatorPlotType.LINE:
              {
                defaultStyle = {
                  color: lineColors[lineCount % colorSize] || techOptions.tooltip.text.color
                };
                lineCount++;
                break;
              }
          }

          var plotStyle = getTechnicalIndicatorPlotStyle(dataList, techResult, crosshair.dataIndex, plot, styles, defaultStyle);
          var data = {};

          if (isValid(plot.title)) {
            var value = (techData || {})[plot.key];

            if (isValid(value)) {
              value = formatPrecision(value, precision);

              if (shouldFormatBigNumber) {
                value = formatBigNumber(value);
              }
            }

            data.title = plot.title;
            data.value = value || techOptions.tooltip.defaultValue;
            data.color = plotStyle.color;
            values.push(data);
          }
        });
      }

      return {
        values: values,
        name: tech.shortName,
        calcParamText: calcParamText
      };
    }
  }]);

  return TechnicalIndicatorOverlayView;
}(View);

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TechnicalIndicatorWidget = /*#__PURE__*/function (_Widget) {
  _inherits(TechnicalIndicatorWidget, _Widget);

  var _super = _createSuper$j(TechnicalIndicatorWidget);

  function TechnicalIndicatorWidget() {
    _classCallCheck(this, TechnicalIndicatorWidget);

    return _super.apply(this, arguments);
  }

  _createClass(TechnicalIndicatorWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new TechnicalIndicatorView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new TechnicalIndicatorOverlayView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId);
    }
  }]);

  return TechnicalIndicatorWidget;
}(Widget);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 绘制带边框的圆角填充矩形
 * @param ctx
 * @param fillColor
 * @param borderColor
 * @param borderSize
 * @param x
 * @param y
 * @param width
 * @param height
 * @param borderRadius
 */
function renderStrokeFillRoundRect(ctx, fillColor, borderColor, borderSize, x, y, width, height, borderRadius) {
  renderFillRoundRect(ctx, fillColor, x, y, width, height, borderRadius);
  renderStrokeRoundRect(ctx, borderColor, borderSize, x, y, width, height, borderRadius);
}
/**
 * 绘制填充的矩形
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param width
 * @param height
 */

function renderFillRect(ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
/**
 * 绘制圆角空心矩形
 * @param ctx
 * @param borderColor
 * @param borderSize
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderStrokeRoundRect(ctx, borderColor, borderSize, x, y, w, h, r) {
  ctx.lineWidth = borderSize;
  ctx.strokeStyle = borderColor;
  renderRoundRect(ctx, x, y, w, h, r);
  ctx.stroke();
}
/**
 * 绘制填充圆角矩形
 * @param ctx
 * @param color
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderFillRoundRect(ctx, color, x, y, w, h, r) {
  ctx.fillStyle = color;
  renderRoundRect(ctx, x, y, w, h, r);
  ctx.fill();
}
/**
 * 绘制圆角矩形
 * @param ctx
 * @param x
 * @param y
 * @param w
 * @param h
 * @param r
 */

function renderRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var YAxisView = /*#__PURE__*/function (_View) {
  _inherits(YAxisView, _View);

  var _super = _createSuper$i(YAxisView);

  function YAxisView(container, chartStore, yAxis, paneId) {
    var _this;

    _classCallCheck(this, YAxisView);

    _this = _super.call(this, container, chartStore);
    _this._yAxis = yAxis;
    _this._paneId = paneId;
    return _this;
  }

  _createClass(YAxisView, [{
    key: "_draw",
    value: function _draw() {
      var yAxisOptions = this._chartStore.styleOptions().yAxis;

      if (yAxisOptions.show) {
        this._drawAxisLine(yAxisOptions);

        this._drawTickLines(yAxisOptions);

        this._drawTickLabels(yAxisOptions);

        this._drawTechLastValue();

        this._drawLastPriceLabel();
      }
    }
  }, {
    key: "_drawAxisLine",
    value: function _drawAxisLine(yAxisOptions) {
      var axisLine = yAxisOptions.axisLine;

      if (!axisLine.show) {
        return;
      }

      this._ctx.strokeStyle = axisLine.color;
      this._ctx.lineWidth = axisLine.size;
      var x;

      if (this._yAxis.isFromYAxisZero()) {
        x = 0;
      } else {
        x = this._width - 1;
      }

      renderVerticalLine(this._ctx, x, 0, this._height);
    }
  }, {
    key: "_drawTickLines",
    value: function _drawTickLines(yAxisOptions) {
      var _this2 = this;

      var tickLine = yAxisOptions.tickLine;

      if (!tickLine.show) {
        return;
      }

      this._ctx.lineWidth = tickLine.size;
      this._ctx.strokeStyle = tickLine.color;
      var tickLineLength = tickLine.length;
      var startX;
      var endX;

      if (this._yAxis.isFromYAxisZero()) {
        startX = 0;

        if (yAxisOptions.axisLine.show) {
          startX += yAxisOptions.axisLine.size;
        }

        endX = startX + tickLineLength;
      } else {
        startX = this._width;

        if (yAxisOptions.axisLine.show) {
          startX -= yAxisOptions.axisLine.size;
        }

        endX = startX - tickLineLength;
      }

      this._yAxis.ticks().forEach(function (tick) {
        renderHorizontalLine(_this2._ctx, tick.y, startX, endX);
      });
    }
  }, {
    key: "_drawTickLabels",
    value: function _drawTickLabels(yAxisOptions) {
      var _this3 = this;

      var tickText = yAxisOptions.tickText;

      if (!tickText.show) {
        return;
      }

      var tickLine = yAxisOptions.tickLine;
      var tickLineShow = tickLine.show;
      var tickLineLength = tickLine.length;
      var labelX;

      if (this._yAxis.isFromYAxisZero()) {
        labelX = tickText.paddingLeft;

        if (yAxisOptions.axisLine.show) {
          labelX += yAxisOptions.axisLine.size;
        }

        if (tickLineShow) {
          labelX += tickLineLength;
        }

        this._ctx.textAlign = 'left';
      } else {
        labelX = this._width - tickText.paddingRight;

        if (yAxisOptions.axisLine.show) {
          labelX -= yAxisOptions.axisLine.size;
        }

        if (tickLineShow) {
          labelX -= tickLineLength;
        }

        this._ctx.textAlign = 'right';
      }

      this._ctx.textBaseline = 'middle';
      this._ctx.font = createFont(tickText.size, tickText.weight, tickText.family);
      this._ctx.fillStyle = tickText.color;

      this._yAxis.ticks().forEach(function (tick) {
        _this3._ctx.fillText(tick.v, labelX, tick.y);
      });

      this._ctx.textAlign = 'left';
    }
    /**
     * 绘制技术指标最后值
     * @private
     */

  }, {
    key: "_drawTechLastValue",
    value: function _drawTechLastValue() {
      var _this4 = this;

      var techOptions = this._chartStore.styleOptions().technicalIndicator;

      var lastValueMarkOptions = techOptions.lastValueMark;

      if (!lastValueMarkOptions.show || !lastValueMarkOptions.text.show) {
        return;
      }

      var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

      var dataList = this._chartStore.dataList();

      techs.forEach(function (tech) {
        var techResult = tech.result || [];
        var dataSize = techResult.length;
        var techData = techResult[dataSize - 1] || {};
        var plots = tech.plots;
        var cbData = {
          prev: {
            kLineData: dataList[dataSize - 2],
            technicalIndicatorData: techResult[dataSize - 2]
          },
          current: {
            kLineData: dataList[dataSize - 1],
            technicalIndicatorData: techData
          },
          next: {
            kLineData: null,
            technicalIndicatorData: null
          }
        };
        var precision = tech.precision;
        var styles = tech.styles || techOptions;
        var colors = styles.line.colors || [];
        var colorSize = colors.length;
        var lineCount = 0;
        plots.forEach(function (plot) {
          var value = techData[plot.key];
          var backgroundColor;

          switch (plot.type) {
            case TechnicalIndicatorPlotType.CIRCLE:
              {
                backgroundColor = plot.color && plot.color(cbData, styles) || styles.circle.noChangeColor;
                break;
              }

            case TechnicalIndicatorPlotType.BAR:
              {
                backgroundColor = plot.color && plot.color(cbData, styles) || styles.bar.noChangeColor;
                break;
              }

            case TechnicalIndicatorPlotType.LINE:
              {
                backgroundColor = colors[lineCount % colorSize];
                lineCount++;
                break;
              }
          }

          if (isValid(value)) {
            _this4._drawMarkLabel(value, precision, tech.shouldFormatBigNumber, _objectSpread$2(_objectSpread$2({}, lastValueMarkOptions.text), {}, {
              backgroundColor: backgroundColor
            }));
          }
        });
      });
    }
    /**
     * 绘制最新价文字
     * @private
     */

  }, {
    key: "_drawLastPriceLabel",
    value: function _drawLastPriceLabel() {
      if (!this._yAxis.isCandleYAxis()) {
        return;
      }

      var priceMarkOptions = this._chartStore.styleOptions().candle.priceMark;

      var lastPriceMarkOptions = priceMarkOptions.last;

      if (!priceMarkOptions.show || !lastPriceMarkOptions.show || !lastPriceMarkOptions.text.show) {
        return;
      }

      var dataList = this._chartStore.dataList();

      var kLineData = dataList[dataList.length - 1];

      if (!kLineData) {
        return;
      }

      var close = kLineData.close;
      var open = kLineData.open;
      var backgroundColor;

      if (close > open) {
        backgroundColor = lastPriceMarkOptions.upColor;
      } else if (close < open) {
        backgroundColor = lastPriceMarkOptions.downColor;
      } else {
        backgroundColor = lastPriceMarkOptions.noChangeColor;
      }

      this._drawMarkLabel(close, this._chartStore.pricePrecision(), false, _objectSpread$2(_objectSpread$2({}, lastPriceMarkOptions.text), {}, {
        backgroundColor: backgroundColor
      }));
    }
    /**
     * 绘制标记label
     * @param value
     * @param precision
     * @param shouldFormatBigNumber
     * @param size
     * @param weight
     * @param family
     * @param color
     * @param backgroundColor
     * @param borderRadius
     * @param paddingLeft
     * @param paddingTop
     * @param paddingRight
     * @param paddingBottom
     * @private
     */

  }, {
    key: "_drawMarkLabel",
    value: function _drawMarkLabel(value, precision, shouldFormatBigNumber, _ref) {
      var size = _ref.size,
          weight = _ref.weight,
          family = _ref.family,
          color = _ref.color,
          backgroundColor = _ref.backgroundColor,
          borderRadius = _ref.borderRadius,
          paddingLeft = _ref.paddingLeft,
          paddingTop = _ref.paddingTop,
          paddingRight = _ref.paddingRight,
          paddingBottom = _ref.paddingBottom;

      var valueY = this._yAxis.convertToNicePixel(value);

      var text;

      if (this._yAxis.yAxisType() === YAxisType.PERCENTAGE) {
        var fromData = (this._chartStore.visibleDataList()[0] || {}).data || {};
        var fromClose = fromData.close;
        text = "".concat(((value - fromClose) / fromClose * 100).toFixed(2), "%");
      } else {
        text = formatPrecision(value, precision);

        if (shouldFormatBigNumber) {
          text = formatBigNumber(text);
        }
      }

      this._ctx.font = createFont(size, weight, family);
      var rectWidth = calcTextWidth(this._ctx, text) + paddingLeft + paddingRight;
      var rectHeight = paddingTop + size + paddingBottom;
      var rectStartX;

      if (this._yAxis.isFromYAxisZero()) {
        rectStartX = 0;
      } else {
        rectStartX = this._width - rectWidth;
      }

      renderFillRoundRect(this._ctx, backgroundColor, rectStartX, valueY - paddingTop - size / 2, rectWidth, rectHeight, borderRadius);
      this._ctx.textBaseline = 'middle';
      renderText(this._ctx, color, rectStartX + paddingLeft, valueY, text);
    }
  }]);

  return YAxisView;
}(View);

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var YAxisOverlayView = /*#__PURE__*/function (_View) {
  _inherits(YAxisOverlayView, _View);

  var _super = _createSuper$h(YAxisOverlayView);

  function YAxisOverlayView(container, chartStore, yAxis, paneId) {
    var _this;

    _classCallCheck(this, YAxisOverlayView);

    _this = _super.call(this, container, chartStore);
    _this._yAxis = yAxis;
    _this._paneId = paneId;
    return _this;
  }

  _createClass(YAxisOverlayView, [{
    key: "_draw",
    value: function _draw() {
      this._ctx.textBaseline = 'middle';

      this._drawTag();

      this._drawCrossHairLabel();
    }
    /**
     * 绘制标签
     * @private
     */

  }, {
    key: "_drawTag",
    value: function _drawTag() {
      var _this2 = this;

      var tags = this._chartStore.tagStore().get(this._paneId);

      if (tags) {
        tags.forEach(function (tag) {
          tag.drawText(_this2._ctx);
        });
      }
    }
  }, {
    key: "_drawCrossHairLabel",
    value: function _drawCrossHairLabel() {
      var crosshair = this._chartStore.crosshairStore().get();

      if (crosshair.paneId !== this._paneId || this._chartStore.dataList().length === 0) {
        return;
      }

      var styleOptions = this._chartStore.styleOptions();

      var crosshairOptions = styleOptions.crosshair;
      var crosshairHorizontalOptions = crosshairOptions.horizontal;
      var crosshairHorizontalTextOptions = crosshairHorizontalOptions.text;

      if (!crosshairOptions.show || !crosshairHorizontalOptions.show || !crosshairHorizontalTextOptions.show) {
        return;
      }

      var value = this._yAxis.convertFromPixel(crosshair.y);

      var text;

      if (this._yAxis.yAxisType() === YAxisType.PERCENTAGE) {
        var fromData = (this._chartStore.visibleDataList()[0] || {}).data || {};
        text = "".concat(((value - fromData.close) / fromData.close * 100).toFixed(2), "%");
      } else {
        var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

        var precision = 0;
        var shouldFormatBigNumber = false;

        if (this._yAxis.isCandleYAxis()) {
          precision = this._chartStore.pricePrecision();
        } else {
          techs.forEach(function (tech) {
            precision = Math.max(tech.precision, precision);

            if (!shouldFormatBigNumber) {
              shouldFormatBigNumber = tech.shouldFormatBigNumber;
            }
          });
        }

        text = formatPrecision(value, precision);

        if (shouldFormatBigNumber) {
          text = formatBigNumber(text);
        }
      }

      var rectStartX;
      var borderSize = crosshairHorizontalTextOptions.borderSize;
      var rectWidth = getTextRectWidth(this._ctx, text, crosshairHorizontalTextOptions);
      var rectHeight = getTextRectHeight(crosshairHorizontalTextOptions);

      if (this._yAxis.isFromYAxisZero()) {
        rectStartX = 0;
      } else {
        rectStartX = this._width - rectWidth;
      }

      var rectY = crosshair.y - borderSize - crosshairHorizontalTextOptions.paddingTop - crosshairHorizontalTextOptions.size / 2; // 绘制y轴文字外的边框

      renderStrokeFillRoundRect(this._ctx, crosshairHorizontalTextOptions.backgroundColor, crosshairHorizontalTextOptions.borderColor, borderSize, rectStartX, rectY, rectWidth, rectHeight, crosshairHorizontalTextOptions.borderRadius);
      renderText(this._ctx, crosshairHorizontalTextOptions.color, rectStartX + borderSize + crosshairHorizontalTextOptions.paddingLeft, crosshair.y, text);
    }
  }]);

  return YAxisOverlayView;
}(View);

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var YAxisWidget = /*#__PURE__*/function (_Widget) {
  _inherits(YAxisWidget, _Widget);

  var _super = _createSuper$g(YAxisWidget);

  function YAxisWidget() {
    _classCallCheck(this, YAxisWidget);

    return _super.apply(this, arguments);
  }

  _createClass(YAxisWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new YAxisView(container, props.chartStore, props.yAxis, props.paneId);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new YAxisOverlayView(container, props.chartStore, props.yAxis, props.paneId);
    }
  }]);

  return YAxisWidget;
}(Widget);

var Axis = /*#__PURE__*/function () {
  function Axis(chartStore) {
    _classCallCheck(this, Axis);

    this._chartStore = chartStore;
    this._width = 0;
    this._height = 0;
    this._cacheMinValue = 0;
    this._cacheMaxValue = 0;
    this._minValue = 0;
    this._maxValue = 0;
    this._range = 0;
    this._ticks = [];

    this._initMeasureCanvas();
  }

  _createClass(Axis, [{
    key: "_initMeasureCanvas",
    value: function _initMeasureCanvas() {
      var measureCanvas = createElement('canvas');
      var pixelRatio = getPixelRatio(measureCanvas);
      this._measureCtx = measureCanvas.getContext('2d');

      this._measureCtx.scale(pixelRatio, pixelRatio);
    }
  }, {
    key: "min",
    value: function min() {
      return this._minValue;
    }
  }, {
    key: "max",
    value: function max() {
      return this._maxValue;
    }
  }, {
    key: "width",
    value: function width() {
      return this._width;
    }
  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this._width = width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this._height = height;
    }
    /**
     * 获取ticks
     * @returns {[]|*[]}
     */

  }, {
    key: "ticks",
    value: function ticks() {
      return this._ticks;
    }
    /**
     * 计算轴
     * @param forceCompute
     */

  }, {
    key: "computeAxis",
    value: function computeAxis(forceCompute) {
      var minMax = this._optimalMinMax(this._computeMinMax());

      this._minValue = minMax.min;
      this._maxValue = minMax.max;
      this._range = minMax.range;

      if (this._cacheMinValue !== minMax.min || this._cacheMaxValue !== minMax.max || forceCompute) {
        this._cacheMinValue = minMax.min;
        this._cacheMaxValue = minMax.max;
        this._ticks = this._optimalTicks(this._computeTicks());
        return true;
      }

      return false;
    }
    /**
     * 计算最大最小值
     * @private
     */

  }, {
    key: "_computeMinMax",
    value: function _computeMinMax() {}
    /**
     * 优化最大最小值
     * @param minMax
     * @private
     */

  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(minMax) {}
    /**
     * 计算轴上的tick值
     */

  }, {
    key: "_computeTicks",
    value: function _computeTicks() {
      var ticks = [];

      if (this._range >= 0) {
        var intervalPrecision = this._computeInterval(this._range);

        var interval = intervalPrecision.interval;
        var precision = intervalPrecision.precision;
        var first = round(Math.ceil(this._minValue / interval) * interval, precision);
        var last = round(Math.floor(this._maxValue / interval) * interval, precision);
        var n = 0;
        var f = first;

        if (interval !== 0) {
          while (f <= last) {
            ticks[n] = {
              v: f.toFixed(precision)
            };
            ++n;
            f += interval;
          }
        }
      }

      return ticks;
    }
    /**
     * 计算最佳的tick
     * @param ticks
     */

  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {}
    /**
     * 计算间隔
     * @private
     */

  }, {
    key: "_computeInterval",
    value: function _computeInterval(range) {
      var interval = nice(range / 8.0);
      var precision = getPrecision(interval);
      return {
        interval: interval,
        precision: precision
      };
    }
  }]);

  return Axis;
}();

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var YAxis = /*#__PURE__*/function (_Axis) {
  _inherits(YAxis, _Axis);

  var _super = _createSuper$f(YAxis);

  function YAxis(chartStore, isCandleYAxis, paneId) {
    var _this;

    _classCallCheck(this, YAxis);

    _this = _super.call(this, chartStore);
    _this._realRange = 0;
    _this._isCandleYAxis = isCandleYAxis;
    _this._paneId = paneId;
    return _this;
  }

  _createClass(YAxis, [{
    key: "_computeMinMax",
    value: function _computeMinMax() {
      var _this2 = this;

      var minMaxArray = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      var plotsResult = [];
      var shouldOhlc = false;
      var minValue = Number.MAX_SAFE_INTEGER;
      var maxValue = Number.MIN_SAFE_INTEGER;
      var techPrecision = Number.MAX_SAFE_INTEGER;

      var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

      var techGap;
      techs.forEach(function (tech) {
        if (!shouldOhlc) {
          shouldOhlc = tech.shouldOhlc;
        }

        techPrecision = Math.min(techPrecision, tech.precision);

        if (isNumber(tech.minValue)) {
          minValue = Math.min(minValue, tech.minValue);
        }

        if (isNumber(tech.maxValue)) {
          maxValue = Math.max(maxValue, tech.maxValue);
        }

        if (tech.styles) {
          if (!techGap) {
            techGap = {
              top: 0,
              bottom: 0
            };
          }

          var margin = tech.styles.margin;

          if (isNumber(margin.top)) {
            if (margin.top < 1) {
              techGap.top = Math.max(margin.top, techGap.top);
            } else {
              techGap.top = Math.max(margin.top / _this2._height, techGap.top);
            }
          }

          if (isNumber(margin.bottom)) {
            if (margin.bottom < 1) {
              techGap.bottom = Math.max(margin.bottom, techGap.bottom);
            } else {
              techGap.bottom = Math.max(margin.bottom / _this2._height, techGap.bottom);
            }
          }
        }

        plotsResult.push({
          plots: tech.plots,
          result: tech.result
        });
      });
      var precision = 4;

      if (this._isCandleYAxis) {
        var pricePrecision = this._chartStore.pricePrecision();

        if (techPrecision !== Number.MAX_SAFE_INTEGER) {
          precision = Math.min(techPrecision, pricePrecision);
        } else {
          precision = pricePrecision;
        }
      } else {
        if (techPrecision !== Number.MAX_SAFE_INTEGER) {
          precision = techPrecision;
        }
      }

      var visibleDataList = this._chartStore.visibleDataList();

      var candleOptions = this._chartStore.styleOptions().candle;

      var isArea = candleOptions.type === CandleType.AREA;
      var areaValueKey = candleOptions.area.value;
      var shouldCompareHighLow = this._isCandleYAxis && !isArea || !this._isCandleYAxis && shouldOhlc;
      visibleDataList.forEach(function (_ref) {
        var index = _ref.index,
            data = _ref.data;

        if (shouldCompareHighLow) {
          minMaxArray[0] = Math.min(minMaxArray[0], data.low);
          minMaxArray[1] = Math.max(minMaxArray[1], data.high);
        }

        if (_this2._isCandleYAxis && isArea) {
          minMaxArray[0] = Math.min(minMaxArray[0], data[areaValueKey]);
          minMaxArray[1] = Math.max(minMaxArray[1], data[areaValueKey]);
        }

        plotsResult.forEach(function (_ref2) {
          var plots = _ref2.plots,
              result = _ref2.result;
          var techData = result[index] || {};
          plots.forEach(function (plot) {
            var value = techData[plot.key];

            if (isValid(value)) {
              minMaxArray[0] = Math.min(minMaxArray[0], value);
              minMaxArray[1] = Math.max(minMaxArray[1], value);
            }
          });
        });
      });

      if (minMaxArray[0] !== Number.MAX_SAFE_INTEGER && minMaxArray[1] !== Number.MIN_SAFE_INTEGER) {
        minMaxArray[0] = Math.min(minValue, minMaxArray[0]);
        minMaxArray[1] = Math.max(maxValue, minMaxArray[1]);
      } else {
        minMaxArray[0] = 0;
        minMaxArray[1] = 10;
      }

      return {
        min: minMaxArray[0],
        max: minMaxArray[1],
        precision: precision,
        specifyMin: minValue,
        specifyMax: maxValue,
        techGap: techGap
      };
    }
  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(_ref3) {
      var min = _ref3.min,
          max = _ref3.max,
          precision = _ref3.precision,
          specifyMin = _ref3.specifyMin,
          specifyMax = _ref3.specifyMax,
          techGap = _ref3.techGap;
      var minValue = min;
      var maxValue = max;
      var yAxisType = this.yAxisType();
      var dif;

      switch (yAxisType) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartStore.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              minValue = (minValue - fromData.close) / fromData.close * 100;
              maxValue = (maxValue - fromData.close) / fromData.close * 100;
            }

            dif = Math.pow(10, -2);
            break;
          }

        case YAxisType.LOG:
          {
            minValue = log10(minValue);
            maxValue = log10(maxValue);
            dif = 0.05 * index10(-precision);
            break;
          }

        default:
          {
            dif = index10(-precision);
          }
      }

      if (minValue === maxValue || Math.abs(minValue - maxValue) < dif) {
        var minCheck = specifyMin === minValue;
        var maxCheck = specifyMax === maxValue;
        minValue = minCheck ? minValue : maxCheck ? minValue - 8 * dif : minValue - 4 * dif;
        maxValue = maxCheck ? maxValue : minCheck ? maxValue + 8 * dif : maxValue + 4 * dif;
      }

      var marginOptions;

      if (this._isCandleYAxis) {
        marginOptions = this._chartStore.styleOptions().candle.margin;
      } else {
        // 如果是副图，直接取指标的样式配置
        marginOptions = techGap ? {
          top: 0,
          bottom: 0
        } : this._chartStore.styleOptions().technicalIndicator.margin;
      }

      var topRate = 0.2;

      if (isNumber(marginOptions.top)) {
        var rate;

        if (marginOptions.top < 1) {
          rate = marginOptions.top;
        } else {
          rate = marginOptions.top / this._height;
        }

        topRate = techGap ? Math.max(techGap.top, rate) : rate;
      }

      var bottomRate = 0.1;

      if (isNumber(marginOptions.bottom)) {
        var _rate;

        if (marginOptions.bottom < 1) {
          _rate = marginOptions.bottom;
        } else {
          _rate = marginOptions.bottom / this._height;
        }

        bottomRate = techGap ? Math.max(techGap.bottom, _rate) : _rate;
      }

      var range = Math.abs(maxValue - minValue); // 保证每次图形绘制上下都留间隙

      minValue = minValue - range * bottomRate;
      maxValue = maxValue + range * topRate;
      range = Math.abs(maxValue - minValue);

      if (yAxisType === YAxisType.LOG) {
        this._realRange = Math.abs(index10(maxValue) - index10(minValue));
      } else {
        this._realRange = range;
      }

      return {
        min: minValue,
        max: maxValue,
        range: range
      };
    }
  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {
      var _this3 = this;

      var optimalTicks = [];
      var yAxisType = this.yAxisType();

      var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

      var precision = 0;
      var shouldFormatBigNumber = false;

      if (this._isCandleYAxis) {
        precision = this._chartStore.pricePrecision();
      } else {
        techs.forEach(function (tech) {
          precision = Math.max(precision, tech.precision);

          if (!shouldFormatBigNumber) {
            shouldFormatBigNumber = tech.shouldFormatBigNumber;
          }
        });
      }

      var textHeight = this._chartStore.styleOptions().xAxis.tickText.size;

      var intervalPrecision;

      if (yAxisType === YAxisType.LOG) {
        intervalPrecision = this._computeInterval(this._realRange);
      }

      var validY;
      ticks.forEach(function (_ref4) {
        var v = _ref4.v;
        var value;

        var y = _this3._innerConvertToPixel(+v);

        switch (yAxisType) {
          case YAxisType.PERCENTAGE:
            {
              value = "".concat(formatPrecision(v, 2), "%");
              break;
            }

          case YAxisType.LOG:
            {
              value = round(index10(v), intervalPrecision.precision);
              y = _this3._innerConvertToPixel(log10(value));
              value = formatPrecision(value, precision);
              break;
            }

          default:
            {
              value = formatPrecision(v, precision);

              if (shouldFormatBigNumber) {
                value = formatBigNumber(value);
              }

              break;
            }
        }

        if (y > textHeight && y < _this3._height - textHeight && (validY && validY - y > textHeight * 2 || !validY)) {
          optimalTicks.push({
            v: value,
            y: y
          });
          validY = y;
        }
      });
      return optimalTicks;
    }
    /**
     * 内部值转换成坐标
     * @param value
     * @return {number}
     * @private
     */

  }, {
    key: "_innerConvertToPixel",
    value: function _innerConvertToPixel(value) {
      return Math.round((1.0 - (value - this._minValue) / this._range) * this._height);
    }
    /**
     * 是否是蜡烛图轴
     * @return {*}
     */

  }, {
    key: "isCandleYAxis",
    value: function isCandleYAxis() {
      return this._isCandleYAxis;
    }
    /**
     * y轴类型
     * @return {string|*}
     */

  }, {
    key: "yAxisType",
    value: function yAxisType() {
      if (this._isCandleYAxis) {
        return this._chartStore.styleOptions().yAxis.type;
      }

      return YAxisType.NORMAL;
    }
    /**
     * 是否从y轴0开始
     * @return {boolean|*|boolean}
     */

  }, {
    key: "isFromYAxisZero",
    value: function isFromYAxisZero() {
      var yAxisOptions = this._chartStore.styleOptions().yAxis;

      return yAxisOptions.position === YAxisPosition.LEFT && yAxisOptions.inside || yAxisOptions.position === YAxisPosition.RIGHT && !yAxisOptions.inside;
    }
    /**
     * 获取自身宽度
     * @return {number}
     */

  }, {
    key: "getSelfWidth",
    value: function getSelfWidth() {
      var _this4 = this;

      var styleOptions = this._chartStore.styleOptions();

      var yAxisOptions = styleOptions.yAxis;
      var width = yAxisOptions.width;

      if (isNumber(width)) {
        return width;
      }

      var yAxisWidth = 0;

      if (yAxisOptions.show) {
        if (yAxisOptions.axisLine.show) {
          yAxisWidth += yAxisOptions.axisLine.size;
        }

        if (yAxisOptions.tickLine.show) {
          yAxisWidth += yAxisOptions.tickLine.length;
        }

        if (yAxisOptions.tickText.show) {
          var textWidth = 0;
          this._measureCtx.font = createFont(yAxisOptions.tickText.size, yAxisOptions.tickText.weight, yAxisOptions.tickText.family);

          this._ticks.forEach(function (tick) {
            textWidth = Math.max(textWidth, calcTextWidth(_this4._measureCtx, tick.v));
          });

          yAxisWidth += yAxisOptions.tickText.paddingLeft + yAxisOptions.tickText.paddingRight + textWidth;
        }
      }

      var crosshairOptions = styleOptions.crosshair;
      var crosshairVerticalTextWidth = 0;

      if (crosshairOptions.show && crosshairOptions.horizontal.show && crosshairOptions.horizontal.text.show) {
        var techs = this._chartStore.technicalIndicatorStore().instances(this._paneId);

        var techPrecision = 0;
        var shouldFormatBigNumber = false;
        techs.forEach(function (tech) {
          techPrecision = Math.max(tech.precision, techPrecision);

          if (!shouldFormatBigNumber) {
            shouldFormatBigNumber = tech.shouldFormatBigNumber;
          }
        });
        this._measureCtx.font = createFont(crosshairOptions.horizontal.text.size, crosshairOptions.horizontal.text.weight, crosshairOptions.horizontal.text.family);
        var precision = 2;

        if (this.yAxisType() !== YAxisType.PERCENTAGE) {
          if (this._isCandleYAxis) {
            var pricePrecision = this._chartStore.pricePrecision();

            var lastValueMarkOptions = styleOptions.technicalIndicator.lastValueMark;

            if (lastValueMarkOptions.show && lastValueMarkOptions.text.show) {
              precision = Math.max(techPrecision, pricePrecision);
            } else {
              precision = pricePrecision;
            }
          } else {
            precision = techPrecision;
          }
        }

        var valueText = formatPrecision(this._maxValue, precision);

        if (shouldFormatBigNumber) {
          valueText = formatBigNumber(valueText);
        }

        crosshairVerticalTextWidth += crosshairOptions.horizontal.text.paddingLeft + crosshairOptions.horizontal.text.paddingRight + crosshairOptions.horizontal.text.borderSize * 2 + calcTextWidth(this._measureCtx, valueText);
      }

      return Math.max(yAxisWidth, crosshairVerticalTextWidth);
    }
  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(pixel) {
      var value = (1.0 - pixel / this._height) * this._range + this._minValue;

      switch (this.yAxisType()) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartStore.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              return fromData.close * value / 100 + fromData.close;
            }

            break;
          }

        case YAxisType.LOG:
          {
            return index10(value);
          }

        default:
          {
            return value;
          }
      }
    }
  }, {
    key: "convertToPixel",
    value: function convertToPixel(value) {
      var v;

      switch (this.yAxisType()) {
        case YAxisType.PERCENTAGE:
          {
            var fromData = (this._chartStore.visibleDataList()[0] || {}).data || {};

            if (isNumber(fromData.close)) {
              v = (value - fromData.close) / fromData.close * 100;
            }

            break;
          }

        case YAxisType.LOG:
          {
            v = log10(value);
            break;
          }

        default:
          {
            v = value;
          }
      }

      return this._innerConvertToPixel(v);
    }
    /**
     * 将值转换成坐标，即使坐标不在范围内，也会显示在顶部或者底部
     * @param value
     * @return {number}
     */

  }, {
    key: "convertToNicePixel",
    value: function convertToNicePixel(value) {
      var y = this.convertToPixel(value);
      return Math.round(Math.max(this._height * 0.05, Math.min(y, this._height * 0.98)));
    }
  }]);

  return YAxis;
}(Axis);

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TechnicalIndicatorPane = /*#__PURE__*/function (_Pane) {
  _inherits(TechnicalIndicatorPane, _Pane);

  var _super = _createSuper$e(TechnicalIndicatorPane);

  function TechnicalIndicatorPane(props) {
    var _this;

    _classCallCheck(this, TechnicalIndicatorPane);

    _this = _super.call(this, props);

    if ('height' in props) {
      _this.setHeight(props.height);
    }

    return _this;
  }

  _createClass(TechnicalIndicatorPane, [{
    key: "_initBefore",
    value: function _initBefore(props) {
      this._id = props.id;
      this._yAxis = this._createYAxis(props);
    }
  }, {
    key: "_createYAxis",
    value: function _createYAxis(props) {
      return new YAxis(props.chartStore, false, props.id);
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new TechnicalIndicatorWidget({
        container: container,
        chartStore: props.chartStore,
        xAxis: props.xAxis,
        yAxis: this._yAxis,
        paneId: props.id
      });
    }
  }, {
    key: "_createYAxisWidget",
    value: function _createYAxisWidget(container, props) {
      return new YAxisWidget({
        container: container,
        chartStore: props.chartStore,
        yAxis: this._yAxis,
        paneId: props.id
      });
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      _get(_getPrototypeOf(TechnicalIndicatorPane.prototype), "setHeight", this).call(this, height);

      this._yAxis.setHeight(height);
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      _get(_getPrototypeOf(TechnicalIndicatorPane.prototype), "setWidth", this).call(this, mainWidgetWidth, yAxisWidgetWidth);

      this._yAxis.setWidth(yAxisWidgetWidth);
    }
    /**
     * 获取id
     * @returns {string}
     */

  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "yAxis",
    value: function yAxis() {
      return this._yAxis;
    }
  }]);

  return TechnicalIndicatorPane;
}(Pane);

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CandleView = /*#__PURE__*/function (_TechnicalIndicatorVi) {
  _inherits(CandleView, _TechnicalIndicatorVi);

  var _super = _createSuper$d(CandleView);

  function CandleView() {
    _classCallCheck(this, CandleView);

    return _super.apply(this, arguments);
  }

  _createClass(CandleView, [{
    key: "_drawContent",
    value: function _drawContent() {
      var candleOptions = this._chartStore.styleOptions().candle;

      this._drawLastPriceLine(candleOptions.priceMark);

      if (candleOptions.type === CandleType.AREA) {
        this._drawArea(candleOptions);
      } else {
        this._drawLowHighPrice(candleOptions.priceMark, 'high', 'high', Number.MIN_SAFE_INTEGER, [-2, -5], function (price, comparePrice) {
          if (price > comparePrice) {
            return price;
          }
        });

        this._drawLowHighPrice(candleOptions.priceMark, 'low', 'low', Number.MAX_SAFE_INTEGER, [2, 5], function (price, comparePrice) {
          if (price < comparePrice) {
            return price;
          }
        });

        this._drawCandle(candleOptions);
      }

      this._drawTechs();

      this._drawGrid();
    }
    /**
     * 绘制面积图
     * @param candleOptions
     * @private
     */

  }, {
    key: "_drawArea",
    value: function _drawArea(candleOptions) {
      var _this = this;

      var lineCoordinates = [];
      var areaCoordinates = [];
      var minY = Number.MAX_SAFE_INTEGER;
      var areaOptions = candleOptions.area;

      var onDrawing = function onDrawing(x, i, kLineData, halfBarSpace, barSpace, n) {
        var value = kLineData[areaOptions.value];

        if (isNumber(value)) {
          var y = _this._yAxis.convertToPixel(value);

          if (n === 0) {
            var startX = x - halfBarSpace;
            areaCoordinates.push({
              x: startX,
              y: _this._height
            });
            areaCoordinates.push({
              x: startX,
              y: y
            });
            lineCoordinates.push({
              x: startX,
              y: y
            });
          }

          lineCoordinates.push({
            x: x,
            y: y
          });
          areaCoordinates.push({
            x: x,
            y: y
          });
          minY = Math.min(minY, y);
        }
      };

      var onDrawEnd = function onDrawEnd() {
        var areaCoordinateLength = areaCoordinates.length;

        if (areaCoordinateLength > 0) {
          var lastCoordinate = areaCoordinates[areaCoordinateLength - 1];

          var halfBarSpace = _this._chartStore.timeScaleStore().halfBarSpace();

          var endX = lastCoordinate.x + halfBarSpace;
          lineCoordinates.push({
            x: endX,
            y: lastCoordinate.y
          });
          areaCoordinates.push({
            x: endX,
            y: lastCoordinate.y
          });
          areaCoordinates.push({
            x: endX,
            y: _this._height
          });
        }

        if (lineCoordinates.length > 0) {
          // 绘制分时线
          _this._ctx.lineWidth = areaOptions.lineSize;
          _this._ctx.strokeStyle = areaOptions.lineColor;
          renderLine(_this._ctx, lineCoordinates);
        }

        if (areaCoordinates.length > 0) {
          // 绘制分时线填充区域
          var backgroundColor = areaOptions.backgroundColor;

          if (isArray(backgroundColor)) {
            var gradient = _this._ctx.createLinearGradient(0, _this._height, 0, minY);

            try {
              backgroundColor.forEach(function (_ref) {
                var offset = _ref.offset,
                    color = _ref.color;
                gradient.addColorStop(offset, color);
              });
            } catch (e) {}

            _this._ctx.fillStyle = gradient;
          } else {
            _this._ctx.fillStyle = backgroundColor;
          }

          renderCloseFillPath(_this._ctx, areaCoordinates);
        }
      };

      this._drawGraphics(onDrawing, onDrawEnd);
    }
    /**
     * 绘制蜡烛
     * @param candleOptions
     * @private
     */

  }, {
    key: "_drawCandle",
    value: function _drawCandle(candleOptions) {
      var _this2 = this;

      this._drawGraphics(function (x, i, kLineData, halfBarSpace, barSpace) {
        _this2._drawCandleBar(x, halfBarSpace, barSpace, i, kLineData, candleOptions.bar, candleOptions.type);
      });
    }
    /**
     * 渲染最高最低价格
     * @param priceMarkOptions
     * @param optionKey
     * @param priceKey
     * @param initPriceValue
     * @param offsets
     * @param compare
     * @private
     */

  }, {
    key: "_drawLowHighPrice",
    value: function _drawLowHighPrice(priceMarkOptions, optionKey, priceKey, initPriceValue, offsets, compare) {
      var lowHighPriceMarkOptions = priceMarkOptions[optionKey];

      if (!priceMarkOptions.show || !lowHighPriceMarkOptions.show) {
        return;
      }

      var visibleDataList = this._chartStore.visibleDataList();

      var price = initPriceValue;
      var pos = -1;
      visibleDataList.forEach(function (_ref2) {
        var index = _ref2.index,
            data = _ref2.data;
        var comparePrice = compare(formatValue(data, priceKey, initPriceValue), price);

        if (comparePrice) {
          price = comparePrice;
          pos = index;
        }
      });

      var pricePrecision = this._chartStore.pricePrecision();

      var priceY = this._yAxis.convertToPixel(price);

      var startX = this._xAxis.convertToPixel(pos);

      var startY = priceY + offsets[0];
      this._ctx.textAlign = 'left';
      this._ctx.lineWidth = 1;
      this._ctx.strokeStyle = lowHighPriceMarkOptions.color;
      this._ctx.fillStyle = lowHighPriceMarkOptions.color;
      renderLine(this._ctx, [{
        x: startX - 2,
        y: startY + offsets[0]
      }, {
        x: startX,
        y: startY
      }, {
        x: startX + 2,
        y: startY + offsets[0]
      }]); // 绘制竖线

      var y = startY + offsets[1];
      renderLine(this._ctx, [{
        x: startX,
        y: startY
      }, {
        x: startX,
        y: y
      }, {
        x: startX + 5,
        y: y
      }]);
      this._ctx.font = createFont(lowHighPriceMarkOptions.textSize, lowHighPriceMarkOptions.textWeight, lowHighPriceMarkOptions.textFamily);
      var text = formatPrecision(price, pricePrecision);
      this._ctx.textBaseline = 'middle';

      this._ctx.fillText(text, startX + 5 + lowHighPriceMarkOptions.textMargin, y);
    }
    /**
     * 绘制最新价线
     * @param priceMarkOptions
     * @private
     */

  }, {
    key: "_drawLastPriceLine",
    value: function _drawLastPriceLine(priceMarkOptions) {
      var lastPriceMarkOptions = priceMarkOptions.last;

      if (!priceMarkOptions.show || !lastPriceMarkOptions.show || !lastPriceMarkOptions.line.show) {
        return;
      }

      var dataList = this._chartStore.dataList();

      var kLineData = dataList[dataList.length - 1];

      if (!kLineData) {
        return;
      }

      var close = kLineData.close;
      var open = kLineData.open;

      var priceY = this._yAxis.convertToNicePixel(close);

      var color;

      if (close > open) {
        color = lastPriceMarkOptions.upColor;
      } else if (close < open) {
        color = lastPriceMarkOptions.downColor;
      } else {
        color = lastPriceMarkOptions.noChangeColor;
      }

      this._ctx.save();

      this._ctx.strokeStyle = color;
      this._ctx.lineWidth = lastPriceMarkOptions.line.size;

      if (lastPriceMarkOptions.line.style === LineStyle.DASH) {
        this._ctx.setLineDash(lastPriceMarkOptions.line.dashValue);
      }

      renderHorizontalLine(this._ctx, priceY, 0, this._width);

      this._ctx.restore();
    }
  }]);

  return CandleView;
}(TechnicalIndicatorView);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CandleOverlayView = /*#__PURE__*/function (_TechnicalIndicatorOv) {
  _inherits(CandleOverlayView, _TechnicalIndicatorOv);

  var _super = _createSuper$c(CandleOverlayView);

  function CandleOverlayView() {
    _classCallCheck(this, CandleOverlayView);

    return _super.apply(this, arguments);
  }

  _createClass(CandleOverlayView, [{
    key: "_drawTooltip",
    value: function _drawTooltip(crosshair, techs) {
      var styleOptions = this._chartStore.styleOptions();

      var candleOptions = styleOptions.candle;
      var candleTooltipOptions = candleOptions.tooltip;
      var techOptions = styleOptions.technicalIndicator;
      var techTooltipOptions = techOptions.tooltip;

      var isDrawCandleTooltip = this._shouldDrawTooltip(crosshair, candleTooltipOptions);

      var isDrawTechTooltip = this._shouldDrawTooltip(crosshair, techTooltipOptions);

      if (candleTooltipOptions.showType === TooltipShowType.RECT && techTooltipOptions.showType === TooltipShowType.RECT) {
        this._drawCandleTooltipWithRect(crosshair, techs, candleOptions, isDrawCandleTooltip, techOptions, isDrawTechTooltip);
      } else {
        if (candleTooltipOptions.showType === TooltipShowType.STANDARD) {
          this._drawCandleTooltipWithStandard(crosshair.kLineData, candleOptions, isDrawCandleTooltip);

          if (techTooltipOptions.showType === TooltipShowType.STANDARD) {
            var offsetTop = isDrawCandleTooltip ? candleTooltipOptions.text.size + candleTooltipOptions.text.marginTop : 0;

            this._drawBatchTechToolTip(crosshair, techs, techOptions, offsetTop, isDrawTechTooltip);
          } else {
            this._drawCandleTooltipWithRect(crosshair, techs, candleOptions, false, techOptions, isDrawTechTooltip);
          }
        } else {
          this._drawCandleTooltipWithRect(crosshair, techs, candleOptions, isDrawCandleTooltip, techOptions, false);

          this._drawBatchTechToolTip(crosshair, techs, techOptions, 0, isDrawTechTooltip);
        }
      }
    }
    /**
     * 绘制蜡烛默认的图例
     * @param kLineData
     * @param candleOptions
     * @param isDrawCandleTooltip
     * @private
     */

  }, {
    key: "_drawCandleTooltipWithStandard",
    value: function _drawCandleTooltipWithStandard(kLineData, candleOptions, isDrawCandleTooltip) {
      var _this = this;

      if (!isDrawCandleTooltip) {
        return;
      }

      var values = this._getCandleTooltipData(kLineData, candleOptions);

      var candleTooltipOptions = candleOptions.tooltip;
      var textMarginLeft = candleTooltipOptions.text.marginLeft;
      var textMarginRight = candleTooltipOptions.text.marginRight;
      var textSize = candleTooltipOptions.text.size;
      var textColor = candleTooltipOptions.text.color;
      var labels = candleTooltipOptions.labels;
      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(textSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
      var labelX = textMarginLeft;
      var labelY = candleTooltipOptions.text.marginTop;
      labels.forEach(function (label, i) {
        var labelWidth = calcTextWidth(_this._ctx, label);
        renderText(_this._ctx, textColor, labelX, labelY, label);
        labelX += labelWidth;
        var value = values[i] || candleTooltipOptions.defaultValue;
        var valueText;
        var valueColor;

        if (isObject(value)) {
          valueText = value.value || candleTooltipOptions.defaultValue;
          valueColor = value.color || textColor;
        } else {
          valueColor = textColor;
          valueText = value;
        }

        var textWidth = calcTextWidth(_this._ctx, valueText);
        renderText(_this._ctx, valueColor, labelX, labelY, valueText);
        labelX += textWidth + textMarginLeft + textMarginRight;
      });
    }
    /**
     * 绘制蜡烛图矩形类型图例
     * @param crosshair
     * @param techs
     * @param candleOptions
     * @param isDrawCandleTooltip
     * @param techOptions
     * @param isDrawTechTooltip
     * @private
     */

  }, {
    key: "_drawCandleTooltipWithRect",
    value: function _drawCandleTooltipWithRect(crosshair, techs, candleOptions, isDrawCandleTooltip, techOptions, isDrawTechTooltip) {
      var _this2 = this;

      if (!isDrawCandleTooltip && !isDrawTechTooltip) {
        return;
      }

      var candleTooltipOptions = candleOptions.tooltip;
      var baseLabels = candleTooltipOptions.labels;

      var baseValues = this._getCandleTooltipData(crosshair.kLineData, candleOptions);

      var baseTextMarginLeft = candleTooltipOptions.text.marginLeft;
      var baseTextMarginRight = candleTooltipOptions.text.marginRight;
      var baseTextMarginTop = candleTooltipOptions.text.marginTop;
      var baseTextMarginBottom = candleTooltipOptions.text.marginBottom;
      var baseTextSize = candleTooltipOptions.text.size;
      var baseTextColor = candleTooltipOptions.text.color;
      var rectOptions = candleTooltipOptions.rect;
      var rectBorderSize = rectOptions.borderSize;
      var rectPaddingLeft = rectOptions.paddingLeft;
      var rectPaddingRight = rectOptions.paddingRight;
      var rectPaddingTop = rectOptions.paddingTop;
      var rectPaddingBottom = rectOptions.paddingBottom;
      var rectLeft = rectOptions.offsetLeft;
      var rectRight = rectOptions.offsetRight;
      var maxLabelWidth = 0;
      var rectWidth = 0;
      var rectHeight = 0;

      this._ctx.save();

      this._ctx.textBaseline = 'top';

      if (isDrawCandleTooltip) {
        this._ctx.font = createFont(baseTextSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
        baseLabels.forEach(function (label, i) {
          var value = baseValues[i];
          var v;

          if (isObject(value)) {
            v = value.value || candleTooltipOptions.defaultValue;
          } else {
            v = value;
          }

          var text = "".concat(label).concat(v);
          var labelWidth = calcTextWidth(_this2._ctx, text) + baseTextMarginLeft + baseTextMarginRight;
          maxLabelWidth = Math.max(maxLabelWidth, labelWidth);
        });
        rectHeight += (baseTextMarginBottom + baseTextMarginTop + baseTextSize) * baseLabels.length;
      }

      var techTooltipOptions = techOptions.tooltip;
      var techTooltipTextMarginLeft = techTooltipOptions.text.marginLeft;
      var techTooltipTextMarginRight = techTooltipOptions.text.marginRight;
      var techTooltipTextMarginTop = techTooltipOptions.text.marginTop;
      var techTooltipTextMarginBottom = techTooltipOptions.text.marginBottom;
      var techTooltipTextSize = techTooltipOptions.text.size;
      var techTooltipDataList = [];
      techs.forEach(function (tech) {
        techTooltipDataList.push(_this2._getTechTooltipData(crosshair, tech, techOptions));
      });

      if (isDrawTechTooltip) {
        this._ctx.font = createFont(techTooltipTextSize, techTooltipOptions.text.weight, techTooltipOptions.text.family);
        techTooltipDataList.forEach(function (tooltipData) {
          tooltipData.values.forEach(function (_ref) {
            var title = _ref.title,
                value = _ref.value;

            if (isValid(title)) {
              var text = "".concat(title).concat(value);
              var labelWidth = calcTextWidth(_this2._ctx, text) + techTooltipTextMarginLeft + techTooltipTextMarginRight;
              maxLabelWidth = Math.max(maxLabelWidth, labelWidth);
              rectHeight += techTooltipTextMarginTop + techTooltipTextMarginBottom + techTooltipTextSize;
            }
          });
        });
      }

      rectWidth += maxLabelWidth;

      if (rectWidth === 0 || rectHeight === 0) {
        return;
      }

      rectWidth += rectBorderSize * 2 + rectPaddingLeft + rectPaddingRight;
      rectHeight += rectBorderSize * 2 + rectPaddingTop + rectPaddingBottom;
      var centerX = this._width / 2;
      var rectX;

      if (crosshair.realX < centerX) {
        rectX = this._width - rectRight - rectWidth;
      } else {
        rectX = rectLeft;
      }

      var rectY = rectOptions.offsetTop;
      var radius = rectOptions.borderRadius;
      renderFillRoundRect(this._ctx, rectOptions.backgroundColor, rectX, rectY, rectWidth, rectHeight, radius);
      renderStrokeRoundRect(this._ctx, rectOptions.borderColor, rectBorderSize, rectX, rectY, rectWidth, rectHeight, radius);
      var baseLabelX = rectX + rectBorderSize + rectPaddingLeft + baseTextMarginLeft;
      var labelY = rectY + rectBorderSize + rectPaddingTop;

      if (isDrawCandleTooltip) {
        // 开始渲染基础数据文字
        this._ctx.font = createFont(baseTextSize, candleTooltipOptions.text.weight, candleTooltipOptions.text.family);
        baseLabels.forEach(function (label, i) {
          labelY += baseTextMarginTop;
          _this2._ctx.textAlign = 'left';
          renderText(_this2._ctx, baseTextColor, baseLabelX, labelY, label);
          var value = baseValues[i];
          var text;
          var color;

          if (isObject(value)) {
            color = value.color || baseTextColor;
            text = value.value || candleTooltipOptions.defaultValue;
          } else {
            color = baseTextColor;
            text = value || candleTooltipOptions.defaultValue;
          }

          _this2._ctx.textAlign = 'right';
          renderText(_this2._ctx, color, rectX + rectWidth - rectBorderSize - baseTextMarginRight - rectPaddingRight, labelY, text);
          labelY += baseTextSize + baseTextMarginBottom;
        });
      }

      if (isDrawTechTooltip) {
        // 开始渲染指标数据文字
        var indicatorLabelX = rectX + rectBorderSize + rectPaddingLeft + techTooltipTextMarginLeft;
        this._ctx.font = createFont(techTooltipTextSize, techTooltipOptions.text.weight, techTooltipOptions.text.family);
        techTooltipDataList.forEach(function (tooltipData) {
          tooltipData.values.forEach(function (v) {
            labelY += techTooltipTextMarginTop;
            _this2._ctx.textAlign = 'left';
            _this2._ctx.fillStyle = v.color || techTooltipOptions.text.color;

            _this2._ctx.fillText(v.title, indicatorLabelX, labelY);

            _this2._ctx.textAlign = 'right';

            _this2._ctx.fillText(v.value, rectX + rectWidth - rectBorderSize - techTooltipTextMarginRight - rectPaddingRight, labelY);

            labelY += techTooltipTextSize + techTooltipTextMarginBottom;
          });
        });
      }

      this._ctx.restore();
    }
    /**
     * 获取蜡烛提示数据
     * @param kLineData
     * @param candleOptions
     * @returns {*}
     * @private
     */

  }, {
    key: "_getCandleTooltipData",
    value: function _getCandleTooltipData(kLineData, candleOptions) {
      var _this3 = this;

      var baseValues = candleOptions.tooltip.values;
      var values = [];

      if (baseValues) {
        if (isFunction(baseValues)) {
          values = baseValues(kLineData, candleOptions) || [];
        } else if (isArray(baseValues)) {
          values = baseValues;
        }
      } else {
        var pricePrecision = this._chartStore.pricePrecision();

        var volumePrecision = this._chartStore.volumePrecision();

        values = [formatValue(kLineData, 'timestamp'), formatValue(kLineData, 'open'), formatValue(kLineData, 'close'), formatValue(kLineData, 'high'), formatValue(kLineData, 'low'), formatValue(kLineData, 'volume')];
        values.forEach(function (value, index) {
          switch (index) {
            case 0:
              {
                values[index] = formatDate(_this3._chartStore.timeScaleStore().dateTimeFormat(), value, 'YYYY-MM-DD hh:mm');
                break;
              }

            case values.length - 1:
              {
                values[index] = formatBigNumber(formatPrecision(value, volumePrecision));
                break;
              }

            default:
              {
                values[index] = formatPrecision(value, pricePrecision);
                break;
              }
          }
        });
      }

      return values;
    }
  }]);

  return CandleOverlayView;
}(TechnicalIndicatorOverlayView);

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CandleWidget = /*#__PURE__*/function (_TechnicalIndicatorWi) {
  _inherits(CandleWidget, _TechnicalIndicatorWi);

  var _super = _createSuper$b(CandleWidget);

  function CandleWidget() {
    _classCallCheck(this, CandleWidget);

    return _super.apply(this, arguments);
  }

  _createClass(CandleWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new CandleView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new CandleOverlayView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId);
    }
  }]);

  return CandleWidget;
}(TechnicalIndicatorWidget);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CandlePane = /*#__PURE__*/function (_TechnicalIndicatorPa) {
  _inherits(CandlePane, _TechnicalIndicatorPa);

  var _super = _createSuper$a(CandlePane);

  function CandlePane() {
    _classCallCheck(this, CandlePane);

    return _super.apply(this, arguments);
  }

  _createClass(CandlePane, [{
    key: "_createYAxis",
    value: function _createYAxis(props) {
      return new YAxis(props.chartStore, true, props.id);
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new CandleWidget({
        container: container,
        chartStore: props.chartStore,
        xAxis: props.xAxis,
        yAxis: this._yAxis,
        paneId: props.id
      });
    }
  }]);

  return CandlePane;
}(TechnicalIndicatorPane);

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var XAxisView = /*#__PURE__*/function (_View) {
  _inherits(XAxisView, _View);

  var _super = _createSuper$9(XAxisView);

  function XAxisView(container, chartStore, xAxis) {
    var _this;

    _classCallCheck(this, XAxisView);

    _this = _super.call(this, container, chartStore);
    _this._xAxis = xAxis;
    return _this;
  }

  _createClass(XAxisView, [{
    key: "_draw",
    value: function _draw() {
      var xAxisOptions = this._chartStore.styleOptions().xAxis;

      if (xAxisOptions.show) {
        this._drawAxisLine(xAxisOptions);

        this._drawTickLines(xAxisOptions);

        this._drawTickLabels(xAxisOptions);
      }
    }
  }, {
    key: "_drawAxisLine",
    value: function _drawAxisLine(xAxisOptions) {
      var xAxisLine = xAxisOptions.axisLine;

      if (!xAxisLine.show) {
        return;
      }

      this._ctx.strokeStyle = xAxisLine.color;
      this._ctx.lineWidth = xAxisLine.size;
      renderHorizontalLine(this._ctx, 0, 0, this._width);
    }
  }, {
    key: "_drawTickLines",
    value: function _drawTickLines(xAxisOptions) {
      var _this2 = this;

      var tickLine = xAxisOptions.tickLine;

      if (!tickLine.show) {
        return;
      }

      this._ctx.lineWidth = tickLine.size;
      this._ctx.strokeStyle = tickLine.color;
      var startY = xAxisOptions.axisLine.show ? xAxisOptions.axisLine.size : 0;
      var endY = startY + tickLine.length;

      this._xAxis.ticks().forEach(function (tick) {
        renderVerticalLine(_this2._ctx, tick.x, startY, endY);
      });
    }
  }, {
    key: "_drawTickLabels",
    value: function _drawTickLabels(xAxisOptions) {
      var tickText = xAxisOptions.tickText;

      if (!tickText.show) {
        return;
      }

      var tickLine = xAxisOptions.tickLine;
      this._ctx.textBaseline = 'top';
      this._ctx.font = createFont(tickText.size, tickText.weight, tickText.family);
      this._ctx.textAlign = 'center';
      this._ctx.fillStyle = tickText.color;
      var labelY = tickText.paddingTop;

      if (xAxisOptions.axisLine.show) {
        labelY += xAxisOptions.axisLine.size;
      }

      if (tickLine.show) {
        labelY += tickLine.length;
      }

      var ticks = this._xAxis.ticks();

      var tickLength = ticks.length;

      for (var i = 0; i < tickLength; i++) {
        this._ctx.fillText(ticks[i].v, ticks[i].x, labelY);
      }
    }
  }]);

  return XAxisView;
}(View);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var XAxisOverlayView = /*#__PURE__*/function (_View) {
  _inherits(XAxisOverlayView, _View);

  var _super = _createSuper$8(XAxisOverlayView);

  function XAxisOverlayView(container, chartStore, xAxis) {
    var _this;

    _classCallCheck(this, XAxisOverlayView);

    _this = _super.call(this, container, chartStore);
    _this._xAxis = xAxis;
    return _this;
  }

  _createClass(XAxisOverlayView, [{
    key: "_draw",
    value: function _draw() {
      this._drawCrosshairLabel();
    }
  }, {
    key: "_drawCrosshairLabel",
    value: function _drawCrosshairLabel() {
      var crosshair = this._chartStore.crosshairStore().get();

      if (!crosshair.paneId) {
        return;
      }

      var crosshairOptions = this._chartStore.styleOptions().crosshair;

      var crosshairVerticalOptions = crosshairOptions.vertical;
      var crosshairVerticalTextOptions = crosshairVerticalOptions.text;

      if (!crosshairOptions.show || !crosshairVerticalOptions.show || !crosshairVerticalTextOptions.show || crosshair.dataIndex !== crosshair.realDataIndex) {
        return;
      }

      var timestamp = crosshair.kLineData.timestamp;
      var text = formatDate(this._chartStore.timeScaleStore().dateTimeFormat(), timestamp, 'YYYY-MM-DD hh:mm');
      var paddingLeft = crosshairVerticalTextOptions.paddingLeft;
      var paddingRight = crosshairVerticalTextOptions.paddingRight;
      var paddingTop = crosshairVerticalTextOptions.paddingTop;
      var borderSize = crosshairVerticalTextOptions.borderSize;
      var rectWidth = getTextRectWidth(this._ctx, text, crosshairVerticalTextOptions);
      var rectHeight = getTextRectHeight(crosshairVerticalTextOptions);
      var labelWidth = rectWidth - borderSize * 2 - paddingLeft - paddingRight;
      var labelX = crosshair.realX - labelWidth / 2; // 保证整个x轴上的提示文字总是完全显示

      if (labelX < paddingLeft + borderSize) {
        labelX = paddingLeft + borderSize;
      } else if (labelX > this._width - labelWidth - borderSize - paddingRight) {
        labelX = this._width - labelWidth - borderSize - paddingRight;
      }

      var rectX = labelX - borderSize - paddingLeft;
      renderStrokeFillRoundRect(this._ctx, crosshairVerticalTextOptions.backgroundColor, crosshairVerticalTextOptions.borderColor, borderSize, rectX, 0, rectWidth, rectHeight, crosshairVerticalTextOptions.borderRadius); // 绘制轴上的提示文字

      this._ctx.textBaseline = 'top';
      renderText(this._ctx, crosshairVerticalTextOptions.color, labelX, borderSize + paddingTop, text);
    }
  }]);

  return XAxisOverlayView;
}(View);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var XAxisWidget = /*#__PURE__*/function (_Widget) {
  _inherits(XAxisWidget, _Widget);

  var _super = _createSuper$7(XAxisWidget);

  function XAxisWidget() {
    _classCallCheck(this, XAxisWidget);

    return _super.apply(this, arguments);
  }

  _createClass(XAxisWidget, [{
    key: "_createMainView",
    value: function _createMainView(container, props) {
      return new XAxisView(container, props.chartStore, props.xAxis);
    }
  }, {
    key: "_createOverlayView",
    value: function _createOverlayView(container, props) {
      return new XAxisOverlayView(container, props.chartStore, props.xAxis);
    }
  }]);

  return XAxisWidget;
}(Widget);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var XAxis = /*#__PURE__*/function (_Axis) {
  _inherits(XAxis, _Axis);

  var _super = _createSuper$6(XAxis);

  function XAxis() {
    _classCallCheck(this, XAxis);

    return _super.apply(this, arguments);
  }

  _createClass(XAxis, [{
    key: "_computeMinMax",
    value: function _computeMinMax() {
      return {
        min: this._chartStore.timeScaleStore().from(),
        max: this._chartStore.timeScaleStore().to() - 1
      };
    }
  }, {
    key: "_optimalMinMax",
    value: function _optimalMinMax(_ref) {
      var min = _ref.min,
          max = _ref.max;
      return {
        min: min,
        max: max,
        range: max - min + 1
      };
    }
  }, {
    key: "_optimalTicks",
    value: function _optimalTicks(ticks) {
      var optimalTicks = [];
      var tickLength = ticks.length;

      var dataList = this._chartStore.dataList();

      if (tickLength > 0) {
        var dateTimeFormat = this._chartStore.timeScaleStore().dateTimeFormat();

        var tickText = this._chartStore.styleOptions().xAxis.tickText;

        this._measureCtx.font = createFont(tickText.size, tickText.weight, tickText.family);
        var defaultLabelWidth = calcTextWidth(this._measureCtx, '00-00 00:00');
        var pos = parseInt(ticks[0].v, 10);
        var x = this.convertToPixel(pos);
        var tickCountDif = 1;

        if (tickLength > 1) {
          var nextPos = parseInt(ticks[1].v, 10);
          var nextX = this.convertToPixel(nextPos);
          var xDif = Math.abs(nextX - x);

          if (xDif < defaultLabelWidth) {
            tickCountDif = Math.ceil(defaultLabelWidth / xDif);
          }
        }

        for (var i = 0; i < tickLength; i += tickCountDif) {
          var _pos = parseInt(ticks[i].v, 10);

          var kLineData = dataList[_pos];
          var timestamp = kLineData.timestamp;
          var label = formatDate(dateTimeFormat, timestamp, 'hh:mm');

          if (i !== 0) {
            var prePos = parseInt(ticks[i - tickCountDif].v, 10);
            var preKLineData = dataList[prePos];
            var preTimestamp = preKLineData.timestamp;
            label = this._optimalTickLabel(dateTimeFormat, timestamp, preTimestamp) || label;
          }

          var _x = this.convertToPixel(_pos);

          optimalTicks.push({
            v: label,
            x: _x,
            oV: timestamp
          });
        }

        var optimalTickLength = optimalTicks.length;

        if (optimalTickLength === 1) {
          optimalTicks[0].v = formatDate(dateTimeFormat, optimalTicks[0].oV, 'YYYY-MM-DD hh:mm');
        } else {
          var firstTimestamp = optimalTicks[0].oV;
          var secondTimestamp = optimalTicks[1].oV;

          if (optimalTicks[2]) {
            var thirdV = optimalTicks[2].v;

            if (/^[0-9]{2}-[0-9]{2}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'MM-DD');
            } else if (/^[0-9]{4}-[0-9]{2}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'YYYY-MM');
            } else if (/^[0-9]{4}$/.test(thirdV)) {
              optimalTicks[0].v = formatDate(dateTimeFormat, firstTimestamp, 'YYYY');
            }
          } else {
            optimalTicks[0].v = this._optimalTickLabel(dateTimeFormat, firstTimestamp, secondTimestamp) || optimalTicks[0].v;
          }
        }
      }

      return optimalTicks;
    }
  }, {
    key: "_optimalTickLabel",
    value: function _optimalTickLabel(dateTimeFormat, timestamp, comparedTimestamp) {
      var year = formatDate(dateTimeFormat, timestamp, 'YYYY');
      var month = formatDate(dateTimeFormat, timestamp, 'YYYY-MM');
      var day = formatDate(dateTimeFormat, timestamp, 'MM-DD');

      if (year !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY')) {
        return year;
      } else if (month !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY-MM')) {
        return month;
      } else if (day !== formatDate(dateTimeFormat, comparedTimestamp, 'MM-DD')) {
        return day;
      }

      return null;
    }
    /**
     * 获取自身高度
     */

  }, {
    key: "getSelfHeight",
    value: function getSelfHeight() {
      var stylOptions = this._chartStore.styleOptions();

      var xAxisOptions = stylOptions.xAxis;
      var height = xAxisOptions.height;

      if (isNumber(height)) {
        return height;
      }

      var crosshairOptions = stylOptions.crosshair;
      var xAxisHeight = 0;

      if (xAxisOptions.show) {
        if (xAxisOptions.axisLine.show) {
          xAxisHeight += xAxisOptions.axisLine.size;
        }

        if (xAxisOptions.tickLine.show) {
          xAxisHeight += xAxisOptions.tickLine.length;
        }

        if (xAxisOptions.tickText.show) {
          xAxisHeight += xAxisOptions.tickText.paddingTop + xAxisOptions.tickText.paddingBottom + xAxisOptions.tickText.size;
        }
      }

      var crosshairVerticalTextHeight = 0;

      if (crosshairOptions.show && crosshairOptions.vertical.show && crosshairOptions.vertical.text.show) {
        crosshairVerticalTextHeight += crosshairOptions.vertical.text.paddingTop + crosshairOptions.vertical.text.paddingBottom + crosshairOptions.vertical.text.borderSize * 2 + crosshairOptions.vertical.text.size;
      }

      return Math.max(xAxisHeight, crosshairVerticalTextHeight);
    }
  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(pixel) {
      return this._chartStore.timeScaleStore().coordinateToDataIndex(pixel);
    }
  }, {
    key: "convertToPixel",
    value: function convertToPixel(value) {
      return this._chartStore.timeScaleStore().dataIndexToCoordinate(value);
    }
  }]);

  return XAxis;
}(Axis);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var XAxisPane = /*#__PURE__*/function (_Pane) {
  _inherits(XAxisPane, _Pane);

  var _super = _createSuper$5(XAxisPane);

  function XAxisPane() {
    _classCallCheck(this, XAxisPane);

    return _super.apply(this, arguments);
  }

  _createClass(XAxisPane, [{
    key: "_initBefore",
    value: function _initBefore() {
      this._xAxis = new XAxis(this._chartStore);
    }
  }, {
    key: "_createMainWidget",
    value: function _createMainWidget(container, props) {
      return new XAxisWidget({
        container: container,
        chartStore: props.chartStore,
        xAxis: this._xAxis
      });
    }
  }, {
    key: "xAxis",
    value: function xAxis() {
      return this._xAxis;
    }
  }, {
    key: "setWidth",
    value: function setWidth(mainWidgetWidth, yAxisWidgetWidth) {
      _get(_getPrototypeOf(XAxisPane.prototype), "setWidth", this).call(this, mainWidgetWidth, yAxisWidgetWidth);

      this._xAxis.setWidth(mainWidgetWidth);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      _get(_getPrototypeOf(XAxisPane.prototype), "setHeight", this).call(this, height);

      this._xAxis.setHeight(height);
    }
  }]);

  return XAxisPane;
}(Pane);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EventType = {
  MOUSE: 'mouse',
  TOUCH: 'touch'
};
function isTouch(event) {
  return event.type === EventType.TOUCH;
}
function isMouse(event) {
  return event.type === EventType.MOUSE;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MouseEventButton = {
  LEFT: 0,
  RIGHT: 2
};
var DELAY_RESET_CLICK = 500;
var DELAY_LONG_TAG = 600;

function getBoundingClientRect(element) {
  return element.getBoundingClientRect() || {
    left: 0,
    top: 0
  };
}

function isTouchEvent(event) {
  return Boolean(event.touches);
}

function preventDefault(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
}

function mobileTouch() {
  var touchEvent;

  if ('ontouchstart' in window) {
    touchEvent = true;
  } else {
    touchEvent = Boolean(window.DocumentTouch && document instanceof window.DocumentTouch);
  }

  return 'onorientationchange' in window && (!!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || touchEvent);
}

function getDistance(p1, p2) {
  var xDiff = p1.clientX - p2.clientX;
  var yDiff = p1.clientY - p2.clientY;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

var EventBase = /*#__PURE__*/function () {
  function EventBase(target, eventHandler, options) {
    _classCallCheck(this, EventBase);

    this._target = target;
    this._handler = eventHandler;
    this._options = options;
    this._clickCount = 0;
    this._clickTimeoutId = null;
    this._longTapTimeoutId = null;
    this._longTapActive = false;
    this._mouseMoveStartPosition = null;
    this._moveExceededManhattanDistance = false;
    this._cancelClick = false;
    this._unsubscribeOutsideEvents = null;
    this._unsubscribeMousemove = null;
    this._unsubscribeRoot = null;
    this._startPinchMiddleCoordinate = null;
    this._startPinchDistance = 0;
    this._pinchPrevented = false;
    this._preventDragProcess = false;
    this._mousePressed = false;

    this._init();
  }

  _createClass(EventBase, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._options = _objectSpread$1(_objectSpread$1({}, this.options), options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._unsubscribeOutsideEvents !== null) {
        this._unsubscribeOutsideEvents();

        this._unsubscribeOutsideEvents = null;
      }

      if (this._unsubscribeMousemove !== null) {
        this._unsubscribeMousemove();

        this._unsubscribeMousemove = null;
      }

      if (this._unsubscribeRoot !== null) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      this._clearLongTapTimeout();

      this._resetClickTimeout();
    }
  }, {
    key: "_mouseEnterHandler",
    value: function _mouseEnterHandler(enterEvent) {
      var _this = this;

      if (this._unsubscribeMousemove) {
        this._unsubscribeMousemove();
      }

      {
        var boundMouseMoveHandler = this._mouseMoveHandler.bind(this);

        var boundMouseWheelHandler = this._mouseWheelHandler.bind(this);

        this._unsubscribeMousemove = function () {
          _this._target.removeEventListener('mousemove', boundMouseMoveHandler);

          _this._target.removeEventListener('wheel', boundMouseWheelHandler);
        };

        this._target.addEventListener('mousemove', boundMouseMoveHandler);

        this._target.addEventListener('wheel', boundMouseWheelHandler, {
          passive: false
        });
      }

      if (isTouchEvent(enterEvent)) {
        this._mouseMoveHandler(enterEvent);
      }

      var compatEvent = this._makeCompatEvent(enterEvent);

      this._processEvent(compatEvent, this._handler.mouseEnterEvent);
    }
  }, {
    key: "_resetClickTimeout",
    value: function _resetClickTimeout() {
      if (this._clickTimeoutId !== null) {
        clearTimeout(this._clickTimeoutId);
      }

      this._clickCount = 0;
      this._clickTimeoutId = null;
    }
  }, {
    key: "_mouseMoveHandler",
    value: function _mouseMoveHandler(moveEvent) {
      if (this._mousePressed && !isTouchEvent(moveEvent)) {
        return;
      }

      var compatEvent = this._makeCompatEvent(moveEvent);

      this._processEvent(compatEvent, this._handler.mouseMoveEvent);
    }
  }, {
    key: "_mouseWheelHandler",
    value: function _mouseWheelHandler(wheelEvent) {
      var compatEvent = this._makeCompatEvent(wheelEvent);

      wheelEvent.localX = compatEvent.localX;
      wheelEvent.localY = compatEvent.localY;

      this._processEvent(wheelEvent, this._handler.mouseWheelEvent);
    }
  }, {
    key: "_mouseMoveWithDownHandler",
    value: function _mouseMoveWithDownHandler(moveEvent) {
      if ('button' in moveEvent && moveEvent.button !== MouseEventButton.LEFT) {
        return;
      }

      if (this._startPinchMiddleCoordinate !== null) {
        return;
      }

      var isTouch = isTouchEvent(moveEvent);

      if (this._preventDragProcess && isTouch) {
        return;
      }

      this._pinchPrevented = true;

      var compatEvent = this._makeCompatEvent(moveEvent);

      var startMouseMovePos = this._mouseMoveStartPosition;
      var xOffset = Math.abs(startMouseMovePos.x - compatEvent.pageX);
      var yOffset = Math.abs(startMouseMovePos.y - compatEvent.pageY);
      var moveExceededManhattanDistance = xOffset + yOffset > 5;

      if (!moveExceededManhattanDistance && isTouch) {
        return;
      }

      if (moveExceededManhattanDistance && !this._moveExceededManhattanDistance && isTouch) {
        // vertical drag is more important than horizontal drag
        // because we scroll the page vertically often than horizontally
        var correctedXOffset = xOffset * 0.5; // a drag can be only if touch page scroll isn't allowed

        var isVertDrag = yOffset >= correctedXOffset && !this._options.treatVertTouchDragAsPageScroll;
        var isHorzDrag = correctedXOffset > yOffset && !this._options.treatHorzTouchDragAsPageScroll; // if drag event happened then we should revert preventDefault state to original one
        // and try to process the drag event
        // else we shouldn't prevent default of the event and ignore processing the drag event

        if (!isVertDrag && !isHorzDrag) {
          this._preventDragProcess = true;
        }
      }

      if (moveExceededManhattanDistance) {
        this._moveExceededManhattanDistance = true; // if manhattan distance is more that 5 - we should cancel click event

        this._cancelClick = true;

        if (isTouch) {
          this._clearLongTapTimeout();
        }
      }

      if (!this._preventDragProcess) {
        this._processEvent(compatEvent, this._handler.pressedMouseMoveEvent); // we should prevent default in case of touch only
        // to prevent scroll of the page


        if (isTouch) {
          preventDefault(moveEvent);
        }
      }
    }
  }, {
    key: "_mouseUpHandler",
    value: function _mouseUpHandler(mouseUpEvent) {
      if ('button' in mouseUpEvent && mouseUpEvent.button !== MouseEventButton.LEFT) {
        return;
      }

      var compatEvent = this._makeCompatEvent(mouseUpEvent);

      this._clearLongTapTimeout();

      this._mouseMoveStartPosition = null;
      this._mousePressed = false;

      if (this._unsubscribeRoot) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      if (isTouchEvent(mouseUpEvent)) {
        this._mouseLeaveHandler(mouseUpEvent);
      }

      this._processEvent(compatEvent, this._handler.mouseUpEvent);

      ++this._clickCount;

      if (this._clickTimeoutId && this._clickCount > 1) {
        this._processEvent(compatEvent, this._handler.mouseDoubleClickEvent);

        this._resetClickTimeout();
      } else {
        if (!this._cancelClick) {
          this._processEvent(compatEvent, this._handler.mouseClickEvent);
        }
      } // prevent safari's dblclick-to-zoom
      // we handle mouseDoubleClickEvent here ourself


      if (isTouchEvent(mouseUpEvent)) {
        preventDefault(mouseUpEvent);

        this._mouseLeaveHandler(mouseUpEvent);

        if (mouseUpEvent.touches.length === 0) {
          this._longTapActive = false;
        }
      }
    }
  }, {
    key: "_clearLongTapTimeout",
    value: function _clearLongTapTimeout() {
      if (this._longTapTimeoutId === null) {
        return;
      }

      clearTimeout(this._longTapTimeoutId);
      this._longTapTimeoutId = null;
    }
  }, {
    key: "_mouseDownHandler",
    value: function _mouseDownHandler(downEvent) {
      if ('button' in downEvent && downEvent.button !== MouseEventButton.LEFT && downEvent.button !== MouseEventButton.RIGHT) {
        return;
      }

      var compatEvent = this._makeCompatEvent(downEvent);

      if ('button' in downEvent && downEvent.button === MouseEventButton.RIGHT) {
        this._processEvent(compatEvent, this._handler.mouseRightDownEvent);

        return;
      }

      this._cancelClick = false;
      this._moveExceededManhattanDistance = false;
      this._preventDragProcess = false;

      if (isTouchEvent(downEvent)) {
        this._mouseEnterHandler(downEvent);
      }

      this._mouseMoveStartPosition = {
        x: compatEvent.pageX,
        y: compatEvent.pageY
      };

      if (this._unsubscribeRoot) {
        this._unsubscribeRoot();

        this._unsubscribeRoot = null;
      }

      {
        var boundMouseMoveWithDownHandler = this._mouseMoveWithDownHandler.bind(this);

        var boundMouseUpHandler = this._mouseUpHandler.bind(this);

        var rootElement = this._target.ownerDocument.documentElement;

        this._unsubscribeRoot = function () {
          rootElement.removeEventListener('touchmove', boundMouseMoveWithDownHandler);
          rootElement.removeEventListener('touchend', boundMouseUpHandler);
          rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler);
          rootElement.removeEventListener('mouseup', boundMouseUpHandler);
        };

        rootElement.addEventListener('touchmove', boundMouseMoveWithDownHandler, {
          passive: false
        });
        rootElement.addEventListener('touchend', boundMouseUpHandler, {
          passive: false
        });

        this._clearLongTapTimeout();

        if (isTouchEvent(downEvent) && downEvent.touches.length === 1) {
          this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, downEvent), DELAY_LONG_TAG);
        } else {
          rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler);
          rootElement.addEventListener('mouseup', boundMouseUpHandler);
        }
      }
      this._mousePressed = true;

      this._processEvent(compatEvent, this._handler.mouseDownEvent);

      if (!this._clickTimeoutId) {
        this._clickCount = 0;
        this._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), DELAY_RESET_CLICK);
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._target.addEventListener('mouseenter', this._mouseEnterHandler.bind(this));

      this._target.addEventListener('touchcancel', this._clearLongTapTimeout.bind(this));

      {
        var doc = this._target.ownerDocument;

        var outsideHandler = function outsideHandler(event) {
          if (!_this2._handler.mouseDownOutsideEvent) {
            return;
          }

          if (event.target && _this2._target.contains(event.target)) {
            return;
          }

          _this2._handler.mouseDownOutsideEvent();
        };

        this._unsubscribeOutsideEvents = function () {
          doc.removeEventListener('mousedown', outsideHandler);
          doc.removeEventListener('touchstart', outsideHandler);
        };

        doc.addEventListener('mousedown', outsideHandler);
        doc.addEventListener('touchstart', outsideHandler, {
          passive: true
        });
      }

      this._target.addEventListener('mouseleave', this._mouseLeaveHandler.bind(this));

      this._target.addEventListener('touchstart', this._mouseDownHandler.bind(this), {
        passive: true
      });

      if (!mobileTouch()) {
        this._target.addEventListener('mousedown', this._mouseDownHandler.bind(this));
      }

      this._initPinch(); // Hey mobile Safari, what's up?
      // If mobile Safari doesn't have any touchmove handler with passive=false
      // it treats a touchstart and the following touchmove events as cancelable=false,
      // so we can't prevent them (as soon we subscribe on touchmove inside handler of touchstart).
      // And we'll get scroll of the page along with chart's one instead of only chart's scroll.


      this._target.addEventListener('touchmove', function () {}, {
        passive: false
      });
    }
  }, {
    key: "_initPinch",
    value: function _initPinch() {
      var _this3 = this;

      if (this._handler.pinchStartEvent === undefined && this._handler.pinchEvent === undefined && this._handler.pinchEndEvent === undefined) {
        return;
      }

      this._target.addEventListener('touchstart', function (event) {
        return _this3._checkPinchState(event.touches);
      }, {
        passive: true
      });

      this._target.addEventListener('touchmove', function (event) {
        if (event.touches.length !== 2 || _this3._startPinchMiddleCoordinate === null) {
          return;
        }

        if (_this3._handler.pinchEvent !== undefined) {
          var currentDistance = getDistance(event.touches[0], event.touches[1]);
          var scale = currentDistance / _this3._startPinchDistance;

          _this3._handler.pinchEvent(_this3._startPinchMiddleCoordinate, scale);

          preventDefault(event);
        }
      }, {
        passive: false
      });

      this._target.addEventListener('touchend', function (event) {
        _this3._checkPinchState(event.touches);
      });
    }
  }, {
    key: "_checkPinchState",
    value: function _checkPinchState(touches) {
      if (touches.length === 1) {
        this._pinchPrevented = false;
      }

      if (touches.length !== 2 || this._pinchPrevented || this._longTapActive) {
        this._stopPinch();
      } else {
        this._startPinch(touches);
      }
    }
  }, {
    key: "_startPinch",
    value: function _startPinch(touches) {
      var box = getBoundingClientRect(this._target);
      this._startPinchMiddleCoordinate = {
        x: (touches[0].clientX - box.left + (touches[1].clientX - box.left)) / 2,
        y: (touches[0].clientY - box.top + (touches[1].clientY - box.top)) / 2
      };
      this._startPinchDistance = getDistance(touches[0], touches[1]);

      if (this._handler.pinchStartEvent !== undefined) {
        this._handler.pinchStartEvent();
      }

      this._clearLongTapTimeout();
    }
  }, {
    key: "_stopPinch",
    value: function _stopPinch() {
      if (this._startPinchMiddleCoordinate === null) {
        return;
      }

      this._startPinchMiddleCoordinate = null;

      if (this._handler.pinchEndEvent !== undefined) {
        this._handler.pinchEndEvent();
      }
    }
  }, {
    key: "_mouseLeaveHandler",
    value: function _mouseLeaveHandler(event) {
      if (this._unsubscribeMousemove) {
        this._unsubscribeMousemove();
      }

      var compatEvent = this._makeCompatEvent(event);

      this._processEvent(compatEvent, this._handler.mouseLeaveEvent);
    }
  }, {
    key: "_longTapHandler",
    value: function _longTapHandler(event) {
      var compatEvent = this._makeCompatEvent(event);

      this._processEvent(compatEvent, this._handler.longTapEvent);

      this._cancelClick = true; // long tap is active untill touchend event with 0 touches occured

      this._longTapActive = true;
    }
  }, {
    key: "_processEvent",
    value: function _processEvent(event, callback) {
      if (!callback) {
        return;
      }

      callback.call(this._handler, event);
    }
  }, {
    key: "_makeCompatEvent",
    value: function _makeCompatEvent(event) {
      // TouchEvent has no clientX/Y coordinates:
      // We have to use the last Touch instead
      var eventLike;

      if ('touches' in event && event.touches.length) {
        eventLike = event.touches[0];
      } else if ('changedTouches' in event && event.changedTouches.length) {
        eventLike = event.changedTouches[0];
      } else {
        eventLike = event;
      }

      var box = getBoundingClientRect(this._target);
      return {
        clientX: eventLike.clientX,
        clientY: eventLike.clientY,
        pageX: eventLike.pageX,
        pageY: eventLike.pageY,
        screenX: eventLike.screenX,
        screenY: eventLike.screenY,
        localX: eventLike.clientX - box.left,
        localY: eventLike.clientY - box.top,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        type: event.type.startsWith('mouse') ? EventType.MOUSE : EventType.TOUCH,
        target: eventLike.target,
        view: event.view
      };
    }
  }]);

  return EventBase;
}();

var SeparatorPane = /*#__PURE__*/function () {
  function SeparatorPane(container, chartStore, topPaneId, bottomPaneId, dragEnabled, dragEventHandler) {
    _classCallCheck(this, SeparatorPane);

    this._chartStore = chartStore;
    this._topPaneId = topPaneId;
    this._bottomPaneId = bottomPaneId;
    this._dragEnabled = dragEnabled;
    this._width = 0;
    this._offsetLeft = 0;
    this._dragEventHandler = dragEventHandler;
    this._dragFlag = false;

    this._initElement(container);

    this._initEvent(dragEnabled);
  }
  /**
   * 初始化dom元素
   * @param container
   * @private
   */


  _createClass(SeparatorPane, [{
    key: "_initElement",
    value: function _initElement(container) {
      this._container = container;
      this._wrapper = createElement('div', {
        margin: '0',
        padding: '0',
        position: 'relative',
        boxSizing: 'border-box'
      });
      this._element = createElement('div', {
        width: '100%',
        height: '7px',
        margin: '0',
        padding: '0',
        position: 'absolute',
        top: '-3px',
        zIndex: '20',
        boxSizing: 'border-box'
      });

      this._wrapper.appendChild(this._element);

      var lastElement = container.lastChild;

      if (lastElement) {
        container.insertBefore(this._wrapper, lastElement);
      } else {
        container.appendChild(this._wrapper);
      }
    }
    /**
     * 初始化事件
     * @param dragEnabled
     * @private
     */

  }, {
    key: "_initEvent",
    value: function _initEvent(dragEnabled) {
      if (dragEnabled) {
        this._element.style.cursor = 'ns-resize';
        this._dragEvent = new EventBase(this._element, {
          mouseDownEvent: this._mouseDownEvent.bind(this),
          mouseUpEvent: this._mouseUpEvent.bind(this),
          pressedMouseMoveEvent: this._pressedMouseMoveEvent.bind(this),
          mouseEnterEvent: this._mouseEnterEvent.bind(this),
          mouseLeaveEvent: this._mouseLeaveEvent.bind(this)
        }, {
          treatVertTouchDragAsPageScroll: false,
          treatHorzTouchDragAsPageScroll: true
        });
      }
    }
  }, {
    key: "_mouseDownEvent",
    value: function _mouseDownEvent(event) {
      this._dragFlag = true;
      this._startY = event.pageY;

      this._dragEventHandler.startDrag(this._topPaneId, this._bottomPaneId);
    }
  }, {
    key: "_mouseUpEvent",
    value: function _mouseUpEvent() {
      this._dragFlag = false;

      this._chartStore.setDragPaneFlag(false);
    }
  }, {
    key: "_pressedMouseMoveEvent",
    value: function _pressedMouseMoveEvent(event) {
      var dragDistance = event.pageY - this._startY;

      this._dragEventHandler.drag(dragDistance, this._topPaneId, this._bottomPaneId);

      this._chartStore.setDragPaneFlag(true);

      this._chartStore.crosshairStore().set();
    }
  }, {
    key: "_mouseEnterEvent",
    value: function _mouseEnterEvent() {
      var separatorOptions = this._chartStore.styleOptions().separator;

      this._element.style.background = separatorOptions.activeBackgroundColor; // this._chartStore.setDragPaneFlag(true)

      this._chartStore.crosshairStore().set();
    }
  }, {
    key: "_mouseLeaveEvent",
    value: function _mouseLeaveEvent() {
      if (!this._dragFlag) {
        this._element.style.background = null;

        this._chartStore.setDragPaneFlag(false);
      }
    }
    /**
     * 获取高度
     * @returns {number}
     */

  }, {
    key: "height",
    value: function height() {
      return this._wrapper.offsetHeight;
    }
    /**
     * 设置尺寸
     * 用于fill属性
     * @param offsetLeft
     * @param width
     */

  }, {
    key: "setSize",
    value: function setSize(offsetLeft, width) {
      this._offsetLeft = offsetLeft;
      this._width = width;
      this.invalidate();
    }
    /**
     * 设置是否可以拖拽
     * @param dragEnabled
     */

  }, {
    key: "setDragEnabled",
    value: function setDragEnabled(dragEnabled) {
      if (dragEnabled !== this._dragEnabled) {
        this._dragEnabled = dragEnabled;

        if (dragEnabled) {
          !this._dragEvent && this._initEvent(dragEnabled);
        } else {
          this._element.style.cursor = 'default';
          this._dragEvent && this._dragEvent.destroy();
          this._dragEvent = null;
        }
      }
    }
    /**
     * 顶部paneId
     * @return {*}
     */

  }, {
    key: "topPaneId",
    value: function topPaneId() {
      return this._topPaneId;
    }
    /**
     * 底部paneId
     * @return {*}
     */

  }, {
    key: "bottomPaneId",
    value: function bottomPaneId() {
      return this._bottomPaneId;
    }
    /**
     * 更新上下两个图表的索引
     * @param topPaneId
     * @param bottomPaneId
     */

  }, {
    key: "updatePaneId",
    value: function updatePaneId(topPaneId, bottomPaneId) {
      if (isValid(topPaneId)) {
        this._topPaneId = topPaneId;
      }

      if (isValid(bottomPaneId)) {
        this._bottomPaneId = bottomPaneId;
      }
    }
    /**
     * 刷新
     */

  }, {
    key: "invalidate",
    value: function invalidate() {
      var separatorOptions = this._chartStore.styleOptions().separator;

      this._element.style.top = "".concat(-Math.floor((7 - separatorOptions.size) / 2), "px");
      this._wrapper.style.backgroundColor = separatorOptions.color;
      this._wrapper.style.height = "".concat(separatorOptions.size, "px");
      this._wrapper.style.marginLeft = "".concat(separatorOptions.fill ? 0 : this._offsetLeft, "px");
      this._wrapper.style.width = separatorOptions.fill ? '100%' : "".concat(this._width, "px");
    }
    /**
     * 将图形转换成图片
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getImage",
    value: function getImage() {
      var separatorOptions = this._chartStore.styleOptions().separator;

      var width = this._wrapper.offsetWidth;
      var height = separatorOptions.size;
      var canvas = createElement('canvas', {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        boxSizing: 'border-box'
      });
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = separatorOptions.color;
      ctx.fillRect(this._offsetLeft, 0, width, height);
      return canvas;
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this._dragEvent) {
        this._dragEvent.destroy();
      }

      this._container.removeChild(this._wrapper);
    }
  }]);

  return SeparatorPane;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EventHandler = /*#__PURE__*/_createClass(function EventHandler(chartStore) {
  _classCallCheck(this, EventHandler);

  this._chartStore = chartStore;
});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TOUCH_MIN_RADIUS = 10;

var ZoomScrollEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(ZoomScrollEventHandler, _EventHandler);

  var _super = _createSuper$4(ZoomScrollEventHandler);

  function ZoomScrollEventHandler(chartStore) {
    var _this;

    _classCallCheck(this, ZoomScrollEventHandler);

    _this = _super.call(this, chartStore); // 开始滚动时坐标点

    _this._startScrollCoordinate = null; // 开始触摸时坐标

    _this._touchCoordinate = null; // 是否是取消了十字光标

    _this._touchCancelCrosshair = false; // 是否缩放过

    _this._touchZoomed = false; // 用来记录捏合缩放的尺寸

    _this._pinchScale = 1;
    return _this;
  }

  _createClass(ZoomScrollEventHandler, [{
    key: "pinchStartEvent",
    value: function pinchStartEvent() {
      this._pinchScale = 1;
      this._touchZoomed = true;
    }
  }, {
    key: "pinchEvent",
    value: function pinchEvent(middleCoordinate, scale) {
      var zoomScale = (scale - this._pinchScale) * 5;
      this._pinchScale = scale;

      this._chartStore.timeScaleStore().zoom(zoomScale, middleCoordinate);
    }
  }, {
    key: "mouseUpEvent",
    value: function mouseUpEvent() {
      this._startScrollCoordinate = null;
    }
  }, {
    key: "mouseLeaveEvent",
    value: function mouseLeaveEvent(event) {
      this._startScrollCoordinate = null;

      if (isMouse(event)) {
        this._chartStore.crosshairStore().set();
      }
    }
  }, {
    key: "mouseMoveEvent",
    value: function mouseMoveEvent(event) {
      if (!isMouse(event)) {
        return;
      }

      this._chartStore.crosshairStore().set({
        x: event.localX,
        y: event.paneY,
        paneId: event.paneId
      });
    }
  }, {
    key: "mouseWheelEvent",
    value: function mouseWheelEvent(event) {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        if (event.cancelable) {
          event.preventDefault();
        }

        if (Math.abs(event.deltaX) === 0) {
          return;
        }

        this._chartStore.timeScaleStore().startScroll();

        this._chartStore.timeScaleStore().scroll(-event.deltaX);
      } else {
        var deltaY = -(event.deltaY / 100);

        if (deltaY === 0) {
          return;
        }

        if (event.cancelable) {
          event.preventDefault();
        }

        switch (event.deltaMode) {
          case event.DOM_DELTA_PAGE:
            deltaY *= 120;
            break;

          case event.DOM_DELTA_LINE:
            deltaY *= 32;
            break;
        }

        if (deltaY !== 0) {
          var scale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));

          this._chartStore.timeScaleStore().zoom(scale, {
            x: event.localX,
            y: event.localY
          });
        }
      }
    }
  }, {
    key: "mouseClickEvent",
    value: function mouseClickEvent(event) {
      if (!isTouch(event)) {
        return;
      }

      if (!this._touchCoordinate && !this._touchCancelCrosshair && !this._touchZoomed) {
        this._touchCoordinate = {
          x: event.localX,
          y: event.localY
        };

        this._chartStore.crosshairStore().set({
          x: event.localX,
          y: event.paneY,
          paneId: event.paneId
        });
      }
    }
  }, {
    key: "mouseDownEvent",
    value: function mouseDownEvent(event) {
      this._startScrollCoordinate = {
        x: event.localX,
        y: event.localY
      };

      this._chartStore.timeScaleStore().startScroll();

      if (isTouch(event)) {
        this._touchZoomed = false;

        if (this._touchCoordinate) {
          var xDif = event.localX - this._touchCoordinate.x;
          var yDif = event.localY - this._touchCoordinate.y;
          var radius = Math.sqrt(xDif * xDif + yDif * yDif);

          if (radius < TOUCH_MIN_RADIUS) {
            this._touchCoordinate = {
              x: event.localX,
              y: event.localY
            };

            this._chartStore.crosshairStore().set({
              x: event.localX,
              y: event.paneY,
              paneId: event.paneId
            });
          } else {
            this._touchCancelCrosshair = true;
            this._touchCoordinate = null;

            this._chartStore.crosshairStore().set();
          }
        } else {
          this._touchCancelCrosshair = false;
        }
      }
    }
  }, {
    key: "pressedMouseMoveEvent",
    value: function pressedMouseMoveEvent(event) {
      var crosshair = {
        x: event.localX,
        y: event.paneY,
        paneId: event.paneId
      };

      if (isTouch(event)) {
        if (this._touchCoordinate) {
          this._touchCoordinate = {
            x: event.localX,
            y: event.localY
          };

          this._chartStore.crosshairStore().set(crosshair);

          return;
        } else {
          crosshair = null;
        }
      }

      if (this._startScrollCoordinate) {
        var distance = event.localX - this._startScrollCoordinate.x;

        this._chartStore.timeScaleStore().scroll(distance, crosshair);
      }
    }
  }, {
    key: "longTapEvent",
    value: function longTapEvent(event) {
      if (!isTouch(event)) {
        return;
      }

      this._touchCoordinate = {
        x: event.localX,
        y: event.localY
      };

      this._chartStore.crosshairStore().set({
        x: event.localX,
        y: event.paneY,
        paneId: event.paneId
      });
    }
  }]);

  return ZoomScrollEventHandler;
}(EventHandler);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var OverlayEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(OverlayEventHandler, _EventHandler);

  var _super = _createSuper$3(OverlayEventHandler);

  function OverlayEventHandler(chartStore, yAxis) {
    var _this;

    _classCallCheck(this, OverlayEventHandler);

    _this = _super.call(this, chartStore);
    _this._yAxis = yAxis;
    return _this;
  }
  /**
   * 处理覆盖物鼠标hover事件
   * @param overlays
   * @param preHoverOperate
   * @param coordinate
   * @param event
   * @return {*}
   * @private
   */


  _createClass(OverlayEventHandler, [{
    key: "_performOverlayMouseHover",
    value: function _performOverlayMouseHover(overlays, preHoverOperate, coordinate, event) {
      var hoverOperate;

      if (overlays) {
        var _iterator = _createForOfIteratorHelper$1(overlays),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var overlay = _step.value;
            hoverOperate = overlay.checkEventCoordinateOn(coordinate);

            if (hoverOperate) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (!hoverOperate || preHoverOperate.id !== hoverOperate.id) {
          if (preHoverOperate.id && preHoverOperate.instance && isMouse(event)) {
            preHoverOperate.instance.onMouseLeave({
              id: preHoverOperate.id,
              points: preHoverOperate.instance.points(),
              event: event
            });
          }

          if (hoverOperate && hoverOperate.id !== preHoverOperate.id && hoverOperate.instance && isMouse(event)) {
            hoverOperate.instance.onMouseEnter({
              id: hoverOperate.id,
              points: hoverOperate.instance.points(),
              event: event
            });
          }
        }
      }

      return hoverOperate;
    }
    /**
     * 鼠标抬起事件
     */

  }, {
    key: "mouseUpEvent",
    value: function mouseUpEvent() {
      this._chartStore.shapeStore().updatePressedInstance();
    }
  }, {
    key: "mouseMoveEvent",
    value: function mouseMoveEvent(event) {
      if (isMouse(event)) {
        if (this._waitingForMouseMove) {
          return false;
        }

        this._waitingForMouseMove = true;
        var coordinate = {
          x: event.localX,
          y: event.paneY
        };

        var _this$_chartStore$sha = this._chartStore.shapeStore().progressInstance(),
            instance = _this$_chartStore$sha.instance,
            paneId = _this$_chartStore$sha.paneId;

        var shapeHoverOperate;
        var shapeClickOperate;
        var annotationHoverOperate;

        if (instance && instance.isDrawing()) {
          if (event.paneId) {
            if (instance.isStart()) {
              this._chartStore.shapeStore().updateProgressInstance(this._yAxis(event.paneId), event.paneId);
            }

            if (paneId === event.paneId) {
              instance.mouseMoveForDrawing(coordinate, event);
            }

            shapeHoverOperate = {
              id: instance.id(),
              element: ShapeEventOperateElement.POINT,
              elementIndex: instance.points().length - 1
            };
          }

          shapeClickOperate = {
            id: '',
            element: ShapeEventOperateElement.NONE,
            elementIndex: -1
          };
        } else {
          var annotations = this._chartStore.annotationStore().get(event.paneId);

          var shapes = this._chartStore.shapeStore().instances(event.paneId);

          var prevShapeHoverOperate = this._chartStore.shapeStore().eventOperate().hover;

          var prevAnnotationHoverOperate = this._chartStore.annotationStore().eventOperate();

          shapeHoverOperate = this._performOverlayMouseHover(shapes, prevShapeHoverOperate, coordinate, event);
          annotationHoverOperate = this._performOverlayMouseHover(annotations, prevAnnotationHoverOperate, coordinate, event);
        }

        this._chartStore.shapeStore().setEventOperate({
          hover: shapeHoverOperate || {
            id: '',
            element: ShapeEventOperateElement.NONE,
            elementIndex: -1
          },
          click: shapeClickOperate
        });

        this._chartStore.annotationStore().setEventOperate(annotationHoverOperate || {
          id: ''
        });

        this._waitingForMouseMove = false;
      }
    }
    /**
     * 鼠标按下事件
     * @param event
     */

  }, {
    key: "mouseDownEvent",
    value: function mouseDownEvent(event) {
      var coordinate = {
        x: event.localX,
        y: event.paneY
      };

      var _this$_chartStore$sha2 = this._chartStore.shapeStore().progressInstance(),
          instance = _this$_chartStore$sha2.instance,
          paneId = _this$_chartStore$sha2.paneId;

      var shapeHoverOperate = {
        id: '',
        element: ShapeEventOperateElement.NONE,
        elementIndex: -1
      };
      var progressShapePaneId = paneId;
      var shapeClickOperate;

      if (instance && instance.isDrawing()) {
        if (isTouch(event)) {
          if (instance.isStart()) {
            this._chartStore.shapeStore().updateProgressInstance(this._yAxis(event.paneId), event.paneId);

            progressShapePaneId = event.paneId;
          }

          if (progressShapePaneId === event.paneId) {
            // 移动端添加点数据到实例
            instance.mouseMoveForDrawing(coordinate, event);
          }
        }

        if (progressShapePaneId === event.paneId) {
          instance.mouseLeftButtonDownForDrawing();
          shapeClickOperate = {
            id: instance.id(),
            element: ShapeEventOperateElement.POINT,
            elementIndex: instance.points().length - 1
          };
          shapeHoverOperate = {
            id: instance.id(),
            element: ShapeEventOperateElement.POINT,
            elementIndex: instance.points().length - 1
          };
        }
      } else {
        var shapes = this._chartStore.shapeStore().instances(event.paneId);

        var _iterator2 = _createForOfIteratorHelper$1(shapes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var shape = _step2.value;
            shapeClickOperate = shape.checkEventCoordinateOn(coordinate);

            if (shapeClickOperate) {
              this._chartStore.shapeStore().updatePressedInstance(shape, event.paneId, shapeClickOperate.element);

              if (shapeClickOperate.element === ShapeEventOperateElement.POINT) {
                shapeHoverOperate = _objectSpread({}, shapeClickOperate);
              } else {
                shape.startPressedOtherMove(coordinate);
              }

              shape.onClick({
                id: shapeClickOperate.id,
                points: shape.points(),
                event: event
              });
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var visibleAnnotations = this._chartStore.annotationStore().get(event.paneId);

        if (visibleAnnotations) {
          var _iterator3 = _createForOfIteratorHelper$1(visibleAnnotations),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var an = _step3.value;
              var annotationOperate = an.checkEventCoordinateOn(coordinate);

              if (annotationOperate) {
                an.onClick({
                  id: annotationOperate.id,
                  points: an.points(),
                  event: event
                });
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }

      var shapeOperateValid = this._chartStore.shapeStore().setEventOperate({
        hover: shapeHoverOperate,
        click: shapeClickOperate || {
          id: '',
          element: ShapeEventOperateElement.NONE,
          elementIndex: -1
        }
      });

      if (shapeOperateValid) {
        this._chartStore.invalidate(InvalidateLevel.OVERLAY);
      }
    }
  }, {
    key: "mouseRightDownEvent",
    value: function mouseRightDownEvent(event) {
      var _this$_chartStore$sha3 = this._chartStore.shapeStore().progressInstance(),
          instance = _this$_chartStore$sha3.instance;

      var removeShape;

      if (instance) {
        removeShape = instance;
      } else {
        var shapes = this._chartStore.shapeStore().instances(event.paneId);

        removeShape = shapes.find(function (s) {
          return s.checkEventCoordinateOn({
            x: event.localX,
            y: event.paneY
          });
        });
      }

      if (removeShape && !removeShape.onRightClick({
        id: removeShape.id(),
        points: removeShape.points(),
        event: event
      })) {
        this._chartStore.shapeStore().removeInstance(removeShape.id());
      }

      var visibleAnnotations = this._chartStore.annotationStore().get(event.paneId);

      if (visibleAnnotations) {
        var annotation = visibleAnnotations.find(function (an) {
          return an.checkEventCoordinateOn({
            x: event.localX,
            y: event.paneY
          });
        });

        if (annotation) {
          annotation.onRightClick({
            id: annotation.id(),
            points: annotation.points(),
            event: event
          });
        }
      }
    }
  }, {
    key: "pressedMouseMoveEvent",
    value: function pressedMouseMoveEvent(event) {
      var _this$_chartStore$sha4 = this._chartStore.shapeStore().pressedInstance(),
          instance = _this$_chartStore$sha4.instance,
          paneId = _this$_chartStore$sha4.paneId,
          element = _this$_chartStore$sha4.element;

      if (instance && paneId === event.paneId) {
        var coordinate = {
          x: event.localX,
          y: event.paneY
        };

        if (element === ShapeEventOperateElement.POINT) {
          instance.mousePressedPointMove(coordinate, event);
        } else {
          instance.mousePressedOtherMove(coordinate, event);
        }

        this._chartStore.crosshairStore().set({
          x: event.localX,
          y: event.paneY,
          paneId: event.paneId
        });
      }
    }
  }]);

  return OverlayEventHandler;
}(EventHandler);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var KeyBoardCode = {
  EQUAL: 'Equal',
  MINUS: 'Minus',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight'
};

var KeyBoardEventHandler = /*#__PURE__*/function (_EventHandler) {
  _inherits(KeyBoardEventHandler, _EventHandler);

  var _super = _createSuper$2(KeyBoardEventHandler);

  function KeyBoardEventHandler() {
    _classCallCheck(this, KeyBoardEventHandler);

    return _super.apply(this, arguments);
  }

  _createClass(KeyBoardEventHandler, [{
    key: "keyBoardDownEvent",
    value:
    /**
     * 键盘事件
     * @param event
     */
    function keyBoardDownEvent(event) {
      if (event.shiftKey) {
        switch (event.code) {
          case KeyBoardCode.EQUAL:
            {
              this._chartStore.timeScaleStore().zoom(0.5);

              break;
            }

          case KeyBoardCode.MINUS:
            {
              this._chartStore.timeScaleStore().zoom(-0.5);

              break;
            }

          case KeyBoardCode.ARROW_LEFT:
            {
              this._chartStore.timeScaleStore().startScroll();

              this._chartStore.timeScaleStore().scroll(-3 * this._chartStore.timeScaleStore().dataSpace());

              break;
            }

          case KeyBoardCode.ARROW_RIGHT:
            {
              this._chartStore.timeScaleStore().startScroll();

              this._chartStore.timeScaleStore().scroll(3 * this._chartStore.timeScaleStore().dataSpace());

              break;
            }
        }
      }
    }
  }]);

  return KeyBoardEventHandler;
}(EventHandler);

var ChartEvent = /*#__PURE__*/function () {
  function ChartEvent(target, chartStore, yAxis) {
    _classCallCheck(this, ChartEvent);

    this._target = target;
    this._chartStore = chartStore;
    this._chartContentLeftRight = {};
    this._chartContentTopBottom = {};
    this._paneContentSize = {};
    this._event = new EventBase(this._target, {
      pinchStartEvent: this._pinchStartEvent.bind(this),
      pinchEvent: this._pinchEvent.bind(this),
      mouseUpEvent: this._mouseUpEvent.bind(this),
      mouseClickEvent: this._mouseClickEvent.bind(this),
      mouseDownEvent: this._mouseDownEvent.bind(this),
      mouseRightDownEvent: this._mouseRightDownEvent.bind(this),
      mouseLeaveEvent: this._mouseLeaveEvent.bind(this),
      mouseMoveEvent: this._mouseMoveEvent.bind(this),
      mouseWheelEvent: this._mouseWheelEvent.bind(this),
      pressedMouseMoveEvent: this._pressedMouseMoveEvent.bind(this),
      longTapEvent: this._longTapEvent.bind(this)
    }, {
      treatVertTouchDragAsPageScroll: true,
      treatHorzTouchDragAsPageScroll: false
    });
    this._boundKeyBoardDownEvent = this._keyBoardDownEvent.bind(this);

    this._target.addEventListener('keydown', this._boundKeyBoardDownEvent);

    this._boundContextMenuEvent = function (e) {
      e.preventDefault();
    };

    this._target.addEventListener('contextmenu', this._boundContextMenuEvent, false);

    this._zoomScrollEventHandler = new ZoomScrollEventHandler(chartStore);
    this._overlayEventHandler = new OverlayEventHandler(chartStore, yAxis);
    this._keyBoardEventHandler = new KeyBoardEventHandler(chartStore);
  }

  _createClass(ChartEvent, [{
    key: "_keyBoardDownEvent",
    value: function _keyBoardDownEvent(event) {
      this._keyBoardEventHandler.keyBoardDownEvent(event);
    }
  }, {
    key: "_pinchStartEvent",
    value: function _pinchStartEvent() {
      this._zoomScrollEventHandler.pinchStartEvent();
    }
  }, {
    key: "_pinchEvent",
    value: function _pinchEvent(middleCoordinate, scale) {
      this._zoomScrollEventHandler.pinchEvent(middleCoordinate, scale);
    }
  }, {
    key: "_mouseUpEvent",
    value: function _mouseUpEvent(event) {
      if (this._checkEventInChartContent(event)) {
        this._target.style.cursor = 'crosshair';
      }

      this._zoomScrollEventHandler.mouseUpEvent(event);

      if (this._shouldPerformOverlayEvent()) {
        this._overlayEventHandler.mouseUpEvent(event);
      }
    }
  }, {
    key: "_mouseLeaveEvent",
    value: function _mouseLeaveEvent(event) {
      this._zoomScrollEventHandler.mouseLeaveEvent(event);
    }
  }, {
    key: "_mouseMoveEvent",
    value: function _mouseMoveEvent(event) {
      // 当事件目标是在容器内部元素时，不出来move事件
      // 等待寻找最优解
      if (event.target instanceof HTMLCanvasElement) {
        if (this._checkEventInChartContent(event)) {
          this._target.style.cursor = 'crosshair';

          var compatEvent = this._compatChartEvent(event, true);

          if (this._shouldPerformOverlayEvent()) {
            this._overlayEventHandler.mouseMoveEvent(compatEvent);
          }

          if (!this._chartStore.dragPaneFlag()) {
            this._zoomScrollEventHandler.mouseMoveEvent(compatEvent);
          }
        } else {
          this._target.style.cursor = 'default';

          this._zoomScrollEventHandler.mouseLeaveEvent(event);
        }
      } else {
        this._target.style.cursor = 'default';

        this._chartStore.crosshairStore().set();
      }
    }
  }, {
    key: "_mouseWheelEvent",
    value: function _mouseWheelEvent(event) {
      if (this._checkZoomScroll() && this._checkEventInChartContent(event)) {
        this._zoomScrollEventHandler.mouseWheelEvent(this._compatChartEvent(event));
      }
    }
  }, {
    key: "_mouseClickEvent",
    value: function _mouseClickEvent(event) {
      if (this._checkZoomScroll() && this._checkEventInChartContent(event)) {
        this._zoomScrollEventHandler.mouseClickEvent(this._compatChartEvent(event, true));

        this._modifyEventOptions(event);
      }
    }
  }, {
    key: "_mouseDownEvent",
    value: function _mouseDownEvent(event) {
      if (this._checkEventInChartContent(event)) {
        this._target.style.cursor = 'pointer';

        var compatEvent = this._compatChartEvent(event, true);

        if (this._shouldPerformOverlayEvent()) {
          this._overlayEventHandler.mouseDownEvent(compatEvent);
        }

        if (this._checkZoomScroll()) {
          this._zoomScrollEventHandler.mouseDownEvent(compatEvent);

          this._modifyEventOptions(event);
        }
      }
    }
  }, {
    key: "_mouseRightDownEvent",
    value: function _mouseRightDownEvent(event) {
      if (this._shouldPerformOverlayEvent() && this._checkEventInChartContent(event)) {
        this._overlayEventHandler.mouseRightDownEvent(this._compatChartEvent(event, true));
      }
    }
  }, {
    key: "_pressedMouseMoveEvent",
    value: function _pressedMouseMoveEvent(event) {
      if (this._checkEventInChartContent(event)) {
        var compatEvent = this._compatChartEvent(event, true);

        if (this._checkZoomScroll()) {
          this._zoomScrollEventHandler.pressedMouseMoveEvent(compatEvent);

          this._modifyEventOptions(event);
        } else {
          this._overlayEventHandler.pressedMouseMoveEvent(compatEvent);
        }
      }
    }
  }, {
    key: "_longTapEvent",
    value: function _longTapEvent(event) {
      if (this._checkZoomScroll() && this._checkEventInChartContent(event)) {
        this._zoomScrollEventHandler.longTapEvent(this._compatChartEvent(event, true));

        this._modifyEventOptions(event);
      }
    }
  }, {
    key: "_checkZoomScroll",
    value: function _checkZoomScroll() {
      return !this._chartStore.dragPaneFlag() && !this._chartStore.shapeStore().isPressed() && !this._chartStore.shapeStore().isDrawing();
    }
    /**
     * 是否需要处理图形标记事件
     * @return {boolean}
     * @private
     */

  }, {
    key: "_shouldPerformOverlayEvent",
    value: function _shouldPerformOverlayEvent() {
      return !this._chartStore.shapeStore().isEmpty() || !this._chartStore.annotationStore().isEmpty();
    }
    /**
     * 修改事件配置
     * @param event
     */

  }, {
    key: "_modifyEventOptions",
    value: function _modifyEventOptions(event) {
      if (isTouch(event) && this._chartStore.crosshairStore().get().paneId) {
        this._event.setOptions({
          treatVertTouchDragAsPageScroll: false
        });
      } else {
        this._event.setOptions({
          treatVertTouchDragAsPageScroll: true
        });
      }
    }
    /**
     * 事件信息兼容
     * @param {*} event
     * @param {*} compatY
     * @returns
     */

  }, {
    key: "_compatChartEvent",
    value: function _compatChartEvent(event, compatY) {
      if (compatY) {
        for (var id in this._paneContentSize) {
          if (Object.prototype.hasOwnProperty.call(this._paneContentSize, id)) {
            var size = this._paneContentSize[id];

            if (event.localY > size.contentTop && event.localY < size.contentBottom) {
              event.paneY = event.localY - size.contentTop;
              event.paneId = id;
              break;
            }
          }
        }
      }

      event.localX -= this._chartContentLeftRight.contentLeft;
      return event;
    }
    /**
     * 检查事件是否在图表内容内
     * @param {*} event
     * @returns
     */

  }, {
    key: "_checkEventInChartContent",
    value: function _checkEventInChartContent(event) {
      return event.localX > this._chartContentLeftRight.contentLeft && event.localX < this._chartContentLeftRight.contentRight && event.localY > this._chartContentTopBottom.contentTop && event.localY < this._chartContentTopBottom.contentBottom;
    }
  }, {
    key: "setChartContentLeftRight",
    value: function setChartContentLeftRight(chartContentLeftRight) {
      this._chartContentLeftRight = chartContentLeftRight;
    }
  }, {
    key: "setChartContentTopBottom",
    value: function setChartContentTopBottom(chartContentTopBottom) {
      this._chartContentTopBottom = chartContentTopBottom;
    }
  }, {
    key: "setPaneContentSize",
    value: function setPaneContentSize(paneContentSize) {
      this._paneContentSize = paneContentSize;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._event.destroy();

      this._target.removeEventListener('keydown', this._boundKeyBoardDownEvent);

      this._target.removeEventListener('contextmenu', this._boundContextMenuEvent);
    }
  }]);

  return ChartEvent;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var previous = 0;
  return function () {
    var now = Date.now();
    var context = this;
    var args = arguments;

    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 渲染填充菱形
 * @param ctx
 * @param color
 * @param centerCoordinate
 * @param width
 * @param height
 */
function renderFillDiamond(ctx, color, centerCoordinate, width, height) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerCoordinate.x - width / 2, centerCoordinate.y);
  ctx.lineTo(centerCoordinate.x, centerCoordinate.y - height / 2);
  ctx.lineTo(centerCoordinate.x + width / 2, centerCoordinate.y);
  ctx.lineTo(centerCoordinate.x, centerCoordinate.y + height / 2);
  ctx.closePath();
  ctx.fill();
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 渲染填充菱形
 * @param ctx
 * @param color
 * @param centerCoordinate
 * @param width
 * @param height
 */
function renderFillTriangle(ctx, color, centerCoordinate, width, height) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerCoordinate.x - width / 2, centerCoordinate.y + height / 2);
  ctx.lineTo(centerCoordinate.x, centerCoordinate.y - height / 2);
  ctx.lineTo(centerCoordinate.x + width / 2, centerCoordinate.y + height / 2);
  ctx.closePath();
  ctx.fill();
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * 注解
 */

var Annotation = /*#__PURE__*/function (_Overlay) {
  _inherits(Annotation, _Overlay);

  var _super = _createSuper$1(Annotation);

  function Annotation(_ref) {
    var _this;

    var id = _ref.id,
        point = _ref.point,
        chartStore = _ref.chartStore,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        styles = _ref.styles;

    _classCallCheck(this, Annotation);

    _this = _super.call(this, {
      id: id,
      chartStore: chartStore,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._point = point;
    _this._symbolCoordinate = {};

    _this.setStyles(styles, chartStore.styleOptions().annotation);

    return _this;
  }
  /**
   * 绘制标识
   * @param ctx
   * @param isActive
   * @param styles
   * @private
   */


  _createClass(Annotation, [{
    key: "_drawSymbol",
    value: function _drawSymbol(ctx, isActive, styles) {
      var barSpace = this._chartStore.timeScaleStore().barSpace();

      var symbolOptions = styles.symbol;
      var styleSize = symbolOptions.size;
      var styleActiveSize = symbolOptions.activeSize;
      var size = isActive ? isNumber(styleActiveSize) ? styleActiveSize : barSpace : isNumber(styleSize) ? styleSize : barSpace;
      var color = isActive ? symbolOptions.activeColor : symbolOptions.color;

      switch (symbolOptions.type) {
        case AnnotationSymbolType.CIRCLE:
          {
            renderFillCircle(ctx, color, this._symbolCoordinate, size / 2);
            break;
          }

        case AnnotationSymbolType.RECT:
          {
            renderFillRect(ctx, color, this._symbolCoordinate.x - size / 2, this._symbolCoordinate.y - size / 2, size, size);
            break;
          }

        case AnnotationSymbolType.DIAMOND:
          {
            renderFillDiamond(ctx, color, this._symbolCoordinate, size, size);
            break;
          }

        case AnnotationSymbolType.TRIANGLE:
          {
            renderFillTriangle(ctx, color, this._symbolCoordinate, size, size);
            break;
          }

        case AnnotationSymbolType.CUSTOM:
          {
            ctx.save();
            this.drawCustomSymbol({
              ctx: ctx,
              point: this._point,
              coordinate: this._symbolCoordinate,
              viewport: {
                width: this._xAxis.width(),
                height: this._yAxis.height(),
                barSpace: barSpace
              },
              styles: symbolOptions,
              isActive: isActive
            });
            ctx.restore();
            break;
          }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var styles = this._styles || this._chartStore.styleOptions().annotation;

      var offset = styles.offset || [0, 0];
      var y = 0;

      switch (styles.position) {
        case OverlayPosition.POINT:
          {
            y = this._yAxis.convertToPixel(this._point.value);
            break;
          }

        case OverlayPosition.TOP:
          {
            y = 0;
            break;
          }

        case OverlayPosition.BOTTOM:
          {
            y = this._yAxis.height();
            break;
          }
      }

      this._symbolCoordinate.y = y + offset[0];

      var isActive = this._id === this._chartStore.annotationStore().eventOperate().id;

      this._drawSymbol(ctx, isActive, styles);

      if (this.drawExtend) {
        ctx.save();
        this.drawExtend({
          ctx: ctx,
          point: this._point,
          coordinate: this._symbolCoordinate,
          viewport: {
            width: this._xAxis.width(),
            height: this._yAxis.height()
          },
          styles: styles,
          isActive: isActive
        });
        ctx.restore();
      }
    }
  }, {
    key: "checkEventCoordinateOn",
    value: function checkEventCoordinateOn(eventCoordinate) {
      var barSpace = this._chartStore.timeScaleStore().barSpace();

      var styles = this._styles || this._chartStore.styleOptions().annotation;

      var symbolOptions = styles.symbol;
      var size = isNumber(symbolOptions.size) ? symbolOptions.size : barSpace;
      var isOn;

      switch (symbolOptions.type) {
        case AnnotationSymbolType.CIRCLE:
          {
            isOn = checkCoordinateInCircle(this._symbolCoordinate, size / 2, eventCoordinate);
            break;
          }

        case AnnotationSymbolType.RECT:
          {
            var coordinate1 = {
              x: this._symbolCoordinate.x - size / 2,
              y: this._symbolCoordinate.y - size / 2
            };
            var coordinate2 = {
              x: this._symbolCoordinate.x + size / 2,
              y: this._symbolCoordinate.y + size / 2
            };
            isOn = checkCoordinateInRect(coordinate1, coordinate2, eventCoordinate);
            break;
          }

        case AnnotationSymbolType.DIAMOND:
          {
            isOn = checkCoordinateInDiamond(this._symbolCoordinate, size, size, eventCoordinate);
            break;
          }

        case AnnotationSymbolType.TRIANGLE:
          {
            isOn = checkCoordinateInTriangle([{
              x: this._symbolCoordinate.x - size / 2,
              y: this._symbolCoordinate.y + size / 2
            }, {
              x: this._symbolCoordinate.x,
              y: this._symbolCoordinate.y - size / 2
            }, {
              x: this._symbolCoordinate.x + size / 2,
              y: this._symbolCoordinate.y + size / 2
            }], eventCoordinate);
            break;
          }

        case AnnotationSymbolType.CUSTOM:
          {
            isOn = this.checkEventCoordinateOnCustomSymbol({
              eventCoordinate: eventCoordinate,
              coordinate: this._symbolCoordinate,
              size: size
            });
            break;
          }
      }

      if (isOn) {
        return {
          id: this._id,
          instance: this
        };
      }
    }
    /**
     * 生成标识坐标
     * @param x
     */

  }, {
    key: "createSymbolCoordinate",
    value: function createSymbolCoordinate(x) {
      var styles = this._styles || this._chartStore.styleOptions().annotation;

      var offset = styles.offset || [0, 0];
      this._symbolCoordinate = {
        x: x + offset[1]
      };
    }
    /**
     * 获取点
     * @return {*}
     */

  }, {
    key: "points",
    value: function points() {
      return this._point;
    }
    /**
     * 检查鼠标点是否在自定义标识内
     * @param eventCoordinate
     * @param coordinate
     * @param size
     */

  }, {
    key: "checkEventCoordinateOnCustomSymbol",
    value: function checkEventCoordinateOnCustomSymbol(_ref2) {
      _ref2.eventCoordinate;
          _ref2.coordinate;
          _ref2.size;
    }
    /**
     * 绘制自定义标识
     * @param ctx
     * @param point
     * @param coordinate
     * @param viewport
     * @param styles
     * @param isActive
     */

  }, {
    key: "drawCustomSymbol",
    value: function drawCustomSymbol(_ref3) {
      _ref3.ctx;
          _ref3.point;
          _ref3.coordinate;
          _ref3.viewport;
          _ref3.styles;
          _ref3.isActive;
    }
  }]);

  return Annotation;
}(Overlay);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Tag = /*#__PURE__*/function (_Overlay) {
  _inherits(Tag, _Overlay);

  var _super = _createSuper(Tag);

  function Tag(_ref) {
    var _this;

    var id = _ref.id,
        point = _ref.point,
        text = _ref.text,
        mark = _ref.mark,
        chartStore = _ref.chartStore,
        xAxis = _ref.xAxis,
        yAxis = _ref.yAxis,
        styles = _ref.styles;

    _classCallCheck(this, Tag);

    _this = _super.call(this, {
      id: id,
      chartStore: chartStore,
      xAxis: xAxis,
      yAxis: yAxis
    });
    _this._point = point || {};
    _this._text = text;
    _this._mark = mark;

    _this.setStyles(styles, chartStore.styleOptions().tag);

    return _this;
  }
  /**
   * 更新
   * @param point
   * @param text
   * @param mark
   * @param styles
   * @return {boolean}
   */


  _createClass(Tag, [{
    key: "update",
    value: function update(_ref2) {
      var point = _ref2.point,
          text = _ref2.text,
          mark = _ref2.mark,
          styles = _ref2.styles;
      var success = false;

      if (isObject(point)) {
        this._point = point;
        success = true;
      }

      if (isValid(text)) {
        this._text = text;
        success = true;
      }

      if (isValid(mark)) {
        this._mark = mark;
        success = true;
      }

      if (this.setStyles(styles, this._chartStore.styleOptions().tag)) {
        success = true;
      }

      return success;
    }
    /**
     * 绘制标记和线
     * @param ctx
     */

  }, {
    key: "drawMarkLine",
    value: function drawMarkLine(ctx) {
      var options = this._chartStore.styleOptions();

      var yAxisOptions = options.yAxis;
      var tagOptions = this._styles || options.tag;

      var y = this._getY(tagOptions);

      ctx.save();

      this._drawLine(ctx, y, tagOptions, yAxisOptions);

      this._drawMark(ctx, y, tagOptions, yAxisOptions);

      ctx.restore();
    }
    /**
     * 绘制值
     */

  }, {
    key: "drawText",
    value: function drawText(ctx) {
      if (!isValid(this._text)) {
        return;
      }

      var options = this._chartStore.styleOptions();

      var tagOptions = this._styles || options.tag;
      var tagTextOptions = tagOptions.text;
      ctx.save();
      var rectWidth = getTextRectWidth(ctx, this._text, tagTextOptions);
      var rectHeight = getTextRectHeight(tagTextOptions);
      var x;

      if (this._yAxis.isFromYAxisZero()) {
        x = 0;
      } else {
        x = this._yAxis.width() - rectWidth;
      }

      var y = this._getY(tagOptions);

      renderStrokeFillRoundRect(ctx, tagTextOptions.backgroundColor, tagTextOptions.borderColor, tagTextOptions.borderSize, x, y - rectHeight / 2, rectWidth, rectHeight, tagTextOptions.borderRadius);
      renderText(ctx, tagTextOptions.color, x + tagTextOptions.paddingLeft, y, this._text);
      ctx.restore();
    }
    /**
     * 绘制线
     * @param ctx
     * @param y
     * @param tagOptions
     * @private
     */

  }, {
    key: "_drawLine",
    value: function _drawLine(ctx, y, tagOptions, yAxisOptions) {
      var tagLineOptions = tagOptions.line;

      if (!tagLineOptions.show) {
        return;
      }

      ctx.save();
      var textRectWidth = getTextRectWidth(ctx, this._text, tagOptions.text);
      var markRectWidth = getTextRectWidth(ctx, this._mark, tagOptions.mark);
      ctx.strokeStyle = tagLineOptions.color;
      ctx.lineWidth = tagLineOptions.size;

      if (tagLineOptions.style === LineStyle.DASH) {
        ctx.setLineDash(tagLineOptions.dashValue);
      }

      var markOffset = tagOptions.mark.offset;
      var lines = [];
      var textValid = isValid(this._text);
      var markValid = isValid(this._mark);

      if (yAxisOptions.inside) {
        if (yAxisOptions.position === YAxisPosition.LEFT) {
          if (textValid && markValid) {
            if (markOffset > 0) {
              lines.push([textRectWidth, textRectWidth + markOffset]);
              lines.push([textRectWidth + markOffset + markRectWidth, this._xAxis.width()]);
            } else {
              if (Math.abs(markOffset) < Math.min(textRectWidth, markRectWidth)) {
                lines.push([textRectWidth + markOffset + markRectWidth, this._xAxis.width()]);
              } else {
                lines.push([Math.max(textRectWidth, markRectWidth), this._xAxis.width()]);
              }
            }
          } else {
            if (textValid) {
              lines.push([textRectWidth, this._xAxis.width()]);
            } else if (markValid) {
              if (markOffset > 0) {
                lines.push([0, markOffset]);
                lines.push([markOffset + markRectWidth, this._xAxis.width()]);
              } else {
                if (Math.abs(markOffset) < markRectWidth) {
                  lines.push([markOffset + markRectWidth, this._xAxis.width()]);
                } else {
                  lines.push([0, this._xAxis.width()]);
                }
              }
            } else {
              lines.push([0, this._xAxis.width()]);
            }
          }
        } else {
          if (textValid && markValid) {
            if (markOffset < 0) {
              lines.push([0, this._xAxis.width() - textRectWidth + markOffset - markRectWidth]);
              lines.push([this._xAxis.width() - textRectWidth + markOffset, this._xAxis.width() - textRectWidth]);
            } else {
              if (markOffset < Math.min(textRectWidth, markRectWidth)) {
                lines.push([0, this._xAxis.width() - textRectWidth - markRectWidth + markOffset]);
              } else {
                lines.push([0, this._xAxis.width() - Math.max(textRectWidth, markRectWidth)]);
              }
            }
          } else {
            if (textValid) {
              lines.push([0, this._xAxis.width() - textRectWidth]);
            } else if (markValid) {
              if (markOffset < 0) {
                lines.push([0, this._xAxis.width() + markOffset - markRectWidth]);
                lines.push([this._xAxis.width() + markOffset, this._xAxis.width()]);
              } else {
                if (markOffset < markRectWidth) {
                  lines.push([0, this._xAxis.width() - markRectWidth + markOffset]);
                } else {
                  lines.push([0, this._xAxis.width()]);
                }
              }
            } else {
              lines.push([0, this._xAxis.width()]);
            }
          }
        }
      } else {
        if (yAxisOptions.position === YAxisPosition.LEFT) {
          if (markValid) {
            if (markOffset > 0) {
              lines.push([0, markOffset]);
              lines.push([markOffset + markRectWidth, this._xAxis.width()]);
            } else {
              if (Math.abs(markOffset) < markRectWidth) {
                lines.push([markRectWidth + markOffset, this._xAxis.width()]);
              } else {
                lines.push([0, this._xAxis.width()]);
              }
            }
          } else {
            lines.push([0, this._xAxis.width()]);
          }
        } else {
          if (markValid) {
            if (markOffset < 0) {
              lines.push([0, this._xAxis.width() - markRectWidth + markOffset]);
              lines.push([this._xAxis.width() + markOffset, this._xAxis.width()]);
            } else {
              if (markOffset < markRectWidth) {
                lines.push([0, this._xAxis.width() - markRectWidth + markOffset]);
              } else {
                lines.push([0, this._xAxis.width()]);
              }
            }
          } else {
            lines.push([0, this._xAxis.width()]);
          }
        }
      }

      lines.forEach(function (line) {
        renderHorizontalLine(ctx, y, line[0], line[1]);
      });
      ctx.restore();
    }
    /**
     * 绘制标记
     * @param ctx
     * @param y
     * @param tagOptions
     * @param yAxisOptions
     * @private
     */

  }, {
    key: "_drawMark",
    value: function _drawMark(ctx, y, tagOptions, yAxisOptions) {
      if (!isValid(this._mark)) {
        return;
      }

      var tagMarkOptions = tagOptions.mark;
      var rectWidth = getTextRectWidth(ctx, this._mark, tagMarkOptions);
      var rectHeight = getTextRectHeight(tagMarkOptions);
      var x;

      if (yAxisOptions.inside) {
        var textRectWidth = 0;

        if (isValid(this._text)) {
          textRectWidth = getTextRectWidth(ctx, this._text, tagOptions.text);
        }

        if (yAxisOptions.position === YAxisPosition.LEFT) {
          x = textRectWidth;
        } else {
          x = this._xAxis.width() - textRectWidth - rectWidth;
        }
      } else {
        if (yAxisOptions.position === YAxisPosition.LEFT) {
          x = 0;
        } else {
          x = this._xAxis.width() - rectWidth;
        }
      }

      x += tagMarkOptions.offset;
      renderStrokeFillRoundRect(ctx, tagMarkOptions.backgroundColor, tagMarkOptions.borderColor, tagMarkOptions.borderSize, x, y - rectHeight / 2, rectWidth, rectHeight, tagMarkOptions.borderRadius);
      ctx.textBaseline = 'middle';
      ctx.font = createFont(tagMarkOptions.size, tagMarkOptions.weight, tagMarkOptions.family);
      renderText(ctx, tagMarkOptions.color, x + tagMarkOptions.paddingLeft, y, this._mark);
    }
    /**
     * 获取坐标y值
     * @param tagOptions
     * @return {*}
     * @private
     */

  }, {
    key: "_getY",
    value: function _getY(tagOptions) {
      var offset = tagOptions.offset;

      switch (tagOptions.position) {
        case OverlayPosition.TOP:
          {
            return offset;
          }

        case OverlayPosition.BOTTOM:
          {
            return this._yAxis.height() + offset;
          }

        default:
          {
            return this._yAxis.convertToNicePixel(this._point.value) + offset;
          }
      }
    }
  }]);

  return Tag;
}(Overlay);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEFAULT_TECHNICAL_INDICATOR_PANE_HEIGHT = 100; // 技术指标窗口id前缀

var TECHNICAL_INDICATOR_PANE_ID_PREFIX = 'technical_indicator_pane_'; // 图形id前缀

var SHAPE_ID_PREFIX = 'shape_'; // 蜡烛图窗口id

var CANDLE_PANE_ID = 'candle_pane'; // x轴窗口id

var XAXIS_PANE_ID = 'x_axis_pane';

var ChartPane = /*#__PURE__*/function () {
  function ChartPane(container, styleOptions) {
    var _this = this;

    _classCallCheck(this, ChartPane);

    this._initChartContainer(container);

    this._shapeBaseId = 0;
    this._paneBaseId = 0;
    this._separatorDragStartTopPaneHeight = 0;
    this._separatorDragStartBottomPaneHeight = 0;
    this._chartStore = new ChartStore(styleOptions, {
      invalidate: this._invalidatePane.bind(this),
      crosshair: this._crosshairObserver.bind(this)
    });
    this._xAxisPane = new XAxisPane({
      id: XAXIS_PANE_ID,
      container: this._chartContainer,
      chartStore: this._chartStore
    });
    this._panes = new Map([[CANDLE_PANE_ID, new CandlePane({
      container: this._chartContainer,
      chartStore: this._chartStore,
      xAxis: this._xAxisPane.xAxis(),
      id: CANDLE_PANE_ID
    })]]);
    this._separators = new Map();
    this._chartWidth = {};
    this._chartHeight = {};
    this._chartEvent = new ChartEvent(this._chartContainer, this._chartStore, function (paneId) {
      return _this._panes.get(paneId).yAxis();
    });
    this.adjustPaneViewport(true, true, true);
  }
  /**
   * 初始化图表容器
   * @param container
   * @private
   */


  _createClass(ChartPane, [{
    key: "_initChartContainer",
    value: function _initChartContainer(container) {
      this._container = container;
      this._chartContainer = createElement('div', {
        userSelect: 'none',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none',
        webkitTapHighlightColor: 'transparent',
        position: 'relative',
        outline: 'none',
        borderStyle: 'none',
        width: '100%',
        cursor: 'crosshair',
        boxSizing: 'border-box'
      });
      this._chartContainer.tabIndex = 1;
      container.appendChild(this._chartContainer);
    }
    /**
     * 十字光标观察者
     * @private
     */

  }, {
    key: "_crosshairObserver",
    value: function _crosshairObserver(_ref) {
      var _this2 = this;

      var paneId = _ref.paneId,
          dataIndex = _ref.dataIndex,
          kLineData = _ref.kLineData,
          x = _ref.x,
          y = _ref.y;

      if (this._chartStore.actionStore().has(ActionType.CROSSHAIR) || this._chartStore.actionStore().has(ActionType.TOOLTIP)) {
        var techDatas = {};

        this._panes.forEach(function (_, id) {
          var data = {};
          var techDataList = [];

          var techs = _this2.chartStore().technicalIndicatorStore().instances(id);

          techs.forEach(function (tech) {
            var result = tech.result;
            var techData = result[dataIndex];
            data[tech.name] = techData;
            techDataList.push({
              name: tech.name,
              data: techData
            });
          });
          techDatas[id] = data;

          _this2._chartStore.actionStore().execute(ActionType.TOOLTIP, {
            paneId: id,
            dataIndex: dataIndex,
            kLineData: kLineData,
            technicalIndicatorData: techDataList
          });
        });

        if (paneId) {
          this._chartStore.actionStore().execute(ActionType.CROSSHAIR, {
            paneId: paneId,
            coordinate: {
              x: x,
              y: y
            },
            dataIndex: dataIndex,
            kLineData: kLineData,
            technicalIndicatorData: techDatas
          });
        }
      }
    }
    /**
     * 分割线拖拽开始
     * @param topPaneId
     * @param bottomPaneId
     * @private
     */

  }, {
    key: "_separatorStartDrag",
    value: function _separatorStartDrag(topPaneId, bottomPaneId) {
      this._separatorDragStartTopPaneHeight = this._panes.get(topPaneId).height();
      this._separatorDragStartBottomPaneHeight = this._panes.get(bottomPaneId).height();
    }
    /**
     * 分割线拖拽
     * @param dragDistance
     * @param topPaneId
     * @param bottomPaneId
     * @private
     */

  }, {
    key: "_separatorDrag",
    value: function _separatorDrag(dragDistance, topPaneId, bottomPaneId) {
      var topPaneHeight = this._separatorDragStartTopPaneHeight + dragDistance;
      var bottomPaneHeight = this._separatorDragStartBottomPaneHeight - dragDistance;

      if (topPaneHeight > this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight) {
        topPaneHeight = this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight;
        bottomPaneHeight = 0;
      }

      if (topPaneHeight < 0) {
        topPaneHeight = 0;
        bottomPaneHeight = this._separatorDragStartTopPaneHeight + this._separatorDragStartBottomPaneHeight;
      }

      this._panes.get(topPaneId).setHeight(topPaneHeight);

      this._panes.get(bottomPaneId).setHeight(bottomPaneHeight);

      this._chartStore.actionStore().execute(ActionType.PANE_DRAG, {
        topPaneId: topPaneId,
        bottomPaneId: bottomPaneId,
        topPaneHeight: topPaneHeight,
        bottomPaneHeight: bottomPaneHeight
      });

      this.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 更新所有pane
     * @private
     */

  }, {
    key: "_invalidatePane",
    value: function _invalidatePane() {
      var invalidateLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InvalidateLevel.FULL;

      if (invalidateLevel === InvalidateLevel.OVERLAY) {
        this._xAxisPane.invalidate(invalidateLevel);

        this._panes.forEach(function (pane) {
          pane.invalidate(invalidateLevel);
        });
      } else {
        var shouldMeasureWidth = false;

        this._panes.forEach(function (pane) {
          var should = pane.yAxis().computeAxis();

          if (should) {
            shouldMeasureWidth = should;
          }
        });

        this.adjustPaneViewport(false, shouldMeasureWidth, true);
      }
    }
    /**
     * 测量pane高度
     * @private
     */

  }, {
    key: "_measurePaneHeight",
    value: function _measurePaneHeight() {
      var _this3 = this;

      var styleOptions = this._chartStore.styleOptions();

      var paneHeight = this._container.offsetHeight;
      var separatorSize = styleOptions.separator.size;
      var separatorTotalHeight = separatorSize * this._separators.size;

      var xAxisHeight = this._xAxisPane.xAxis().getSelfHeight();

      var paneExcludeXAxisSeparatorHeight = paneHeight - xAxisHeight - separatorTotalHeight;
      var techPaneTotalHeight = 0;

      this._panes.forEach(function (pane) {
        if (pane.id() !== CANDLE_PANE_ID) {
          var _paneHeight = pane.height();

          if (techPaneTotalHeight + _paneHeight > paneExcludeXAxisSeparatorHeight) {
            pane.setHeight(paneExcludeXAxisSeparatorHeight - techPaneTotalHeight);
            techPaneTotalHeight = paneExcludeXAxisSeparatorHeight;
          } else {
            techPaneTotalHeight += _paneHeight;
          }
        }
      });

      var candlePaneHeight = paneExcludeXAxisSeparatorHeight - techPaneTotalHeight;
      var paneContentSize = {};
      paneContentSize[CANDLE_PANE_ID] = {
        contentTop: 0,
        contentBottom: candlePaneHeight
      };
      var contentTop = candlePaneHeight;
      var contentBottom = candlePaneHeight;

      this._panes.get(CANDLE_PANE_ID).setHeight(candlePaneHeight);

      this._chartHeight[CANDLE_PANE_ID] = candlePaneHeight;

      this._panes.forEach(function (pane) {
        if (pane.id() !== CANDLE_PANE_ID) {
          var _paneHeight2 = pane.height();

          contentBottom += _paneHeight2 + separatorSize;
          paneContentSize[pane.id()] = {
            contentTop: contentTop,
            contentBottom: contentBottom
          };
          _this3._chartHeight[pane.id()] = _paneHeight2;
          contentTop = contentBottom;
        }
      });

      this._xAxisPane.setHeight(xAxisHeight);

      this._chartHeight.xAxis = xAxisHeight;
      this._chartHeight.total = paneHeight;

      this._chartEvent.setPaneContentSize(paneContentSize);

      this._chartEvent.setChartContentTopBottom({
        contentTop: 0,
        contentBottom: contentBottom
      });
    }
    /**
     * 测量pan宽度
     * @private
     */

  }, {
    key: "_measurePaneWidth",
    value: function _measurePaneWidth() {
      var _this4 = this;

      var styleOptions = this._chartStore.styleOptions();

      var yAxisOptions = styleOptions.yAxis;
      var isYAxisLeft = yAxisOptions.position === YAxisPosition.LEFT;
      var isOutside = !yAxisOptions.inside;
      var paneWidth = this._container.offsetWidth;
      var mainWidth;
      var yAxisWidth = Number.MIN_SAFE_INTEGER;
      var yAxisOffsetLeft;
      var mainOffsetLeft;

      if (isOutside) {
        this._panes.forEach(function (pane) {
          yAxisWidth = Math.max(yAxisWidth, pane.yAxis().getSelfWidth());
        });

        mainWidth = paneWidth - yAxisWidth;

        if (isYAxisLeft) {
          yAxisOffsetLeft = 0;
          mainOffsetLeft = yAxisWidth;
        } else {
          mainOffsetLeft = 0;
          yAxisOffsetLeft = paneWidth - yAxisWidth;
        }
      } else {
        mainWidth = paneWidth;
        yAxisWidth = paneWidth;
        yAxisOffsetLeft = 0;
        mainOffsetLeft = 0;
      }

      this._chartStore.timeScaleStore().setTotalDataSpace(mainWidth);

      this._panes.forEach(function (pane, paneId) {
        pane.setWidth(mainWidth, yAxisWidth);
        pane.setOffsetLeft(mainOffsetLeft, yAxisOffsetLeft);

        var separator = _this4._separators.get(paneId);

        separator && separator.setSize(mainOffsetLeft, mainWidth);
      });

      this._chartWidth = {
        content: mainWidth,
        yAxis: yAxisWidth,
        total: paneWidth
      };

      this._xAxisPane.setWidth(mainWidth, yAxisWidth);

      this._xAxisPane.setOffsetLeft(mainOffsetLeft, yAxisOffsetLeft);

      this._chartEvent.setChartContentLeftRight({
        contentLeft: mainOffsetLeft,
        contentRight: mainOffsetLeft + mainWidth
      });
    }
    /**
     * 调整窗口尺寸
     * @param shouldMeasureHeight
     * @param shouldMeasureWidth
     * @param shouldLayout
     * @param shouldComputeAxis
     * @param shouldForceComputeAxis
     */

  }, {
    key: "adjustPaneViewport",
    value: function adjustPaneViewport(shouldMeasureHeight, shouldMeasureWidth, shouldLayout, shouldComputeAxis, shouldForceComputeAxis) {
      if (shouldMeasureHeight) {
        this._measurePaneHeight();
      }

      var isAdjust = false;

      if (shouldComputeAxis) {
        this._panes.forEach(function (pane) {
          var adjust = pane.yAxis().computeAxis(shouldForceComputeAxis);

          if (!isAdjust) {
            isAdjust = adjust;
          }
        });
      }

      if (!shouldComputeAxis && shouldMeasureWidth || shouldComputeAxis && isAdjust) {
        this._measurePaneWidth();
      }

      if (shouldLayout) {
        this._xAxisPane.xAxis().computeAxis(true);

        this._xAxisPane.layout();

        this._panes.forEach(function (pane) {
          pane.layout();
        });
      }
    }
    /**
     * 窗口是否存在
     * @param paneId
     * @return {boolean}
     */

  }, {
    key: "hasPane",
    value: function hasPane(paneId) {
      return this._panes.has(paneId);
    }
    /**
     * 获取窗口
     * @param paneId
     * @returns
     */

  }, {
    key: "getPane",
    value: function getPane(paneId) {
      return this._panes.get(paneId);
    }
    /**
     * 获取图表上的数据
     * @returns {chartStore}
     */

  }, {
    key: "chartStore",
    value: function chartStore() {
      return this._chartStore;
    }
    /**
     * 移除指标
     * @param paneId
     * @param name
     */

  }, {
    key: "removeTechnicalIndicator",
    value: function removeTechnicalIndicator(paneId, name) {
      var _this5 = this;

      var removed = this._chartStore.technicalIndicatorStore().removeInstance(paneId, name);

      if (removed) {
        var shouldMeasureHeight = false;

        if (paneId !== CANDLE_PANE_ID) {
          if (!this._chartStore.technicalIndicatorStore().hasInstance(paneId)) {
            shouldMeasureHeight = true;

            this._panes.get(paneId).destroy();

            var deleteSeparatorTopPaneId = this._separators.get(paneId).topPaneId();

            this._separators.get(paneId).destroy();

            this._panes.delete(paneId);

            this._separators.delete(paneId);

            this._separators.forEach(function (separator) {
              var topPaneId = separator.topPaneId();

              if (!_this5._separators.has(topPaneId)) {
                separator.updatePaneId(deleteSeparatorTopPaneId);
              }
            });
          }
        }

        this.adjustPaneViewport(shouldMeasureHeight, true, true, true, true);
      }
    }
    /**
     * 设置指标类型
     * @param tech 技术指标实例
     * @param isStack 是否叠加
     * @param options 配置
     */

  }, {
    key: "createTechnicalIndicator",
    value: function createTechnicalIndicator(tech, isStack) {
      var _this6 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this._panes.has(options.id)) {
        var _task = this._chartStore.technicalIndicatorStore().addInstance(options.id, tech, isStack);

        if (_task) {
          _task.finally(function (_) {
            _this6.setPaneOptions(options, _this6._panes.get(options.id).yAxis().computeAxis(true));
          });
        }

        return options.id;
      }

      var id = options.id || "".concat(TECHNICAL_INDICATOR_PANE_ID_PREFIX).concat(++this._paneBaseId);
      var dragEnabled = isBoolean(options.dragEnabled) ? options.dragEnabled : true;

      this._separators.set(id, new SeparatorPane(this._chartContainer, this._chartStore, Array.from(this._panes.keys()).pop(), id, dragEnabled, {
        startDrag: this._separatorStartDrag.bind(this),
        drag: throttle(this._separatorDrag.bind(this), 50)
      }));

      var pane = new TechnicalIndicatorPane({
        container: this._chartContainer,
        chartStore: this._chartStore,
        xAxis: this._xAxisPane.xAxis(),
        id: id,
        height: options.height || DEFAULT_TECHNICAL_INDICATOR_PANE_HEIGHT
      });

      this._panes.set(id, pane);

      var task = this._chartStore.technicalIndicatorStore().addInstance(id, tech, isStack);

      if (task) {
        task.finally(function (_) {
          _this6.adjustPaneViewport(true, true, true, true, true);
        });
      }

      return id;
    }
    /**
     * 创建图形
     * @param ShapeTemplateClass
     * @param shapeOptions
     * @param paneId
     */

  }, {
    key: "createShape",
    value: function createShape(ShapeTemplateClass, shapeOptions, paneId) {
      var id = shapeOptions.id,
          points = shapeOptions.points,
          styles = shapeOptions.styles,
          lock = shapeOptions.lock,
          mode = shapeOptions.mode,
          data = shapeOptions.data,
          onDrawStart = shapeOptions.onDrawStart,
          onDrawing = shapeOptions.onDrawing,
          onDrawEnd = shapeOptions.onDrawEnd,
          onClick = shapeOptions.onClick,
          onRightClick = shapeOptions.onRightClick,
          onPressedMove = shapeOptions.onPressedMove,
          onMouseEnter = shapeOptions.onMouseEnter,
          onMouseLeave = shapeOptions.onMouseLeave,
          onRemove = shapeOptions.onRemove;
      var shapeId = id || "".concat(SHAPE_ID_PREFIX).concat(++this._shapeBaseId);

      if (!this._chartStore.shapeStore().hasInstance(shapeId)) {
        var yAxis = null;

        if (this.hasPane(paneId)) {
          yAxis = this._panes.get(paneId).yAxis();
        } else {
          if (points && points.length > 0) {
            paneId = CANDLE_PANE_ID;
            yAxis = this._panes.get(CANDLE_PANE_ID).yAxis();
          }
        }

        var shapeInstance = new ShapeTemplateClass({
          id: shapeId,
          chartStore: this._chartStore,
          xAxis: this._xAxisPane.xAxis(),
          yAxis: yAxis,
          points: points,
          styles: styles,
          lock: lock,
          mode: mode,
          data: data
        });

        if (isFunction(onDrawStart)) {
          onDrawStart({
            id: shapeId
          });
        }

        perfectOverlayFunc(shapeInstance, [{
          key: 'onDrawing',
          fn: onDrawing
        }, {
          key: 'onDrawEnd',
          fn: onDrawEnd
        }, {
          key: 'onClick',
          fn: onClick
        }, {
          key: 'onRightClick',
          fn: onRightClick
        }, {
          key: 'onPressedMove',
          fn: onPressedMove
        }, {
          key: 'onMouseEnter',
          fn: onMouseEnter
        }, {
          key: 'onMouseLeave',
          fn: onMouseLeave
        }, {
          key: 'onRemove',
          fn: onRemove
        }]);

        this._chartStore.shapeStore().addInstance(shapeInstance, paneId);

        return shapeId;
      }

      return null;
    }
    /**
     * 创建注解
     * @param annotations
     * @param paneId
     */

  }, {
    key: "createAnnotation",
    value: function createAnnotation(annotations, paneId) {
      var _this7 = this;

      var instances = [];
      annotations.forEach(function (_ref2) {
        var point = _ref2.point,
            styles = _ref2.styles,
            checkEventCoordinateOnCustomSymbol = _ref2.checkEventCoordinateOnCustomSymbol,
            drawCustomSymbol = _ref2.drawCustomSymbol,
            drawExtend = _ref2.drawExtend,
            onClick = _ref2.onClick,
            onRightClick = _ref2.onRightClick,
            onMouseEnter = _ref2.onMouseEnter,
            onMouseLeave = _ref2.onMouseLeave;

        if (point && point.timestamp) {
          var annotationInstance = new Annotation({
            id: point.timestamp,
            chartStore: _this7._chartStore,
            point: point,
            xAxis: _this7._xAxisPane.xAxis(),
            yAxis: _this7._panes.get(paneId).yAxis(),
            styles: styles
          });
          perfectOverlayFunc(annotationInstance, [{
            key: 'drawExtend',
            fn: drawExtend
          }, {
            key: 'drawCustomSymbol',
            fn: drawCustomSymbol
          }, {
            key: 'checkEventCoordinateOnCustomSymbol',
            fn: checkEventCoordinateOnCustomSymbol
          }, {
            key: 'onClick',
            fn: onClick
          }, {
            key: 'onRightClick',
            fn: onRightClick
          }, {
            key: 'onMouseEnter',
            fn: onMouseEnter
          }, {
            key: 'onMouseLeave',
            fn: onMouseLeave
          }]);
          instances.push(annotationInstance);
        }
      });

      if (instances.length > 0) {
        this._chartStore.annotationStore().add(instances, paneId);
      }
    }
    /**
     * 创建标签
     * @param tags
     * @param paneId
     */

  }, {
    key: "createTag",
    value: function createTag(tags, paneId) {
      var _this8 = this;

      var instances = [];
      var shouldUpdate = false;
      var shouldAdd = false;
      tags.forEach(function (_ref3) {
        var id = _ref3.id,
            point = _ref3.point,
            text = _ref3.text,
            mark = _ref3.mark,
            styles = _ref3.styles;

        if (isValid(id)) {
          if (_this8._chartStore.tagStore().has(id, paneId)) {
            var updateSuccess = _this8._chartStore.tagStore().update(id, paneId, {
              point: point,
              text: text,
              mark: mark,
              styles: styles
            });

            if (!shouldUpdate) {
              shouldUpdate = updateSuccess;
            }
          } else {
            shouldAdd = true;
            instances.push(new Tag({
              id: id,
              point: point,
              text: text,
              mark: mark,
              styles: styles,
              chartStore: _this8._chartStore,
              xAxis: _this8._xAxisPane.xAxis(),
              yAxis: _this8._panes.get(paneId).yAxis()
            }));
          }
        }
      });

      if (shouldAdd) {
        this._chartStore.tagStore().add(instances, paneId);
      } else {
        if (shouldUpdate) {
          this._invalidatePane(InvalidateLevel.OVERLAY);
        }
      }
    }
    /**
     * 移除所有html元素
     */

  }, {
    key: "removeAllHtml",
    value: function removeAllHtml() {
      this._panes.forEach(function (pane) {
        pane.removeHtml();
      });

      this._xAxisPane.removeHtml();
    }
    /**
     * 设置窗体参数
     * @param options
     * @param forceShouldAdjust
     */

  }, {
    key: "setPaneOptions",
    value: function setPaneOptions(options, forceShouldAdjust) {
      var shouldAdjust = forceShouldAdjust;
      var shouldMeasureHeight = false;

      if (options.id !== CANDLE_PANE_ID) {
        var pane = this._panes.get(options.id);

        if (pane) {
          if (isNumber(options.height) && options.height > 0 && pane.height() !== options.height) {
            shouldAdjust = true;
            pane.setHeight(options.height);
            shouldMeasureHeight = true;
          }

          if (isBoolean(options.dragEnabled)) {
            this._separators.get(options.id).setDragEnabled(options.dragEnabled);
          }
        }
      }

      if (shouldAdjust) {
        this.adjustPaneViewport(shouldMeasureHeight, true, true, true, true);
      }
    }
    /**
     * 设置时区
     * @param timezone
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      this._chartStore.timeScaleStore().setTimezone(timezone);

      this._xAxisPane.xAxis().computeAxis(true);

      this._xAxisPane.invalidate(InvalidateLevel.FULL);
    }
    /**
     * 将值装换成像素
     * @param timestamp
     * @param point
     * @param paneId
     * @param absoluteYAxis
     */

  }, {
    key: "convertToPixel",
    value: function convertToPixel(point, _ref4) {
      var _this9 = this;

      var _ref4$paneId = _ref4.paneId,
          paneId = _ref4$paneId === void 0 ? CANDLE_PANE_ID : _ref4$paneId,
          absoluteYAxis = _ref4.absoluteYAxis;
      var points = [].concat(point);
      var coordinates = [];

      var separatorSize = this._chartStore.styleOptions().separator.size;

      var absoluteTop = 0;

      var panes = this._panes.values();

      var _iterator = _createForOfIteratorHelper(panes),
          _step;

      try {
        var _loop = function _loop() {
          var pane = _step.value;

          if (pane.id() === paneId) {
            coordinates = points.map(function (_ref5) {
              var timestamp = _ref5.timestamp,
                  dataIndex = _ref5.dataIndex,
                  value = _ref5.value;
              var coordinate = {};
              var index = dataIndex;

              if (isValid(timestamp)) {
                index = _this9._chartStore.timeScaleStore().timestampToDataIndex(timestamp);
              }

              if (isValid(index)) {
                coordinate.x = _this9._xAxisPane.xAxis().convertToPixel(index);
              }

              if (isValid(value)) {
                var y = pane.yAxis().convertToPixel(value);
                coordinate.y = absoluteYAxis ? absoluteTop + y : y;
              }

              return coordinate;
            });
            return "break";
          }

          absoluteTop += pane.height() + separatorSize;
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return isArray(point) ? coordinates : coordinates[0] || {};
    }
    /**
     * 将像素转换成值
     * @param coordinate
     * @param paneId
     * @param dataIndexXAxis
     * @param absoluteYAxis
     * @return {{}[]|*[]}
     */

  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(coordinate, _ref6) {
      var _this10 = this;

      var _ref6$paneId = _ref6.paneId,
          paneId = _ref6$paneId === void 0 ? CANDLE_PANE_ID : _ref6$paneId,
          absoluteYAxis = _ref6.absoluteYAxis;
      var coordinates = [].concat(coordinate);
      var points = [];

      var separatorSize = this._chartStore.styleOptions().separator.size;

      var absoluteTop = 0;

      var panes = this._panes.values();

      var _iterator2 = _createForOfIteratorHelper(panes),
          _step2;

      try {
        var _loop2 = function _loop2() {
          var pane = _step2.value;

          if (pane.id() === paneId) {
            points = coordinates.map(function (_ref7) {
              var x = _ref7.x,
                  y = _ref7.y;
              var point = {};

              if (isValid(x)) {
                point.dataIndex = _this10._xAxisPane.xAxis().convertFromPixel(x);
                point.timestamp = _this10._chartStore.timeScaleStore().dataIndexToTimestamp(point.dataIndex);
              }

              if (isValid(y)) {
                var ry = absoluteYAxis ? y - absoluteTop : y;
                point.value = pane.yAxis().convertFromPixel(ry);
              }

              return point;
            });
            return "break";
          }

          absoluteTop += pane.height() + separatorSize;
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ret2 = _loop2();

          if (_ret2 === "break") break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return isArray(coordinate) ? points : points[0] || {};
    }
    /**
     * 图表宽度
     * @return {*|{}}
     */

  }, {
    key: "chartWidth",
    value: function chartWidth() {
      return this._chartWidth;
    }
    /**
     * 图表高度
     * @return {*|{}}
     */

  }, {
    key: "chartHeight",
    value: function chartHeight() {
      return this._chartHeight;
    }
    /**
     * 获取图表转换为图片后url
     * @param includeOverlay,
     * @param type
     * @param backgroundColor
     */

  }, {
    key: "getConvertPictureUrl",
    value: function getConvertPictureUrl(includeOverlay, type, backgroundColor) {
      var _this11 = this;

      var width = this._chartContainer.offsetWidth;
      var height = this._chartContainer.offsetHeight;
      var canvas = createElement('canvas', {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        boxSizing: 'border-box'
      });
      var ctx = canvas.getContext('2d');
      var pixelRatio = getPixelRatio(canvas);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      var offsetTop = 0;

      this._panes.forEach(function (pane, paneId) {
        if (paneId !== CANDLE_PANE_ID) {
          var separator = _this11._separators.get(paneId);

          ctx.drawImage(separator.getImage(), 0, offsetTop, width, separator.height());
          offsetTop += separator.height();
        }

        ctx.drawImage(pane.getImage(includeOverlay), 0, offsetTop, width, pane.height());
        offsetTop += pane.height();
      });

      ctx.drawImage(this._xAxisPane.getImage(includeOverlay), 0, offsetTop, width, this._xAxisPane.height());
      return canvas.toDataURL("image/".concat(type));
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._panes.forEach(function (pane) {
        pane.destroy();
      });

      this._separators.forEach(function (pane) {
        pane.destroy();
      });

      this._panes.clear();

      this._separators.clear();

      this._xAxisPane.destroy();

      this._container.removeChild(this._chartContainer);

      this._chartEvent.destroy();
    }
  }]);

  return ChartPane;
}();

var Chart = /*#__PURE__*/function () {
  function Chart(container, styleOptions) {
    _classCallCheck(this, Chart);

    this._chartPane = new ChartPane(container, styleOptions);
  }
  /**
   * 获取宽尺寸
   * @return {*|{}}
   */


  _createClass(Chart, [{
    key: "getWidth",
    value: function getWidth() {
      return this._chartPane.chartWidth();
    }
    /**
     * 获取高度尺寸
     * @return {*|{}}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._chartPane.chartHeight();
    }
    /**
     * 设置样式配置
     * @param options 配置
     */

  }, {
    key: "setStyleOptions",
    value: function setStyleOptions(options) {
      if (!isObject(options)) {
        logWarn('setStyleOptions', 'options');
        return;
      }

      this._chartPane.chartStore().applyStyleOptions(options);

      this._chartPane.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 获取样式配置
     * @returns {[]|*[]}
     */

  }, {
    key: "getStyleOptions",
    value: function getStyleOptions() {
      return clone(this._chartPane.chartStore().styleOptions());
    }
    /**
     * 设置价格数量精度
     * @param pricePrecision 价格精度
     * @param volumePrecision 数量精度
     */

  }, {
    key: "setPriceVolumePrecision",
    value: function setPriceVolumePrecision(pricePrecision, volumePrecision) {
      if (!isNumber(pricePrecision) || pricePrecision < 0) {
        logWarn('setPriceVolumePrecision', 'pricePrecision', 'pricePrecision must be a number and greater than zero!!!');
        return;
      }

      if (!isNumber(volumePrecision) || volumePrecision < 0) {
        logWarn('setPriceVolumePrecision', 'volumePrecision', 'volumePrecision must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartStore().setPriceVolumePrecision(pricePrecision, volumePrecision);
    }
    /**
     * 设置时区
     * @param timezone 时区
     */

  }, {
    key: "setTimezone",
    value: function setTimezone(timezone) {
      this._chartPane.setTimezone(timezone);
    }
    /**
     * 获取当前时区
     */

  }, {
    key: "getTimezone",
    value: function getTimezone() {
      return this._chartPane.chartStore().timeScaleStore().timezone();
    }
    /**
     * 重置尺寸，总是会填充父容器
     */

  }, {
    key: "resize",
    value: function resize() {
      this._chartPane.adjustPaneViewport(true, true, true, true, true);
    }
    /**
     * 设置右边间距
     * @param space 空间大小
     */

  }, {
    key: "setOffsetRightSpace",
    value: function setOffsetRightSpace(space) {
      if (!isNumber(space)) {
        logWarn('setOffsetRightSpace', 'space', 'space must be a number!!!');
        return;
      }

      this._chartPane.chartStore().timeScaleStore().setOffsetRightSpace(space, true);
    }
    /**
     * 设置左边可见的最小bar数量
     * @param barCount bar数量
     */

  }, {
    key: "setLeftMinVisibleBarCount",
    value: function setLeftMinVisibleBarCount(barCount) {
      if (!isNumber(barCount) || barCount <= 0) {
        logWarn('setLeftMinVisibleBarCount', 'barCount', 'barCount must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartStore().timeScaleStore().setLeftMinVisibleBarCount(Math.ceil(barCount));
    }
    /**
     * 设置右边可见的最小bar数量
     * @param barCount bar数量
     */

  }, {
    key: "setRightMinVisibleBarCount",
    value: function setRightMinVisibleBarCount(barCount) {
      if (!isNumber(barCount) || barCount <= 0) {
        logWarn('setRightMinVisibleBarCount', 'barCount', 'barCount must be a number and greater than zero!!!');
        return;
      }

      this._chartPane.chartStore().timeScaleStore().setRightMinVisibleBarCount(Math.ceil(barCount));
    }
    /**
     * 设置一条数据的空间
     * @param space 空间大小
     */

  }, {
    key: "setDataSpace",
    value: function setDataSpace(space) {
      if (!isNumber(space)) {
        logWarn('setDataSpace', 'space', 'space must be a number!!!');
        return;
      }

      this._chartPane.chartStore().timeScaleStore().setDataSpace(space);
    }
    /**
     * 获取单条数据的空间
     * @returns
     */

  }, {
    key: "getDataSpace",
    value: function getDataSpace() {
      return this._chartPane.chartStore().timeScaleStore().dataSpace();
    }
    /**
     * 获取单条数据绘制的空间
     * @returns
     */

  }, {
    key: "getBarSpace",
    value: function getBarSpace() {
      return this._chartPane.chartStore().timeScaleStore().barSpace();
    }
    /**
     * 清空数据
     */

  }, {
    key: "clearData",
    value: function clearData() {
      this._chartPane.chartStore().clearDataList();
    }
    /**
     * 获取数据源
     */

  }, {
    key: "getDataList",
    value: function getDataList() {
      return this._chartPane.chartStore().dataList();
    }
    /**
     * 添加新数据
     * @param dataList k线数据数组
     * @param more 是否还有更多标识
     */

  }, {
    key: "applyNewData",
    value: function applyNewData(dataList, more) {
      var _this = this;

      if (!isArray(dataList)) {
        logWarn('applyNewData', 'dataList', 'dataList must be an array!!!');
        return;
      }

      var chartStore = this._chartPane.chartStore();

      chartStore.clearDataList();
      chartStore.addData(dataList, 0, more);
      chartStore.technicalIndicatorStore().calcInstance().finally(function (_) {
        _this._chartPane.adjustPaneViewport(false, true, true, true);
      });
    }
    /**
     * 添加历史更多数据
     * @param dataList k线数据数组
     * @param more 是否还有更多标识
     */

  }, {
    key: "applyMoreData",
    value: function applyMoreData(dataList, more) {
      var _this2 = this;

      if (!isArray(dataList)) {
        logWarn('applyMoreData', 'dataList', 'dataList must be an array!!!');
        return;
      }

      var chartStore = this._chartPane.chartStore();

      chartStore.addData(dataList, 0, more);
      chartStore.technicalIndicatorStore().calcInstance().finally(function (_) {
        _this2._chartPane.adjustPaneViewport(false, true, true, true);
      });
    }
    /**
     * 更新数据
     * @param data 新的k线数据
     */

  }, {
    key: "updateData",
    value: function updateData(data) {
      var _this3 = this;

      if (!isObject(data) || isArray(data)) {
        logWarn('updateData', 'data', 'data must be an object!!!');
        return;
      }

      var chartStore = this._chartPane.chartStore();

      var dataList = chartStore.dataList();
      var dataSize = dataList.length; // 这里判断单个数据应该添加到哪个位置

      var timestamp = formatValue(data, 'timestamp', 0);
      var lastDataTimestamp = formatValue(dataList[dataSize - 1], 'timestamp', 0);

      if (timestamp >= lastDataTimestamp) {
        var pos = dataSize;

        if (timestamp === lastDataTimestamp) {
          pos = dataSize - 1;
        }

        chartStore.addData(data, pos);
        chartStore.technicalIndicatorStore().calcInstance().finally(function (_) {
          _this3._chartPane.adjustPaneViewport(false, true, true, true);
        });
      }
    }
    /**
     * 设置加载更多回调
     * @param cb 回调方法
     */

  }, {
    key: "loadMore",
    value: function loadMore(cb) {
      if (!isFunction(cb)) {
        logWarn('loadMore', 'cb', 'cb must be a function!!!');
        return;
      }

      this._chartPane.chartStore().timeScaleStore().setLoadMoreCallback(cb);
    }
    /**
     * 创建一个技术指标
     * @param value 指标名或者指标
     * @param isStack 是否覆盖
     * @param paneOptions 窗口配置
     * @returns {string|null}
     */

  }, {
    key: "createTechnicalIndicator",
    value: function createTechnicalIndicator(value, isStack, paneOptions) {
      if (!isValid(value)) {
        logWarn('createTechnicalIndicator', 'value', 'value is invalid!!!');
        return null;
      }

      var tech = isObject(value) && !isArray(value) ? value : {
        name: value
      };

      if (!this._chartPane.chartStore().technicalIndicatorStore().hasTemplate(tech.name)) {
        logWarn('createTechnicalIndicator', 'value', 'can not find the corresponding technical indicator!!!');
        return null;
      }

      return this._chartPane.createTechnicalIndicator(tech, isStack, paneOptions);
    }
    /**
     * 添加技术指标模板
     * @param template 指标模板
     */

  }, {
    key: "addTechnicalIndicatorTemplate",
    value: function addTechnicalIndicatorTemplate(template) {
      if (!isObject(template)) {
        logWarn('addTechnicalIndicatorTemplate', 'template', 'template must be an object or array!!!');
        return;
      }

      var templates = [].concat(template);

      this._chartPane.chartStore().technicalIndicatorStore().addTemplate(templates);
    }
    /**
     * 覆盖技术指标
     * @param override 覆盖参数
     * @param paneId 窗口id
     */

  }, {
    key: "overrideTechnicalIndicator",
    value: function overrideTechnicalIndicator(techOverride, paneId) {
      var _this4 = this;

      if (!isObject(techOverride) || isArray(techOverride)) {
        logWarn('overrideTechnicalIndicator', 'overrideTech', 'overrideTech must be an object!!!');
        return;
      }

      var promise = this._chartPane.chartStore().technicalIndicatorStore().override(techOverride, paneId);

      if (promise) {
        promise.then(function (_) {
          _this4._chartPane.adjustPaneViewport(false, true, true, true);
        });
      }
    }
    /**
     * 获取技术指标名字获取技术指标
     * @param name 指标名
     * @return {{}}
     */

  }, {
    key: "getTechnicalIndicatorTemplate",
    value: function getTechnicalIndicatorTemplate(name) {
      return this._chartPane.chartStore().technicalIndicatorStore().getTemplateInfo(name);
    }
    /**
      * 获取窗口上的技术指标
      * @param paneId 窗口id
      * @param name 指标名
      * @return {{}}
      */

  }, {
    key: "getTechnicalIndicatorByPaneId",
    value: function getTechnicalIndicatorByPaneId(paneId, name) {
      return this._chartPane.chartStore().technicalIndicatorStore().getInstanceInfo(paneId, name);
    }
    /**
     * 移除一个技术指标
     * @param paneId 窗口id
     * @param name 指标名
     */

  }, {
    key: "removeTechnicalIndicator",
    value: function removeTechnicalIndicator(paneId, name) {
      this._chartPane.removeTechnicalIndicator(paneId, name);
    }
    /**
     * 添加图形模板
     * @param template 图形模板
     */

  }, {
    key: "addShapeTemplate",
    value: function addShapeTemplate(template) {
      if (!isObject(template)) {
        logWarn('addShapeTemplate', 'template', 'template must be an object or array!!!');
        return;
      }

      var templates = [].concat(template);

      this._chartPane.chartStore().shapeStore().addTemplate(templates);
    }
    /**
     * 创建图形
     * @param value 图形名或者图形配置
     * @param paneId 窗口id
     */

  }, {
    key: "createShape",
    value: function createShape(value, paneId) {
      if (!isValid(value)) {
        logWarn('createShape', 'value', 'value is invalid!!!');
        return null;
      }

      var shapeOptions = isObject(value) && !isArray(value) ? value : {
        name: value
      };

      var Shape = this._chartPane.chartStore().shapeStore().getTemplate(shapeOptions.name);

      if (!Shape) {
        logWarn('createShape', 'value', 'can not find the corresponding shape!!!');
        return null;
      }

      var id = this._chartPane.createShape(Shape, shapeOptions, paneId);

      if (!id) {
        logWarn('createShape', 'options.id', 'duplicate id!!!');
      }

      return id;
    }
    /**
     * 获取图形标记
     * @param shapeId 图形标记id
     * @return {{name, lock: *, styles, id, points: (*|*[])}[]|{name, lock: *, styles, id, points: (*|*[])}}
     */

  }, {
    key: "getShape",
    value: function getShape(shapeId) {
      return this._chartPane.chartStore().shapeStore().getInstanceInfo(shapeId);
    }
    /**
     * 设置图形标记配置
     * @param options 图形标记配置
     */

  }, {
    key: "setShapeOptions",
    value: function setShapeOptions(options) {
      if (!isObject(options) || isArray(options)) {
        logWarn('setShapeOptions', 'options', 'options must be an object!!!');
        return;
      }

      this._chartPane.chartStore().shapeStore().setInstanceOptions(options);
    }
    /**
     * 移除图形
     * @param shapeId 图形id
     */

  }, {
    key: "removeShape",
    value: function removeShape(shapeId) {
      this._chartPane.chartStore().shapeStore().removeInstance(shapeId);
    }
    /**
     * 创建注解
     * @param annotation 单个注解或者注解数组
     * @param paneId 窗口id
     */

  }, {
    key: "createAnnotation",
    value: function createAnnotation(annotation) {
      var paneId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CANDLE_PANE_ID;

      if (!isObject(annotation)) {
        logWarn('createAnnotation', 'annotation', 'annotation must be an object or array!!!');
        return;
      }

      if (!this._chartPane.hasPane(paneId)) {
        logWarn('createAnnotation', 'paneId', 'can not find the corresponding pane!!!');
        return;
      }

      var annotations = [].concat(annotation);

      this._chartPane.createAnnotation(annotations, paneId);
    }
    /**
     * 移除注解
     * @param paneId 窗口id
     * @param points 单个点或者点数组
     */

  }, {
    key: "removeAnnotation",
    value: function removeAnnotation(paneId, points) {
      this._chartPane.chartStore().annotationStore().remove(paneId, points);
    }
    /**
     * 创建标签
     * @param tag 单个标签或者标签数组
     * @param paneId 窗口id
     */

  }, {
    key: "createTag",
    value: function createTag(tag) {
      var paneId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CANDLE_PANE_ID;

      if (!isObject(tag)) {
        logWarn('createTag', 'tag', 'tag must be an object or array!!!');
        return;
      }

      if (!this._chartPane.hasPane(paneId)) {
        logWarn('createTag', 'paneId', 'can not find the corresponding pane!!!');
        return;
      }

      var tags = [].concat(tag);

      this._chartPane.createTag(tags, paneId);
    }
    /**
     * 移除标签
     * @param paneId 窗口id
     * @param tagId 标签id
     */

  }, {
    key: "removeTag",
    value: function removeTag(paneId, tagId) {
      this._chartPane.chartStore().tagStore().remove(paneId, tagId);
    }
    /**
     * 创建html元素
     * @param html
     * @param paneId
     * @returns
     */

  }, {
    key: "createHtml",
    value: function createHtml(html) {
      var paneId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CANDLE_PANE_ID;

      if (!isObject(html)) {
        logWarn('createHtml', 'html', 'options must be an object!!!');
        return null;
      }

      if (!isString(html.content) && !(html.content instanceof HTMLElement)) {
        logWarn('createHtml', 'html.content', 'invalid html.content!!!');
        return null;
      }

      var pane = this._chartPane.getPane(paneId);

      if (!pane) {
        logWarn('createHtml', 'paneId', 'can not find the corresponding pane!!!');
        return null;
      }

      return pane.createHtml(html);
    }
    /**
     * 移除html元素
     * @param paneId
     * @param htmlId
     */

  }, {
    key: "removeHtml",
    value: function removeHtml(paneId, htmlId) {
      if (paneId) {
        var pane = this._chartPane.getPane(paneId);

        pane && pane.removeHtml(htmlId);
      } else {
        this._chartPane.removeAllHtml();
      }
    }
    /**
     * 设置窗口属性
     * @param options 窗口配置
     */

  }, {
    key: "setPaneOptions",
    value: function setPaneOptions(options) {
      if (!isObject(options)) {
        logWarn('setPaneOptions', 'options', 'options must be an object!!!');
        return;
      }

      this._chartPane.setPaneOptions(options, false);
    }
    /**
     * 设置是否可以缩放
     * @param enabled 标识
     */

  }, {
    key: "setZoomEnabled",
    value: function setZoomEnabled(enabled) {
      this._chartPane.chartStore().timeScaleStore().setZoomEnabled(enabled);
    }
    /**
     * 是否可以缩放
     * @return {boolean}
     */

  }, {
    key: "isZoomEnabled",
    value: function isZoomEnabled() {
      return this._chartPane.chartStore().timeScaleStore().zoomEnabled();
    }
    /**
     * 设置是否可以拖拽滚动
     * @param enabled 标识
     */

  }, {
    key: "setScrollEnabled",
    value: function setScrollEnabled(enabled) {
      this._chartPane.chartStore().timeScaleStore().setScrollEnabled(enabled);
    }
    /**
     * 是否可以拖拽滚动
     * @return {boolean}
     */

  }, {
    key: "isScrollEnabled",
    value: function isScrollEnabled() {
      return this._chartPane.chartStore().timeScaleStore().scrollEnabled();
    }
    /**
     * 按距离滚动
     * @param distance 距离
     * @param animationDuration 动画持续时间
     */

  }, {
    key: "scrollByDistance",
    value: function scrollByDistance(distance, animationDuration) {
      var _this5 = this;

      if (!isNumber(distance)) {
        logWarn('scrollByDistance', 'distance', 'distance must be a number!!!');
        return;
      }

      if (isNumber(animationDuration) && animationDuration > 0) {
        this._chartPane.chartStore().timeScaleStore().startScroll();

        var startTime = new Date().getTime();

        var animation = function animation() {
          var progress = (new Date().getTime() - startTime) / animationDuration;
          var finished = progress >= 1;
          var dis = finished ? distance : distance * progress;

          _this5._chartPane.chartStore().timeScaleStore().scroll(dis);

          if (!finished) {
            requestAnimationFrame(animation);
          }
        };

        animation();
      } else {
        this._chartPane.chartStore().timeScaleStore().startScroll();

        this._chartPane.chartStore().timeScaleStore().scroll(distance);
      }
    }
    /**
     * 滚动到实时位置
     * @param animationDuration 动画持续时间
     */

  }, {
    key: "scrollToRealTime",
    value: function scrollToRealTime(animationDuration) {
      var difBarCount = this._chartPane.chartStore().timeScaleStore().offsetRightBarCount() - this._chartPane.chartStore().timeScaleStore().offsetRightSpace() / this._chartPane.chartStore().timeScaleStore().dataSpace();

      var distance = difBarCount * this._chartPane.chartStore().timeScaleStore().dataSpace();

      this.scrollByDistance(distance, animationDuration);
    }
    /**
     * 滚动到指定的数据索引
     * @param dataIndex 数据索引
     * @param animationDuration 动画持续时间
     */

  }, {
    key: "scrollToDataIndex",
    value: function scrollToDataIndex(dataIndex, animationDuration) {
      if (!isNumber(dataIndex)) {
        logWarn('scrollToDataIndex', 'dataIndex', 'dataIndex must be a number!!!');
        return;
      }

      var distance = (this._chartPane.chartStore().dataList().length - 1 - dataIndex) * this._chartPane.chartStore().timeScaleStore().dataSpace();

      this.scrollByDistance(distance, animationDuration);
    }
    /**
     * 在某个坐标点缩放
     * @param scale 缩放比例
     * @param coordinate 坐标点
     * @param animationDuration 动画持续时间
     */

  }, {
    key: "zoomAtCoordinate",
    value: function zoomAtCoordinate(scale, coordinate, animationDuration) {
      var _this6 = this;

      if (!isNumber(scale)) {
        logWarn('zoomAtCoordinate', 'scale', 'scale must be a number!!!');
        return;
      }

      if (isNumber(animationDuration) && animationDuration > 0) {
        var dataSpace = this._chartPane.chartStore().timeScaleStore().dataSpace();

        var scaleDataSpace = dataSpace * scale;
        var difSpace = scaleDataSpace - dataSpace;
        var startTime = new Date().getTime();

        var animation = function animation() {
          var progress = (new Date().getTime() - startTime) / animationDuration;
          var finished = progress >= 1;
          var progressDataSpace = finished ? difSpace : difSpace * progress;

          _this6._chartPane.chartStore().timeScaleStore().zoom(progressDataSpace / dataSpace, coordinate);

          if (!finished) {
            requestAnimationFrame(animation);
          }
        };

        animation();
      } else {
        this._chartPane.chartStore().timeScaleStore().zoom(scale, coordinate);
      }
    }
    /**
     * 在某个数据索引缩放
     * @param scale 缩放比例
     * @param dataIndex 索引位置
     * @param animationDuration 动画持续时间
     */

  }, {
    key: "zoomAtDataIndex",
    value: function zoomAtDataIndex(scale, dataIndex, animationDuration) {
      if (!isNumber(scale)) {
        logWarn('zoomAtDataIndex', 'scale', 'scale must be a number!!!');
        return;
      }

      if (!isNumber(dataIndex)) {
        logWarn('zoomAtDataIndex', 'dataIndex', 'dataIndex must be a number!!!');
        return;
      }

      var x = this._chartPane.chartStore().timeScaleStore().dataIndexToCoordinate(dataIndex);

      this.zoomAtCoordinate(scale, {
        x: x
      }, animationDuration);
    }
    /**
     * 将值装换成像素
     * @param point 单个点或者点集合
     * @param finder 过滤条件
     */

  }, {
    key: "convertToPixel",
    value: function convertToPixel(point, finder) {
      return this._chartPane.convertToPixel(point, finder);
    }
    /**
     * 将像素转换成值
     * @param coordinate 单个坐标或者坐标集合
     * @param finder 过滤条件
     */

  }, {
    key: "convertFromPixel",
    value: function convertFromPixel(coordinate, finder) {
      return this._chartPane.convertFromPixel(coordinate, finder);
    }
    /**
     * 订阅图表动作
     * @param type 动作类型
     * @param callback 回调方法
     */

  }, {
    key: "subscribeAction",
    value: function subscribeAction(type, callback) {
      if (!this._chartPane.chartStore().actionStore().subscribe(type, callback)) {
        logWarn('subscribeAction', 'type', 'type does not exist!!!');
      }
    }
    /**
     * 取消订阅图表动作
     * @param type 动作类型
     * @param callback 回调方法
     */

  }, {
    key: "unsubscribeAction",
    value: function unsubscribeAction(type, callback) {
      if (!this._chartPane.chartStore().actionStore().unsubscribe(type, callback)) {
        logWarn('unsubscribeAction', 'type', 'type does not exist!!!');
      }
    }
    /**
     * 获取将图表装换成图片后的url
     * @param includeOverlay 是否包含覆盖层
     * @param type 图片类型
     * @param backgroundColor 背景色
     */

  }, {
    key: "getConvertPictureUrl",
    value: function getConvertPictureUrl(includeOverlay) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpeg';
      var backgroundColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFFFF';

      if (type !== 'png' && type !== 'jpeg' && type !== 'bmp') {
        logWarn('getConvertPictureUrl', 'type', 'type only supports jpeg, png and bmp!!!');
        return;
      }

      return this._chartPane.getConvertPictureUrl(includeOverlay, type, backgroundColor);
    }
    /**
     * 销毁
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._chartPane.destroy();
    }
  }]);

  return Chart;
}();

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var instances = {};
var chartBaseId = 1;
var CHART_NAME_PREFIX = 'k_line_chart_';
/**
 * 获取版本号
 * @returns {string}
 */

function version() {
  return '8.3.6';
}
/**
 * 初始化
 * @param ds
 * @param style
 * @returns {Chart}
 */


function init(ds) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logTag();
  var errorMessage = 'The chart cannot be initialized correctly. Please check the parameters. The chart container cannot be null and child elements need to be added!!!';
  var dom;

  if (!ds) {
    logError('', '', errorMessage);
    return null;
  }

  if (isString(ds)) {
    dom = document.getElementById(ds);
  } else {
    dom = ds;
  }

  if (!dom) {
    logError('', '', errorMessage);
    return null;
  }

  var chart = instances[dom.chartId || ''];

  if (chart) {
    logWarn('', '', 'The chart has been initialized on the dom！！！');
    return chart;
  }

  var id = "".concat(CHART_NAME_PREFIX).concat(chartBaseId++);
  chart = new Chart(dom, style);
  chart.id = id;
  dom.chartId = id;
  instances[id] = chart;
  return chart;
}
/**
 * 销毁
 * @param dcs
 */


function dispose(dcs) {
  if (dcs) {
    var id;

    if (isString(dcs)) {
      var dom = document.getElementById(dcs);
      id = dom && dom.chartId;
    } else if (dcs instanceof Chart) {
      id = dcs.id;
    } else {
      id = dcs && dcs.chartId;
    }

    if (id) {
      instances[id].destroy();
      delete instances[id];
    }
  }
}

var utils = {
  clone: clone,
  merge: merge,
  isString: isString,
  isNumber: isNumber,
  isValid: isValid,
  isObject: isObject,
  isArray: isArray,
  isFunction: isFunction,
  isBoolean: isBoolean,
  formatValue: formatValue,
  formatPrecision: formatPrecision,
  formatBigNumber: formatBigNumber
};

exports.dispose = dispose;
exports.extension = extension;
exports.init = init;
exports.utils = utils;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=klinecharts.simple.js.map
