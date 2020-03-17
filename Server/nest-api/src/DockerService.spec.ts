import { Test, TestingModule } from '@nestjs/testing';
const DockerService = require('./DockerService');

describe('Docker Service', () => {
    afterAll(() => setTimeout(() => process.exit(), 1000))

    it('Default data is array', async() => {
        let datas = await DockerService.getDefaultContainersData()
        expect(datas.length).toBeGreaterThan(0);
    });

    it('No container exist if no connected', async (done) => {
        if (!DockerService.docker) {
            let datas = await DockerService.getContainers();
            expect(datas.length).toEqual(0);
        }
        done();
    })

    it('Can filter container', () => {
        let container = {Id: 'azertyui', Image: 'alpha', Names: ['ab'], State: 'running', Ports: ['80'], Created: 465789, Status: 'Restarting for 4 day'};
        expect(DockerService.filterData(container)).toEqual(container);
    })


});
