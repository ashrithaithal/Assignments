import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';


class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategoryOptionsChange = this.handleCategoryOptionsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getValidationStateDescription() {
    if(this.props.description.length === 0) return null;
    else if(this.props.description.length < 3) return 'error';
    else return 'success';
  }

  getValidationStateCategory(){
    if(this.props.description.length === 0) return null;
    else if(this.props.description.length < 3) return 'error';
    else return 'continue';
  }

  getValidationStateValue() {
    if(this.props.value.length === 0) return null;
    else if(isNaN(this.props.value)) return 'error';
    else return 'success';
  }

  handleCategoryChange(e){
    e.preventDefault();
    this.props.onCategory(e.target.value);
  }
  handleCategoryOptionsChange(e){
    e.preventDefault();
    this.props.onCategoryOptions(e.target.value);
  }
  handleDescriptionChange(e) {
    e.preventDefault();
    this.props.onDescription(e.target.value);
  }

  handleValueChange(e) {
    e.preventDefault();
    this.props.onValue(e.target.value);
  }
  handleTotalChange(e){
    e.preventDefault();
    this.props.onTotal(e.target);
  }

  handleStatusChange(e) {
    this.props.onStatus();
  }

  getValidation() {
    if(this.getValidationStateDescription() === 'error' || this.getValidationStateValue() === 'error') return false;
    else if(this.getValidationStateDescription() === null || this.getValidationStateValue() === null) return false;
    return true;
  }

  handleFormSubmit(e) {
    this.handleTotalChange(e);
    e.preventDefault();
    if(this.getValidation()) this.props.onForm();
    else {
      alert('Please, fill the fields correctly.');
    }
  }

  render() {
    return (
      <div className="expense-form">
        <h3>Expense Info</h3>
        <form onSubmit={this.handleFormSubmit}>
        <FormGroup
          controlId="category"
          //validationState={this.getValidationStateDescription()}
        >
          <ControlLabel>Category</ControlLabel>
          <FormControl
            type="text"
            value={this.props.category}
            placeholder="Mention Category"
            onChange={this.handleCategoryChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
           controlId="categoryOptions"
        >
        <ControlLabel> Category Options</ControlLabel>
        <FormControl
            type ="text"
            placeholder="Enter Basic, Utilities or Entertainment"
            value = {this.props.categoryOptions}
            onChange={this.handleCategoryOptionsChange}
        />
        <FormControl.Feedback />
        </FormGroup>

          <FormGroup
            controlId="description"
            validationState={this.getValidationStateDescription()}
          >
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              value={this.props.description}
              placeholder="Type something that describes the expense"
              onChange={this.handleDescriptionChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Must have at least 3 characters</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="value"
            validationState={this.getValidationStateValue()}
          >
            <ControlLabel>Value ($)</ControlLabel>
            <FormControl
              type="text"
              value={this.props.value}
              placeholder="Insert value"
              onChange={this.handleValueChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Must be a number</HelpBlock>
          </FormGroup>


          <Checkbox
            onClick={this.handleStatusChange}
            checked={this.props.status}
          >
            Is paid?
          </Checkbox>

          <Button
            type="submit"
          >
            Save
          </Button>

        </form>

      </div>
    );
  }
}

export default ExpenseForm;
