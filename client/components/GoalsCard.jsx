import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Accordion, Icon } from 'semantic-ui-react';

@connect((store) => {
  return {
    userdata: store.userdata,
  };
})

class GoalsCard extends React.Component {
  constructor(props) {
    super();
  }

  addGoal() {
  }

  acceptChallenge() {
  }

  rejectChallenge() {
  }

  completedGoal() {
  }

  render() {
    return (
      <div>

      {this.props.userdata.goals.map((goal, idx) => {
        if (goal.source === null && goal.status !== 'completed') {
          return <div className="goal" key={idx}>
          <Grid>
            <Grid.Row>
              <div className="goalText">{"Goal: " + goal.description}</div>
              <div className="completeGoal" onClick={this.completedGoal}>✔</div>
            </Grid.Row>
          </Grid>
          </div>
        } else if (goal.source !== null && goal.status === 'pending') {
          return <div className="pendingChallenge" key={idx}>
          <Grid>
            <Grid.Row>
              <div className="challengeText">{"Challenge from " + goal.source + ": " + goal.description}</div>
              <Grid.Column>
              <div className="acceptChallenge" onClick={this.acceptChallenge}>✔</div>
              <div className="rejectChallenge" onClick={this.rejectChallenge}>✘</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        } else if (goal.source !== null && goal.status === 'accepted'){
          return <div className="challenge" key={idx}>
          <Grid>
            <Grid.Row>
              <div className="challengeText">{"Challenge from " + goal.source + ": " + goal.description}</div>
              <div className="completeGoal" onClick={this.completedGoal}>✔</div>
            </Grid.Row>
          </Grid>
          </div>
        }
      })
    }
    <div className="ui large icon input">
      <input type="text" placeholder="Add new goal" />
      <div className="ui button" onClick={this.addGoal}>Submit</div>
    </div>

    <Accordion className="completedGoals">

      <Accordion.Title>
        <Icon name="dropdown" /> completed goals and challenges
      </Accordion.Title>



      <Accordion.Content className="accContent">
        {
          this.props.userdata.goals.map((goal, idx) => { 
            if (goal.status === 'completed') {
            return <p key={idx}>{goal.description}</p>
          }
          })
        }
      </Accordion.Content>

    </Accordion>

    </div>

    );
    }
  }

  export default GoalsCard;