import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import { FETCH_POPULAR_COMMUNITIES } from '@/api/apollo-requests';
import FeaturedCommunities from '@/components/pages/home/featured-communities';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(graphql(FETCH_POPULAR_COMMUNITIES, { name: 'popularCommunitiesRequest' })(FeaturedCommunities));
