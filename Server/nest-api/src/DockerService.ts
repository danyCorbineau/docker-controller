const Docker = require('dockerode');
class DockerService
{
    docker;
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

    async getDefaultContainersData()
    {
        return [{"Id":"00656593e76812abed702eb1f06a8738e5eeb778299893d6f78ca7830c4ab203","Names":["/wizardly_bose"],"Image":"ubuntu","State":"exited","Ports":[],"Created":1582464163,"Status":"Exited (0) 2 weeks ago"},{"Id":"cafc8eb4165d9974bb5658e53167946bdf91929cd413b24e683fbafe60dac498","Names":["/bt-celery"],"Image":"b_python_t_celery","State":"running","Ports":[],"Created":1581849274,"Status":"Up Less than a second"},{"Id":"ee34b72955359ed1bd6273c8908297b64468433035f0d1da216e0160c1ea0a16","Names":["/bt-celery-beat"],"Image":"bt_python_celery_beat","State":"exited","Ports":[],"Created":1581849274,"Status":"Exited (0) 11 days ago"},{"Id":"d4fe85df61147db951c75870a5eb3d7bf117e78335b6efb04e63c4babf9eb9af","Names":["/bt-daphne"],"Image":"bt_python_daphne","State":"running","Ports":[{"IP":"127.0.0.1","PrivatePort":8000,"PublicPort":80,"Type":"tcp"}],"Created":1581849271,"Status":"Up 1 second"},{"Id":"6da9f7cb389676046f59f723024a61fefc338dc90185acd3d6cec0a978519a21","Names":["/bt_redis_1"],"Image":"redis:alpine","State":"running","Ports":[{"PrivatePort":6379,"Type":"tcp"}],"Created":1581774740,"Status":"Up 4 seconds"},{"Id":"365cb15d6b92437e2b51266250b11b3bdf663599c196b39b166b76f28052750c","Names":["/mongodb"],"Image":"mongo","State":"running","Ports":[{"PrivatePort":27017,"Type":"tcp"}],"Created":1581774740,"Status":"Up 5 seconds"},{"Id":"c983dfd5cf2723dc82b49bd0d7a3cf93b5d612ec3c46810bf6bf16eaeace9eca","Names":["/bt_postgres"],"Image":"postgres","State":"running","Ports":[{"IP":"0.0.0.0","PrivatePort":5432,"PublicPort":5432,"Type":"tcp"}],"Created":1581774740,"Status":"Up 3 seconds"}];
    }

    async exec(container, command) {
        let containerDocker = this.docker.getContainer(container.Id);
        if (container.State !== 'running') {
            return 'Container is not running';
        }
        let exec = await containerDocker.exec({Cmd: [command]})
        return await new Promise(async (res, rej)  => {
            let localDatas = "";
            let socket = await exec.start();
            socket.on('data', (data) => {
                localDatas += data;
            });
            socket.on('end', () => {
                res(localDatas);
            });
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

module.exports = new DockerService();