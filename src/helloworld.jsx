import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/my.css';
class Helloworld extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                    firstName: '788',
                    lastName: '877'
            }
        }
        this.user = {
            firstName: '788',
            lastName: '877'
        }
    }

    formatName() {
        return this.state.user.firstName + ' ' + this.state.user.lastName;
        // return this.user.firstName + ' ' + this.user.lastName;
    }

    render(){
        return <h1> hello, {this.formatName()}</h1>;
    }
}

function formatDate(date){
    return (<h1>{new Date(date).toLocaleTimeString()}</h1>);
}

class Tick extends React.Component {
    constructor(props){
        super(props);
    } 
    render(){
       return  <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    }
}

class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h1>{this.props.welcomeSpeed}</h1>
    }
}

class Welcome3Combo extends React.Component {
    constructor(props){
        super(props);
    }
   render(){
        return ( 
            <div>
                <Welcome welcomeSpeed="are you mifan!"/>
                <Welcome welcomeSpeed="do you like indian mifan!"/>
                <Welcome welcomeSpeed="are you ok!"/>
            </div>
            )
    }
}
class Avatar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return <img className="Avatar"
            src={this.props.user.avatarUrl}
            alt={this.props.user.name}
        />
    }
}

class UserInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="UserInfo">
                <Avatar user={this.props.user} />
                <div className="UserInfo-name">
                    {this.props.user.name}
                </div>
            </div>
        )
    }
}

class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return <div className="Comment">
            <UserInfo user={this.props.author} />
            <div className="Comment-content">
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        </div>
    }
}

// setInterval(()=>{
//     ReactDOM.render(<Tick/>, document.getElementById("root"));
// }, 1000)
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author:{
                name: 'musix',
                avatarUrl: 'https://avatars1.githubusercontent.com/u/13427607?s=88&v=4'
            },
            text: '123... 123... 呀哈哈... 呀哈哈...',
            date: Date.now()
        }
    }
    render(){
        return <Comment 
        date={this.state.date} 
        text={this.state.text}
        author={this.state.author}/>;
    }
}

function  FormattedDate(props) {
    return <h2>{props.name} ===> It is {props.date.toLocaleTimeString()}.</h2>;
}
//  时钟
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log('delay ==>', this.props.delay, this);
        setTimeout(()=>{
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        },this.props.delay|0);
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <FormattedDate name={this.props.name} date={this.state.date}/>
            </div>
        )
    }
}
// Process  进度条游戏
class Process extends React.Component {
    constructor(props){
        super(props);
        this.state = { width: 0, otherWidth: 100};
        this.dir = 0;
        this.base = 1;
    }

    componentDidMount() {
        setTimeout(()=>{
            this.timerID = setInterval(
                () => this.tick(),
                50
            );
        },this.props.delay|0);
    }

    componentWillMount() {
        console.log('componentWillMount');
        clearInterval(this.timerID);
    }

    tick() {
        if(this.state.width >= 100) {
            this.dir = 1;
            this.base = -1;
        }else if(this.state.width <= 0){
            this.dir = 0;
            this.base = 1;
        }
        let _width = this.state.width +  this.base;
        let _otherWidth = this.state.otherWidth - this.base;
        this.setState({
            width: _width,
            otherWidth: _otherWidth
        });
    }

    render() {
        let style_1 = {
            background: this.props.color_1,
            width: this.state.width+'%',
            height: '5px'
        };
        let style_2 = {
            background: this.props.color_2,
            width: this.state.otherWidth+'%',
            height: '5px'
        };
        return (
            <div className="process-box">
                {/* <div>123123</div> */}
                <div style={style_1}></div>
                <div style={style_2}></div>
            </div>
        )
    }
}

/**
 *  测试结果
 *  1、初始化阶段 
 * [Super] ==> componentWillMount
 * [Super] ==> render
 * [Sub] ==> componentWillMount
 * [Sub] ==> render
 * [Sub] ==> componentDidMount
 * [Super] ==> componentDidMount
 * 
 * 2、双向绑定 update 
 * [Super] ==> componentWillUpdate
 * [Super] ==> render
 * [Sub] ==> componentWillReceiveProps
 * [Sub] ==> componentWillUpdate
 * [Sub] ==> render
 * [Sub] ==> componentDidUpdate
 * [Super] ==> componentDidUpdate
 * 
 */


// 测试 react 钩子函数
class Sub extends React.Component {
    constructor(props){
        super(props);
        this.name = 'Sub';
    }

    componentWillMount() {
        console.log('[%s] ==> %s', this.name, 'componentWillMount');
    }

    render() {
        console.log('[%s] ==> %s', this.name, 'render');
        return (
        <div>
            <span>{this.props.name}</span>
        </div>
        )
    }

