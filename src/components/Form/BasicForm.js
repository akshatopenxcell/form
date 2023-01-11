import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFile from "../../hooks/useFile";
import useInput from "../../hooks/useInput";
import Card from "../UI/Card";
import { getImageSize } from "react-image-size";
import AppContext from "../../context/app-context";

const BasicForm = (props) => {
  const history = useHistory();
  const appCtx = useContext(AppContext);

  const validateUserName = (userName) => {
    return /^[A-Za-z_]*$/.test(userName);
  };

  var validateInputImage = (image) => {
    const maxSize = 2 * 1024 * 1024;
    if (!image) {
      return false;
    }
    if (image.size > maxSize) {
      return false;
    }

    //Dimension check start
    // const { width, height } =  await getImageSize(image.name);
    //    const path = (window.URL || window.webkitURL).createObjectURL(image);
    //     console.log(path)
    // let dimentionNotMatch=true;
    // const { width, height } =  getImageSize(image.);
    // if (height > 100 || width > 100) {
    //     dimentionNotMatch=false;
    //     return false;
    // }
    // if (!dimentionNotMatch) {
    //     return false;
    // }
    //Dimension check end

    // const fileExtension = image.name.split(".").at(-1);
    // const allowedFileTypes = ["jpg", "png"];
    // if (!allowedFileTypes.includes(fileExtension)) {
    //     window.alert(`File does not support. Files type must be ${allowedFileTypes.join(", ")}`);
    //     return ;
    // }

    return true;
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurhandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUserName,
    isValid: enteredUserNameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurhandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => validateUserName(value));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurhandler: passwordBlurHandler,
    reset: resetlPasswordInput,
  } = useInput((value) => value.length >= 8);

  const {
    value: enteredImage,
    isValid: enteredImageIsValid,
    hasError: imageInputHasError,
    valueChangeHandler: imageChangeHandler,
    inputBlurhandler: imageBlurHandler,
    reset: resetlImageInput,
  } = useFile((value) => validateInputImage(value));

  const [enteredMandotoryFields, setEnteredMandotoryFields] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (
      enteredName.length === 0 &&
      enteredUserName.length === 0 &&
      enteredPassword.length === 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
      } else {
        setEnteredMandotoryFields(false);
      }
    }
    if (
      enteredName.length === 0 &&
      enteredUserName.length === 0 &&
      enteredPassword.length !== 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("Name,UserName  is Required");
      }
    }
    if (
      enteredName.length === 0 &&
      enteredUserName.length !== 0 &&
      enteredPassword.length === 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
        setErrorMessage("Password and Image is Required");
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("Password  is Required");
      }
    }

    if (
      enteredName.length !== 0 &&
      enteredUserName.length === 0 &&
      enteredPassword.length === 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("UserName,Password  is Required");
      }
    }

    if (
      enteredName.length !== 0 &&
      enteredUserName.length === 0 &&
      enteredPassword.length !== 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("UserName   is Required");
      }
    }
    if (
      enteredName.length !== 0 &&
      enteredUserName.length !== 0 &&
      enteredPassword.length === 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
        setErrorMessage("Password and Image is Required");
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("Password  is Required");
      }
    }
    if (
      enteredName.length !== 0 &&
      enteredUserName.length !== 0 &&
      enteredPassword.length > 0
    ) {
      if (!enteredImage) {
        setEnteredMandotoryFields(false);
        setErrorMessage("Image is Required");
      } else {
        setEnteredMandotoryFields(false);
        setErrorMessage("");
      }
    }
  }, [enteredName, enteredUserName, enteredPassword, enteredImage]);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredUserNameIsValid &&
    enteredPasswordIsValid &&
    enteredImageIsValid
  ) {
    formIsValid = true;
  }

  let nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  let usernameInputClasses = usernameInputHasError
    ? "form-control invalid"
    : "form-control";
  let passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";
  let imageInputClasses = imageInputHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setEnteredMandotoryFields(false);
      return;
    }
    setEnteredMandotoryFields(true);
    console.log(enteredName + " " + enteredUserName + " " + enteredPassword);

    appCtx.userLoggedIn = true;

    history.push("posts");

    resetNameInput();
    resetUsernameInput();
    resetlPasswordInput();
    resetlImageInput();
  };

  return (
    <Card>
      <form onSubmit={formSubmisionHandler}>
        <div className="control-group">
          <div className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className="error-text">Please Enter Name</p>
            )}
          </div>
        </div>

        <div className="control-group">
          <div className={usernameInputClasses}>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={enteredUserName}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
            />
            {usernameInputHasError && (
              <p className="error-text">
                Only alphabets and underscore allowed
              </p>
            )}
          </div>
        </div>

        <div className="control-group">
          <div className={passwordInputClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasError && (
              <p className="error-text">
                Password Must Contain Minimum 8 charcters
              </p>
            )}
          </div>
        </div>

        <div className="mb-1">
          Image <span className="font-css top">*</span>
          <div className={imageInputClasses}>
            <input
              type="file"
              id="file-input"
              name={enteredImage}
              onChange={imageChangeHandler}
              onBlur={imageBlurHandler}
            />
            {imageInputHasError && (
              <p className="error-text">Image Size Must be less then 2mb</p>
            )}
          </div>
        </div>

        <div >
          {!enteredMandotoryFields && (
            <p className="error-text">{ErrorMessage}</p>
          )}
          {/* <button disabled={!formIsValid}>Submit</button> */}
          <button id='submitlogin'>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default BasicForm;
