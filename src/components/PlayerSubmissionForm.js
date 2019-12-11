import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectiveOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjectiveTwo: '',
      nounTwo: ''
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  validate = (name) => {
    return this.state[name].match(/.+/);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    //validate

    const newSubmission = `The ${this.state.adjectiveOne} ${this.state.nounOne} ${this.state.adverb} ${this.state.verb} the ${this.state.adjectiveTwo} ${this.state.nounTwo}.`

    this.setState({
      adjectiveOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjectiveTwo: '',
      nounTwo: ''
    })

    this.props.submitFormCallback(newSubmission)
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <span>The</span>

            <input placeholder="adjective" name="adjectiveOne" value={this.state.adjectiveOne} type="text" onChange={this.onChange} 
            className={this.validate("adjectiveOne") ? "" : "PlayerSubmissionForm__input--invalid"}
            />

            <input placeholder="noun" name="nounOne" value={this.state.nounOne} type="text" onChange={this.onChange} className={this.validate("nounOne") ? "" : "PlayerSubmissionForm__input--invalid"} />

            <input placeholder="adverb" type="text" name="adverb" value={this.state.adverb}onChange={this.onChange} className={this.validate("adverb") ? "" : "PlayerSubmissionForm__input--invalid"} />

            <input placeholder="verb" type="text" name="verb" value={this.state.verb} onChange={this.onChange} className={this.validate("verb") ? "" : "PlayerSubmissionForm__input--invalid"} />

            <span>the</span>

            <input placeholder="adjective" type="text" name="adjectiveTwo" value={this.state.adjectiveTwo} onChange={this.onChange} className={this.validate("adjectiveTwo") ? "" : "PlayerSubmissionForm__input--invalid"} /> 

            <input placeholder="noun" type="text" name="nounTwo" value={this.state.nounTwo}onChange={this.onChange} className={this.validate("nounTwo") ? "" : "PlayerSubmissionForm__input--invalid"} />

            <span>.</span>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
