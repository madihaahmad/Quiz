import React, { Component } from "react";
const uuidv1 = require("uuid/v1");

class AddQuestion extends Component {
  state = {
    id: uuidv1(),
    userAnswer: "",
    question: "",
    image: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",

    correct: "",
    explanation: ""
  };

  handleData = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitQuestion = e => {
    e.preventDefault();

    let question = {
      id: this.state.id,
      question: this.state.question,
      correct: this.state.correct,
      image: this.state.image,
      userAnswer: this.state.userAnswer,
      choices: [
        this.state.choiceA,
        this.state.choiceB,
        this.state.choiceC,
        this.state.choiceD
      ],

      explanation: this.state.explanation
    };
    //  console.log(question);
    this.props.addData(question);
    this.setState({
      id: uuidv1(),
      userAnswer: "",
      question: "",
      image: "",
      choiceA: "",
      choiceB: "",
      choiceC: "",
      choiceD: "",

      correct: "",
      explanation: ""
    });
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <h3> New question here....</h3>
        <form onSubmit={this.submitQuestion}>
          <div class="form-group">
            <textarea
              className="form-control"
              name="question"
              rows="4"
              required
              onChange={event => this.handleData(event)}
            />
            <h5>Options</h5>
            <ol type="A">
              <li>
                <input
                  type="text"
                  placeholder="Option A"
                  name="choiceA"
                  required
                  onChange={event => this.handleData(event)}
                />
              </li>
              <br />
              <li>
                <input
                  type="text"
                  placeholder="Option B"
                  name="choiceB"
                  required
                  onChange={event => this.handleData(event)}
                />
              </li>
              <br />
              <li>
                <input
                  type="text"
                  placeholder="Option C"
                  name="choiceC"
                  required
                  onChange={event => this.handleData(event)}
                />
              </li>
              <br />
              <li>
                <input
                  type="text"
                  placeholder="Option D"
                  name="choiceD"
                  required
                  onChange={event => this.handleData(event)}
                />
              </li>
            </ol>
            <div>Correct Choice:</div>
            <div className='"form-check form-check-inline'>
              <input
                className="form-check-input ml-5"
                type="radio"
                name="correct"
                id="inlineRadio1"
                value={this.state.choiceA}
                required
                onChange={event => this.handleData(event)}
              />
              <label className="form-check-label" for="inlineRadio1">
                A
              </label>
              <input
                className="form-check-input ml-3"
                type="radio"
                name="correct"
                id="inlineRadio2"
                value={this.state.choiceB}
                required
                onChange={event => this.handleData(event)}
              />
              <label className="form-check-label" for="inlineRadio2">
                B
              </label>

              <input
                className="form-check-input ml-3"
                type="radio"
                name="correct"
                id="inlineRadio3"
                value={this.state.choiceC}
                required
                onChange={event => this.handleData(event)}
              />
              <label className="form-check-label" for="inlineRadio3">
                C
              </label>
              <input
                className="form-check-input ml-3"
                type="radio"
                name="correct"
                id="inlineRadio4"
                required
                value={this.state.choiceD}
                onChange={event => this.handleData(event)}
              />
              <label className="form-check-label" for="inlineRadio4">
                D
              </label>
            </div>
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
}

export default AddQuestion;
