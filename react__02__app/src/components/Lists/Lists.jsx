import React, {Component} from 'react';
import List from "../List/List";

class Lists extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    moveFromFirstToSecond() {

        this.setState({
                secondList: [this.state.firstList.shift(), ...this.state.secondList]
            }
        )
    }

    moveFromSecondToFirst() {
        this.setState({
            firstList: [this.state.secondList.shift(), ...this.state.firstList]
        })
    }

    removeFromSecondToThird() {

        this.setState({
                thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
            }
        )
    }

    removeLastItem() {
        this.setState({
            thirdList: this.state.thirdList.slice(0, -1)
        })
    }


    render() {

        return (
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                <List list={this.state.firstList}
                      actions={[
                          {btn: 'Transfer first to right', action: this.moveFromFirstToSecond.bind(this)},
                      ]}
                />
                <List list={this.state.secondList}
                      actions={[
                          {btn: 'Transfer first to left', action: this.moveFromSecondToFirst.bind(this)},
                          {btn: 'Transfer first to right', action: this.removeFromSecondToThird.bind(this)}
                      ]}
                />
                <List list={this.state.thirdList}
                      actions={[
                          {btn: 'Remove last item', action: this.removeLastItem.bind(this)},
                      ]}
                />
            </div>
        );
    }
}

export default Lists;