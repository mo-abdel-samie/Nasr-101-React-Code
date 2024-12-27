import React from "react";
import { Form } from "react-bootstrap";

export default function CourseCard({ course }) {
  return (
    <div className="col-4">
      <div className="border p-3 m-1 shadow rounded">
        <h2>{course.name}</h2>
        <p>{course.description}</p>
        <Form.Control placeholder="ex: 1, 2, ..etc" />
        {/* <input
          className="form-control"
          type="text"
          placeholder="ex: 1, 2, ..etc"
        /> */}
      </div>
    </div>
  );
}
