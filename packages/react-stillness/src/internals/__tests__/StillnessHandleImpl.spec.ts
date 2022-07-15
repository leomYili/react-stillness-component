import { StillnessHandleImpl } from '../StillnessHandleImpl';
import { StillnessContractImpl } from '../StillnessContractImpl';
import { createStillnessManager } from '../../core/createStillnessManager';

describe('StillnessHandleImpl', () => {
  const spec = {
    mounted: (props) => `mounted and count${props?.count || 0}`,
    unmounted: () => 'unmounted',
    collect: (props, contract) => {
      return {
        item: contract.getItem(),
        count: props.count,
      };
    },
  };
  it('can be constructed', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);

    const handle = new StillnessHandleImpl(spec, manager, contract);

    expect(handle).toBeDefined();
  });

  it('Automatically update item when changing props', () => {
    let mockManager: any = jest.fn();
    let mockContract: any = jest.fn().mockReturnValue({
      getItem: () => {
        return 'test2';
      },
    });

    const handle = new StillnessHandleImpl(spec, mockManager, mockContract);

    handle.receiveProps({ count: 1 } as any);

    const result = handle.mount();

    expect(result).toEqual('mounted and count1');
  });
});
