import React, { Component, useState } from 'react';

import { Button, Card, Divider } from 'antd';
import { StillnessProvider } from 'react-stillness-component';

import { Consumer } from '../module/StillnessContext';
import { Conditional } from '../module/Conditional';
import { Count } from './count';
import { ScrollDiv } from './scrollDiv';
import styles from './index.less';

export default class IndexPage extends Component {
  private outSideRef: any;
  private insideRef: any;

  state = {
    show: true,
  };

  constructor(props: any) {
    super(props);

    this.outSideRef = React.createRef();
    this.insideRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.outSideRef, this.insideRef);
  }

  render() {
    const { show } = this.state;

    return (
      <Consumer>
        {(context) => {
          return (
            <div
              id="second-page"
              onClick={() => {
                console.log('冒泡成功');
              }}
              ref={this.outSideRef}
            >
              <h1 className={styles.title}>Page index</h1>

              <Button
                onClick={() => {
                  context.actions.drop('count1');
                }}
              >
                清除count缓存
              </Button>

              <Divider>测试内容</Divider>
              <Button
                onClick={() => {
                  this.setState({
                    show: !show,
                  });
                }}
              >
                切换显示
              </Button>
              <Conditional active={!show}>
                <div
                  onClick={() => {
                    console.log('inside click');
                  }}
                  ref={this.insideRef}
                >
                  <Count />
                  <ScrollDiv />
                </div>
              </Conditional>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
