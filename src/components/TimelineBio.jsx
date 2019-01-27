import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';

import '../styles/timeline.css';

class TimelineBio extends Component {
  render() {
    const { person } = this.props;

    return (
      <section className="person-page timeline">
        <h3 className="timeline-title"><Trans>TimelineBio</Trans></h3>
        <div id="timeline" className="timeline-container">
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
      </section>
    );
  }
}

export default TimelineBio;
