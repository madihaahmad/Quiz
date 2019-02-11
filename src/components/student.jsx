import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "../App.css";

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

class Student extends Component {
  state = { quiz: [], userAnswers: [], evaluate: false };
  componentDidMount() {
    this.setState({ quiz: [...this.props.quiz] });
  }

  saveAnswer = (e, id) => {
    // }
    let tempState = [...this.state.quiz];
    let indx = tempState.findIndex(q => q.id === id);
    //  console.log(indx);
    tempState[indx].userAnswer = e.target.value;
    this.setState({ quiz: tempState });
  };
  checkAnswer = () => {
    this.setState({ evaluate: true });
  };
  closeSolution = () => {
    this.setState({ evaluate: false });
  };
  result = () => {
    let sum = 0;
    this.state.quiz.forEach(element => {
      if (element.correct === element.userAnswer) sum = sum + 1;
    });
    return sum + "/" + this.state.quiz.length;
  };

  render() {
    //  console.log(this.state.quiz[0]);
    return (
      <div className="container">
        <form onSubmit={this.checkAnswer}>
          {this.props.quiz.map((element, index) => (
            <Question
              {...element}
              index={index + 1}
              saveAnswer={this.saveAnswer}
            />
          ))}
          <input type="button" onClick={this.checkAnswer} value="Submit" />
        </form>

        <Modal open={this.state.evaluate} onClose={this.closeSolution} center>
          <div>
            <h2>Solution</h2>
            <h4 className="correct-answer">Your Score: {this.result()}</h4>

            {this.props.quiz.map((element, index) => (
              <Solution
                {...element}
                userAnswer={element.userAnswer}
                index={index + 1}
              />
            ))}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Student;
