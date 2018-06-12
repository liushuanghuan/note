//为true表示会对该项进行检查，将不符合条件的部分在生成文档中说明
"htmlCheckOptions": {
  //标签名 小写 
  "tagname-lowercase": true,
  //属性名称小写 
  //TODO false->true by pjl
  "attr-lowercase": true,
  //属性值使用双引号     
  "attr-value-double-quotes": true,
  //属性值不能重定义     
  "attr-no-duplication": true,
  //标签配对     
  "tag-pair": true,
  //标签自闭     
  //TODO false->true by pjl
  "tag-self-close": true,
  //id唯一 
  "id-unique": true,
  //src非空 
  "src-not-empty": true,
  //自定义规则 
  //检查IE 头部是否加入meta进行兼容 
  "IE-meta": true,
  //检测是否处理placeholder的兼容
  "placeholder": true,
  //<!DOCTYPE>检查 
  //TODO false->true by pjl
  "doctype-html5": true,

  //title必须     
  "title-require": false,
  //alt必须     
  "alt-require": false,
  //文件内部样式禁止     
  "style-disabled": false,
  //内联css机制     
  "inline-style-disabled": false,
  //内联js禁止     
  "inline-script-disabled": false,
  //属性特殊字符检查     
  "attr-unsafe-chars": false,
  //头部js文件检查 
  "head-script-disabled": false,
  //属性值不能为空     
  "attr-value-not-empty": false,
  //html标签在头部     
  "doctype-first": false

},

//英文原文文档 
//https://github.com/CSSLint/csslint/wiki/ 
"cssCheckOptions": {
  //重复属性检测 
  "duplicate-properties": true,
  //display与一些其他值不能同时使用   
  //如 inline 不能与height同时使用   block不能使用 vertical-align   table-*不能使用float 
  "display-property-grouping": true,
  //不允许使用重复的背景图片   如果是精灵图  背景图在一个公共的类里引用 其他类用于调整位置 
  "duplicate-background-images": true,
  //gradient 这种需要跨浏览器兼容的属性应该写在一起  避免漏改 
  "gradients": true,
  //rgba  hsl  hsla这种类型的颜色会提出警告 
  "fallback-colors": true,
  //不允许导入css  @import url(more.css); 
  "import": true,
  //如果你把 margin的top bottom left right都定义一遍就警告你！╭(╯^╰)╮   如果只定义了其中1~2个不会警告 
  //正确使用  margin:20px 10px 5px 11px; 
  "shorthand": true,
  //不允许 0px  0% 0em 
  "zero-units": true,
  //自定义的规则 
  //opacity属性需要做兼容性处理 
  //TODO false->true by pjl
  "opacity": true,
  //不能只有前缀属性，没有通用属性  -moz-border-radius  并且通用属性必须在最后 
  //TODO false->true by pjl
  "vendor-prefix": true,

  //是否检测 !important 
  "important": false,
  //是否允许 .bar.foo 这种两个连在一起的选择器 
  "adjoining-classes": false,
  //未知属性检测 
  "known-properties": false,
  //border-box 和 box-sizing检测 
  "box-sizing": false,
  //width、height 与 border  padding值一起使用时 发出警告 
  "box-model": false,
  //font-size的声明不应该超过10条   
  "font-sizes": false,
  //@font-face  这种外部字体规则不要引入太多 
  "font-faces": false,
  //float条数超过10条时，警告 
  "floats": false,
  //以*开头的属性检测    如  *width  检测到会报错 
  "star-property-hack": false,
  //以_开头的属性检测 
  "underscore-property-hack": false,
  //若有  outline:0 或 outline:none的情况并且选择器没有:focus伪类  警告    
  //或者选择器有:focus伪类 但是只有outline一条属性 警告 
  "outline-none": false,
  //id选择器不要放在头部  例如  #head a{}这种  应该单独使用  因为css解析从右向左解析，这样反而降低了效率 
  "ids": false,
  //h1-h6应该在头部定义 而不能再子类中再次定义 例如.box h3 {font-weight: normal;}是不行的 
  //.item:hover h3 { font-weight: bold; } 也是不行的    正确的是  h3{font-weight:normal} 
  "qualified-headings": false,
  //text-indent不能使用负值  除非同属性direction:ltr一起出现 
  "text-indent": false,
  //h1-h6 只应该被定义一次   伪类不算 
  "unique-headings": false,
  //若*选择器 是key选择器的话(最右边那个) 警告 
  "universal-selector": false,
  //类似于[type=text]的选择器作为key选择器的时候  浏览器会先把所有的节点匹配  然后去检查他们的type属性会降低效率 
  "unqualified-attributes": false
},

