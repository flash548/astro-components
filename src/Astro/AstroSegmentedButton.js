import React from 'react';

const findByType = (children, component) => {
    const result = [];
    const type = [component.displayName] || [component.name];
    React.Children.forEach(children, child => {
      const childType =
        child && child.type && (child.type.displayName || child.type.name);
        result.push(child);
     });
    return result;
};
  
const Segment = () => null;  

export default class AstroSegmentedButton extends React.Component {

    constructor() {
        super();       
        this.state = {};        
    }   
    
    componentDidMount = () => {
        const { children } = this.props;
        const segs = findByType(children, Segment);
        let segments = [];
        for (let seg of segs) {
            segments.push({ id: seg.props.id,
                title: seg.props.title,
                selected: seg.props.selected ? true : false,  // avoids 'undefined/null' as value
                callback: seg.props.onClick });
        }
        this.setState({ segments });
    }

    renderSegments = () => {
        if (!this.state.segments) return null;

        let segHeaders = [];
        for (let seg of this.state.segments) {
            segHeaders.push(
                <li className="rux-segmented-button__segment">
                    <input type="radio" id={seg.id} name={this.props.name || "rux-group"} onChange={this.clicked} checked={seg.selected} />
                    <label htmlFor={seg.id}>{seg.title}</label>
                </li>
            )
        }
        return segHeaders;
    }

    clicked = (event) => {
        let segments = this.state.segments;
        let cb = null;
        for (let seg of segments) {
            if (seg.id === event.target.id){
                seg.selected = true;
                cb = seg.callback;
            }
            else seg.selected = false;
        }
        this.setState({ segments }, () => {
            // fire the callback if there is one
            if (cb) cb(event);
        });        
    }

    render() {
        return (
            <ul className="rux-segmented-button">
                {this.renderSegments()}         
            </ul>
        )
    }
      
}

AstroSegmentedButton.Segment = Segment;