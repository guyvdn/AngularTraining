import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  let pipe;

  beforeEach(() => (pipe = new PricePipe()));

  it('should format the value with correct precision', () => {
    let result = '';

    result = pipe.transform(5, '€', 2);
    expect(result).toBe('€ 5.00');

    result = pipe.transform(5.1, '€', 2);
    expect(result).toBe('€ 5.10');

    result = pipe.transform(5.12, '€', 2);
    expect(result).toBe('€ 5.12');

    result = pipe.transform(5.123, '€', 2);
    expect(result).toBe('€ 5.12');
  });

  it('should use € if not currency is specified', () => {
    const result = pipe.transform(5);
    expect(result).toBe('€ 5.00');
  });

  it('should use a precision of 2 if no precision is specified', () => {
    const result = pipe.transform(5);
    expect(result).toBe('€ 5.00');
  });
});