"jsCheckOptions": {
  //因为有ES6语法 ，需要先用babel进行转换才能正确识别，否则会报错
  parser: "babel-eslint",
  rules: {
    /*
     *以下的 off||0代表关闭
     *warm||1 代表抛出Error，不会使编译退出
     *error||2代表抛出错误，会导致编译退出
     *其中增加了process.env.NODE_ENV变量
     *process.env.NODE_ENV==='publish'表示发布环境
     *process.env.NODE_ENV==='dev'表示开发调试环境，可以通过这个来配置不同环境下的检查项
     */
    //详细文档       http://eslint.cn/docs/rules
    "quotes": [0, "double"], //引号类型  强制 "" '' 
    "semi": [1, "always"], //语句强制分号结尾
    "no-console": process.env.NODE_ENV === 'publish' ? 2 : 0, //不允许console  建议调试环境关闭 
    //TODO 不清楚什么意思 by pjl
    "no-alert": 1, //禁止使用alert confirm prompt
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    //TODO 2->0 by pjl
    "no-constant-condition": 1, //禁止在条件中使用常量表达式 if(true) if(1)
    "no-debugger": process.env.NODE_ENV === 'publish' ? 2 : 0, //禁止使用debugger  建议调试环境关闭
    "no-div-regex": 1, //不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, //函数参数不能重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-empty": 0, //块语句中的内容不能为空
    "no-eq-null": 0, //禁止对null使用==或!=运算符
    //TODO 0修改为1 by pjl
    "no-eval": 1, //禁止使用eval
    "no-ex-assign": 1, //禁止给catch语句中的异常参数赋值
    "no-extend-native": 0, //禁止扩展native对象   禁止修改prototype
    "no-extra-parens": 0, //禁止非必要的括号   有时候多余的括号能使逻辑更清晰
    "no-extra-semi": 2, //禁止多余的冒号
    "no-floating-decimal": 2, //禁止省略浮点数中的0 .5 3.
    "no-func-assign": 2, //禁止重复的函数声明
    "no-inline-comments": 0, //禁止行内备注
    "no-inner-declarations": [0, "functions"], //禁止在块语句中使用声明（变量或函数）
    "no-multiple-empty-lines": [1, {
      "max": 3
    }], //空行最多不能超过3行
    "arrow-parens": 0, //箭头函数用小括号括起来
    "arrow-spacing": 0, //=>的前/后括号
    //TODO 1修改为0 by pjl
    "camelcase": 0, //强制驼峰法命名
    "comma-spacing": 0, //逗号前后的空格
    "comma-style": [0, "last"], //逗号风格，换行时在行首还是行尾
    "consistent-return": 0, //return 后面是否允许省略
    "consistent-this": [0, "that"], //this别名
    "default-case": 0, //switch语句最后必须有default
    "dot-location": 0, //对象访问符的位置，换行的时候在行首还是行尾
    "dot-notation": [0, {
      "allowKeywords": true
    }], //避免不必要的方括号
    "eqeqeq": 0, //必须使用全等
    "guard-for-in": 0, //for in循环要用if语句过滤
    "id-length": 0, //变量名长度
    "init-declarations": 0, //声明时必须赋初值
    "new-cap": 0, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用        由于组件的使用都是大写  暂时关闭
    "new-parens": 2, //new时必须加小括号
    "one-var": 0, //连续声明    最好不要开启，要不满屏的绿色 
    "operator-linebreak": [0, "after"], //换行时运算符在行尾还是行首
    "padded-blocks": 0, //块语句内行首行尾是否要空行
    //TODO 2修改为1
    "quote-props": [1, "always"], //对象字面量中的属性名是否强制双引号     consistent-as-needed：如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
    "radix": 0, //parseInt必须指定第二个参数
    "id-match": 0, //命名检测
    "semi-spacing": [0, {
      "before": false,
      "after": true
    }], //分号前后空格
    "sort-vars": 0, //变量声明时排序
    "space-after-keywords": [0, "always"], //关键字后面是否要空一格
    "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
    "valid-typeof": 2, //必须使用合法的typeof的值
    "vars-on-top": 0 //var必须放在作用域顶部
    //以下规则与 Js 代码中可能的语法错误或逻辑错误有关
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 将 var 定义的变量视为块作用域，禁止在块外使用
    'block-scoped-var': 'error',
    // switch 的 case 内必须有 break, return 或 throw
    // by pjl 之前遇到过未写break导致下面那个case也执行了
    'no-fallthrough': 'error',

    // @变量申明 以下规则与变量申明有关
    // 禁止重复定义变量
    // TODO 我们的代码中存在重复定义变量的现象，且之前遇到过因重复定义变量导致的bug
    'no-redeclare': 'error',
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': [
      'error', {
        typeof: false
      }
    ],

    // ECMAScript 6
    // 这些规则与 ES6有关 
    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止重复定义类
    'no-dupe-class-members': 'error',
  }
};