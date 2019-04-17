import React from 'react';
export class CssGrid extends React.Component{
    render(){
        return (
            <div className="css_wrapper" id="css_grid">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
                <div className="col">4</div>
                <div className="col">5</div>
                <div className="col">6</div>
                <div className="col">7</div>
                <div className="col">8</div>
                <div className="col">9</div>
                <div className="col">10</div>
                <div className="col">11</div>
                <div className="col">12</div>
                <div className="col">13</div>
                <div className="col span6">14</div>
                <div className="col span3">15</div>
                <div className="col span2">16</div>    
                <div className="col">17some<br/>content</div>
                <div className="col span6">18this<br/>is<br/>more<br/>content</div>
                <div className="col span3">19this<br/>is<br/>less</div>
                <div className="col span2">20</div>   
            </div>
        )
    }
}