import React from 'react';
import { render } from '@testing-library/react';
import { ApiProvider } from '../client/src/contexts/api.context.jsx';

const AllTheProviders = ({ children }) => (
  <ApiProvider>
    {children}
  </ApiProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
