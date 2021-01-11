import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTempateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTempateProvider;
