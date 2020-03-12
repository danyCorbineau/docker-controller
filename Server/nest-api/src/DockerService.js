const Docker = require('dockerode');
class DockerService
{
    constructor() {
        this.docker = new Docker({socketPath: '/var/run/docker.sock'});
    }

    async getContainers() {
        return (await this.docker.listContainers({all: 1})).map(container => this.filterData(container));
    }
    async getContainer(name) {
        return (await this.getContainers()).find(container => {
            return container.Names.find(cName => cName.replace(/\//g, '') === name) !== undefined
        });
    }

    async exec(container, command) {
        let containerDocker = this.docker.getContainer(container.Id);
        if (container.State !== 'running') {
            return 'Container is not running';
        }
        let exec = await containerDocker.exec({Cmd: [command]})
        return await new Promise(async (res, rej) => {
            let localDatas = "";
            let socket = await exec.start();
            socket.on('data', (data) => {
                localDatas += data;
            })
            socket.on('end', () => {
                res(localDatas);
            })
            socket.on('error', (err) => {
                rej(err);
            })
        });
    }

    filterData(container) {
        return {
            Id: container.Id, // Container ID
            Names: container.Names, // Container Namesin array with slash before
            Image: container.Image, // Image name
            State: container.State, // container state : exited, running
            Ports: container.Ports, // array
            Created: container.Created, // time stamp creation
            Status: container.Status // current statu (Exited (0) 7 days ago)
        }
    }
}

module.exports = new DockerService()