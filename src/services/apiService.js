// IMPORT EXTERNAL LIBRARIES/MODULES
import Amplify, {Auth} from 'aws-amplify';
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import gql from 'graphql-tag';
import _ from 'lodash';

// IMPORT AWS CONFIGS
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

let client = null;

export async function getAWSClient() {
  return new Promise(async (resolve, reject) => {
    await Auth.currentAuthenticatedUser()
      .then(authUser => {
        client = new AWSAppSyncClient({
          url: awsconfig.aws_appsync_graphqlEndpoint,
          region: awsconfig.aws_appsync_region,
          auth: {
            type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
            jwtToken: async () =>
              (await Auth.currentSession()).getAccessToken().getJwtToken(),
          },
          disableOffline: true,
        });
        resolve(client);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function getCurrentUserSession() {
  return new Promise(async (resolve, reject) => {
    await Auth.currentAuthenticatedUser()
      .then(authUser => {
        resolve(authUser);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function mutationService(reqParams) {
  if (_.isNil(client)) {
    client = await getAWSClient();
  }
  return new Promise((resolve, reject) => {
    client
      .mutate({
        mutation: gql(reqParams.mutationToExecute),
        variables: {
          input: reqParams.input,
        },
      })
      .then(succData => {
        console.log('MUTATION SUCC DATA = ', succData);
        resolve(succData);
      })
      .catch(err => {
        console.log('MUTATION ERROR = ', err);
        reject(err);
      });
  });
}

export async function queryService(reqParams) {
  if (_.isNil(client)) {
    client = await getAWSClient();
  }
  const queryVariables = _.get(reqParams, 'input', {});

  return new Promise((resolve, reject) => {
    client
      .query({
        query: gql(reqParams.queryToExecute),
        variables: queryVariables,
        fetchPolicy: 'network-only',
      })
      .then(succData => {
        resolve(succData);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function signInService(reqParams) {
  const {email, password} = reqParams;
  return new Promise((resolve, reject) => {
    Auth.signIn({username: email, password})
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function changePasswordService(reqParams) {
  const {user, newPassword} = reqParams;
  return new Promise((resolve, reject) => {
    Auth.completeNewPassword(user, newPassword)
      .then(userData => {
        resolve(userData);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function signOutService() {
  return new Promise((resolve, reject) => {
    Auth.signOut()
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
