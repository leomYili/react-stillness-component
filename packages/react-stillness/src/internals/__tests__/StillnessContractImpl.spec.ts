import { StillnessContractImpl } from '../StillnessContractImpl';

import { createStillnessManager } from '../../core/createStillnessManager';

describe('StillnessContractImpl', () => {
  it('can be constructed', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);
    expect(contract).toBeDefined();
  });

  it('receiveId', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);

    const id = 'test1';
    contract.receiveId(id);

    expect(contract.getStillnessId()).toEqual(id);
  });

  it('receiveItem', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);

    const item = 'result';
    contract.receiveItem(item);

    expect(contract.getStillnessItem()).toEqual(item);
  });
});
