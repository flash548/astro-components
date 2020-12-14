import React from 'react';
import AstroDialog from './Astro/AstroDialog';
import AstroGrid from './Astro/AstroGrid';
import AstroButton from './Astro/AstroButton';

export default class Airman extends React.Component {

    constructor() {
        super();
        this.state = { showDialog: false,
            columns:  {
                id: 'ID', 
                firstName: 'First', 
                middleName: 'Middle',
                lastName: 'Last',
                title: 'Title', 
                email: 'Email',
                afsc: 'AFSC', 
                etsDate: 'ETS',
                ptDate: 'PT',
                dodid: 'DODID',
                fullName: 'Full Name'
            },
            fname: '',
            mname :'',
            lname: '',
            title: '',
            email: '',
            afsc: '',
            ets: '',
            pt: '',
            dodid: ''
        };
        this.URL = '/api/v1/airman';
    }

    clearAirmanData = () => {
        this.setState({
            fname: '',
            mname :'',
            lname: '',
            title: '',
            email: '',
            afsc: '',
            ets: '',
            pt: '',
            dodid: '' 
        })
    }

    componentDidMount = () => {
        this.fetchAirman();
    }

    fetchAirman = async () => {
        this.clearAirmanData();

        try {
            let response = await fetch (this.URL);
            if (response.status === 200) {
                let data = await response.json();        
                this.setState({ rowData: data,});
            }
            else {
                this.setState({rowData: []})
            }
        }
        catch (e) {}
    }

    postAirman = async () => {
        let response = await fetch(this.URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName: this.state.fname,
                    middleName: this.state.mname,
                    lastName: this.state.lname,
                    title: this.state.title,
                    email: this.state.email,
                    afsc: this.state.afsc,
                    etsDate: this.state.ets,
                    ptDate: this.state.pt,
                    dodid: this.state.dodid,
                }
            ),
        })

        this.fetchAirman();
        this.setState({ showDialog: false });
    }

    render() {
        return (
            <div style={{paddingTop: 20, display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingBottom: 20}}>
                    <AstroButton title="Add Airman" onClick={() => this.setState({ showDialog: true })}/>
                </div>
                <div style={{ height: '900', width: '100%'}}>
                    <AstroGrid rowData={this.state.rowData} columns={this.state.columns} />
                </div>
                <AstroDialog
                    show={this.state.showDialog}
                    cancelText="Close"
                    onCancel={() => this.setState({ showDialog: false })}
                    confirmText="Ok"
                    onConfirm={() => this.postAirman()}
                    title="Dialog"
                    body="Hello"
                >
                    <form>                        
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block'}}>
                            <label htmlFor="input__fname">First Name</label>
                            <input 
                                id="input__fname"
                                className="rux-input"
                                type="text"
                                required
                                value={this.state.fname}
                                onChange={(e) => this.setState({ fname: e.target.value })}
                                placeholder="First Name" 
                            />                            
                        </div>
                        <div className="rux-form-field" style={{padding: 5, width: 150,  display: 'inline-block'}}>
                            <label htmlFor="input__mname">Middle Name</label>
                            <input 
                                id="input__mname"
                                className="rux-input"
                                type="text"
                                value={this.state.mname}
                                onChange={(e) => this.setState({ mname: e.target.value })}
                                placeholder="Middle Name" 
                            />                            
                        </div>
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block' }}>
                            <label htmlFor="input__lname">Last Name</label>
                            <input 
                                id="input__lname"
                                className="rux-input"
                                type="text"
                                required
                                placeholder="Last Name" 
                                value={this.state.lname}
                                onChange={(e) => this.setState({ lname: e.target.value })}
                            />                            
                        </div>
                        <br />
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block'}}>
                            <label htmlFor="input__title">Title</label>
                            <input id="input__title"
                                className="rux-input"
                                type="text"
                                placeholder="Title" 
                                value={this.state.title}
                                onChange={(e) => this.setState({ title: e.target.value })}
                            />                            
                        </div>
                        <div className="rux-form-field" style={{padding: 5, width: 150,  display: 'inline-block'}}>
                            <label htmlFor="input__email">Email</label>
                            <input id="input__email"
                                className="rux-input"
                                required type="email"
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} 
                            />                            
                        </div>
                        <br/>
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block' }}>
                            <label htmlFor="input__afsc">AFSC</label>
                            <input id="input__afsc"
                                className="rux-input"
                                type="text"
                                placeholder="AFSC"
                                value={this.state.afsc}
                                onChange={(e) => this.setState({ afsc: e.target.value })}
                            />                            
                        </div>
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block' }}>
                            <label htmlFor="input__ets">ETS</label>
                            <input id="input__ets"
                                className="rux-input"
                                type="date"
                                placeholder="ETS"
                                value={this.state.ets}
                                onChange={(e) => this.setState({ ets: e.target.value })} 
                            />                            
                        </div>
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block' }}>
                            <label htmlFor="input__pts">PT Date</label>
                            <input id="input__pt"
                                className="rux-input"
                                type="date"
                                placeholder="PT Date"
                                value={this.state.pt}
                                onChange={(e) => this.setState({ pt: e.target.value })}
                            />                            
                        </div>
                        <br/>
                        <div className="rux-form-field" style={{padding: 5, width: 150, display: 'inline-block' }}>
                            <label htmlFor="input__dodid">DODID</label>
                            <input id="input__dodid"
                                className="rux-input"
                                type="text"
                                placeholder="DODID"
                                value={this.state.dodid}
                                onChange={(e) => this.setState({ dodid: e.target.value })}
                            />                            
                        </div> 
                    </form>
                </AstroDialog>
            </div>
        )
    }

}