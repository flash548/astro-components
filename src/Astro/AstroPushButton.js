import React from 'react';

export default class AstroButton extends React.Component {

    constructor(props) {
        super();
        this.state = {
            btnState: props.checked ? true : false,
        }
    }

    clicked = (event) => {
        this.setState({ btnState: !this.state.btnState });
        this.props.onClick && this.props.onClick(event);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input
                    className="rux-pushbutton__input"
                    id={this.props.id}
                    type="checkbox"
                    onChange={this.clicked}
                    checked={this.state.btnState}
                />
                <label className="rux-pushbutton__button" onClick={this.clicked} htmlFor="ruxToggle">{this.props.title}</label>
            </div>
        )
    }
}
