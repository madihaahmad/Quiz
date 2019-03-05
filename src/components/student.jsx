import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "../App.css";

import Question from "./question";

import Solution from "./solution";

class Student extends Component {
  state = {
    quiz: [],
    //   userAnswers: [],
    evaluate: false
  };
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
