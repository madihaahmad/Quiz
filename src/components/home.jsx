import React, { Component } from "react";

import Student from "./student";

import Overview from "./overview";

class Home extends Component {
  state = {
    admin: false,
    quiz: [
      {
        id: 100,
        userAnswer: "",
        question: " Who came up with the theory of relativity?",
        image:
          "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
        choices: [
          "Sir Isaac Newton",
          "Nicolaus Copernicus",
          "Albert Einstein",
          "Ralph Waldo Emmerson"
        ],
        correct: "Albert Einstein",
        explanation:
          "Albert Einstein drafted the special theory of relativity in 1905."
      },
      {
        id: 101,
        userAnswer: "",
        question: " Who is on the two dollar bill?",
        image:
          "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
        choices: [
          "Thomas Jefferson",
          "Dwight D. Eisenhower",
          "Benjamin Franklin",
          "Abraham Lincoln"
        ],
        correct: "Thomas Jefferson",
        explanation:
          "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note."
      },
      {
        id: 102,
        userAnswer: "",
        question: " What event began on April 12, 1861?",
        image: "",
        choices: [
          "First manned flight",
          "California became a state",
          "American Civil War began",
          "Declaration of Independence"
        ],
        correct: "American Civil War began",
        explanation:
          "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865."
      }
    ]
  };

  addData = question => {
    console.log("hello");
    // console.log(question);
    this.setState({ quiz: this.state.quiz.concat(question) });
    console.log("question added");
  };
  deleteData = question => {
    // console.log(question);
    this.setState({ quiz: this.state.quiz.filter(q => q.id !== question.id) });
    console.log("question deleted");
  };
  editData = question => {
    const index = this.state.quiz.findIndex(q => q.id === question.id);
    const temp = [...this.state.quiz];
    temp[index] = { ...question };

    this.setState({ quiz: temp });

    console.log("question edited");
  };

  render() {
    const { admin, quiz } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <span className="badge badge-danger badge-pill ">
            <h3>
              <i className="fa fa-question" />
            </h3>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={admin ? "nav-item " : "nav-item active"}>
                <span
                  class=" nav-link"
                  onClick={() => {
                    this.setState({ admin: false });
                  }}
                >
                  Take a quiz
                </span>
              </li>
              <li className={admin ? "nav-item active" : "nav-item"}>
                <span
                  class=" nav-link"
                  onClick={() => {
                    this.setState({ admin: true });
                  }}
                >
                  Make a quiz
                </span>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <button
              class="btn btn-sm btn-outline-success"
              type="button"
              onClick={() => {
                this.setState({ admin: false });
              }}
            >
              Take a quiz
            </button>
            <button
              class="btn btn-sm btn-outline-success"
              type="button"
              onClick={() => {
                this.setState({ admin: true });
              }}
            >
              Make a quiz
            </button>
          </form>
        </nav> */}

        <div className="container">
          {admin ? (
            <Overview
              quiz={quiz}
              addData={this.addData}
              deleteData={this.deleteData}
              editData={this.editData}
            />
          ) : (
            <Student quiz={quiz} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
