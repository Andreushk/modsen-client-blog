import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const PortalToBody: React.FC<PropsWithChildren> = ({ children }) =>
  createPortal(children, document.body);

export default PortalToBody;
