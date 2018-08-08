import React from 'react';

export default function Alert(): React.Node {
  return (
    <alertTemplate>
      <title>Update Available</title>
      <description>Get the latest tvOS version</description>
      <button>
        <text>Update Now</text>
      </button>
      <button>
        <text>Cancel</text>
      </button>
    </alertTemplate>
  );
}
