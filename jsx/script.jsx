class MenWomen extends React.Component{
    constructor(props){
        super(props);
        // this.Gender = this.Gender.bind(this);
        this.Gender2 = this.Gender2.bind(this);
        this.state = {
            showMen: false,
            showWomen: false,
            showHit: true,
            selectedOption: ''
        }



    }

    // Gender() {
    //     this.setState({showSex: false})
    // }

    Gender2(e) {
        this.setState({showHit: false});
        this.setState({ selectedOption: e.target.value });
        alert(e.target.value);
        if(e.target.value === 'men'){
            this.setState({showWomen: false});
            this.setState({showMen: true});
        }
        else {
            this.setState({showMen: false});
            this.setState({showWomen: true});
        }


        // alert(`You chose the ${this.state.selectedOption} pizza.`);

    }


    // componentDidMount() { //ставим фокус в input
    // alert(`You chose the ${this.state.selectedOption} pizza.`);
    // }

    render(){
        return (
            <div>
            <div id="wb_LayoutGrid1">
                <div id="LayoutGrid1">
                    <div className="row">
                        <div className="col-1">
                            <div id="wb_Text1">
                                <span id="wb_uid0">Выбирите ваш пол</span>
                            </div>
                            <div id="wb_LayoutGrid2">
                                <div id="LayoutGrid2">
                                    <div className="row">
                                        <form>
                                        <div className="col-1">
                                            <div id="wb_RadioButton1">
                                                <input type="radio" id="RadioButton1" name="sex" value="men"  onChange={this.Gender2} checked={this.state.selectedOption === "men"}/><label  htmlFor="RadioButton1" />
                                            </div>
                                            <label htmlFor="RadioButton1" id="Label1">Мужской</label>
                                        </div>
                                        <div className="col-2">
                                            <div id="wb_RadioButton2">
                                                <input type="radio" id="RadioButton2" name="sex" value="women" onChange={this.Gender2} checked={this.state.selectedOption === "women"}/><label htmlFor="RadioButton2" />
                                            </div>
                                            <label htmlFor="RadioButton2" id="Label2">Женский</label>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Hit
                    hidden = {this.state.showHit}
                />

                <Sex
                    men = {this.state.showMen}
                    women = {this.state.showWomen}
                />
            </div>
            )



    }
}


class Hit extends React.Component{
    render(){
        return (
            <div id="wb_LayoutGrid5" style={{display: this.props.hidden ? 'block' : 'none' }}>
                <div id="LayoutGrid5">
                    <div className="row">
                        <div className="col-1">
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}


class Sex extends React.Component{

    render(){
        return (

            <div id="sex" >
            <div id="wb_LayoutGrid3" style={{display: this.props.men ? 'block' : 'none' }}>
                <div id="LayoutGrid3">
                    <div className="row">
                        <div className="col-1">
                            <div id="wb_Image1">
                                <img src="images/Man silhouette W.png" id="Image1" alt=""/>
                            </div>
                            <div id="wb_Text2">
                                <span id="wb_uid1">Ваш рост</span>
                            </div>
                            <div id="wb_LayoutGrid4">
                                <div id="LayoutGrid4">
                                    <div className="row">
                                        <div className="col-1">
                                            <div id="wb_Text3">
                                                <span id="wb_uid2">Тут будет ползунок</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div id="wb_LayoutGrid6" style={{display: this.props.women ? 'block' : 'none' }}>
                    <div id="LayoutGrid6">
                        <div className="row">
                            <div className="col-1">
                                <div id="wb_Image3">
                                    <img src="images/black-148552_960_720.png" id="Image3" alt=""/>
                                </div>
                                <div id="wb_Text4">
                                    <span id="wb_uid3">Ваш рост</span>
                                </div>
                                <div id="wb_LayoutGrid7">
                                    <div id="LayoutGrid7">
                                        <div className="row">
                                            <div className="col-1">
                                                <div id="wb_Text5">
                                                    <span id="wb_uid4">Тут будет ползунок</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}


class Footer extends React.Component{
    render(){
        return (
            <div id="wb_LayoutGrid8">
                <div id="LayoutGrid8">
                    <div className="row">
                        <div className="col-1">
                            <div id="wb_Text6">
                                <span id="wb_uid7">2018</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )



    }
}


// class PizzaSizePicker extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             size: ''
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({
//             size: event.target.value
//         });
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//
//         alert(`You chose the ${this.state.size} pizza.`);
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <p className="title">Select a pizza size:</p>
//
//                 <ul>
//                     <li>
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="small"
//                                 checked={this.state.size === "small"}
//                                 onChange={this.handleChange}
//                             />
//                             Small
//                         </label>
//                     </li>
//
//                     <li>
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="medium"
//                                 checked={this.state.size === "medium"}
//                                 onChange={this.handleChange}
//                             />
//                             Medium
//                         </label>
//                     </li>
//
//                     <li>
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="large"
//                                 checked={this.state.size === "large"}
//                                 onChange={this.handleChange}
//                             />
//                             Large
//                         </label>
//                     </li>
//                 </ul>
//
//                 <button type="submit" className="submit-button">Make your choice</button>
//             </form>
//         );
//     }
// }

// ReactDOM.render(<PizzaSizePicker />, document.getElementById('app'));

ReactDOM.render(
    <MenWomen/>,

    document.getElementById('menu')
);


ReactDOM.render(
    <Footer/>,

    document.getElementById('footer')
);