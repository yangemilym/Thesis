import React from 'react';
import { connect } from 'react-redux';
import HistoryCard from '../components/HistoryCard';
import { Card } from 'semantic-ui-react'
import * as UserActions from '../actions';

@connect((store) => {
  return {
    userdata: store.userdata,
  };
})

export default class RunHistory extends React.Component {

  componentWillMount() {
    if (!!localStorage.getItem("profile")) {
      this.props.dispatch(UserActions.signIn());
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={2}>
        {this.props.userdata.history.map(function(history) {
          return <HistoryCard hist={history} />;
        })}
      </Card.Group>
    )
  }
}
