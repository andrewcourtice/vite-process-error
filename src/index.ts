import './styles/index.scss';

import App from './app.vue';

import {
    createApp
} from 'vue';

import {
    EventHubProducerClient
} from '@azure/event-hubs';

function start() {
    console.log(EventHubProducerClient);
    
    return createApp(App)
        .mount('#app');
}

start();