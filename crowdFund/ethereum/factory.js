import web3 from './web3';
import CampignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampignFactory.interface),
  '0xE60C1852c917E5f5723C5c1507eb6CC217D07459'
);

export default instance;
