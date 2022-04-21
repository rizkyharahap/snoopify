import { showNotification } from '@mantine/notifications';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { getReasonPhrase } from 'http-status-codes';

import X from 'tabler-icons-react/dist/icons/x';

export interface ErrorResponse {
  data: {
    error: {
      message: string;
      status: number;
    };
  };
}

export const useResponseHandlerQuery = (
  {
    isSuccess,
    isError,
    error,
    onSuccess,
    onError,
  }: {
    isSuccess?: boolean;
    isError?: boolean;
    error?: FetchBaseQueryError | SerializedError | ErrorResponse;
    onSuccess?: () => void;
    onError?: () => void;
  },
  deps: any[] = [],
) => {
  useEffect(() => {
    if (isSuccess && onSuccess) onSuccess();
    else if (isError && error) {
      const { status, message } = (error as ErrorResponse).data.error;

      showNotification({
        id: `error-${status}`,
        onClose: () => {
          if (onError) onError();
        },
        title: getReasonPhrase(status),
        message,
        color: 'red',
        icon: <X />,
        radius: 'lg',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error, isSuccess, ...deps]);
};

export const data = 'mantap';
