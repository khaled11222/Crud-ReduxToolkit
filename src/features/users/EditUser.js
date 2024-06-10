import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(store => store.users)
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });

    const handelEditUser = () => {
        setValues({name: '', email: ''})
        dispatch(editUser({
          id: params.id,
          name: values.name,
          email: values.email
        }));
        navigate('/');
    }
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "johndoe@gmail.com" }}
      />
      <Button onClick={handelEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser