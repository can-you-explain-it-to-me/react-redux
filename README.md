React Redux
=========================

`src目录结构`

```shell
src
├── alternate-renderers.js
├── index.js
├── components
│   ├── Context.js                              # 创建全局唯一Context对象
│   ├── Provider.js                             # 创建Provider组件
│   └── connectAdvanced.js
├── connect
│   ├── connect.js
│   ├── mapDispatchToProps.js
│   ├── mapStateToProps.js
│   ├── mergeProps.js
│   ├── selectorFactory.js
│   ├── verifySubselectors.js
│   └── wrapMapToProps.js
└── utils
    ├── Subscription.js                         # 封装了订阅器，将store和组件连接起来，用于通知组件更新
    ├── batch.js                                # 一个简单的调用callback的函数
    ├── isPlainObject.js                        # 普通对象检测函数
    ├── reactBatchedUpdates.js                  # 导出react-dom中的unstable_batchedUpdates方法
    ├── reactBatchedUpdates.native.js           # 导出react-native中的unstable_batchedUpdates方法
    ├── shallowEqual.js                         # 对象A、B浅比较函数
    ├── verifyPlainObject.js                    # 检测函数返回的结果是否是普通对象，否则在控制台打印错误提示
    ├── warning.js                              # 封装报错和错误打印函数warning
    └── wrapActionCreators.js
```