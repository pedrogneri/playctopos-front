import { useContext } from 'react';

import ToastContext from 'components/Toast/toastContext';

const useToast = () => useContext(ToastContext);

export default useToast;
