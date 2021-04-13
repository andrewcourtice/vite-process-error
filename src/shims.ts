import * as process from 'process';

import {
    Buffer
} from 'buffer';

Object.assign(self, {
    Buffer,
    process,
    global: self
});