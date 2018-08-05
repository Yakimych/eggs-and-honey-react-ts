import * as React from 'react';
import PropTypes from 'prop-types';

type SpanOrEmptyProps = {
  value?: string
}

const SpanOrEmpty = (props: SpanOrEmptyProps) =>
  props.value ? (<span className="col">{props.value}</span>) : null;

SpanOrEmpty.propTypes = {
  value: PropTypes.string
};

export default SpanOrEmpty;