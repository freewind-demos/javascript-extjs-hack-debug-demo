JavaScript ExtJS Hack Debug Demo
=====================

如何在console里hack及debug Extjs application

```
open index.html
```

打开浏览器console，输入：
1. `hello.app._mainView.getViewModel().setData({name: 'aaa', loremIpsum: 'bbb'})`，将会看到界面数据变化
2. `hello.app._mainView.getController().onConfirm('aaa')`，将会看到弹出alert