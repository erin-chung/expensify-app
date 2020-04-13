import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,

    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({ calendarFocused }))
    }
    render(){
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input className="text-input" type="text" placeholder="Search expenses"
                        value={this.props.filters.text}
                        onChange={(e)=>{
                            this.props.dispatch(setTextFilter(e.target.value))
                        }} 
                    />
                </div>
                <div className="input-group__item">
                    <select className="select"
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                        this.props.dispatch( e.target.value==='amount' ? sortByAmount() : sortByDate() )
                    }}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                </div>
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpenseListFilters)