/* eslint-disable react/no-danger */
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';

const CommunityEvents = ({ getCommunityEventsRequest }) => {
  const { getCommunityEvents, loading, error } = getCommunityEventsRequest;
  if (error) {
    return <p className="text-red">Error occured while fetching events.</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (!getCommunityEvents.length) {
    return <p>No events found for this community. Do you want to create one?</p>;
  }

  return (
    <div className="w-full flex flex-wrap">
      {getCommunityEvents.map(event => {
        const isPassed = moment().diff(moment(event.timeEnd, moment.defaultFormat)) > 0;
        const isOngoing =
          moment().diff(moment(event.timeStart, moment.defaultFormat)) > 0 &&
          moment().diff(moment(event.timeEnd, moment.defaultFormat)) < 0;

        let label = 'upcoming';
        if (isPassed) {
          label = 'passed';
        } else if (isOngoing) {
          label = 'ongoing';
        }

        return (
          <div key={event.uuid} className="border-2 text-center p-4 w-112">
            <p>
              {event.title} (status: {label})
            </p>
            <p>{event.timeStart}</p>
            <p>{event.timeEnd}</p>
            <p>{event.venueName}</p>
            <p>{event.location}</p>
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
        );
      })}
    </div>
  );
};

CommunityEvents.propTypes = {
  getCommunityEventsRequest: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool,
    mostActiveMembers: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUploadUuid: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        lastSeenAt: PropTypes.string,
        location: PropTypes.string,
        uuid: PropTypes.string,
      }),
    ),
  }),
};

export default CommunityEvents;
