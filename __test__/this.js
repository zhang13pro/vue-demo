function foo() {
  console.log(this.bar);
}

var bar = "global";

// 这才对嘛 《你不知道的JavaScript》下卷中 P45 输出“global”是什么鬼
foo(); // undefined
