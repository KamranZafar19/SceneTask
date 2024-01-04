export const font = {
  regular: 'NunitoSans-Regular',
  light: 'NunitoSans-Light',
  medium: 'NunitoSans-SemiBold',
  bold: 'NunitoSans-Bold',
  extrabold: 'NunitoSans-ExtraBold',
};
export const BASE_URL = '';
export const endPoints = {
  Login: '',
};

export class Headers {
    static headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    static getHeadersWithout = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    static getHeaders() {
    
        return this.headers;

    }
    static getHeadersWithoutToken(){
        return this.getHeadersWithout;

    }

    static getHeadersWithExplicitToken(token) {
        temp = this.headers;
        temp.Authorization = `Bearer ${token}`;
        return temp;
    }

    static getFileUploadHeaders() {
        var custom = {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
        return custom;
    }
}