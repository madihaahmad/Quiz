import React, { Component } from "react";
class Question extends Component {
  state = { options: [] };
  render() {
    return (
      <div className="question-box">
        {" "}
        <h4>
          Q{this.props.index}.{this.props.question}
        </h4>
        <ol>
          {this.props.choices.map((option, i) => (
            <li type="A" key={i}>
              <input
                type="radio"
                name={this.props.id}
                value={option}
                onClick={e => this.props.saveAnswer(e, this.props.id)}
              />
              {option}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Question;
