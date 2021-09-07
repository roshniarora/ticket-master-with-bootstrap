import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useParams, useHistory } from "react-router";
import {
  showDepartmentById,
  updateDepartmentById,
} from "../../redux/actions/departmentAction";
import "./department.scss";

const DepartmentShow = () => {
  const departments = useSelector((state) => state.department.department);
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(showDepartmentById(params.id));
  }, [params.id, dispatch]);

  const handleClickEdit = (id) => {
    history.push(`/department/${id}`);
    setDisable(!disable);
  };

  return (
    <div>
      <h1>Department Show </h1>

      <Formik
        initialValues={{
          department: departments.department || "",
        }}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values);
          dispatch(updateDepartmentById(departments._id, values, history));
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              className={disable && "diabled_input"}
              type="text"
              name="department"
              disabled={disable}
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <button onClick={() => handleClickEdit(departments._id)}>Edit</button>
    </div>
  );
};

export default DepartmentShow;
