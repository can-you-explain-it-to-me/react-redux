import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactReduxContext } from './Context'
import Subscription from '../utils/Subscription'

class Provider extends Component {
  constructor(props) {
    super(props)

    const { store } = props

    this.notifySubscribers = this.notifySubscribers.bind(this)
    /* 结合store，生成订阅器实例 */
    const subscription = new Subscription(store)
    /* store变化时监听，通知调用者 */
    subscription.onStateChange = this.notifySubscribers

    /* 将store和订阅器实例存储在state对象中，方便传递给Context对象 */
    this.state = {
      store,
      subscription
    }

    /* 保存state改变前状态到组件实例属性previousState上 */
    this.previousState = store.getState()
  }

  componentDidMount() {
    /* 记录组件挂载状态：已挂载 、未挂载 */
    this._isMounted = true

    /*  */
    this.state.subscription.trySubscribe()

    if (this.previousState !== this.props.store.getState()) {
      this.state.subscription.notifyNestedSubs()
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe()

    /* 组件卸载时，手动取消订阅和组件状态标记 */
    this.state.subscription.tryUnsubscribe()

    this._isMounted = false
  }

  componentDidUpdate(prevProps) {
    /* store对象是否发生变化，若变化，则使用新的store对象生成新的订阅器，更新state对象 */
    if (this.props.store !== prevProps.store) {
      this.state.subscription.tryUnsubscribe()
      const subscription = new Subscription(this.props.store)
      subscription.onStateChange = this.notifySubscribers
      this.setState({ store: this.props.store, subscription })
    }
  }

  notifySubscribers() {
    this.state.subscription.notifyNestedSubs()
  }

  render() {
    /* 允许自建Contenxt对象传入，且优先级高于react-redux中创建的Context对象 */
    const Context = this.props.context || ReactReduxContext

    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  store: PropTypes.shape({
    /* 和redux的store的API保持了一致 */
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }),
  context: PropTypes.object,
  children: PropTypes.any
}

export default Provider
