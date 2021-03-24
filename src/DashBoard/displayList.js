import React from 'react';
import FRIENDS_LIST from './friendsList';
import FriendDisplay from './FriendDisplay';
import './listStyles.css'

class DisplayList extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            collections: FRIENDS_LIST
        };
    }

    render() {

        
        return (
            <div className='row'>
                {this.state.collections.map(({id, ...props }) =>(
                    <FriendDisplay key={id} {...props} />
                ))}
            </div>
        )
    }
}

export default DisplayList;