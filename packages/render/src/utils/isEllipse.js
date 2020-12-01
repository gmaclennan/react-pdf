import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isEllipse = R.propEq('type', P.Ellipse);

export default isEllipse;
