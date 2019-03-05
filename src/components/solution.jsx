import React, { Component } from "react";

class Solution extends Component {
  getClass = option => {
    let optionClass = option === this.props.correct ? "correct-answer" : "";
    optionClass +=
      option === this.props.userAnswer && option !== this.props.correct
        ? " wrong-answer"
        : "";
    return optionClass;
  };

  render() {
    return (
      <div>
        <div className="question-box">
          {" "}
          <h4>
            Q{this.props.index}.{this.props.question}
          </h4>
          <ol>
            {this.props.choices.map((option, i) => (
              <li className={this.getClass(option)} key={i} type="A">
                {option}
              </li>
            ))}
          </ol>
          <p>
            <b>{this.props.explanation}</b>
          </p>
        </div>
      </div>
    );
  }
}
export default Solution;
