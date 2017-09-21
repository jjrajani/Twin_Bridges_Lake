import React from 'react';

export const JsonLd = ({ data }) =>
    <script type="applicatoin/ld+json">
        {JSON.stringify(data)}
    </script>;

export const JsonLdDangerous = ({ data }) =>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />;
