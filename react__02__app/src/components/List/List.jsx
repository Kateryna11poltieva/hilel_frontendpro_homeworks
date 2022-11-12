import React, {Component, Fragment} from 'react';

class List extends Component {
    render() {
        let {list, actions} = this.props

        return Array.isArray(list) && list.length ? (
            <Fragment>
                <div style={{
                    border: '1px solid black',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <ul>
                        {this.props.list.map(item => <li key={item.id}>{item.title}</li>)}
                    </ul>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                        {actions.map((item, index) => <button key={index} onClick={item.action}>{item.btn}</button>)}
                    </div>
                </div>
            </Fragment>
        ) : null;
    }
}

export default List;