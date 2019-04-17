import React from 'react';

export class SimpleGrid extends React.Component {
    render(){
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
        const listItems = numbers.map( (number, index) => <div className="col" key={index}>{number}</div>);
        return (
            <div className="simple_wrapper" id="simple-grid">
                <div className="row">
                    {listItems}
                </div>
                <div className="row">
                    <div className="col span1">13</div>
                    <div className="col span6">14</div>
                    <div className="col span3">15</div>
                    <div className="col span2">16</div>
                </div>
            </div>
        )
    }
}