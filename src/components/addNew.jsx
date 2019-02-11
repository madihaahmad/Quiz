import React, { Component } from "react";
const uuidv1 = require("uuid/v1");

class AddNew extends Component {
  state = {
    newQuestion: {
      id: 0,
      userAnswer: "",
      question: "",
      image: "",
      choices: [],
      correct: "",
      explanation: ""
    }
  };
  render() {
    return (
      <div className="new-question">
        <h3> New question here....</h3>
        <form onSubmit={this.props.submitQuestion}>
          {/* <input type="text" placeholder="Question here..." name="question" /> */}
          <textarea
            className="area"
            name="question"
            cols="90"
            rows="3"
            placeholder="Question here..."
          />
          <h5>Options</h5>
          <ol type="A">
            <li>
              <input type="text" placeholder="Option A" name="choiceA" />

              <input type="radio" name="correct" />
            </li>
            <br />
            <li>
              <input type="radio" name="correct" />
              <tb />
              <input type="text" placeholder="Option B" name="choiceB" />
            </li>
            <br />
            <li>
              <input type="radio" name="correct" />
              <input type="text" placeholder="Option C" name="choiceC" />
            </li>
            <br />
            <li>
              <input type="radio" name="correct" />
              <input type="text" placeholder="Option D" name="choiceD" />
            </li>
          </ol>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddNew;
