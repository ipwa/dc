import React from "react";
import { Formik, Field } from "formik";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import PageTen from "./PageTen";
import { DATA_QUESTIONS, getAnswerAndQuestion } from "../utils/constants";
import QuestionContext from "../provider/question";

const CheckBoxGroup = ({
  value,
  label,
  className,
  children,
  id,
  onChange,
  onBlur
}) => {
  const handleChange = e => {
    const target = e.currentTarget;
    let valueArray = [...value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }
    onChange(id, valueArray.sort());
  };
  const handleBlur = () => {
    // take care of touched
    onBlur(id, true);
  };
  return (
    <div>
      <h2 className="form__title has-text-centered title is-2">{label}</h2>
      <div className="form__element form__radio">
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            field: {
              value: value.includes(child.props.id),
              onChange: handleChange,
              onBlur: handleBlur
            }
          });
        })}
      </div>
    </div>
  );
};

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div className="form__option">
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className="form__checkbox-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div className="form__option">
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label className="form__radio-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  return (
    <div>
      <h2 className="form__title has-text-centered title is-2">{label}</h2>
      <div className="form__element form__radio">{children}</div>
    </div>
  );
};

const FirstQuestion = ({ values, errors, touched }) => {
  return (
    <div>
      <RadioButtonGroup
        id="firstQuestion"
        label={DATA_QUESTIONS["firstQuestion"]["A1"].label}
        value={values}
        error={errors}
        touched={touched}
      >
        {DATA_QUESTIONS["firstQuestion"]["A1"].questions.map(
          (question, idx) => (
            <Field
              key={`firstQuestion${idx}`}
              component={RadioButton}
              name="firstQuestion"
              id={question.value}
              label={question.label}
            />
          )
        )}
      </RadioButtonGroup>
    </div>
  );
};

const SecondQuestion = ({ values, errors, touched, response }) => {
  return (
    <div>
      <RadioButtonGroup
        id="secondQuestion"
        label={DATA_QUESTIONS["secondQuestion"][response.firstQuestion].label}
        value={values}
        error={errors}
        touched={touched}
      >
        {DATA_QUESTIONS["secondQuestion"][response.firstQuestion].questions.map(
          (question, idx) => (
            <Field
              component={RadioButton}
              name="secondQuestion"
              id={`${question.value}`}
              label={question.label}
              key={`SecondQuestionLeft${idx}`}
            />
          )
        )}
      </RadioButtonGroup>
    </div>
  );
};

const SecondPartQuestion = ({ values, errors, touched, response }) => {
  return (
    <div>
      <RadioButtonGroup
        id="secondPartQuestion"
        label={
          DATA_QUESTIONS["secondPartQuestion"][response.firstQuestion].label
        }
        value={values}
        error={errors}
        touched={touched}
      >
        {DATA_QUESTIONS["secondPartQuestion"][
          response.firstQuestion
        ].questions.map((question, idx) => (
          <Field
            key={question.label}
            component={RadioButton}
            name="secondPartQuestion"
            id={`${question.value}`}
            label={question.label}
          />
        ))}
      </RadioButtonGroup>
    </div>
  );
};

const ThirdQuestion = ({
  values,
  errors,
  touched,
  response,
  setFieldValue,
  setFieldTouched
}) => {
  if (response.firstQuestion === "A1") {
    return (
      <div>
        <CheckBoxGroup
          id="thirdQuestion"
          label={DATA_QUESTIONS["thirdQuestion"][response.firstQuestion].label}
          value={values["thirdQuestion"]}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
        >
          {DATA_QUESTIONS["thirdQuestion"][
            response.firstQuestion
          ].questions.map((question, idx) => (
            <Field
              key={question.label}
              component={Checkbox}
              name="thirdQuestion"
              id={question.value}
              label={question.label}
            />
          ))}
        </CheckBoxGroup>
      </div>
    );
  }
  return (
    <div>
      <RadioButtonGroup
        id="thirdQuestion"
        label={DATA_QUESTIONS["thirdQuestion"][response.firstQuestion].label}
        value={values}
        error={errors}
        touched={touched}
      >
        {DATA_QUESTIONS["thirdQuestion"][response.firstQuestion].questions.map(
          (question, idx) => (
            <Field
              key={question.label}
              component={RadioButton}
              name="thirdQuestion"
              id={question.value}
              label={question.label}
            />
          )
        )}
      </RadioButtonGroup>
    </div>
  );
};

