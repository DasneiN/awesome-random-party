import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';

class TimelineBio extends Component {
  render() {
    const { person } = this.props;

    return (
      <div className="timeline">
        <h2><Trans>TimelineBio</Trans></h2>
        <Timeline lineColor="#ddd">
          {
            person.biography.map(timePoint => (
              <TimelineItem
                key={uniqid()}
                dateText={timePoint.period}
                style={{ color: '#e86971' }}
              >
                <p>
                  {timePoint.information}
                </p>
              </TimelineItem>
            ))
          }
        </Timeline>
      </div>
    );
  }
}
export default TimelineBio;
