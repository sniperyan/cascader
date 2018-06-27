/* eslint-disable no-console */
import 'wym-cascader/assets/index.less';
import Cascader from 'wym-cascader';
import React from 'react';
import ReactDOM from 'react-dom';

const addressOptions = [{
  name: '福建',
  code: 'fj',
  nodes: [{
    name: '福州',
    code: 'fuzhou',
    nodes: [{
      name: '马尾',
      code: 'mawei',
    }],
  }, {
    name: '泉州',
    code: 'quanzhou',
  }],
}, {
  name: '浙江',
  code: 'zj',
  nodes: [{
    name: '杭州',
    code: 'hangzhou',
    nodes: [{
      name: '余杭',
      code: 'yuhang',
    }],
  }],
}, {
  name: '北京',
  code: 'bj',
  nodes: [{
    name: '朝阳区',
    code: 'chaoyang',
  }, {
    name: '海淀区',
    code: 'haidian',
    disabled: true,
  }],
}];

class Demo extends React.Component {
  state = {
    inputValue: '',
  }

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions.map(o => o.name).join(', '),
    });
  }

  render() {
    return (
      <Cascader
        options={addressOptions}
        onChange={this.onChange}
        filedNames={{ label: 'name', value: 'code', children: 'nodes' }}
      >
        <input
          placeholder="please select address"
          value={this.state.inputValue}
        />
      </Cascader>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
