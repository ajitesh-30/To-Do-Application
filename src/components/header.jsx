import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    position: 'fixed',
    textAlign: 'center',
    fontSize: '30px'
}

class Header extends Component {
    render() {
        return(
            <div>
                <AppBar
                    title="To Do List"
                    showMenuIconButton={false}
                    className="app-header"
                    style={style}
                />
            </div>
        );
    }
}

export default Header;