import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Online Courses</h1>
        <pre>{JSON.stringify(this.props.data)}</pre>
        <ul>
          {this.props.data.allCourses &&
            this.props.data.allCourses.map(course => (
              <li key={course.id}>
                {course.name} ( {course.level} )
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const queries = gql`
  query {
    allCourses {
      id
      name
      description
      level
    }
  }
`;

export default graphql(queries)(App);
