import { Method } from 'axios';

export interface AxiosService<Data> {
  method: Method;
  uri: string;
  data?: Data;
  onSuccess: <SuccessResponse>(response: SuccessResponse) => void;
  onError: <ErrorResponse>(response: ErrorResponse) => void;
  onUploadProgress?: (value: number) => void;
  onDownloadProgress?: (value: number) => void;
  contentType?: 'application/json' | 'multipart/form-data';
}
