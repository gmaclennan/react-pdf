import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isTextInstance = R.propEq('type', P.TextInstance);

export default isTextInstance;
