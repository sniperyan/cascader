/* eslint-disable no-console */
import 'wym-cascader/assets/index.less';
import Cascader from 'wym-cascader';
import React from 'react';
import ReactDOM from 'react-dom';



class Demo extends React.Component {
  state = {
    inputValue: '',
  }

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions.label,
    });
  }
  handleClick = () => {
    this.refs.cascader.handleMenuSelect({label:`马尾￥${this.refs.input.value}`,value:this.refs.input.value},4,{type:'wym'});
  }

  render() {
    const addressOptions = [{
      label: '福建',
      value: 'fj',
      children: [{
        label: '福州',
        value: 'fuzhou',
        children: [{
          label: '马尾',
          value: 'mawei',
          children:[{
            custom:true,   // 传入custom字段可以自定义
            label:'xoxoxoo',
            value:'11111',
            jsx:<div key="jsjjs">   
              <p>总积分：500</p>
              <input ref="input" placeholder="请确认" style={{width:'50px'}}/>
              <input  type="button" value="确认" onClick={this.handleClick}/>
            </div>
          }]
        }],
      }, {
        label: '泉州',
        value: 'quanzhou',
      }],
    }, {
      label: '浙江',
      value: 'zj',
      children: [{
        label: '杭州',
        value: 'hangzhou',
        children: [{
          label: '余杭',
          value: 'yuhang',
        }],
      }],
    }, {
      label: '北京',
      value: 'bj',
      children: [{
        label: '朝阳区',
        value: 'chaoyang',
      }, {
        label: '海淀区',
        value: 'haidian',
      }],
    }];
    return (
      <Cascader ref='cascader' options={addressOptions} onChange={this.onChange} transitionName="slide-up">
        <input value={this.state.inputValue} readOnly />
      </Cascader>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
