import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isLine = R.propEq('type', P.Line);

export default isLine;