const FourthQuestion = ({
  values,
  errors,
  touched,
  response,
  setFieldValue,
  setFieldTouched
}) => {
  return (
    <div>
      <CheckBoxGroup
        id="fourthQuestion"
        label={DATA_QUESTIONS["fourthQuestion"][response.thirdQuestion].label}
        value={values["fourthQuestion"]}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
      >
        {DATA_QUESTIONS["fourthQuestion"][response.thirdQuestion].questions.map(
          (question, idx) => (
            <Field
              key={question.label}
              component={Checkbox}
              name="fourthQuestion"
              id={question.value}
              label={question.label}
            />
          )
        )}
      </CheckBoxGroup>
    </div>
  );
};

function SGSForm() {
  const [response, setResponse] = React.useState({
    firstQuestion: "",
    secondQuestion: "",
    secondPartQuestion: "",
    thirdQuestion: [],
    fourthQuestion: []
  });
  const [questions, setQuestions] = React.useContext(QuestionContext);
  const [finalResponse, setFinalResponse] = React.useState(null);
  return (
    <React.Fragment>
      <FormWizard
        initialValues={response}
        onSubmit={values => {
          // alert("xd")
          const { result, response: resultMapped } = getAnswerAndQuestion(
            values
          );
          //alert(JSON.stringify(result, null, 2))
          console.log("values onSubmit", result);
          setQuestions({
            ...questions,
            ...resultMapped
          });
          setFinalResponse(resultMapped);
        }}
      >
        <FirstQuestion
          response={response}
          state={"firstQuestion"}
          isLast={values => false}
          onPageSubmit={values => {
            setResponse({
              ...response,
              firstQuestion: values.firstQuestion
            });
          }}
        />
        <SecondQuestion
          response={response}
          state={"secondQuestion"}
          isLast={values => {
            return (
              (response.firstQuestion === "A1" &&
                values.secondQuestion === "A1") ||
              (response.firstQuestion === "A1" &&
                values.secondQuestion === "A2") ||
              (response.firstQuestion === "A2" &&
                values.secondQuestion === "A1") ||
              (response.firstQuestion === "A2" &&
                values.secondQuestion === "A2")
            );
          }}
          onPageSubmit={(values, setStatus, onSubmit) => {
            if (
              response.firstQuestion === "A1" &&
              values.secondQuestion === "A1"
            ) {
              onSubmit(values);
              setStatus({ success: "page1" });
            } else if (
              response.firstQuestion === "A1" &&
              values.secondQuestion === "A2"
            ) {
              onSubmit(values);
              setStatus({ success: "page2" });
            } else if (
              response.firstQuestion === "A2" &&
              values.secondQuestion === "A1"
            ) {
              onSubmit(values);
              setStatus({ success: "page5" });
            } else if (
              response.firstQuestion === "A2" &&
              values.secondQuestion === "A2"
            ) {
              onSubmit(values);
              setStatus({ success: "page6" });
            } else {
              setResponse({
                ...response,
                secondQuestion: values.secondQuestion
              });
            }
          }}
        />
        <SecondPartQuestion
          response={response}
          state={"secondPartQuestion"}
          isLast={values => {
            return (
              (response.firstQuestion === "A1" &&
                response.secondQuestion === "A3") ||
              (response.firstQuestion === "A2" &&
                response.secondQuestion === "A3")
            );
          }}
          onPageSubmit={(values, setStatus, onSubmit) => {
            if (
              response.firstQuestion === "A1" &&
              response.secondQuestion === "A3"
            ) {
              onSubmit(values);
              setStatus({ success: "page3" });
            } else if (
              response.firstQuestion === "A2" &&
              response.secondQuestion === "A3"
            ) {
              onSubmit(values);
              setStatus({ success: "page7" });
            } else {
              setResponse({
                ...response,
                secondPartQuestion: values.secondPartQuestion
              });
            }
          }}
        />
        <ThirdQuestion
          response={response}
          state={"thirdQuestion"}
          isLast={values => {
            return (
              (response.firstQuestion === "A1" &&
                response.secondQuestion === "A4" &&
                values.thirdQuestion) ||
              (response.firstQuestion === "A2" &&
                response.secondQuestion === "A4" &&
                values.thirdQuestion === "A3")
            );
          }}
          onPageSubmit={(values, setStatus, onSubmit) => {
            if (
              response.firstQuestion === "A1" &&
              response.secondQuestion === "A4" &&
              values.thirdQuestion
            ) {
              onSubmit(values);
              setStatus({ success: "page4" });
            } else if (
              response.firstQuestion === "A2" &&
              response.secondQuestion === "A4" &&
              values.thirdQuestion === "A3"
            ) {
              onSubmit(values);
              setStatus({ success: "page8" });
            } else {
              setResponse({
                ...response,
                thirdQuestion: values.thirdQuestion
              });
            }
          }}
        />
        <FourthQuestion
          response={response}
          state={"fourthQuestion"}
          isLast={values => {
            return (
              (response.firstQuestion === "A2" &&
                response.secondQuestion === "A4" &&
                response.thirdQuestion === "A1") ||
              (response.firstQuestion === "A2" &&
                response.secondQuestion === "A4" &&
                response.thirdQuestion === "A2")
            );
          }}
          onPageSubmit={(values, setStatus, onSubmit) => {
            if (
              response.firstQuestion === "A2" &&
              response.secondQuestion === "A4" &&
              response.thirdQuestion === "A1"
            ) {
              onSubmit(values);
              setStatus({ success: "page9" });
            } else if (
              response.firstQuestion === "A2" &&
              response.secondQuestion === "A4" &&
              response.thirdQuestion === "A2"
            ) {
              onSubmit(values);
              setStatus({ success: "page10" });
            } else {
              console.log("error");
            }
            setResponse({
              ...response,
              fourthQuestion: values.fourthQuestion
            });
          }}
        />
      </FormWizard>
    </React.Fragment>
  );
}

