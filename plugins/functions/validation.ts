
import { alert } from './main';

export const validateFile = (file: File, fileType: [], maximumSize: number) => {
    const type: string = file?.name.split('.').pop() || '';
    const size = file?.size;
    if (
      !fileType.some((item: string) => item.toLowerCase() === type.toLowerCase())
    ) {
      alert.warning({
        message: `Not allow this File Type (allow ${fileType.join(', ')} type )`,
      });
    } else if (size > maximumSize) {
      alert.warning({
        message: 'File size exceeds the maximum limit (5MB)',
      });
    } else {
      return file;
    }
  };