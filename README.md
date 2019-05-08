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
    ├── Subscription.js
    ├── batch.js
    ├── isPlainObject.js
    ├── reactBatchedUpdates.js
    ├── reactBatchedUpdates.native.js
    ├── shallowEqual.js
    ├── verifyPlainObject.js
    ├── warning.js
    └── wrapActionCreators.js
```