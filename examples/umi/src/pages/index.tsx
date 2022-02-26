import React, { Component, useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { Offscreen } from 'react-stillness-component';

import { Consumer } from '../module/StillnessContext';
import { StillnessScope, WithStillness } from '../module';
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
      <StillnessScope>
        <Consumer>
          {(context) => {
            return (
              <div
                id="homePage"
                onClick={() => {
                  console.log('冒泡成功');
                }}
                ref={this.outSideRef}
              >
                <h1 className={styles.title}>Page index</h1>
                <Offscreen>sdsd</Offscreen>
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
                {show && (
                  <WithStillness id={'count1'}>
                    <div
                      onClick={() => {
                        console.log('inside click');
                      }}
                      ref={this.insideRef}
                    >
                      <Count />
                      <ScrollDiv />
                    </div>
                  </WithStillness>
                )}
              </div>
            );
          }}
        </Consumer>
      </StillnessScope>
    );
  }
}
