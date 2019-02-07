import React from "react"
import './style1.css'
import kaleyra_logo from './kaleyra_logo.png'

class Form2 extends React.Component {
  state = {
      items: [{item:"", quantity:"", rate:""}],
      from_add:"",
      to_add:"",
      invoice_no:"",
      date:"",
      display : false
    }
    addItem = (e) => {
        e.preventDefault();
       this.setState({
         items: [...this.state.items, {item:"", quantity:"", rate:""}],
       });
     }
     handleChange = (e) => {
        if (["item", "quantity","rate"].includes(e.target.className) ) {
          let items = [...this.state.items]
          items[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ items }, () => console.log(this.state.items))
        } else {
          this.setState({ [e.target.name]: e.target.value})
        }
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({display : true}); 
      }
        myFunction()
        {
         document.getElementById("print").style.visibility = "hidden";
          window.print();
        }
        createTable(v,id){
            return(
               <tr>
               <td>{id+1}</td>
               <td>{v.item}</td>
               <td>{v.quantity}</td>
               <td>{v.rate}</td>
               <td>{v.quantity*v.rate}</td>
               </tr>
            );
        }
        render() {
            let {items} = this.state
            if(this.state.display){
              return(
               <div className="Certificate">
                         <div>
                         <img src ={kaleyra_logo}/>
                         </div>
                         <hr></hr>
                         
                         <div class = "address">
                           Dollar Layout,<br></br>
                           Phase 4, JP Nagar,<br></br>
                           Bengaluru, Karnataka 560076<br></br>
                         </div>
                        <div class = "date"> Date: {this.state.date}<br></br>
                          Invoice number: {this.state.invoice_no}
                        </div>
                 
                         <div class="issuer">
                           Issuer: {this.state.from_add}<br></br>
                           Customer: {this.state.to_add}<br></br>
                           </div>
                           
                           <table>
                            
                              <tr>
                                  <th width = "10%">Sl. No.</th>
                                  <th width="60%">Item</th>
                                  <th width = "10%">Quantity</th>
                                  <th width = "10%">Rate</th>
                                  <th width = "10%">Total</th>
                              </tr>
                                  {
                                      items.map((val,id)=>this.createTable(val,id))
                                  }
                           </table>
                         
                         <button id ="print" onClick={()=>this.myFunction()}>Print this</button>
               </div>
              );
            }
              return (
<section class= "form-wrap">
<h1>Invoice Details</h1>

   <form id = "form" name = "form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <label htmlFor="From_add">From</label> <br></br>
      <textarea type="text" name="from_add" id="from_add" placeholder="Enter the from address"/> <br></br>
      <label htmlFor="to_add">To</label> <br></br>
      <textarea type="text" name="to_add" id="to_add" placeholder="Enter the to address" /> <br></br>
      <label htmlFor="invoice_no">Invoice Number</label> <br></br>
      <input type="number" name="invoice_no" id="invoice_no" /><br></br>
      <label htmlFor="date">Date</label> <br></br>
      <input type="date" name="date" id="date" /><br></br>

      <div class= "dynamic_input">
      {
        items.map((val, idx)=> {
          let itemId = `item-${idx}`, quantityId = `quantity-${idx}`, rateId = `rate-${idx}`
          return (
            <div key={idx}>
            <span class = "item">
              <label htmlFor={itemId}>{`Item #${idx + 1}`}</label>
              <input 
                type="text"
                name= {itemId} 
                data-id={idx} 
                id={itemId} 
                className="item"/>
            </span>
            <span class="item">
              <label htmlFor={quantityId}>Quantity</label>
              <input
                type="text"
                name={quantityId}
                data-id={idx}
                id={quantityId}
                className="quantity"

              />
            </span>
            <span class = "item"> 
              <label htmlFor={rateId}>Rate</label>
              <input
                type="text"
                name={rateId}
                data-id={idx}
                id={rateId}
                className="rate"
              />
            </span>
            </div>
            
          )
        })
      }
      </div>
      
      <button id="addButton" onClick = {this.addItem} >Add Item</button><br></br>
      


      <input type="submit" value="Submit" />
    </form>
    
    </section>
  )
  }
}
export default Form2