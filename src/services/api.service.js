import axios from 'axios';
import qs from 'qs';

import { getOAuthToken } from '../config/store.config';

export const Host = 'https://towash-development.nestsera.com';
export const BaseURL = `${Host}/api/v1/`; // Develop

axios.defaults.baseURL = `${BaseURL}`;
axios.defaults.timeout = 20000;

const handleError = error => {
    const { response } = error || {};
    if (response) {
        const { status, data } = response;

        if (status === 401) {
            console.log('Error', response)
        };

        return data;
    }

    return error;
};

const preprocessResponse = result => {
    const { message, data } = result || {};
    if (message === 'success') {
        return data;
    }
    return result;
};

export default class RequestHelper {
    static async getHeader() {
        const token = (await getOAuthToken()) || {};
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        };
    };

    static async getHeaderUploadFile() {
        const { token } = (await getOAuthToken()) || {};
        return {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        };
    };

    static async getUserInfoFromFacebook(token) {
        return axios
            .get(
                `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`,
            )
            .then(data => {
                return data.data;
            })
            .catch(e => {
                throw e;
            });
    };

    static async get(url, params) {
        const header = await this.getHeader();
        return axios
            .get(url, {
                headers: header,
                params,
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                },
            })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

    static async post(url, data) {
        return axios({
            method: 'post',
            url,
            headers: await this.getHeader(),
            data,
        })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

    static async put(apiUrl, data) {
        return axios({
            method: 'put',
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }

    static uploadFile = (file, signedRequest) => {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', signedRequest);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const { responseURL } = xhr;
                        const index = responseURL.indexOf('?');
                        const url = responseURL.substring(0, index);
                        resolve({
                            status: xhr.status,
                            url,
                        });
                    } else {
                        resolve(null);
                    }
                }
            };

            xhr.send(file);
        }).catch(err => {
            console.log(err);
            return err;
        });
    };

    static async delete(apiUrl, data) {
        return axios({
            method: 'delete',
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then(data => {
                return data.data;
            })
            .then(data => {
                return preprocessResponse(data);
            })
            .catch(e => {
                throw handleError(e);
            });
    }
}