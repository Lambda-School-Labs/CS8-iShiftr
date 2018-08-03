import React, { Component } from 'react';
import {CardText} from 'reactstrap';
import moment from 'moment';
import '../css/employee.css';

class Employee extends Component {
  constructor(props){
    super(props)
    this.state= {
      employee: '',
      isDisabled: false
    }
  }

  onDelete = () => {
    this.props.onDelete(this.props.employee._id)
  }

  onEdit = (id) => {
    this.props.onEdit(this.props.employee._id);
    this.setState({
      isDisabled: true
    })
  }

  componentDidMount(){
    this.setState({
      employee: this.props.employee
    })
  }

  render() {
    return (
      <div className = 'px-2'>       
            <div body outline color="primary" className ='card p-4 border border-dark rounded'>
                  <div className = 'icons'>
                    <div onClick={this.onEdit}>
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div onClick={this.onDelete}>
                      <i className="far fa-trash-alt "></i>
                    </div>                
                  </div>
                <CardText>
                  <form>
                  <input className ='font-weight-bold my-0'>{this.props.employee.firstName} {this.props.employee.lastName}</input>
                  <input className ='my-0'>{this.props.employee.email}</input>
                  <input className ='my-0'>{this.props.employee.phoneNumber}</input>
                  </form>                  
                </CardText>
                <form>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>{this.props.employee.availability}</p>
                        <p>{this.props.employee.availableHours}</p>
                    </fieldset>
                    <fieldset className='fieldset px-2'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <div>


                          {moment(this.state.employee.timeOffDate).format('LL')}  <input className = 'ml-2' type="checkbox" name="vehicle" value="coming form state" /><span className = 'ml-2'>Approved</span><br/>
                          July 20th:  <input className = 'ml-2' type="checkbox" name="vehicle" value="coming from state" /><span className = 'ml-2'>Approved</span>                            
                        
                        </div>                                               
                    </fieldset>
                </form>
            </div>
      </div>  
    )    
  }
}

export default Employee;
