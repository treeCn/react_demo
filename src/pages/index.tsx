// import React from 'react';
import { React, BaseComponent } from '@/base';
import { connect } from 'dva';
import router from 'umi/router';

import { IModelGlobal } from '@/types';

import styles from './index.css';

const mapStateToProps = ({ app }: IModelGlobal) => {
  return { app };
};

type ReduxProps = ReturnType<typeof mapStateToProps>;

class Home extends BaseComponent<ReduxProps> {
  componentDidMount() {
    this.props.app;
  }

  onCount = () => {
    const { a } = this.props.app;
    this.props.dispatch({
      type: 'app/updateState',
      payload: { a: a + 1 },
    });
  };

  onMy = () => {
    router.push('/my');
  };

  render() {
    const { a } = this.props.app;
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/pages/index.js</code> and save to reload.
          </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          </li>
          <div onClick={this.onCount}>test {a}</div>
          <div onClick={this.onMy}>Goto My</div>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
