import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { AuthModal } from '@/components'
import './index.scss'

import * as actions from '../../redux/testRedux'

import { Button,Layout } from 'antd'

const { Header, Footer, Content } = Layout

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
            pathname:'/react/test2'
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
        return (
            <div className='main'>
                <Layout>
                    <Header>Header</Header>
                    <Content>我是react项目<Button className='add_btn' onClick={this.onConfirm}>跳转</Button></Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Test
