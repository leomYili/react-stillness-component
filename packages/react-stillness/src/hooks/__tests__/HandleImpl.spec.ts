import { HandleImpl } from '../HandleImpl';
import { createStillnessManager } from '../../core/createStillnessManager';
import { StillnessContractImpl } from '../../internals/StillnessContractImpl';

describe('HandleImpl', () => {
  const spec = {
    mounted: (contract) => `mounted`,
    unmounted: (contract) =>
      `unmounted`,
    collect: (contract) => {
      return {
        item: contract.getItem(),
      };
    },
  };
  it('can be constructed', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);

    const handle = new HandleImpl(spec, manager, contract);

    expect(handle).toBeDefined();
  });

  it('When the parameters passed in do not meet the requirements, nothing is returned',() => {
    let mockManager: any = jest.fn();
    let mockContract: any = jest.fn().mockReturnValue({
      getItem: () => {
        return 'test2';
      },
    });
    const handle = new HandleImpl({},mockManager,mockContract)
    expect(handle.mount()).toBeUndefined();
    expect(handle.unmount()).toBeUndefined();
  })

  it('Automatically update item when changing props', () => {
    let mockManager: any = jest.fn();
    let mockContract: any = jest.fn().mockReturnValue({
      getItem: () => {
        return 'test2';
      },
    });
    const handle = new HandleImpl(spec, mockManager, mockContract);
    const result1 = handle.mount();

    expect(result1).toEqual('mounted');

    const result2 = handle.unmount();

    expect(result2).toEqual('unmounted');
  });
});
