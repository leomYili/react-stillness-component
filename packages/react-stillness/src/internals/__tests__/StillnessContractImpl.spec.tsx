import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StillnessContractImpl } from '../StillnessContractImpl';
import { createStillnessManager } from '../../core/createStillnessManager';

import { StillnessProvider } from '../../core/StillnessProvider';
import { Offscreen } from '../../components';
import { useStillness } from '../../hooks';

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

  it('resetMax', () => {
    const manager = createStillnessManager();
    const contract = new StillnessContractImpl(manager);

    contract.resetMax(3);

    expect(manager.getStore().max.capacity).toEqual(3);
  });

  it('Methods to check availability', async () => {
    const type = 'test';

    const Demo = () => {
      return (
        <StillnessProvider>
          <Offscreen visible type="test">
            <Count />
          </Offscreen>
        </StillnessProvider>
      );
    };

    const Count = () => {
      const [count, setCount] = React.useState(0);

      const collected = useStillness({
        collect: (contract) => {
          return {
            isStillness: contract.isStillness(),
            id: contract.getStillnessId(),
            type: contract.getStillnessType(),
            unset: contract.unset,
            clear: contract.clear,
          };
        },
      });

      return (
        <div>
          <div>count:{count}</div>
          <button data-testid="add" onClick={() => setCount(count + 1)} />
          <button
            data-testid="unset"
            onClick={() => collected.unset({ id: collected.id })}
          />
          <button data-testid="clear" onClick={() => collected.clear()} />
          <div>isStillness:{collected.isStillness.toString()}</div>
          <div>id:{(collected.id !== undefined).toString()}</div>
          <div>type:{collected.type}</div>
        </div>
      );
    };

    const { getByTestId, queryByText, debug } = render(<Demo />);

    const user = userEvent.setup();

    expect(queryByText('isStillness:false')).toBeInTheDocument();
    expect(queryByText('id:true')).toBeInTheDocument();
    expect(queryByText('type:test')).toBeInTheDocument();

    await user.click(getByTestId('add'));

    expect(queryByText('count:1')).toBeInTheDocument;

    await user.click(getByTestId('unset'));

    expect(queryByText('count:0')).toBeInTheDocument;

    await user.click(getByTestId('add'));

    expect(queryByText('count:1')).toBeInTheDocument;

    await user.click(getByTestId('clear'));

    expect(queryByText('count:0')).toBeInTheDocument;
  });
});
