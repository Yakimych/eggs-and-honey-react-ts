import * as React from 'react';

type SpanOrEmptyProps = {
  value?: string
}

const SpanOrEmpty = (props: SpanOrEmptyProps) =>
  props.value ? (<span className="col">{props.value}</span>) : null;

export default SpanOrEmpty;