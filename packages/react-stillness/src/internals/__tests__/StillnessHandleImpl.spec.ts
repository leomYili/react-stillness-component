import { StillnessHandleImpl } from '../StillnessHandleImpl';
import { StillnessContractImpl } from '../StillnessContractImpl';
import { createStillnessManager } from '../../core/createStillnessManager';

describe('StillnessHandleImpl', () => {
  const spec = {
    mounted: (props) => `mounted and count${props?.count || 0}`,
    unmounted: (props) => `unmounted and count${props?.count || 0}`,
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

    expect(handle.mount()).toBeUndefined();
    expect(handle.unmount()).toBeUndefined();

    handle.receiveProps({ count: 1 } as any);

    const result1 = handle.mount();

    expect(result1).toEqual('mounted and count1');

    handle.receiveProps({ count: 2 } as any);

    const result2 = handle.unmount();

    expect(result2).toEqual('unmounted and count2');
  });
});
