import React from 'react';
import _ from 'lodash';

export class quickSort extends React.Component{
    constructor(props){
        super(props);
        let arr = this.randomArr(20);
        this.state = { 
            i: -1, 
            j: -1,
            guard: -1, 
            start: 0,
            end: 20 - 1,
            arr: arr
        };
        this.frames = [];
        this.framesIndex = 0;
        this.height = this.props.height || 40;
        this.width = this.props.width || 40;
        this.marginLeft = this.props.marginLeft || 0;
        this.marginRight = this.props.marginRight || 4;
        // this.arr = this.randomArr(10);
    }

    randomArr(size) {
        let arr = [];
        for(let i = 0; i < size; i++ ) {
            arr[i] = _.random(0, 1e2);
        }
        return arr;
    }

    swapClick(i, j){
       console.log('swap ==>', i, j);
       let temp = this.state.arr[i];
       this.state.arr[i] = this.state.arr[j];
       this.state.arr[j] = temp;
       this.setState({arr: this.state.arr})
    }

    itemBoxStyle(index, start, end) {
        // console.log('itemBoxStyle', index, start, end);
        return {
            'width'       : this.width + 'px',
            'height'      : this.height+ 'px',
            'marginLeft' : this.marginLeft + 'px',
            'marginRight': this.marginRight + 'px',
            'border':  index >= start && index <= end ? '1px solid #45A952' : '1px solid #aaa'
        }
    }

    removeIStyle(index) {
        if(index < 0) {
            return {
                display: 'none'
            }
        } else if(index >= this.state.arr.length) {
            index = this.state.arr.length - 1;
        }
        let mid = this.width / 2 - 4;
        return {
            display: 'block',
            left: index * (this.marginLeft + this.marginRight + this.width) + mid + 'px'
        }
    }

    boxRange(index, start, end) {
        if(index >= start && index < end) {
            return {
                border: '1px solid #45A952'
            }
        }
    }

    handelChangeI(event){
        console.log(event.target);
        this.setState({i:event.target.value | 0});
    }

    handelChangeJ(event){
        console.log(event.target);
        this.setState({j:event.target.value | 0});
    }

    backFrame() {
        if (this.framesIndex - 1 >= 0) {
            this.framesIndex--;
            this.frames[this.framesIndex]();
        } else {
            this.framesIndex = 0; 
            this.pauseAnimation();
        }
    }

    forwardFrame() {
        if (this.framesIndex + 1 < this.frames.length - 1) {
            this.framesIndex++;
            this.frames[this.framesIndex]();
        } else {
            this.framesIndex = this.frames.length - 1; 
            this.pauseAnimation();
        }
    }

    runAnimation() {
         this.timer = setInterval(() => {
            this.forwardFrame();
        }, 500);
    }

    pauseAnimation() {
        clearInterval(this.timer);
    }

    replayAnimation() {
        this.framesIndex = 0;
        this.runAnimation();
    }

    componentDidMount(){
        console.log('componentWillMount ==>' ,this.props, this.state);
        this.preprocess(); // 预执行
    }

    preprocess() {
        let arr = this.state.arr.slice();
        let tail = arr.length - 1;
        let head = 0;
        this.quickSort(arr, head, tail);
    }

    setPosition(i, j, guard) {
        this.setState({i: i, j: j, guard: guard});
    }

    quickSort(arr, head, tail) {
        let i = head, j = -1;
        let guard = arr[tail];
        this.frames.push(this.setState.bind(this, {start: head, end: tail})); // 标记 范围
        this.frames.push(this.setPosition.bind(this, i, j, tail));
        if (head === tail) { 
            return; 
        }
        for (; i < tail; i++) {
            let p1 = arr[i];
            this.frames.push(this.setState.bind(this, {i: i}));
            if(j < 0 && p1 > guard) {	
                j = i;
            } else if(j >= 0 && p1 <= guard) {
                this.swap(arr, i, j);
                j++;
            }
            this.frames.push(this.setState.bind(this, {j: j}));
        }
    
        if(j >= 0) {
            this.swap(arr, j, tail);
            this.quickSort(arr, head, j);
            this.quickSort(arr, j+1, tail);
        } else {
            this.quickSort(arr, head, tail - 1);
        }
    }
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        this.frames.push(this.setState.bind(this, {arr:  _.cloneDeep(arr)}));
    }

    render(){
        console.log('render ==>', this.state.arr);
        let i = this.state.i;
        let j = this.state.j;
        let guard = this.state.guard;
        let start = this.state.start;
        let end   = this.state.end;
        const options = this.state.arr.map((number, index) => <div className="quickSort-item" style={this.itemBoxStyle(index, start, end)} key={index}><span>{number}</span></div>);
        return (
            <div>
                <div className="quickSort-box">
                    {options}
                    <div className="quickSort-arrow-bottom" style={this.removeIStyle(i)}></div>
                    <div className="quickSort-arrow-top" style={this.removeIStyle(j)} ></div>
                    <div className="quickSort-arrow-tail" style={this.removeIStyle(guard)} ></div>
                </div> 

                <div className="margin-top-30px">
                    <span>i:</span>  <input type="text" onChange={this.handelChangeI.bind(this)} value={i}/>
                    <span>j:</span>  <input type="text" onChange={this.handelChangeJ.bind(this)} value={j}/>
                    <button onClick={this.swapClick.bind(this, i, j)}>交换</button>
                </div>

                <div className="margin-top-30px">
                    <button onClick={this.backFrame.bind(this)}>上一帧</button>
                    <button onClick={this.forwardFrame.bind(this)}>下一帧</button>
                    <button onClick={this.runAnimation.bind(this)}>开始动画</button>
                    <button onClick={this.pauseAnimation.bind(this)}>暂停动画</button>
                    <button onClick={this.replayAnimation.bind(this)}>回播动画</button>
                </div>
            </div>
          )
    }
}