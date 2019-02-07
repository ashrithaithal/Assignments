import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';


import './style.css';


class ExpenseManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      category: '',
      categoryOptions:'',
      displayMenu: '',
      description: '',
      value: '',
      status: false,
      date: '',
      expenses: [],
      index: -1,
      total: 0,
    };



    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleCategoryOptions = this.handleCategoryOptions.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.handleForm = this.handleForm.bind(this);

    this.handleEdit = this.handleEdit.bind(this);
  }

  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }

  hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });

  }
  generateId() {
    return this.state.expenses.length + 1;
  }

  updateExpense() {
    this
    .state
    .expenses
    .splice(
              this.state.index,
              1,
              {
                id: this.state.id,
                categoryOptions: this.state.categoryOptions,
                category: this.state.category,
                description: this.state.description,
                value: this.state.value,
                status: this.state.status,
                date: this.state.date,
              }
            );
    this.setState({
      index: -1,
    });
  }

  newExpense() {
    this.state.expenses.push(
      {
        id: this.generateId(),
        categoryOptions: this.state.categoryOptions,
        category: this.state.category,
        description: this.state.description,
        value: this.state.value,
        status: this.state.status,
        date: Date.now(),
      }
    );
  }
  handleCategory(category) {
    this.setState({
      category: category,
    });
  }
  handleCategoryOptions(categoryOptions){
    this.setState({
      categoryOptions: categoryOptions,
    })
  }
  handleDescription(description) {
    this.setState({
      description: description,
    });
  }

  handleValue(value) {
    this.setState({
      value: value,
    });
  }

  handleTotal(value){
    var total = +this.state.total + +this.state.value
    this.setState({
      total:total
    })
  }
  handleStatus() {
    this.setState({
      status: !this.state.status,
    });
  }

  handleForm() {
    if(this.state.index === -1) {
      this.newExpense();
    } else {
      this.updateExpense();
    }
    this.setState({
      id: '',
      categoryOptions:'',
      category: '',
      description: '',
      value: '',
      status: false,
      date: ''
    });
  }

  handleEdit(id) {
    var index = this.state.expenses.findIndex((expense) => { return expense.id === id });
    this.setState({
      index: index,
    });
    var expense = this.state.expenses[index];
    this.setState({
      id: expense.id,
      categoryOptions: expense.categoryOptions,
      category: expense.category,
      description: expense.description,
      value: expense.value,
      status: expense.status,
      date: expense.date
    });
  }

  render() {
    return (
      <div className="container">
        <div className="expense-manager">
          <div className="row">
           <Col md={4}>
           <div  className="dropdown" style={{background:"red",width:"200px"}} >
             <div className="button" onClick={this.showDropdownMenu}> Select Category </div>
              { this.state.displayMenu ? (
             <ul>
              <li><a className="active" target={this.state.categoryOptions}>Basics</a></li>
              <li><a href="#Utilities">Utilities</a></li>
              <li><a href="#Entertainment">Entertainment</a></li>
              <li><a href="#Others">Others</a></li>
             </ul>
           ):
           (
             null
           )
           }
             </div>
           <div>
              <ExpenseForm
                displayMenu={this.state.displayMenu}
                categoryOptions={this.state.categoryOptions}
                category={this.state.category}
                description={this.state.description}
                value={this.state.value}
                status={this.state.status}
                total={this.state.total}
                onCategory={this.handleCategory}
                onCategoryOptions = {this.handleCategoryOptions}
                onDescription={this.handleDescription}
                onValue={this.handleValue}
                onStatus={this.handleStatus}
                onTotal={this.handleTotal}
                onForm={this.handleForm}
              />
              </div>
            </Col>
            <Col md={8}>
              <ExpenseTable
                expenses={this.state.expenses}
                onEdit={this.handleEdit}
                total={this.state.total}
              />
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseManager;
