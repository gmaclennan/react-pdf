import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isTspan = R.propEq('type', P.Tspan);

export default isTspan;
