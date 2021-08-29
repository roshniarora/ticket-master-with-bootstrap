import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDepartmentById,
  getDepartment,
  postDepartment,
} from "../../redux/actions/departmentAction";
import { useHistory } from "react-router-dom";
import Button from "../../utility/button";

import PageHeader from "../../utility/pageHeader";

const Department = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const departments = useSelector((state) => state.department);

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);

  console.log("depCompData", departments);

  // const handleClick = () => {
  //   history.push("/department");
  //   console.log("clickDepartment");
  // };

  const handleClickShow = (id) => {
    history.push(`/department/${id}`);
  };

  const handleClickDelete = (id) => {
    if (window.confirm("Are you sure want to delete this item")) {
      return dispatch(deleteDepartmentById(id));
    } else {
      return "something went wrong";
    }
  };
  return (
    <div>
      <div>
        <PageHeader title="Department -" count={departments.length} />
      </div>
      <div className="dep-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {departments &&
              departments?.departments.map((ele) => (
                <tr>
                  <td> {ele.id} </td>
                  <td> {ele.department} </td>
                  <td>
                    <div className="dep-btn">
                      <Button
                        handleAction={() => handleClickShow(ele._id)}
                        title="Show"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="dep-btn-remove">
                      <Button
                        handleAction={() => handleClickDelete(ele._id)}
                        title="Remove"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <h1> Department</h1>
      <Formik
        initialValues={{
          department: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
          dispatch(postDepartment(values, history));
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {/* <label> Add Department</label> */}

            <Field type="text" name="department" />

            <button type="submit">Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Department;
