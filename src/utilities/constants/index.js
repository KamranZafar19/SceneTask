export const font = {
  regular: 'Roboto-Regular',
  light: 'Roboto-Light',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  RibeyeFont: 'Ribeye-Regular'
};
export const BASE_URL = '';
export const color = {
    white: '#ffffff'
};
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