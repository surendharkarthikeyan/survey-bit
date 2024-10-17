import React, { useState } from "react";
import { TextField, IconButton, Button, Checkbox, FormControlLabel } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import "./SurveyForm.css"; // Import your CSS file


const SurveyForm = () => {
  const [questions, setQuestions] = useState([
    { questionText: "", options: [{ optionText: "" }], required: false }
  ]);

  // Add a new question
  const addQuestion = () => {
    setQuestions([...questions, { questionText: "", options: [{ optionText: "" }], required: false }]);
  };

  // Remove a question
  const removeQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  // Add an option to a specific question
  const addOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push({ optionText: "" });
    setQuestions(newQuestions);
  };

  // Remove an option from a specific question
  const removeOption = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.splice(oIndex, 1);
    setQuestions(newQuestions);
  };

  // Handle input for questions
  const handleQuestionText = (text, qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].questionText = text;
    setQuestions(newQuestions);
  };

  // Handle input for options
  const handleOptionText = (text, qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex].optionText = text;
    setQuestions(newQuestions);
  };

  // Handle required toggle
  const toggleRequired = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].required = !newQuestions[qIndex].required;
    setQuestions(newQuestions);
  };

  return (
    <div className="survey-form">
      <h2>Create New Survey</h2>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="question-block">
          <TextField
            label={`Question ${qIndex + 1}`}
            variant="outlined"
            fullWidth
            value={question.questionText}
            onChange={(e) => handleQuestionText(e.target.value, qIndex)}
            style={{ marginBottom: "10px" }}
          />

          {question.options.map((option, oIndex) => (
            <div key={oIndex} className="option-block" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <TextField
                label={`Option ${oIndex + 1}`}
                variant="outlined"
                value={option.optionText}
                onChange={(e) => handleOptionText(e.target.value, qIndex, oIndex)}
                style={{ flex: 1 }}
              />
              <IconButton onClick={() => removeOption(qIndex, oIndex)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          ))}

          <Button
            variant="text"
            startIcon={<AddCircleIcon />}
            onClick={() => addOption(qIndex)}
          >
            Add Option
          </Button>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={question.required}
                  onChange={() => toggleRequired(qIndex)}
                />
              }
              label="Required"
            />

            <div>
              <IconButton>
                <AddPhotoAlternateIcon />
              </IconButton>
              <IconButton>
                <TextFieldsIcon />
              </IconButton>
            </div>
          </div>

          <IconButton onClick={() => removeQuestion(qIndex)} aria-label="delete-question" style={{ marginTop: "10px" }}>
            <DeleteIcon /> Delete Question
          </IconButton>
          <hr style={{ margin: "20px 0" }} />
        </div>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={addQuestion}
        startIcon={<AddCircleIcon />}
      >
        Add Question
      </Button>
    </div>
  );
};

export default SurveyForm;