    componentDidMount() {
        console.log('[%s] ==> %s', this.name, 'componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('[%s] ==> %s', this.name, 'componentWillReceiveProps');
    }

    componentWillUpdate(){
        console.log('[%s] ==> %s', this.name, 'componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('[%s] ==> %s', this.name, 'componentDidUpdate');
    }
}


class Super extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'whatever'
        }
        this.name = 'Super';
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        console.log('[%s] ==> %s', this.name, 'componentWillMount');
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }

    render(){
        console.log('[%s] ==> %s', this.name, 'render');
        return (
        <div>
            <Sub name={this.state.name}/>
            <input type="text" placeholder="input value" value={this.state.name} onChange={this.handleChange}/>
        </div>
        )
    }

    componentDidMount() {
        console.log('[%s] ==> %s', this.name, 'componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('[%s] ==> %s', this.name, 'componentWillReceiveProps');
    }

    componentWillUpdate(){
        console.log('[%s] ==> %s', this.name, 'componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('[%s] ==> %s', this.name, 'componentDidUpdate');
    }
}


// 事件处理

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}


// 条件 jsx if

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting (props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
         Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

//  条件 &&
const messages = ['React', 'Re: React', 'Re: Rs;;;; react-native'];

function  Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Jello!</h1>
            {unreadMessages.length > 0 && 
                <h2>
                    You have {unreadMessages.length} unread 信息。
                </h2>
            }
        </div>
    );
}

// 条件渲染 阻止组件渲染


function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className = "warning">
         Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

// 列表

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
     <li key={number.toString()}>
        {number}
    </li>
    );
    return <ul>{listItems}</ul>
}

const numbers = [1,2,3,4,5,6];

// 

function Blog(props) {
    const sidebar = (
      <ul>
          {props.posts.map((post) => 
              <li key={post.id}>
                {post.title}
              </li>
          )}
      </ul>
    );

    const content = props.posts.map((post) => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'daksljldkajad'},
    {id: 2, title: 'SaWa DiKa', content: 'daksljldkajad'}
]


// form 
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'ni speak your mother fucker! your know?',
        };
        this.key = 'unknow';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    selectChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        alert('An essay was submited: '+ this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>

                <label>Pick your favorite 77 88 99 英语真的好烦！！！！！
                    <select value={this.state.selectedValue} onChange={this.selectChange}>
                      { 
                        ['unknow','yersterday','monthday','周六','好日子'].map((item,index)=>{
                           return ( <option key={'#'+index} value={item}>{item}</option> )
                        })
                      }
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value, name);

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label htmlFor="">
                isGoing:
                <input 
                    name="isGoing" 
                    type="checkbox" 
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}/></label>
                <br/>
                <label htmlFor="">
                numberOfGuests:
                <input 
                    name="numberOfGuests" 
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}/></label>
            </form>
        )
    }
}


// 状态提升
//烧开水
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>水开了....</p>;
    }
    return <p>水没开~~~</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: '12'};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
          <fieldset>
            <legend>输入一个摄氏温度</legend>
            <input type="text"
              value={temperature}
              onChange={this.handleChange} />
    
            <BoilingVerdict
              celsius={parseFloat(temperature)} />
    
          </fieldset>
        );
    }
}

// 状态提升

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 /  5) +32;
}


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>{scaleNames[scale]} : 输入温度数值</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

class Calculator1 extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '',scale: 'c'};
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
              <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />
      
              <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />
      
              <BoilingVerdict
                celsius={parseFloat(celsius)} />
      
            </div>
          );
    }
}

ReactDOM.render(
    <div>
    {/* 1. */}
    <div>
         <Clock delay="1000" name="No.1"/>
         <Clock delay="2000" name="No.2"/>
         <Clock delay="5000" name="No.3"/>
    </div>
    {/* 2. */}
    <div>
        <Process color_1='blue' color_2="yellow" delay="0"/>
        <Process color_1='orange' color_2="steelblue" delay="400"/>
        <Process color_1='cadetblue' color_2="aquamarine" delay="800"/>
        <Process color_1='violet' color_2="bisque" delay="1200"/>
    </div>
    {/* 3. */}
    <Super/>
    {/* 4. */}
    <Toggle/>
    {/* 5. */}
    <LoginControl />
    {/* 6. */}
    <Mailbox unreadMessages={messages}/>
    {/* 7. */}
    <Page/>
     {/* 8. */}
    <NumberList numbers={numbers} />
     {/* 9. */}
    <Blog posts={posts} />
     {/* 10. */}
     <EssayForm />
     {/* 11. */}
     <Reservation/>
     {/* 12. */}
     <Calculator/>
     {/* 13. */}
     <Calculator1/>
    </div>,
    document.getElementById("root"));


// ReactDOM.render(
//     <div>
//         <Clock delay="1000" name="No.1"/>
//         <Clock delay="2000" name="No.2"/>
//         <Clock delay="5000" name="No.3"/>
//     </div>, 
//     document.getElementById("root"));
