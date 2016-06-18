import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

// init enzyme for all tests
chai.use(chaiEnzyme);

// make a list of all tests (see webpack context, https://webpack.github.io/docs/context.html )
const context = require.context('../src', true, /\.spec\.jsx?$/);
// require every test file found
context.keys().forEach(context);
