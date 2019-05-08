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
    ├── isPlainObject.js
    ├── reactBatchedUpdates.js
    ├── reactBatchedUpdates.native.js
    ├── shallowEqual.js
    ├── verifyPlainObject.js
    ├── warning.js
    └── wrapActionCreators.js
```