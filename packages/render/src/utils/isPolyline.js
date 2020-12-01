import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isPolyline = R.propEq('type', P.Polyline);

export default isPolyline;
