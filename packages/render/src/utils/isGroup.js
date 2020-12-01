import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isGroup = R.propEq('type', P.G);

export default isGroup;
