import web3 from './web3';
import CampignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampignFactory.interface),
  '0x1D247071b4e5922BcE658e9133D37af99fbc53B5'
);

export default instance;
