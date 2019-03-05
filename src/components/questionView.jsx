import React, { Component } from "react";
import Modal from "react-responsive-modal";
import EditQuestion from "./editQuestion";
class QuestionView extends Component {
  state = {
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  getClass = (option, correct) => {
    return option === correct ? "correct-answer" : "";
  };
  render() {
    return (
      <div className="question-box">
        <span
          className="badge badge-info float-right m-1"
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          <i className="fa fa-pen" />
        </span>
        <span
          className="badge badge-info float-right m-1"
          onClick={() => {
            alert("are you sure you want to delete this question");
            this.props.deleteData(this.props.question);
          }}
        >
          <i className="fa fa-trash-alt" />
        </span>
        <h4>
          Q{this.props.index + 1}.{this.props.question.question}
        </h4>
        <ol>
          {this.props.question.choices.map((option, i) => (
            <li
              className={this.getClass(option, this.props.question.correct)}
              key={i}
              type="A"
            >
              {option}
            </li>
          ))}
        </ol>
        <p>
          <b>{this.props.question.explanation}</b>
        </p>
        <Modal open={this.state.open} onClose={this.onCloseModal} focusTrapped>
          <EditQuestion
            question={this.props.question}
            editData={this.props.editData}
            onCloseModal={this.onCloseModal}
          />
        </Modal>
        ;
      </div>
    );
  }
}
export default QuestionView;
