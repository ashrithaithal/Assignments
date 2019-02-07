import React from "react"
import './style1.css'
class Form extends React.Component {
   state = {
       from_add:"",
       to_add:"",
       invoice_no:"",
       date:"",
       item1: "",
       quantity1:"",
       rate1:"",
       item2: "",
       quantity2:"",
       rate2:"",
       item3: "",
       quantity3:"",
       rate3:"",
       display : false
     }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({display : true}); }
      myFunction()
      {
        window.print();
      }
 render() {
   let {items} = this.state
   if(this.state.display){
     return(
      <div className="Certificate">
                <div>
                <h2>Kaleyra</h2>
                </div>
                <pre>  
                  <h3>Dollar Layout,<br></br>Phase 4, JP Nagar,<br></br> Bengaluru, Karnataka 560076</h3>
                  <h3 className="Date_Inum">Date:   <br></br> {this.state.date}</h3>
                  <h3 className="Date_Inum">Invoice number:   <br></br> {this.state.invoice_no}</h3>
                </pre>
                <hr></hr>
                <div>
                  <h3>Issuer: {this.state.from_add}</h3>
                  <h3>Client: {this.state.to_add}</h3>
                </div>
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                    <td>{this.state.item1}</td>
                    <td>{this.state.quantity1}</td>
                    <td>{this.state.rate1}</td>
                    <td>{this.state.rate1*this.state.quantity1}</td>
                    </tr>
                    <tr>
                    <td>{this.state.item2}</td>
                    <td>{this.state.quantity2}</td>
                    <td>{this.state.rate2}</td>
                    <td>{this.state.rate2*this.state.quantity2}</td>
                    </tr>
                    <tr>
                    <td>{this.state.item3}</td>
                    <td>{this.state.quantity3}</td>
                    <td>{this.state.rate3}</td>
                    <td>{this.state.rate3*this.state.quantity3}</td>
                    </tr>
                  </table>
                  <br></br>
                <button onClick={()=>this.myFunction()}>Print this</button>
      </div>
     );
   }
   return (

    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
       <label htmlFor="From_add">From</label> <br></br>
       <input type="text" name="from_add" id="from_add" placeholder="Enter the from address"/> <br></br>
       <label htmlFor="to_add">To</label> <br></br>
       <input type="text" name="to_add" id="to_add" placeholder="Enter the to address" /> <br></br>
       <label htmlFor="invoice_no">Invoice Number</label> <br></br>
       <input type="number" name="invoice_no" id="invoice_no" /><br></br>
       <label htmlFor="date">Date</label> <br></br>
       <input type="date" name="date" id="date" /><br></br>
       <label htmlFor="Item1">
       <span>Item1</span>
       <input type="text" name="item1" id="item1" placeholder="Enter Item"/>
       </label>
       <label htmlFor="Quantity1">
       <span>Quantity1</span>
       <input type="text" name="quantity1" id="quantity1" placeholder="Enter quantity"/>
       </label> 
       <label htmlFor="Rate1">
       <span>Rate1</span>
       <input type="text" name="rate1" id="rate1" placeholder="Enter rate"/>
       </label> 
       <br></br>
       <label htmlFor="Item2">
       <span>Item2</span>
       <input type="text" name="item2" id="item2" placeholder="Enter Item"/>
       </label>
       <label htmlFor="Quantity2">
       <span>Quantity2</span>
       <input type="text" name="quantity2" id="quantity2" placeholder="Enter quantity"/>
       </label> 
       <label htmlFor="Rate2">
       <span>Rate2</span>
       <input type="text" name="rate2" id="rate2" placeholder="Enter rate"/>
       </label> 
       <br></br>
       <label htmlFor="Item3">
       <span>Item3</span>
       <input type="text" name="item3" id="item3" placeholder="Enter Item"/>
       </label>
       <label htmlFor="Quantity3">
       <span>Quantity3</span>
       <input type="text" name="quantity3" id="quantity3" placeholder="Enter quantity"/>
       </label> 
       <label htmlFor="Rate3">
       <span>Rate3</span>
       <input type="text" name="rate3" id="rate3" placeholder="Enter rate"/>
       </label> 
       <br></br>
       <input type="submit" value="Submit" />
     </form>
   )
   }
}
export default Form