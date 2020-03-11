import _ from 'lodash';
import {AsyncStorage} from 'react-native';
/**
 * CHECKS IF THE PASSED VALUE IS EMPTY STRING OR NOT
 * RETURN `true` IF STRING IS EMPTY ELSE RETURN `false`
 */
export function isEmpty(val) {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
}
/**
 * CHECKS IF THE PASSED VALUE IS VALID EMAIL
 * RETURN `true` IF VALID ELSE RETURN `false`
 */
export function isEmail(val) {
  let isValid = true;
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (isEmpty(val)) {
    isValid = false;
  } else if (!regex.test(val)) {
    isValid = false;
  }
  return isValid;
}

export const saveItemToStorage = async (key, value) => {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(`${key}`, value);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

export const getItemFromStorage = async key => {
  return new Promise(async (resolve, reject) => {
    await AsyncStorage.getItem(`${key}`, (error, value) => {
      _.isNil(error) ? resolve(value) : reject(error);
    });
  });
};
