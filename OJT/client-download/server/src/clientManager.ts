import { onInfo } from './logger/logger';

export default class ClientManager {
    public clients = new Map();

    public constructor() {
        this.addClient = this.addClient.bind(this);
        this.removeClient = this.removeClient.bind(this);
    }

    public addClient(client) {
        this.clients.set(client.id, client);
        onInfo(`ClientManager addClient client address : ${client.handshake.address}`, 'server');
        onInfo(`ClientManager addClient client Lenth: ${this.clients.size}`, 'server');
    }

    public remove() {
        this.clients.clear();
        onInfo('ClientManager removeClients', 'server');
    }

    public removeClient(client) {
        this.clients.delete(client.id);
        onInfo('ClientManager removeClient', 'server');
        onInfo(`ClientManager addClient client Lenth: ${this.clients.size}`, 'server');
    }
}
