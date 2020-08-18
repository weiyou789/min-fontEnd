import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { AuthModal } from '@/components'

import * as actions from '../../redux/testRedux'

import { Button } from 'antd';

@connect(state => state.test, dispatch => bindActionCreators(actions, dispatch))
class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: {
                title: '微信授权1',
                isOpened: false,
                content: '好享家申请获取用户微信权限',
                cancelText: '拒绝',
                confirmText: '允许',
                closeOnClickOverlay: false,
                openType: '',
                orderId: '111111'
            }
        }
    }

    onConfirm = (e) => {
        this.props.history.push({
            pathname:'/test2'
        })
    }


    onCancel = () => {
        this.setState({
            modal: {
                isOpened: false
            }
        })
    }

    // 这里要对
    render () {
        const { modal } = this.state
        return (
            <div className='main'>
                text
                <AuthModal
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                    {...modal}
                />
                <Button type="primary" onClick={() => this.setState({ modal: { ...modal, isOpened: true } })}>primary1111</Button>
                <Button className='add_btn' onClick={this.props.add}>+</Button>
                <Button className='dec_btn' onClick={this.props.minus}>-</Button>
                <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
                <div><span>{this.props.num}</span></div>
                <Button className='add_btn' onClick={this.onConfirm}>跳转</Button>
                <div onClick={this.onConfirm}>22233</div>
            </div>
        );
    }
}

export default Test
