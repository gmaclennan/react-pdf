import * as R from 'ramda';
import * as P from '@digidem/react-pdf-primitives';

const isLink = R.propEq('type', P.Link);

export default isLink;
