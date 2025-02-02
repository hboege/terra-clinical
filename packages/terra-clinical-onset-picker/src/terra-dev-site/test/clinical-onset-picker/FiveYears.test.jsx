import React from 'react';
import moment from 'moment';
import OnsetPicker from '../../../OnsetPicker';

class FiveYears extends React.Component {
  constructor(props) {
    super(props);

    // Lock date to September 20, 2016
    moment.now = () => new Date(2016, 8, 20);

    this.state = {
      precision: 'before',
      granularity: 'year',
      onsetDate: moment('2013-02-14').format('YYYY-MM-DD'),
    };

    this.handleOnset = this.handleOnset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnset(onsetObject) {
    this.setState({
      precision: onsetObject.precision,
      granularity: onsetObject.granularity,
      onsetDate: onsetObject.onsetDate,
      ageUnit: onsetObject.ageUnit,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      submittedData: {
        precision: prevState.precision,
        granularity: prevState.granularity,
        onsetDate: prevState.onsetDate,
        ageUnit: prevState.ageUnit,
      },
    }));
  }

  render() {
    return (
      <div>
        <p>Onset picker with onChange handlers, birthdate of 2011-09-20 (5 years).</p>
        <p>Current date is locked to September 20, 2016</p>
        <p>Testing returns from handlers are correct, if they are the json object should get updated on changes.</p>
        <p>Also tests age caps for months and years.</p>
        <form onSubmit={this.handleSubmit}>
          <OnsetPicker
            birthdate={moment('2011-09-20').format('YYYY-MM-DD')}
            granularity={this.state.granularity}
            id="test"
            legend="Date of Birth"
            precision={this.state.precision}
            onsetDate={this.state.onsetDate}
            onsetOnChange={this.handleOnset}
          />
          <button type="submit">Submit</button>
        </form>
        <p data-test-json>{JSON.stringify(this.state.submittedData, null, 2)}</p>
      </div>
    );
  }
}

export default FiveYears;
