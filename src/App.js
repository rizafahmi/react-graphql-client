import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <h1>Online Courses</h1>
        <pre>{JSON.stringify(this.props.data)}</pre>
        {this.props.data.allStudents &&
          this.props.data.allStudents.map(student => (
            <React.Fragment key={student.id}>
              <h2>
                {student.firstName} {student.lastName}
              </h2>
              <ul>
                {student.courses.map(course => (
                  <li>
                    {course.name} ( {course.level} )
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
      </div>
    );
  }
}

const queries = gql`
  query {
    allStudents {
      id
      firstName
      lastName
      courses {
        name
        level
      }
    }
  }
`;

export default graphql(queries)(App);
