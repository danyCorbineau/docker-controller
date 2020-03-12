const Docker = require('dockerode');
const DockerService = require('../src/DockerService');

describe("DockerService", function() {
    var testContainer;
    beforeEach(async (done) => {
        const docker = new Docker({socketPath: '/var/run/docker.sock'});
        testContainer = await docker.createContainer({
            Image: 'ubuntu',
            AttachStdin: false,
            AttachStdout: true,
            AttachStderr: true,
            Tty: true,
            Cmd: ['/bin/bash', '-c', 'tail -f /etc/resolv.conf'],
            OpenStdin: false,
            StdinOnce: false
        });
    });

    it("get all container", async (done) => {
        var containers = await DockerService.getContainers();
        expect(containers[0].Id).toBe(testContainer.Id);
        done();
    });

    it("get a container by name", async (done) => {
        var containers = await DockerService.getContainers();
        var container = await DockerService.getContainer(containers[0].Names[0]);
        expect(container.Names[0]).toBe('ubuntu');
        done();
    });

    it("exect into container", async (done) => {
        var container = (await DockerService.getContainers())[0];
        await DockerService.exec(container, 'ls');
        done();
    })


});