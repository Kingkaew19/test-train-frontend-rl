
let context: any;
export const displayImage = (path: string, isNotBaseUrl: Boolean) => {
    if (path && path != '') {
      console.log('isNotBaseUrl',isNotBaseUrl)
      console.log('path',path)
        if(isNotBaseUrl) {
            return path;
        }else {
          console.log('process.env.API_BASE_FILE_URL + path',process.env.API_BASE_FILE_URL + path)
            return process.env.API_BASE_FILE_URL + path;

        }
    }
    return '/images/praphics/placeholder-image-landscape.svg'
}

export const displayUploadImage = (path: string) => {
    if (path && path != '') {
      return `${process.env.API_BASE_FILE_URL}${path}`;
    }
  
    return '/images/graphics/placeholder-image-landscape.svg';
};

export const alert = {
    success: ({ message }: { message: string }) => {
      const data = {
        isSuccess: true,
        isError: false,
        isWarning: false,
        isNotice: false,
      };
      context.$services.main.setAlertData(data);
      context.$toast({
        group: 'VALIDATION',
        text: message,
      });
    },
    error: ({ message }: { message: string }) => {
      const data = {
        isSuccess: false,
        isError: true,
        isWarning: false,
        isNotice: false,
      };
      context.$services.main.setAlertData(data);
      context.$toast({
        group: 'VALIDATION',
        text: message,
      });
    },
    warning: ({ message }: { message: string }) => {
      const data = {
        isSuccess: false,
        isError: false,
        isWarning: true,
        isNotice: false,
      };
      context.$services.main.setAlertData(data);
      context.$toast({
        group: 'VALIDATION',
        text: message,
      });
    },
    notice: ({ message }: { message: string }) => {
      const data = {
        isSuccess: false,
        isError: false,
        isWarning: false,
        isNotice: true,
      };
      context.$services.main.setAlertData(data);
      context.$toast({
        group: 'VALIDATION',
        text: message,
      });
    },
  };