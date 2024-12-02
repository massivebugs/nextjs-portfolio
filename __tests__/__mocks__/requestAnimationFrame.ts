export function mockRequestAnimationFrame(stepsMs: number = 5) {
  jest.useFakeTimers();
  let count = 0;
  const mockFunc = jest
    .spyOn(global, "requestAnimationFrame")
    .mockImplementation((cb) => {
      const delta = stepsMs * count++;
      setTimeout(() => cb(delta), stepsMs);
      return delta;
    });

  return {
    mockFunc,
    cleanup: () => {
      mockFunc.mockRestore();
      jest.useRealTimers();
    },
  };
}
