import _ from 'lodash';

export default function fitness ( solution, callback ){
    let plugins = require('require-all')({
        dirname: __dirname + '/plugins',
        filter: /.*\.js$/,
        recursive: false,
    });
    callback( _.reduce(plugins, (fitness, plugin) => {
        let t = fitness + plugin(solution);
        return t >= 0 ? t : 0;
    }, 0) );
}
