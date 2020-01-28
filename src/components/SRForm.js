import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import QuestionContext from "../provider/question";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : "Required");

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ form: { touched, errors } }) =>
      touched[name] && errors[name] ? (
        <span className="form__error">{errors[name]}</span>
      ) : null
    }
  />
);

class ButtonParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }
  render() {
    return (
      <ButtonChild
        className={this.state.condition ? "toggled" : "hide"}
        toggleClassName={this.handleClick}
      >
        Add a secondary phone number, such as a home phone or other landline
        number.
      </ButtonChild>
    );
  }
}

class ButtonChild extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <a onClick={this.props.toggleClassName} href="#">
          {this.props.children}
        </a>
        <Field name="mobile" component="input" type="text" />
      </div>
    );
  }
}

const SRForm = ({ history }) => {
  const [questions, setQuestions] = React.useContext(QuestionContext);
  return (
    <div className="SRForm">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          mobile: "",
          postcode: "",
          email: "",
          language: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Please include both your first and last name.")
            .matches(/[\S]+\s.+/, {message: "Please include both your first and last name.", excludeEmptyString: false})
            .required("Please include both your first and last name."),
          postcode: Yup.string()
            .min(5, "Please check the postcode you have entered is correct.")
            .matches(/^(GIR 0AA|[A-PR-UWYZ]([A-HK-Y]([0-9][A-Z]?|[1-9][0-9])|[1-9]([0-9]|[A-HJKPSTUW])?) ?[0-9][ABD-HJLNP-UW-Z]{2})$/ig, {message: "Please check the postcode you have entered is correct.", excludeEmptyString: false})
            .required("Please check the postcode you have entered is correct."),
          language: Yup.string().required("Required"),
          phone: Yup.string()
            .min(8, "Please check the number you have entered is correct.")
            .matches(/[0-9_-\s]+/, {message: "Please check the number you have entered is correct.", excludeEmptyString: false})
            .required("Please check the number you have entered is correct."),
          mobile: Yup.string()
            .min(8, "Please check the number you have entered is correct.")
            .matches(/[0-9_-\s]+/, {message: "Please check the number you have entered is correct.", excludeEmptyString: false}),
          email: Yup.string()
            .email("Please check the email address you have entered is correct.")
        })}
        onSubmit={(values, actions) => {
          sleep(300).then(async () => {
            //window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            const finalResponse = {
              ...questions,
              ...{
                selfReferral: {
                  ...values,
                  lastName: ""
                }
              }
            };
            setQuestions(finalResponse);
            try {
              const result = await (await fetch(
                "/api/sgs",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8"
                  },
                  body: JSON.stringify(finalResponse)
                }
              )).json();
              console.log("result", result);
              history.push({
                pathname: "/sr-received",
                state: finalResponse
              });
            } catch (e) {
              console.log("e", e);
            }
          });
        }}
        render={props => (
          <form className="form" onSubmit={props.handleSubmit}>
            <h2 className="form__title has-text-centered title is-2">
              Speak with a dementia adviser
            </h2>
            <p className="form__intro">
              We just need a few details to set up your call.
            </p>
            <div className="form__element">
              <label htmlFor="name">
                Your first and last name (<span className="req">*</span>
                required)
              </label>
              <Field
                name="name"
                component="input"
                type="text"
                validate={required}
                required
              />
              <Error name="name" />
            </div>
            <div className="form__element">
              <label htmlFor="phone">
                Your phone number (<span className="req">*</span>required)
              </label>
              <p className="form__element-description">
                A mobile number can help us to reach you first time.
              </p>
              <Field
                name="phone"
                component="input"
                type="text"
                validate={required}
                required
              />
              <Error name="phone" />
              <ButtonParent />
            </div>
            <div className="form__element">
              <label htmlFor="postcode">
                Your postcode (<span className="req">*</span>required)
              </label>
              <p className="form__element-description">
                This helps the adviser to find services in your area.
              </p>
              <Field
                name="postcode"
                component="input"
                type="text"
                validate={required}
                required
              />
              <Error name="postcode" />
            </div>
            <div className="form__element">
              <label htmlFor="email">Email (optional)</label>
              <p className="form__element-description">
                This helps us set up your call and support you.
              </p>
              <Field
                name="email"
                component="input"
                type="email"
              />
              <Error name="email" />
            </div>
            <div className="form__element form__radio">
              <label htmlFor="options">
                Your preferred language (<span className="req">*</span>required)
              </label>
              <p className="form__element-description">
                If you are in Wales, you can get a call from our Welsh speaking
                advisors.
              </p>
              <div className="form__option">
                <Field
                  type="radio"
                  id="language1"
                  name="language"
                  value="English"
                  required
                />
                <label className="form__radio-label" htmlFor="language1">
                  English
                </label>
              </div>
              <div className="form__option">
                <Field
                  type="radio"
                  id="language2"
                  name="language"
                  value="Welsh"
                />
                <label className="form__radio-label" htmlFor="language2">
                  Cymraeg (Welsh)
                </label>
              </div>
            </div>
            <div className="form__consent">
              <h1 className="title is-5">Consent for your call</h1>
              <p>
                By continuing this form, you confirm that you understand
                Alzheimer's Society will be sent details about the information
                you entered and content you viewed. This is to support your
                phone call with a dementia adviser.
              </p>
              <p>
                Alzheimer's Society promise never to sell or share your data
                with anyone. All information and data will be stored in
                accordance to our organisation's data privacy and GDPR
                guidelines.
              </p>
              <p>&nbsp;</p>
            </div>
            <div className="form__buttons">
              <button
                type="submit"
                className="button"
                disabled={!props.dirty || !props.isValid}
              >
                Request a call
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SRForm;
