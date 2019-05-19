import web3 from './web3';
import ProjectFactory from './build/ProjectFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProjectFactory.interface),
  '0x9d199F5242d8771b893ebE269C4bc1AB091E155f'
);

export default instance;
