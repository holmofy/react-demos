import React from 'react'

export default class TimerClock extends React.Component{
	constructor(props) {
    	super(props);
 		this.state = {
 			date: new Date(),
 			running: true
 		};
 	}
 	// 在组件挂载到DOM树时,开启定时器
	componentDidMount() {
		this.start();
	}
	// 在组件从DOM树卸载时,关闭定时器
	componentWillUnmount() {
		this.stop();
	}
	toggle() {
		if(this.state.running) {
			this.stop();
		} else {
			this.start();
		}
	}
	start() {
		this.timerID = setInterval(() => this.tick(), 1000);
		this.div.title = '点击暂停';
		this.setState({
			running: true
		});
	}
	stop() {
    	clearInterval(this.timerID);
    	this.div.title = '点击继续';
    	this.setState({
			running: false
		});
	}
	// 每秒重新设置组件状态
	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div onClick={this.toggle} ref={div => this.div=div}>
				<span>当前时间为:</span>
				<span>{this.state.date.toLocaleTimeString()}</span>
			</div>
		);
	}
}