const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

class Table extends React.Component {

    constructor(props) {
        super(props);

        const activeItems = setInterval(() => {
            let randomIndex = getRandomInt(0, this.state.listIndex.length);
            let randomItem = this.state.listIndex[randomIndex];

            this.state.list[randomItem].active = true;
            this.state.listIndex.splice(randomIndex, 1);

            if (this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
                this.state.borderWidth = 'halfWidth';
            }

            if (!this.state.listIndex.length) {
                clearInterval(activeItems);
                this.state.borderWidth = 'width';
            }
            this.setState({});

        }, 2000)
    }

    state = {
        borderWidth: '',
        listIndex: Object.keys(this.props.list),
        list: this.props.list,
        styleItem: {}
    }


    render() {

        return <table className={this.state.borderWidth}>
            <tbody>
            {this.state.list.map((item, index) => <tr className={item.active && 'active'}
                                                      key={index}>
                <td>{item.type}</td>
                <td>{item.icon}</td>
            </tr>)}
            </tbody>
        </table>;
    }
}

root.render(
    <Table list={animals}/>
);
