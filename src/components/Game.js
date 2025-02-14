import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submissionCount: 0,
      recentSubmission: '',
      submissionList: [],
      gameComplete: '',
    };
  }

  onFormSubmission = (newSubmission) => {
    const updatedSubmissionList = this.state.submissionList;
    updatedSubmissionList.push(newSubmission)

    const updatedRecentSubmission = updatedSubmissionList[updatedSubmissionList.length - 1]
    const updatedSubmissionCount = this.state.submissionCount + 1
    this.setState({
      submissionCount: updatedSubmissionCount,
      recentSubmission: updatedRecentSubmission,
      submissionList: updatedSubmissionList,
    })
  }

  onEndGame = () => {
    const gameCompleteUpdate = true;
    this.setState({
      gameComplete: gameCompleteUpdate,
      recentSubmission: '',
    })
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {this.state.recentSubmission ? <RecentSubmission recentSub={this.state.recentSubmission}/> : ""}

        {this.state.gameComplete ? "" : <PlayerSubmissionForm playerNumber={this.state.submissionCount + 1} submitFormCallback={newSubmission => this.onFormSubmission(newSubmission)} format={FIELDS} /> }

        <FinalPoem lines={this.state.submissionList} endGameCallback={this.onEndGame} gameEnded={this.state.gameComplete}/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
    entry: '',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
    entry: '',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
    entry: '',
  },
  {
    key: 'verb',
    placeholder: 'verb',
    entry: '',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
    entry: '',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
    entry: '',
  },
  ".",
];

export default Game;
