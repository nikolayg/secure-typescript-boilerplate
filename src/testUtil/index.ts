import 'jest';

export const mockRequestResponse = () => {
  const req: any = {
    query: {},
    params: {},
    body: {},
    headers: {},
    user: {}
  };
  req.header = (h: string) => req.headers[h];

  function resetMock(this: any) {
    this.end.mockClear();
    this.json.mockClear();
    this.send.mockClear();
    this.status.mockClear();
  }

  const res: any = {
    end: jest.fn(),
    json: jest.fn(),
    send: jest.fn(),
    status: jest.fn(),
    reset: resetMock
  };

  res.end.mockImplementation(() => res);
  res.json.mockImplementation(() => res);
  res.send.mockImplementation(() => res);
  res.status.mockImplementation(() => res);

  const next = jest.fn();

  return { req, res, next };
};
