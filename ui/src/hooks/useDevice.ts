import { useContext } from 'preact/hooks';
import { DeviceContext } from '../context/DeviceContext';

export const useDevice = () => {
  const context = useContext(DeviceContext);

  // Handle undefined context (only applicable if the context value was never provided)
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }

  return context;
};
