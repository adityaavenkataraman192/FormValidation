import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import logo from "./logo.jpeg";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const data = {
  form: {
    sections: [
      {
        section_title: "Grootan’s Frontend Task",
        fields: [
          {
            name: "name",
            label: "Name",
            required: true,
            hidden: true,
            data_type: "String",
            html_element: "TextField",
            error: true,
            variant: "outlined",
          },
          {
            name: "email",
            label: "Email",
            hidden: false,
            required: true,
            data_type: "email",
            html_element: "TextField",
            error: TouchRipple,
            variant: "outlined",
          },
          {
            name: "age",
            label: "Age",
            hidden: false,
            required: true,
            data_type: "Integer",
            html_element: "TextField",
            error: false,
            variant: "outlined",
          },
          {
            name: "phone",
            label: "Phone",
            hidden: true,
            required: true,
            data_type: "Integer",
            html_element: "TextField",
            error: false,
            variant: "outlined",
          },
          {
            name: "address",
            label: "Address",
            minRows: "3",
            fullWidth: true,
            placeholder: "Enter Address",
            html_element: "TextArea",
            variant: "outlined",
          },
          
          {
            name: "country",
            label: "Country",
            hidden: false,
            required: true,
            data_type: "Image",
            error: false,
            variant: "outlined",
            placeholder: "Choose Country",
            options: [
              {
                label: "India",
                value: "india",
              },
              {
                label: "Canada",
                value: "canada",
              },
              {
                label: "USA",
                value: "USA",
              },
            ],
            html_element: "Select",
          },
          {
            name: "hobby",
            label: "Hobby",
            hidden: false,
            error: false,
            variant: "outlined",
            options: [
              {
                label: "Basketball",
                value: "Basketball",
              },
              {
                label: "Cricket",
                value: "cricket",
              },
              {
                label: "Travel",
                value: "travel",
              },
            ],
            required: false,
            html_element: "multiple",
          },
        ],
        feilds2: [
          {
            section_title3: "Which programming you prefer?",
            required: false,
            checkFeilds: [
              {
                name: "C Programming",
                value: "C programming",
                html_element: "checkbox",
                defaultChecked: false,
                hidden: false,
                label: "C ",
              },
              {
                name: "C++",
                value: "C++",
                html_element: "checkbox",
                defaultChecked: false,
                hidden: false,
                label: "C++",
              },
              {
                name: "java",
                value: "java",
                html_element: "checkbox",
                defaultChecked: false,
                hidden: false,
                label: "JAVA",
              },
              {
                name: "SQL",
                value: "SQl",
                html_element: "checkbox",
                defaultChecked: false,
                hidden: false,
                label: "SQL",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function Form() {
  const defaultValue = { name: "", email: "", age: "", phone: "", address: "" };
  const [val, setVal] = React.useState(defaultValue);
  const [selectCountry, setCountry] = React.useState("");
  const [selectHobby, setHobby] = React.useState([""]);
  const [like, setLike] = React.useState("");
  const [error, setError] = React.useState(null);
  const [addressError, setAddressError] = React.useState(null);
  const [required, setRequired] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [helperTextAddress, setHelperTextAddress] = React.useState("");
  const [emailHelperText, setEmailHelperText] = React.useState("");
  const [ageHelperText, setAgeHelperText] = React.useState("");
  const [phoneHelperText, setPhoneHelperText] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [jsonConfig,setjsonConfig]=React.useState(data);

  const onHandleChange = (e) => {
    console.log("e.target.value", e.target.value); //to check the type of the data
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
    if (!val.name && !val.email && !val.age && !val.phone) {
      setError(false);
      setHelperText("");
    } else if (e.target.name === "email") {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (regex.test(e.target.value)) {
        setEmailHelperText("");
      } else {
        setEmailHelperText("Not Valid Email");
      }
    } else if (e.target.name === "age") {
      var age_regex = /^(100|[1-9][0-9]?)$/;
      if (age_regex.test(e.target.value)) {
        setAgeHelperText("");
      } else {
        setAgeHelperText("invalid Age");
      }
    } else if (e.target.name === "phone") {
      var reg = /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (reg.test(e.target.value)) {
        setPhoneHelperText("");
      } else {
        setPhoneHelperText("Enter Valid phonenumber");
      }
    } else if (e.target.name === "address") {
      if (e.target.value) {
        setAddressError(true);
        setHelperTextAddress("");
      } else {
        setAddressError(false);
        setHelperTextAddress("Required");
      }
    }
  };
  const likeEvent = (e) => {
    setLike([...like, e.target.defaultValue]);
  };
  const onSelectCountry = (e) => {
    if (selectCountry !== "") {
      setError(false);
      setHelperText("");
    } else {
      setError(true);
      setHelperText("required");
      setCountry(e.target.innerText);
    }
  };
  const onSelectHobby = (e) => {
    console.log("setHobby", e.target.innerText);
    if (selectHobby.length > 0) {
      setError(false);
      setHelperText("");
    } else {
      setError(true);
      setHelperText("required");
      var arr = [];
      arr.push(e.target.innerText);
      setHobby(arr);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();

    console.log("valvalval", val); //this is to check wheather after submitting the data the value are stored in valvalval in console
    if (val.address) {
      setAddressError(false);
      setHelperTextAddress("");
    } else {
      setAddressError(true);
      setHelperTextAddress("required");
    }
    if (
      val.name !== "" &&
      val.email !== "" &&
      val.age !== "" &&
      val.phone !== "" &&
      val.phone.length > 10 &&
      selectCountry !== "" &&
      selectHobby.length > 0
    ) {
      console.log("Submit Data"); //if all the feilds are not in null state then the data is submitted
      setError(false); //also removing error state from true
      setHelperText("");
      setShow(true); //after filling the data it is visible in the UI
    } else {
      setError(true);
      setHelperText("required");
    }
    const localValues = JSON.parse(localStorage.getItem("Values")) || {
      temp: [],
    };
    console.log({ localValues });
    const temp = { ...val };
    console.log({ temp });
    temp.country = selectCountry;
    temp.hobby = selectHobby;
    console.log({ temp });
    localValues.temp.push(temp);
    console.log({ localValues });
    localStorage.setItem("Values", JSON.stringify(localValues));
    // e.target.reset();
    setVal(defaultValue);
    setCountry("");
    setHobby([""]);
    window.location.reload(false);
  };
  const onChange=(newValue)=> {

    // console.log("change", newValue);

    setjsonConfig(newValue);
  }
  
  const tableValues = JSON.parse(localStorage.getItem("Values"))?.temp || [];
  console.log({ tableValues });
  return (
    
    <div className="section">
      <Grid item xs={6} sm={6}>
      <form className="form-outer-wrapper" onSubmit={submitForm} error>
        {data.form.sections.map((item) => {
          return (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} justifyContent="space-between">
                <img src={logo} alt="face1" />
                <h2>{item.section_title}</h2>
              </Grid>
              {item.fields.map((jsonConfig) => {
                console.log("data", jsonConfig);
                return (
                  <Grid item xs={12} sm={12}>
                    {jsonConfig.data_type === "String" ? (
                      <TextField
                        fullWidth={true}
                        error={error}
                        variant={jsonConfig.variant}
                        label={jsonConfig.label}
                        name={jsonConfig.name}
                        type={jsonConfig.data_type === "String"}
                        onChange={onHandleChange}
                        helperText={helperText}
                      />
                    ) : jsonConfig.data_type === "email" ? (
                      <TextField
                        fullWidth={true}
                        error={error}
                        variant={jsonConfig.variant}
                        label={jsonConfig.label}
                        name={jsonConfig.name}
                        type={jsonConfig.data_type}
                        onChange={onHandleChange}
                        helperText={emailHelperText}
                      />
                    ) : jsonConfig.label === "Phone" ? (
                      <TextField
                        fullWidth={true}
                        error={error}
                        variant={jsonConfig.variant}
                        label={jsonConfig.label}
                        name={jsonConfig.name}
                        type={
                          jsonConfig.data_type === "Integer" ? "number" : "String"
                        }
                        onChange={onHandleChange}
                        helperText={phoneHelperText}
                      />
                    ) : jsonConfig.name === "age" ? (
                      <TextField
                        fullWidth={true}
                        error={error}
                        variant={jsonConfig.variant}
                        label={jsonConfig.label}
                        name={jsonConfig.name}
                        type={
                          jsonConfig.data_type === "Integer" ? "number" : "String"
                        }
                        onChange={onHandleChange}
                        helperText={ageHelperText}
                      />
                    ) : jsonConfig.html_element === "TextArea" ? (
                      <div>
                        <TextareaAutosize
                          className="textArea"
                          name={jsonConfig.name}
                          label={jsonConfig.label}
                          variant={jsonConfig.variant}
                          minRows={jsonConfig.minRows}
                          placeholder={jsonConfig.placeholder}
                          onChange={onHandleChange}
                        />
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {helperTextAddress}
                        </div>
                      </div>
                    ) : jsonConfig.html_element === "Select" ? (
                      <Autocomplete
                        id="combo-box-demo"
                        options={jsonConfig.options}
                        getOptionLabel={(option) => option.label}
                        // style={{ width: 300 }}
                        onChange={onSelectCountry}
                        renderInput={(params) => (
                          <TextField
                            name={jsonConfig.name}
                            helperText={helperText}
                            error={error}
                            {...params}
                            label={jsonConfig.label}
                            variant={jsonConfig.variant}
                          />
                        )}
                      />
                    ) : jsonConfig.html_element === "multiple" ? (
                      <Autocomplete
                        id="combo-box-demo"
                        multiple
                        options={jsonConfig.options}
                        onChange={onSelectHobby}
                        getOptionLabel={(option) => option.label}
                        // style={{ width: 300 }}

                        renderInput={(params) => (
                          <TextField
                            {...params}
                            helperText={helperText}
                            error={error}
                            label={data.label}
                            variant={data.variant}
                          />
                        )}
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                );
              })}
              {item.feilds2.map((jsonConfig) => {
                return (
                  <Grid item xs={12} sm={8}>
                    {
                      <Grid item xs={12} sm={12}>
                        {
                          <div>
                            <Grid item xs={12} sm={12}>
                              <strong>{jsonConfig.section_title3}</strong>
                            </Grid>
                            <Grid item xs={12} sm={12} className="flex">
                              {jsonConfig.checkFeilds
                                ? jsonConfig.checkFeilds.map((checkdata) => {
                                    return (
                                      <Grid item xs={12} sm={12}>
                                        <label>{checkdata.label}</label>
                                        <Checkbox
                                          onChange={likeEvent}
                                          value={checkdata.value}
                                          checked={checkdata.checked}
                                          defaultChecked={
                                            checkdata.defaultChecked
                                          }
                                          inputProps={{
                                            "aria-label": "primary checkbox",
                                          }}
                                        />
                                      </Grid>
                                    );
                                  })
                                : ""}
                            </Grid>
                          </div>
                        }
                      </Grid>
                    }
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
        <Button
          type="submit"
          variant="contained"
          id="sub"
          className="submit"
          gutterBottom
          onSubmit={submitForm}
          color="primary"
          style={{ padding: "0 auto" }}
        >
          Submit
        </Button>
        <div>
          {console.log("errorr", selectCountry)}
          {show ? (
            <TableContainer
              component={Paper}
              gutterBottom
              style={{ margin: "20px 10px" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Age</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Country</TableCell>
                    {/* <TableCell align="center">Hobby</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableValues?.map((person) => {
                    console.log({ person }, "hello");
                    return (
                      <TableRow>
                        <TableCell align="center">{person.name}</TableCell>
                        <TableCell align="center">{person.age}</TableCell>
                        <TableCell align="center">{person.address}</TableCell>
                        <TableCell align="center">{person.phone}</TableCell>
                        <TableCell align="center">{person.country}</TableCell>
                        {/* <TableCell align="center">{se}</TableCell> */}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            ""
          )}
          
        </div>

        {/* <Button type='reset' variant='contained' color='primary'style={{padding:"0 auto",margin:"10px"}}>Reset</Button> */}
      </form>
      
      </Grid>
      <section>
      <AceEditor
    mode="json"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    value={JSON.stringify(jsonConfig,null,2)}
  />
      </section>
      
    </div>
  );
}
