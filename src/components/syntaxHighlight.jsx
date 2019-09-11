import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { 
    a11yDark,
    a11yLight,
    agate,
    anOldHope,
    androidstudio,
    arduinoLight,
    arta,
    ascetic,
    atelierCaveDark,
    atelierCaveLight,
    atelierDuneDark,
    atelierDuneLight,
    atelierEstuaryDark,
    atelierEstuaryLight,
    atelierForestDark,
    atelierForestLight,
    atelierHeathDark,
    atelierHeathLight,
    atelierLakesideDark,
    atelierLakesideLight,
    atelierPlateauDark,
    atelierPlateauLight,
    atelierSavannaDark,
    atelierSavannaLight,
    atelierSeasideDark,
    atelierSeasideLight,
    atelierSulphurpoolDark,
    atelierSulphurpoolLight,
    atomOneDarkReasonable,
    atomOneDark,
    atomOneLight,
    brownPaper,
    codepenEmbed,
    colorBrewer,
    darcula,
    dark,
    darkula,
    defaultStyle,
    docco,
    dracula,
    far,
    foundation,
    githubGist,
    github,
    gml,
    googlecode,
    grayscale,
    gruvboxDark,
    gruvboxLight,
    hopscotch,
    hybrid,
    idea,
    irBlack,
    isblEditorDark,
    isblEditorLight,
    kimbieDark,
    kimbieLight,
    lightfair,
    magula,
    monoBlue,
    monokaiSublime,
    monokai,
    nord,
    obsidian,
    ocean,
    paraisoDark,
    paraisoLight,
    pojoaque,
    purebasic,
    qtcreatorDark,
    qtcreatorLight,
    railscasts,
    rainbow,
    routeros,
    schoolBook,
    shadesOfPurple,
    solarizedDark,
    solarizedLight,
    sunburst,
    tomorrowNightBlue,
    tomorrowNightBright,
    tomorrowNightEighties,
    tomorrowNight,
    tomorrow,
    vs,
    vs2015,
    xcode,
    xt256,
    zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';
const toCamelCaseVar = (variable) => 
    variable.replace(/(\_|\-)+[a-zA-Z]/g,
    (str,index) => index ? str.substr(-1).toUpperCase() : str)

const hlList = [
    {mode: a11yDark, name: "a11y-dark" },
    {mode: a11yLight, name: "a11y-light" },
    {mode: agate, name: "agate" },
    {mode: anOldHope, name: "an-old-hope" },
    {mode: androidstudio, name: "androidstudio" },
    {mode: arduinoLight, name: "arduino-light" },
    {mode: arta, name: "arta" },
    {mode: ascetic, name: "ascetic" },
    {mode: atelierCaveDark, name: "atelier-cave-dark" },
    {mode: atelierCaveLight, name: "atelier-cave-light" },
    {mode: atelierDuneDark, name: "atelier-dune-dark" },
    {mode: atelierDuneLight, name: "atelier-dune-light" },
    {mode: atelierEstuaryDark, name: "atelier-estuary-dark" },
    {mode: atelierEstuaryLight, name: "atelier-estuary-light" },
    {mode: atelierForestDark, name: "atelier-forest-dark" },
    {mode: atelierForestLight, name: "atelier-forest-light" },
    {mode: atelierHeathDark, name: "atelier-heath-dark" },
    {mode: atelierHeathLight, name: "atelier-heath-light" },
    {mode: atelierLakesideDark, name: "atelier-lakeside-dark" },
    {mode: atelierLakesideLight, name: "atelier-lakeside-light" },
    {mode: atelierPlateauDark, name: "atelier-plateau-dark" },
    {mode: atelierPlateauLight, name: "atelier-plateau-light" },
    {mode: atelierSavannaDark, name: "atelier-savanna-dark" },
    {mode: atelierSavannaLight, name: "atelier-savanna-light" },
    {mode: atelierSeasideDark, name: "atelier-seaside-dark" },
    {mode: atelierSeasideLight, name: "atelier-seaside-light" },
    {mode: atelierSulphurpoolDark, name: "atelier-sulphurpool-dark" },
    {mode: atelierSulphurpoolLight, name: "atelier-sulphurpool-light" },
    {mode: atomOneDarkReasonable, name: "atom-one-dark-reasonable" },
    {mode: atomOneDark, name: "atom-one-dark" },
    {mode: atomOneLight, name: "atom-one-light" },
    {mode: brownPaper, name: "brown-paper" },
    {mode: codepenEmbed, name: "codepen-embed" },
    {mode: colorBrewer, name: "color-brewer" },
    {mode: darcula, name: "darcula" },
    {mode: dark, name: "dark" },
    {mode: darkula, name: "darkula" },
    {mode: defaultStyle, name: "default-style" },
    {mode: docco, name: "docco" },
    {mode: dracula, name: "dracula" },
    {mode: far, name: "far" },
    {mode: foundation, name: "foundation" },
    {mode: githubGist, name: "github-gist" },
    {mode: github, name: "github" },
    {mode: gml, name: "gml" },
    {mode: googlecode, name: "googlecode" },
    {mode: grayscale, name: "grayscale" },
    {mode: gruvboxDark, name: "gruvbox-dark" },
    {mode: gruvboxLight, name: "gruvbox-light" },
    {mode: hopscotch, name: "hopscotch" },
    {mode: hybrid, name: "hybrid" },
    {mode: idea, name: "idea" },
    {mode: irBlack, name: "ir-black" },
    {mode: isblEditorDark, name: "isbl-editor-dark" },
    {mode: isblEditorLight, name: "isbl-editor-light" },
    {mode: kimbieDark, name: "kimbie-dark" },
    {mode: kimbieLight, name: "kimbie-light" },
    {mode: lightfair, name: "lightfair" },
    {mode: magula, name: "magula" },
    {mode: monoBlue, name: "mono-blue" },
    {mode: monokaiSublime, name: "monokai-sublime" },
    {mode: monokai, name: "monokai" },
    {mode: nord, name: "nord" },
    {mode: obsidian, name: "obsidian" },
    {mode: ocean, name: "ocean" },
    {mode: paraisoDark, name: "paraiso-dark" },
    {mode: paraisoLight, name: "paraiso-light" },
    {mode: pojoaque, name: "pojoaque" },
    {mode: purebasic, name: "purebasic" },
    {mode: qtcreatorDark, name: "qtcreator-dark" },
    {mode: qtcreatorLight, name: "qtcreator-light" },
    {mode: railscasts, name: "railscasts" },
    {mode: rainbow, name: "rainbow" },
    {mode: routeros, name: "routeros" },
    {mode: schoolBook, name: "school-book" },
    {mode: shadesOfPurple, name: "shades-of-purple" },
    {mode: solarizedDark, name: "solarized-dark" },
    {mode: solarizedLight, name: "solarized-light" },
    {mode: sunburst, name: "sunburst" },
    {mode: tomorrowNightBlue, name: "tomorrow-night-blue" },
    {mode: tomorrowNightBright, name: "tomorrow-night-bright" },
    {mode: tomorrowNightEighties, name: "tomorrow-night-eighties" },
    {mode: tomorrowNight, name: "tomorrow-night" },
    {mode: tomorrow, name: "tomorrow" },
    {mode: vs, name: "vs" },
    {mode: vs2015, name: "vs2015" },
    {mode: xcode, name: "xcode" },
    {mode: xt256, name: "xt256" },
    {mode: zenburn, name: "zenburn" }
];


export class syntaxHighlight extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {showLine: true, mode: rainbow, codeString:''};
    }

    componentDidMount(){
        axios.get('http://localhost:5500/test.js').then((res) => {
            this.setState({codeString: res.data});
        })
    }

    handleChange(e){
        e.preventDefault();
        let index = _.findIndex(hlList, (o)=>{ return o.name === e.target.value});
        this.setState({mode: hlList[index].mode})
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState, props)=>{
            return {showLine: !prevState.showLine}
        });
    }

    handleCodeChange(e) {
        e.preventDefault();
        this.setState({codeString: e.target.value})
    }

    handleUpload(e) {
        e.preventDefault();
        let codeString = this.state.codeString;
        console.log('codeString ==>', codeString);
        axios.post('http://localhost:5500/file/code/upload',
            qs.stringify({ codeString: codeString })
        )
    }

    render() {
        const options = hlList.map((styles,index) => { return <option key={index}>{styles.name}</option> });
        return (
            <div className="syntax_code">
                <select onChange={this.handleChange}>
                    {options}
                </select>
                <button onClick={this.handleClick}>{this.state.showLine ? 'on' : 'off' } 显示行</button> 
                <div className="container">
                    <textarea name="input" id="" cols="100" rows="10" value={this.state.codeString} onChange={this.handleCodeChange}></textarea>
                    <SyntaxHighlighter language='javascript' style={this.state.mode} customStyle={{'width':'50%', 'margin': '0px'}}  showLineNumbers={this.state.showLine}>
                        {this.state.codeString}
                    </SyntaxHighlighter>
                </div>
                <button onClick={this.handleUpload}>upload</button>
            </div>
        )
    }
}