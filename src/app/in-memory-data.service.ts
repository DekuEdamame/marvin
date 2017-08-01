import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appAOne = [ {
      appInfo: [
        { 
          name: 'App One', 
          version: '1.0',
          status: 0, 
          uptime: 11 
        }
      ],
      workInfo: [
        { 
          messages_received: 315, 
          messages_send: 256 
        }
      ],
    }
    ];

    const appATwo = [ {
      appInfo: [
        { 
          name: 'App One', 
          version: '1.1',
          status: 0, 
          uptime: 11 
        }
      ],
      workInfo: [
        { 
          messages_received: 375, 
          messages_send: 280 
        }
      ],
    }
    ];
    return {appAOne, appATwo};
  }

}