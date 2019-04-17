import React from 'react';

export class FlexGrid extends React.Component {
    render(){
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
        const listItems = numbers.map( (number, index) => <div className="col" key={index}>{number}</div>);
        return (
            <div className="flex_wrapper" id="flex-grid">
                <div className="row">
                    {listItems}
                </div>
                <div className="row">
                    <div className="col">13</div>
                    <div className="col">14</div>
                    <div className="col">15</div>
                    <div className="col">16</div>
                </div>
            </div>
        )
    }
}