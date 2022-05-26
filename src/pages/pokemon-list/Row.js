import React, { useEffect, useState } from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {FormattedMessage} from 'react-intl';


function Row(data) {

    console.log(data)
  

  return (
    <>
      <tr  >
          <th>{data.dat.id}</th>
          <th>{data.dat.ThumbnailImage}</th>
          <th>{data.dat.ThumbnailAltText}</th>
          <th>{data.dat.description}</th>
          <th>{data.dat.height}</th>
          <th>{data.dat.weight}</th>
          
          <th>{data.dat.type.map(e=>e)}</th>
      </tr>
    </>
  );
}

export default Row;
