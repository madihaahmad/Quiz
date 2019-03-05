import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "../App.css";

import AddQuestion from "./addQuestion";
import QuestionView from "./questionView";

class Overview extends Component {
  state = {
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  openModal = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mr-2">
          <span className="add-new" onClick={this.openModal}>
            <i className="fa fa-plus" />
          </span>
        </div>
        {this.props.quiz.map((element, index) => (
          <QuestionView
            question={element}
            index={index}
            deleteData={this.props.deleteData}
            editData={this.props.editData}
          />
        ))}
        <Modal open={this.state.open} onClose={this.onCloseModal} focusTrapped>
          <AddQuestion
            quiz={this.props.quiz}
            addData={this.props.addData}
            onClose={this.onCloseModal}
          />
        </Modal>
      </div>
    );
  }
}

export default Overview;
