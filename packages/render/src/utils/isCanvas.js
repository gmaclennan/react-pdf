import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isCanvas = R.propEq('type', P.Canvas);

export default isCanvas;
