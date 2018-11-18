import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem({ item }) {
        return <ListItem library={item} />;
    }

    render() {
         return (
            <FlatList 
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
        ); 
    }
}

const mapStatesToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStatesToProps)(LibraryList);
