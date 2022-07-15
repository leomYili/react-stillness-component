import { StillnessRegistrationImpl } from '../StillnessRegistrationImpl';

import { createStillnessManager } from '../../core/createStillnessManager';

describe('StillnessRegistrationImpl', () => {
  it('can be constructed', () => {
    const manager = createStillnessManager();
    const registration = new StillnessRegistrationImpl(manager);
    expect(registration).toBeDefined();
  });

  it('can register successfully', () => {
    const manager = createStillnessManager();
    const registration = new StillnessRegistrationImpl(manager);

    const [uniqueId,unRegister] = registration.register({
      parentId: 'root',
      visible: true,
      isStillness: false,
    });

    expect(manager.getStore().vNodes[uniqueId]).toBeDefined();

    unRegister();

    expect(manager.getStore().vNodes[uniqueId]).not.toBeDefined();
  });
});