function FormWizard(props) {
  const { children, onSubmit, initialValues } = props;
  const [page, setPage] = React.useState(0);
  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;
  const previous = setFieldValue => () => {
    if (activePage.props.state) {
      setFieldValue(activePage.props.state, "");
    }
    setPage(Math.max(page - 1, 0));
  };

  const next = () => {
    setPage(Math.min(page + 1, children.length - 1));
  };
  const onHandleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    if (activePage.props.onPageSubmit) {
      activePage.props.onPageSubmit(values, setStatus, onSubmit);
    }
    /* if (isLastPage) {
      onSubmit(values);
      return;
    } */
    setSubmitting(false);
    next();
  };
  return (
    <Formik
      onSubmit={onHandleSubmit}
      initialValues={initialValues}
      render={({
        values,
        errors,
        status,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched
      }) => {
        return (
          <div>
            <form className="form" onSubmit={handleSubmit}>
              {!status && (
                <React.Fragment>
                  {React.cloneElement(activePage, {
                    setFieldValue,
                    setFieldTouched,
                    values,
                    errors
                  })}
                  {page > 0 && (
                    <button
                      type="button"
                      className="button"
                      onClick={previous(setFieldValue)}
                    >
                      {"< Previous question"}
                    </button>
                  )}
                  <button
                    type="submit"
                    className="button"
                    disabled={
                      values[activePage.props.state].length === 0 ||
                      isSubmitting
                    }
                  >
                    {activePage.props.isLast(values)
                      ? "Finish"
                      : "Next question >"}
                  </button>
                </React.Fragment>
              )}
            </form>
            <div>
              {!!status && !!status.success && status.success === "page1" && (
                <PageOne values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page2" && (
                <PageTwo values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page3" && (
                <PageThree values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page4" && (
                <PageFour values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page5" && (
                <PageFive values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page6" && (
                <PageSix values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page7" && (
                <PageSeven values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page8" && (
                <PageEight values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page9" && (
                <PageNine values={getAnswerAndQuestion(values).result} />
              )}
              {!!status && !!status.success && status.success === "page10" && (
                <PageTen values={getAnswerAndQuestion(values).result} />
              )}
            </div>
          </div>
        );
      }}
    />
  );
}

export default SGSForm;
