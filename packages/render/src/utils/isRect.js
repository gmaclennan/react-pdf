import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isRect = R.propEq('type', P.Rect);

export default isRect;
